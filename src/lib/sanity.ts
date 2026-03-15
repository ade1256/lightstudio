import {createClient} from '@sanity/client'
import {isValidDashboardSession} from '@/lib/dashboard-auth'

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

function getCookieValue(cookieHeader: string | null, key: string) {
  if (!cookieHeader) return null
  const parts = cookieHeader.split(';').map((p) => p.trim())
  for (const part of parts) {
    if (part.startsWith(`${key}=`)) return decodeURIComponent(part.slice(key.length + 1))
  }
  return null
}

export function assertCmsAccess(req: Request) {
  const key = req.headers.get('x-cms-key')
  const expected = process.env.CMS_ACCESS_KEY
  const cookieToken = getCookieValue(req.headers.get('cookie'), 'dashboard_session')

  const keyValid = Boolean(expected && key && key === expected)
  const sessionValid = isValidDashboardSession(cookieToken)

  return keyValid || sessionValid
}
