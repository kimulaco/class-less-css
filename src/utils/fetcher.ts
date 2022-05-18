export const fetcher = async <T>(
  input: RequestInfo,
  init?: RequestInit | undefined,
) => {
  const response = await fetch(input, init)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const json = await response.json()

  return json as T
}
