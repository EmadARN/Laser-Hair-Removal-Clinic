import { ComponentData } from "@/constants";

export function findSlug(dashboardSlug) {
  return ComponentData.find((item) => item.slug === dashboardSlug);
}
