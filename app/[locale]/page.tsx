import LocalSwitcher from "@/component/localSwitcher";
import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
  const t = useTranslations();
  return (
    <div>
      {t("selectdateplaceholder")} <LocalSwitcher />
    </div>
  );
};

export default page;
