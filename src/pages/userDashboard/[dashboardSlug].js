import { userData } from "@/constants";
import { findSlug } from "@/utils/findSlug";
import { useRouter } from "next/router";

const DashboardPages = () => {
  const router = useRouter();
  const { dashboardSlug } = router.query;

  const componentData = findSlug(dashboardSlug, userData);

  return componentData ? componentData.component : null;
};

export default DashboardPages;
