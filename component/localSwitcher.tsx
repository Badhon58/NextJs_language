"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import React from "react";

const LocalSwitcher = () => {
  const locale = useLocale();
  const route = useRouter();
  const pathname = usePathname();
  const handleLocalswitch = (newlocale: string) => {
    if (newlocale != locale) {
      route.replace(pathname, { locale: newlocale });
      route.refresh();
    }
  };
  return (
    <div>
      <select
        name=""
        id=""
        value={locale}
        onChange={(e) => handleLocalswitch(e.target.value)}
        className="p-3 outline-0 border border-gray-300"
      >
        <option value="en">EN</option>
        <option value="bn">BN</option>
      </select>
    </div>
  );
};

export default LocalSwitcher;
