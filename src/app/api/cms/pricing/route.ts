import {NextResponse} from 'next/server'
import {assertCmsAccess, sanityReadClient, sanityWriteClient} from '@/lib/sanity'

export async function GET() {
  const data = await sanityReadClient.fetch(`*[_type == "packageCategory"] | order(order asc){
    _id, category, order, items
  }`)
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  if (!assertCmsAccess(req)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})

  const body = await req.json()
  const created = await sanityWriteClient.create({
    _type: 'packageCategory',
    category: body.category,
    order: Number(body.order || 0),
    items: body.items || [],
  })

  return NextResponse.json(created)
}
