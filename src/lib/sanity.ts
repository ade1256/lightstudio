import {createClient} from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-15'

if (!projectId) {
  // keep runtime message explicit
  console.warn('NEXT_PUBLIC_SANITY_PROJECT_ID is not set')
}

export const sanityReadClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

export function assertCmsAccess(req: Request) {
  const key = req.headers.get('x-cms-key')
  const expected = process.env.CMS_ACCESS_KEY
  return Boolean(expected && key && key === expected)
}
