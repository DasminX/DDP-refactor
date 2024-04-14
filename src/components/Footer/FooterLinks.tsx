import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", text: "Strona główna" },
  { href: "/o-nas", text: "O nas" },
  { href: "/uslugi", text: "Nasze usługi" },
  { href: "/cennik", text: "Cennik" },
  { href: "/polityka-prywatnosci", text: "Polityka prywatności" },
];
export const FooterLinks = () => {
  return (
    <ul className="footer__list">
      {FOOTER_LINKS.map((link) => {
        return (
          <li key={link.text}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};
