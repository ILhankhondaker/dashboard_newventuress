"use client";
import { Button } from "@/components/ui/button";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

// Demo lists for the dropdowns
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

<<<<<<< HEAD


=======
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
const CategoryFilter = () => {
  const [show, setShow] = useState<string>("all"); // Default to "all"

  return (
<<<<<<< HEAD
    <div className="h-[60px] p-[8px] bg-white w-full flex justify-between gap-x-[12px]">
      {/* Dropdown for "Show" */}
      <div className="h-full flex items-center gap-x-[9px] w-fit">
        <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
=======
    <div className="h-[60px] p-[8px] bg-white w-full flex justify-between items-center rounded-lg">
    <div className="flex gap-x-[12px]">
      {/* Dropdown for "Show" */}
      <div className="h-full flex items-center gap-x-[9px] w-fit">
        <span className="text-[16px] font-medium leading-[19.2px] text-[#444444] ml-2">
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
          Show
        </span>
        <PacificDropdownSelector
          list={showList}
          selectedValue={show}
          onValueChange={setShow}
        />
      </div>
<<<<<<< HEAD
      {/* Dropdown for "Categories" */}

      <Button >Bulk Delete</Button>
     
    </div>
=======
      {/* Dropdown for "Entries" */}
   
    
     
    </div >
    <div className="mr-2">

    <Button className="w-[135px] h-[43px] px-[24px] py-[12px] text-[16px] font-medium leading-[19.2px] ">Bulk Delete</Button>
    </div>
  </div>
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
  );
};

export default CategoryFilter;

// Generic Dropdown Component
