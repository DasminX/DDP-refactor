import { SourcePicture } from "@/components/_shared/SourcePicture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&D Bezpieczna Przystań | Cennik",
  description:
    "D&D Bezpieczna Przystań - Gabinet Psychologiczny - cennik świadczonych usług.",
  alternates: {
    canonical: "https://ddbezpiecznaprzystan.pl/cennik/",
  },
};

export default function CostsPage() {
  return (
    <>
      <section id="pricing" className="mainsection pricing">
        <h1
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          Cennik
        </h1>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
          className="mainsection__block__box"
        >
          <p className="description">
            <strong>Terapia indywidualna</strong>
            <strong className="thin">170zł/~50min</strong>
          </p>
          <p className="description">
            <strong>Pierwsza konsultacja psychologiczna</strong>
            <strong className="thin">200zł/~50min</strong>
          </p>
          <p className="description">
            <strong>
              Zajęcia grupowe - Trening Umiejętności Społecznych (TUS)
            </strong>
            <strong className="thin">100zł/~60min</strong>
          </p>
          <p className="description">
            <strong>Zajęcia grupowe - Bajkoterapia</strong>
            <strong className="thin">80zł/~60min</strong>
          </p>
          <p className="description">
            <strong>
              Zajęcia grupowe - Zajęcia Wspierające Rozwój Emocjonalny
            </strong>
            <strong className="thin">100zł/~60min</strong>
          </p>
        </div>
        <h1 data-aos="fade-in" data-aos-once="true" data-aos-duration="500">
          Zapraszamy!
        </h1>
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="500"
          className="img-placeholder"
        >
          <SourcePicture
            path="domcie-misie.jpg"
            alt="Psycholog Dominika Jazowska i Dominika Wąchadło przytulają pluszowe misie"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
