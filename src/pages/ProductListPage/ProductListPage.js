import React from "react";
import FilterIcon from "../../components/common/FilterIcon";
import { Navigation } from "../../components/Navigation/Navigation";

export const ProductListPage = () => {
  return (
    <>
      <Navigation />
      <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
        {/* Filters */}
        <div className="flex justify-between ">
          <p className="text-[16px] text-gray-600">Filter</p>
          <FilterIcon />
        </div>
      </div>
    </>
  );
};
