const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const apiOrigin = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export const apiBaseUrl = `${apiOrigin}/api`

function normalizeResponse(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export async function fetchCollection(component) {
  const response = await fetch(`${apiBaseUrl}/${component}/`)
  if (!response.ok) throw new Error(`Unable to load ${component}`)
  return normalizeResponse(await response.json())
}