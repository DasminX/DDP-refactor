import { SourcePicture } from "@/components/_shared/SourcePicture";

export const HomePageContact = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-offset="150"
      data-aos-duration="500"
      className="contact"
      id="contact"
    >
      <h1>Skontaktuj się z nami!</h1>
      <div className="contact__infos">
        <div className="contact__square">
          <div className="contact__square__icon">
            <i className="fa-solid fa-house"></i>
            <p>Adres</p>
          </div>
          <div className="contact__square__info">
            <p
              title="Adres D&D Bezpieczna Przystań - Gabinet Psychologiczny"
              aria-label="Adres D&D Bezpieczna Przystań - Gabinet Psychologiczny"
            >
              ul. Tadeusza Rejtana 20 <br />
              41-300 Dąbrowa Górnicza <br />
              pok. 207
            </p>
            <button className="contact-btn contact-btn-hidden">
              Kliknij, aby odsłonić
            </button>
          </div>
        </div>
        <div className="contact__square">
          <div className="contact__square__icon">
            <i className="fa-solid fa-mobile"></i>
            <p>Telefon</p>
          </div>
          <div className="contact__square__info">
            <p className="name">Dominika Jazowska</p>
            <p
              className="phone-number1"
              title="Number telefonu do psycholog Dominiki Jazowskiej"
              aria-label="Number telefonu do psycholog Dominiki Jazowskiej"
            >
              +48 789 049 495
            </p>
          </div>
          <div className="contact__square__info">
            <p className="name">Dominika Wąchadło</p>
            <p
              className="phone-number2"
              title="Number telefonu do psycholog Dominiki Wąchadło"
              aria-label="Number telefonu do psycholog Dominiki Wąchadło"
            >
              +48 570 190 884
            </p>
          </div>
        </div>
        <div className="contact__square">
          <div className="contact__square__icon">
            <i className="fa-solid fa-envelope"></i>
            <p>Email</p>
          </div>
          <div className="contact__square__info">
            <p
              className="email-address"
              title="Adres email D&D Bezpieczna Przystań - Gabinet Psychologiczny"
              aria-label="Adres email D&D Bezpieczna Przystań - Gabinet Psychologiczny"
            >
              dd.bezpiecznaprzystan.gmail@com
            </p>
          </div>
        </div>
      </div>

      <div className="contact__socials">
        <ul className="contact__list">
          <li className="contact__social">
            <a
              className="contact__link"
              target="_blank"
              href="https://instagram.com/dd.bezpiecznaprzystan"
              title="Profil D&D Bezpieczna Przystań - Gabinet Psychologiczny w serwisie Instagram"
              aria-label="Link do profilu D&D Bezpieczna Przystań - Gabinet Psychologiczny w serwisie Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="contact__social">
            <a
              className="contact__link"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61550618512601"
              title="Profil D&D Bezpieczna Przystań - Gabinet Psychologiczny w serwisie Facebook"
              aria-label="Link do profilu D&D Bezpieczna Przystań - Gabinet Psychologiczny w serwisie Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
      <h1>Gdzie nas znajdziesz?</h1>
      <div className="contact__map">
        <a
          title="Mapa Google przedstawia lokalizacje gabinetu D&D Bezpieczna Przystań"
          aria-label="Mapa Google przedstawia lokalizacje gabinetu D&D Bezpieczna Przystań"
          href="https://www.google.com/maps/place/Tadeusza+Rejtana+20,+41-300+D%C4%85browa+G%C3%B3rnicza/@50.3165543,19.1849496,15.5z/data=!4m6!3m5!1s0x4716da3802989ee7:0x3ab1ddaf67b10bdf!8m2!3d50.3161515!4d19.1887492!16s%2Fg%2F11b8vdk1hz?hl=pl&entry=ttu"
          target="_blank"
        >
          <SourcePicture
            path="mapa.png"
            alt="Mapa Google przedstawia lokalizacje gabinetu D&D Bezpieczna Przystań"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
};
