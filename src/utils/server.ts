export const getSlug = (slug: string | string[]): string[] => {
  return Array.isArray(slug) ? slug : [slug]
}
