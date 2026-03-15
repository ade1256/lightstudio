import {NextResponse} from 'next/server'
import {assertCmsAccess, sanityWriteClient} from '@/lib/sanity'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  if (!assertCmsAccess(req)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})

  const formData = await req.formData()
  const file = formData.get('file')

  if (!(file instanceof File)) {
    return NextResponse.json({error: 'File is required'}, {status: 400})
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const asset = await sanityWriteClient.assets.upload('image', buffer, {
    filename: file.name,
    contentType: file.type || 'image/jpeg',
  })

  return NextResponse.json({
    assetId: asset._id,
    url: asset.url,
  })
}
