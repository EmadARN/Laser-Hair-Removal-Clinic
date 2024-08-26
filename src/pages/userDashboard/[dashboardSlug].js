import { findSlug } from "@/utils/findSlug";
import { useRouter } from "next/router";
import React from "react";

const DashboardPages = () => {
  const router = useRouter();
  const { dashboardSlug } = router.query;
  
  const componentData = findSlug(dashboardSlug);

  return componentData ? componentData.component : null;
};

export default DashboardPages;
