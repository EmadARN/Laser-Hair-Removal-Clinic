import Dashboard from "@/Components/reseptionDashboard/layout";
import { receptionData } from "@/constants";
import { findSlug } from "@/utils/findSlug";
import { useRouter } from "next/router";

const DashboardPages = () => {
  const router = useRouter();
  const { reseptionDashboardSlug } = router.query;

  const componentData = findSlug(reseptionDashboardSlug, receptionData);

  return (
    <Dashboard>{componentData ? componentData.component : null}</Dashboard>
  );
};

export default DashboardPages;
