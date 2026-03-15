import {NextResponse} from 'next/server'
import {assertCmsAccess, sanityWriteClient} from '@/lib/sanity'

export async function PATCH(req: Request, {params}: {params: Promise<{id: string}>}) {
  if (!assertCmsAccess(req)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  const {id} = await params
  const body = await req.json()

  const updated = await sanityWriteClient
    .patch(id)
    .set({
      category: body.category,
      order: Number(body.order || 0),
      items: body.items || [],
    })
    .commit()

  return NextResponse.json(updated)
}

export async function DELETE(req: Request, {params}: {params: Promise<{id: string}>}) {
  if (!assertCmsAccess(req)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  const {id} = await params
  await sanityWriteClient.delete(id)
  return NextResponse.json({ok: true})
}
