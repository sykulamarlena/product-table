"use client";

import { useRouter, useSearchParams } from "next/navigation";

function useTableParams() {
  const params = useSearchParams();
  const router = useRouter();

  const setParams = (key: string, value?: string) => {
    const next = new URLSearchParams(params.toString());
    if (!value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    //reset stron po filtrowaniu lub sortowaniu
    if (key !== "page") {
      next.set("page", "1");
    }

    router.push(`?${next.toString()}`);
  };
  return { params, setParams };
}

export default useTableParams;
