"use client";

import {FormEvent, useEffect, useState} from 'react'

type PortfolioItem = {_id: string; title: string; category: string; imageUrl: string; alt: string; order: number}
type PricingItem = {name: string; price: string; notes: string[]}
type PricingCategory = {_id: string; category: string; order: number; items: PricingItem[]}

const emptyPortfolio = {title: '', category: 'Special Session', imageUrl: '', alt: '', order: 0}
const emptyPricing = {category: '', order: 0, itemsText: '[]'}

export default function CmsPage() {
  const [cmsKey, setCmsKey] = useState('')
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [pricing, setPricing] = useState<PricingCategory[]>([])

  const [portfolioForm, setPortfolioForm] = useState(emptyPortfolio)
  const [portfolioEditId, setPortfolioEditId] = useState<string | null>(null)

  const [pricingForm, setPricingForm] = useState(emptyPricing)
  const [pricingEditId, setPricingEditId] = useState<string | null>(null)

  async function loadData() {
    const [pRes, cRes] = await Promise.all([fetch('/api/cms/portfolio'), fetch('/api/cms/pricing')])
    setPortfolio(await pRes.json())
    setPricing(await cRes.json())
  }

  useEffect(() => {
    const saved = localStorage.getItem('cms-key')
    if (saved) setCmsKey(saved)
    loadData()
  }, [])

  async function send(url: string, method: 'POST' | 'PATCH' | 'DELETE', body?: unknown) {
    const res = await fetch(url, {
      method,
      headers: {'Content-Type': 'application/json', 'x-cms-key': cmsKey},
      body: body ? JSON.stringify(body) : undefined,
    })
    if (!res.ok) throw new Error('Request gagal. Cek CMS key atau data input.')
    return res.json()
  }

  async function savePortfolio(e: FormEvent) {
    e.preventDefault()
    if (portfolioEditId) {
      await send(`/api/cms/portfolio/${portfolioEditId}`, 'PATCH', portfolioForm)
    } else {
      await send('/api/cms/portfolio', 'POST', portfolioForm)
    }
    setPortfolioEditId(null)
    setPortfolioForm(emptyPortfolio)
    await loadData()
  }

  async function removePortfolio(id: string) {
    await send(`/api/cms/portfolio/${id}`, 'DELETE')
    await loadData()
  }

  async function savePricing(e: FormEvent) {
    e.preventDefault()
    let parsedItems: PricingItem[] = []
    try {
      parsedItems = JSON.parse(pricingForm.itemsText)
      if (!Array.isArray(parsedItems)) throw new Error('invalid')
    } catch {
      alert('Format items harus JSON array. Contoh: [{"name":"Couple","price":"Rp 150.000","notes":["10 edited"]}]')
      return
    }

    const payload = {category: pricingForm.category, order: Number(pricingForm.order || 0), items: parsedItems}

    if (pricingEditId) {
      await send(`/api/cms/pricing/${pricingEditId}`, 'PATCH', payload)
    } else {
      await send('/api/cms/pricing', 'POST', payload)
    }

    setPricingEditId(null)
    setPricingForm(emptyPricing)
    await loadData()
  }

  async function removePricing(id: string) {
    await send(`/api/cms/pricing/${id}`, 'DELETE')
    await loadData()
  }

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-5 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold">CMS Lightstudio (Sanity API)</h1>

      <section className="space-y-3 border p-4">
        <h2 className="text-xl font-semibold">Akses CMS</h2>
        <input
          value={cmsKey}
          onChange={(e) => setCmsKey(e.target.value)}
          onBlur={() => localStorage.setItem('cms-key', cmsKey)}
          placeholder="Masukkan CMS_ACCESS_KEY"
          className="w-full border px-3 py-2"
        />
      </section>

      <section className="space-y-4 border p-4">
        <h2 className="text-xl font-semibold">CRUD Portfolio</h2>
        <form onSubmit={savePortfolio} className="grid gap-2 md:grid-cols-6">
          <input className="border px-3 py-2" placeholder="Title" value={portfolioForm.title} onChange={(e) => setPortfolioForm({...portfolioForm, title: e.target.value})} />
          <input className="border px-3 py-2" placeholder="Category" value={portfolioForm.category} onChange={(e) => setPortfolioForm({...portfolioForm, category: e.target.value})} />
          <input className="border px-3 py-2" placeholder="Image URL" value={portfolioForm.imageUrl} onChange={(e) => setPortfolioForm({...portfolioForm, imageUrl: e.target.value})} />
          <input className="border px-3 py-2" placeholder="Alt text" value={portfolioForm.alt} onChange={(e) => setPortfolioForm({...portfolioForm, alt: e.target.value})} />
          <input type="number" className="border px-3 py-2" placeholder="Order" value={portfolioForm.order} onChange={(e) => setPortfolioForm({...portfolioForm, order: Number(e.target.value)})} />
          <button className="border bg-black px-3 py-2 text-white">{portfolioEditId ? 'Update' : 'Tambah'}</button>
        </form>

        <div className="space-y-2">
          {portfolio.map((item) => (
            <div key={item._id} className="flex items-center justify-between border px-3 py-2 text-sm">
              <span>{item.title} · {item.category}</span>
              <div className="space-x-3">
                <button onClick={() => {setPortfolioEditId(item._id); setPortfolioForm({title: item.title, category: item.category, imageUrl: item.imageUrl, alt: item.alt, order: item.order})}}>
                  Edit
                </button>
                <button onClick={() => removePortfolio(item._id)} className="text-red-600">Hapus</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 border p-4">
        <h2 className="text-xl font-semibold">CRUD Paket Harga</h2>
        <form onSubmit={savePricing} className="grid gap-2">
          <div className="grid gap-2 md:grid-cols-3">
            <input className="border px-3 py-2" placeholder="Nama kategori" value={pricingForm.category} onChange={(e) => setPricingForm({...pricingForm, category: e.target.value})} />
            <input type="number" className="border px-3 py-2" placeholder="Order" value={pricingForm.order} onChange={(e) => setPricingForm({...pricingForm, order: Number(e.target.value)})} />
            <button className="border bg-black px-3 py-2 text-white">{pricingEditId ? 'Update' : 'Tambah'} Kategori</button>
          </div>

          <textarea
            className="min-h-40 border px-3 py-2 font-mono text-sm"
            value={pricingForm.itemsText}
            onChange={(e) => setPricingForm({...pricingForm, itemsText: e.target.value})}
            placeholder='JSON items: [{"name":"Couple Photo","price":"Rp 150.000","notes":["10 edited"]}]'
          />
        </form>

        <div className="space-y-2">
          {pricing.map((item) => (
            <div key={item._id} className="flex items-center justify-between border px-3 py-2 text-sm">
              <span>{item.category} · {item.items?.length || 0} paket</span>
              <div className="space-x-3">
                <button onClick={() => {setPricingEditId(item._id); setPricingForm({category: item.category, order: item.order, itemsText: JSON.stringify(item.items || [], null, 2)})}}>
                  Edit
                </button>
                <button onClick={() => removePricing(item._id)} className="text-red-600">Hapus</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
