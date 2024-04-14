import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copy">
        <p className="footer__text">&copy; D&D - Bezpieczna Przystań 2024</p>
      </div>
      <FooterLinks />
      {/*  <br />
      <br />
      <ul className="footer__company">
        <li>
          <strong>Dane firmy:</strong>
        </li>
        <li>
          <strong>Nazwa:</strong> D&D Bezpieczna Przystań s.c. Dominika
          Jazowska, Dominika Wąchadło
        </li>
        <li>
          <strong>Adres firmy:</strong> ul. Rejtana 20 41-300 Dąbrowa Górnicza
        </li>
        <li>
          <strong>NIP:</strong> 6292508842
        </li>
        <li>
          <strong>REGON:</strong> 526125562
        </li>
      </ul> */}
    </footer>
  );
};
