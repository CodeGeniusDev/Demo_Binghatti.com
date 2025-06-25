import { 
  IconHome,
  IconBuilding,
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconLayoutGrid,
  IconNewSection,
  IconSearch,
  IconCalendarEvent,
  IconNews,
  IconMapPin
} from "@tabler/icons-react";

import React, { ReactNode } from "react";

export interface NavLink {
  id: number;
  title: string;
  href: string;
  icon: ReactNode;
  submenu?: NavLink[];
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: React.createElement(IconHome, { className: "w-5 h-5" })
  },
  {
    id: 2,
    title: "The Brand",
    href: "/the-brand",
    icon: React.createElement(IconBuilding, { className: "w-5 h-5" })
  },
  {
    id: 3,
    title: "Bugatti Residences",
    href: "/bugatti-residences",
    icon: React.createElement(IconBuildingSkyscraper, { className: "w-5 h-5" })
  },
  {
    id: 4,
    title: "Branded Luxury Collection",
    href: "/branded-luxury-collection",
    icon: React.createElement(IconBuildingCommunity, { className: "w-5 h-5" })
  },
  {
    id: 5,
    title: "Collections",
    href: "/collections",
    icon: React.createElement(IconLayoutGrid, { className: "w-5 h-5" })
  },
  {
    id: 6,
    title: "New Releases",
    href: "/new-releases",
    icon: React.createElement(IconNewSection, { className: "w-5 h-5" })
  },
  {
    id: 7,
    title: "Search Properties",
    href: "/search-properties",
    icon: React.createElement(IconSearch, { className: "w-5 h-5" })
  },
  {
    id: 8,
    title: "Events",
    href: "/events",
    icon: React.createElement(IconCalendarEvent, { className: "w-5 h-5" })
  },
  {
    id: 9,
    title: "News & Media",
    href: "/news-media",
    icon: React.createElement(IconNews, { className: "w-5 h-5" })
  },
  {
    id: 10,
    title: "Find a Boutique",
    href: "/find-boutique",
    icon: React.createElement(IconMapPin, { className: "w-5 h-5" })
  }
];