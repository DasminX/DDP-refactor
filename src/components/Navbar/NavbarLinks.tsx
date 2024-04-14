"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVBAR_ITEMS = [
  {
    id: "navitem-home",
    href: "/",
    title:
      "Link do strony głównej D&D Bezpieczna Przystań - Gabinet Psychologiczny",
    text: "Strona Główna",
  },
  {
    id: "navitem-o-nas",
    href: "/o-nas",
    title:
      "Link do sekcji opisującej psycholożki D&D Bezpieczna Przystań - Gabinet Psychologiczny",
    text: "O nas",
  },
  {
    id: "navitem-uslugi",
    href: "/uslugi",
    title:
      "Link do opisu usług realizowanych przez D&D Bezpieczna Przystań - Gabinet Psychologiczny",
    text: "Nasze usługi",
  },
  {
    id: "navitem-cennik",
    href: "/cennik",
    title:
      "Link do cennika usług realizowanych przez D&D Bezpieczna Przystań - Gabinet Psychologiczny",
    text: "Cennik",
  },
  {
    id: "navitem-contact",
    href: "/#contact",
    title:
      "Link do kontaktu z D&D Bezpieczna Przystań - Gabinet Psychologiczny",
    text: "Kontakt",
  },
];

export const NavbarLinks = () => {
  // const pathname = usePathname();
  // console.log(pathname);

  return (
    <>
      {NAVBAR_ITEMS.map((item) => {
        // TODO active path
        return (
          <li key={item.id} className={`nav__item`}>
            <Link id={item.id} href={item.href} aria-label={item.title}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </>
  );
};
