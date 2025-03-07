import {
  BookImage,
  Box,
  Gift,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShoppingCart,
  UserPlus,
} from "lucide-react";
import Image from "next/image";

export type SidebarContentType = {
  id: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  href: string;
};

// NOTE: Don't Remove this code used inside vendor-dashboard route
export const sidebarContents = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LayoutDashboard className="h-[16px] w-[16px]" />,
    href: "/",
  },
  {
    id: 2,
    name: "Media",
    icon: <BookImage className="h-[16px] w-[16px]" />,
    href: "/media",
  },
  {
    id: 3,
    name: "Auction/listing",
    icon: <Box className="h-[16px] w-[16px]" />,
    href: "/vendor-dashboard/auctions",
  },
  {
    id: 4,
    name: "Auctions",
    // icon: Icons.hammer,
    icon: (
      <Image
        src="/assets/img/auction_icon.png"
        alt="auction"
        width={16}
        height={16}
      />
    ),
    href: "/live-auctions",
  },
  {
    id: 5,
    name: "Order",
    icon: <ShoppingCart className="h-[16px] w-[16px]" />,
    href: "/orders",
  },
  {
    id: 6,
    name: "Cupons",
    icon: <Gift className="h-[16px] w-[16px]" />,
    href: "/cupons",
  },
  {
    id: 7,
    name: "Store Settings",
    icon: <Settings className="h-[16px] w-[16px]" />,
    href: "/settings",
  },
  {
    id: 7,
    name: "Customer",
    // icon: Icons.userI,
    icon: (
      <Image
        src="/assets/img/customer_icon.png"
        alt="customer"
        width={16}
        height={16}
      />
    ),
    href: "/customers",
  },
  {
    id: 8,
    name: "Refund",
    // icon: Icons.refund,
    icon: (
      <Image
        src="/assets/img/refund_icon.png"
        alt="refund"
        width={16}
        height={16}
      />
    ),
    href: "/refund",
  },
  {
    id: 8,
    name: "Reports",
    // icon: Icons.reports,
    icon: (
      <Image
        src="/assets/img/reports.png"
        alt="reports"
        width={16}
        height={16}
      />
    ),
    href: "/reports",
  },
  {
    id: 9,
    name: "Reviews",
    icon: <MessageSquare className="h-[16px] w-[16px]" />,
    href: "/reviews",
  },
  {
    id: 9,
    name: "Membership",
    icon: <UserPlus className="h-[16px] w-[16px]" />,
    href: "/membership",
  },
] as SidebarContentType[];

export const getCurrentTab = (
  fullPath: string
): SidebarContentType | undefined => {
  return sidebarContents
    .slice() // Create a copy of the array to avoid mutating the original
    .sort((a, b) => b.href.length - a.href.length) // Sort by href length (longer paths first)
    .find((tab) => fullPath.startsWith(tab.href));
};
