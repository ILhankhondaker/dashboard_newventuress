"use client";

import { DemoTableItemsType } from "@/data/demo";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ImagePlus, MoreHorizontal } from "lucide-react"; // Make sure to import the MoreHorizontal icon from lucide-react
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Import your dropdown components
import { Checkbox } from "@/components/ui/checkbox";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const MediaColumns: ColumnDef<DemoTableItemsType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: () => (
      <div className="flex items-center justify-center gap-2">
        <ImagePlus className="w-[16px] h-[16px]" />
        <span>Image</span>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 justify-center">
          <Image
            src={row.original.image}
            height={70}
            width={94}
            alt="img"
            className="rounded-[8px]"
          />
        </div>
      );
    },
  },  
  {
    header: "Associate",
    cell: ({ row }) => {
      return (
        <div>
          <p>{row.original.Associate}</p>
        </div>
      );
    },
  },
  {
    header: "Store",
    cell: ({ row }) => {
      return (
        <div>
          <p className="text-gradient">{row.original.Store}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "Size",
    header: "Size",
  },
  {
    id: "actions", // Unique ID for the actions column
    header: "Actions", // Column header
    cell: ({ row }) => {
      const handleEdit = () => {
        console.log("Edit clicked for row:", row.original);
        // Add logic to open a form or modal for editing
      };

      const handleDelete = () => {
        console.log("Delete clicked for row:", row.original);
        // Add logic to confirm and delete the row
      };

      return (
        <div className="flex justify-center">
          <div className="text-right ">
            <DropdownMenu>
              <DropdownMenuTrigger className=" w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleEdit} className="text-blue-500 hover:bg-[#E6EEF6]">Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete} className="text-red-500">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      );
    },
    enableSorting: false, // Disable sorting for the actions column
    size: 100, // Optional: Set a fixed width for this column
  },
];
