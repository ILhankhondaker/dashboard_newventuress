"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "@/types/admin";
import { ColumnDef } from "@tanstack/react-table";
import VendorAction from "./VendorAction";

// const handleDelete = (row: any) => {
//   alert("Delete clicked for row:");
//   console.log("Delete clicked for row:", row);
//   return (
//     <Modal>
//       <div className="text-center">
//         <h3>Delete Vendor</h3>
//         <p>Are you sure you want to delete this vendor?</p>
//         <div className="flex justify-center gap-4">
//           {/* <Button variant="outline" onClick={handleCancel}>
//             Cancel
//           </Button>
//           <Button onClick={handleConfirm}>Confirm</Button> */}
//         </div>
//       </div>
//     </Modal>
//   );
// };

export const CustomerListColumn: ColumnDef<User>[] = [
  {
    header: "Vendor",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center gap-4">
          <div>
            <Avatar>
              <AvatarFallback className="text-[30px]">
                {row.original.fullName.split("")[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="w-[250px] text-left">
            <h4 className="text-gradient text-[18px] font-semibold">
              {row.original.fullName}
            </h4>
            <h5 className="text-gradient py-2 text-[16px] font-normal">
              <span className="text-[#444444]"> {row.original.email}</span>
            </h5>
            <p className="text-wrap text-[16px] font-normal text-[#444444]">
              {row.original.profession}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    header: "Store",
    cell: () => {
      return (
        <div className="text-gradient text-[18px] font-semibold">store 10</div>
      );
    },
  },

  {
    header: "Status",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] font-normal text-[#444444]">
            {row.original.isVerified ? (
              <span className="text-white bg-[#2A6C2D] text-[12px] font-semibold py-[6px] px-[17px] rounded-md fle">
                Approved
              </span>
            ) : (
              <span className="text-white bg-[#00417E] text-[12px] font-semibold py-[6px] px-[17px] rounded-md fle">
                Pending
              </span>
            )}
          </span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div>
          <VendorAction user={row.original} />
        </div>
      );
    },
  },
];
