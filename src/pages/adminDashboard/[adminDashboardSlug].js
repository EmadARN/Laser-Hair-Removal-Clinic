import Dashboard from "@/Components/adminDashboard";
import { admintData } from "@/constants";
import { findSlug } from "@/utils/findSlug";
import { useRouter } from "next/router";

const DashboardPages = () => {
  const router = useRouter();
  const { adminDashboardSlug } = router.query;
  const componentData = findSlug(adminDashboardSlug, admintData);

  return (
    <Dashboard>{componentData ? componentData.component : null}</Dashboard>
  );
};

export default DashboardPages;
