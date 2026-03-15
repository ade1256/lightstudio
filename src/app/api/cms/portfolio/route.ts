import {NextResponse} from 'next/server'
import {assertCmsAccess, sanityReadClient, sanityWriteClient} from '@/lib/sanity'

export async function GET() {
  const data = await sanityReadClient.fetch(`*[_type == "portfolioItem"] | order(order asc){
    _id, title, category, imageUrl, alt, order
  }`)
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  if (!assertCmsAccess(req)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})

  const body = await req.json()
  const created = await sanityWriteClient.create({
    _type: 'portfolioItem',
    title: body.title,
    category: body.category,
    imageUrl: body.imageUrl,
    alt: body.alt,
    order: Number(body.order || 0),
  })

  return NextResponse.json(created)
}
