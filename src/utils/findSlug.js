export function findSlug(dashboardSlug, componentData) {
  return componentData.find((item) => item.slug === dashboardSlug);
}
