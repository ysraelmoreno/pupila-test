"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  {
    route: "/visual-reference",
    label: "Visual Reference",
  },
  {
    route: "/color-palette",
    label: "Color Palette",
  },
];

export const Menu = () => {
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <Image
        alt="Pupila Brand Studio Logo"
        src="https://cdn.prod.website-files.com/65e09b33475df40d47950aa1/65e0b3236b28c0497016ba52_PUPILA_Logo_Horizontal.svg"
        width={200}
        height={25}
      />

      <nav className={styles.navbar}>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.route}
              className={pathname === item.route ? "isSelected" : ""}
            >
              <Link href={item.route}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
