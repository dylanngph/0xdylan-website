import { getSaleList } from "@/api/launchpad";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const useFetchSales = () => {
  const [params, setParams] = useState({
    page: 0,
    limit: 3,
    owner: "",
    keyword: "",
    chainId: 97,
    sortBy: "+createdAt",
    filterBy: "",
  });

  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: ["launchpads", { ...params }],
    queryFn: () =>
      getSaleList(
        params.page,
        params.limit,
        params.chainId.toString(),
        params.owner,
        params.keyword,
        params.sortBy,
        params.filterBy
      ),
    // enabled: chainId === 97,
  });
  return {
    status,
    launchpads: data,
    error,
    isFetching,
    isPreviousData,
    setParams,
  };
};

export default useFetchSales;
