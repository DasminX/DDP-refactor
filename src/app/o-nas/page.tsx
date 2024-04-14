import { FadeUpLine } from "@/components/_shared/FadeUpLine";
import { SourcePicture } from "@/components/_shared/SourcePicture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&D Bezpieczna Przystań | O nas",
  description:
    "W tej secji można dowiedzieć się więcej na temat D&D Bezpieczna Przystań.",
  alternates: {
    canonical: "https://ddbezpiecznaprzystan.pl/o-nas/",
  },
};

export default function AboutusPage() {
  return (
    <>
      <section id="aboutus" className="mainsection aboutus">
        <h1>Kim jesteśmy?</h1>
        <div className="mainsection__presentation">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-duration="500"
            className="img-placeholder"
          >
            <h2 className="mainsection__presentation__header">
              <strong>Dominika Jazowska</strong>
            </h2>
            <SourcePicture
              path="domcia-solo.jpg"
              alt="Psycholog Dominika Jazowska"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-duration="500"
            className="textblock"
          >
            <FadeUpLine>
              Witaj, zanim Ty zdecydujesz opowiedzieć mi coś o sobie, ja
              przedstawię się Tobie.
            </FadeUpLine>
            <FadeUpLine>
              Na imię mam Dominika i jestem Magistrem Psychologii o specjalności
              klinicznej oraz Trenerem Umiejętności Społecznych dzieci i
              młodzieży. Ukończyłam także kurs prowadzenia bajkoterapii oraz
              Holistycznej Terapii Dzieci i Młodzieży z Zaburzeniami Lękowymi.
            </FadeUpLine>
            <FadeUpLine>
              Rozpoczęłam także studia podyplomowe z zakresu przygotowania
              pedagogicznego oraz psychologii kryzysu, pomocy psychologicznej i
              interwencji kryzysowej.
            </FadeUpLine>
            <FadeUpLine>
              Swoje doświadczenie zawodowe zdobywałam w przedszkolach
              specjalnych i integracyjnych oraz w szkołach podstawowych, a także
              w gabinecie psychologicznym pod okiem doświadczonych psychologów i
              psychoterapeutów.
            </FadeUpLine>
            <FadeUpLine>
              Człowiek jest dla mnie wciąż nieodgadnioną zagadką, na którą
              składają się procesy emocjonalne, społeczne i rozwojowe. Dzięki
              temu to właśnie druga osoba jest dla mnie największą motywacją do
              działania i poszerzenia swoich kompetencji w celu niesienia pomocy
              i wsparcia tym, którzy go potrzebują.
            </FadeUpLine>
          </div>
          <div className="textblock extend">
            <FadeUpLine>
              Jestem dobrym partnerem do rozmowy, uwielbiam słuchać. Jestem
              osobą empatyczną, zaangażowaną w wykonywaną pracę, kreatywną i
              troskliwą. W pracy kieruję się poczuciem bezpieczeństwa, zaufania
              i komfortu mojego pacjenta, a także podejściem systemowym, w
              którym traktuje rodzinę jako złożoną całość. Dzięki temu wsparciem
              otaczam nie tylko swojego pacjenta, ale także jego bliskich.
            </FadeUpLine>

            <FadeUpLine>
              Prywatnie uwielbiam podróżować, poznawać innych ludzi i ich
              kulturę. Uwielbiam długie spacery, jazdę na rolkach i na rowerze.
              Jestem miłośniczką długich powieści oraz filmów. Łączę w sobie dwa
              żywioły - wodę i ogień. Na co dzień jestem oazą spokoju,
              opanowania i cierpliwości, żeby w odpowiednim momencie rozpalić
              ogień kreatywności i zarażać innych pozytywną energią oraz
              uśmiechem.
            </FadeUpLine>
          </div>
        </div>
        <div className="mainsection__presentation">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-duration="500"
            className="img-placeholder"
          >
            <h2 className="mainsection__presentation__header">
              <strong>Dominika Wąchadło</strong>
            </h2>
            <SourcePicture
              path="domi-solo.jpg"
              alt="Psycholog Dominika Wąchadło"
              loading="lazy"
            />
          </div>
          <div className="textblock">
            <FadeUpLine>
              Mam na imię Dominika i jestem psycholożką, pedagożką i Trenerką
              Umiejętności Społecznych dzieci i młodzieży.
            </FadeUpLine>
            <FadeUpLine>
              Ukończyłam jednolite studia magisterskie z zakresu psychologii, ze
              specjalnością kliniczną oraz studia podyplomowe ze wspierania i
              edukacji osób ze spektrum autyzmu i przygotowania pedagogicznego
              oraz uczestniczyłam w szkoleniu Treningu Umiejętności Społecznych.
            </FadeUpLine>
            <FadeUpLine>
              Brałam również udział w różnorodnych szkoleniach, poszerzających
              moją wiedzę i kompetencje, m.in. w obszarze regulacji emocji
              dzieci i młodzieży, terapii mutyzmu selektywnego w podejściu
              poznawczo-behawioralnym, problemowych zachowań seksualnych w
              dzieciństwie, samouszkodzeń, metod pracy z ADHD,
              poznawczo-behawioralnych metod pracy w zaburzeniach lękowych,
              posiadam tytuł praktyka metody &quot;Kids&apos; Skills - Dam
              radę!&quot; oraz &quot;Jestem z Ciebie dumny!&quot;.
            </FadeUpLine>
            <FadeUpLine>
              Doświadczenie zawodowe zdobywałam pracując w oświacie, Fundacji
              Wsparcia Psychologicznego oraz gabinecie psychologicznym, pracując
              pod okiem doświadczonych psychologów i psychoterapeutów.
            </FadeUpLine>
          </div>
          <div className="textblock extend">
            <FadeUpLine>
              Nieustannie podnoszę swoje kwalifikacje, aby wspierać i pomagać
              najlepiej jak potrafię, uczestnicząc w kolejnych szkoleniach,
              spotkaniach i webinarach, a swoją pracę poddaję regularnej
              superwizji.
            </FadeUpLine>
            <FadeUpLine>
              W gabinecie współpracuję z dziećmi, młodzieżą oraz młodymi
              dorosłymi.
            </FadeUpLine>
            <FadeUpLine>
              Od zawsze człowiek był dla mnie skarbnicą, składającą się z
              ogromnej ilości emocji, przeżyć, doświadczeń, które starałam się
              zrozumieć, zamiast oceniać. Ktoś kiedyś powiedział, że kiedy
              pozwolimy człowiekowi być sobą, zaczyna dziać się magia - w pełni
              się z tym zgadzam i kieruje się tym, zarówno w życiu, jak i pracy.
            </FadeUpLine>
            <FadeUpLine>
              Pomoc drugiemu człowiekowi była dla mnie ważna odkąd pamiętam, a
              zawód psychologa jest spełnieniem jednego z moich marzeń. Studia,
              szkolenia i kursy natomiast dają mi narzędzia, abym mogła wspierać
              i pomagać oraz robić to efektywnie.
            </FadeUpLine>
            <FadeUpLine>
              W relacji zarówno z dzieckiem, rodzicem, jak i osobą dorosłą
              przede wszystkim kieruje się dobrem klienta, ważna jest dla mnie
              atmosfera bezpieczeństwa, otwartości i uważności.
            </FadeUpLine>
            <FadeUpLine>
              Prywatnie jestem miłośniczką długich rozmów, komedii romantycznych
              i polskich gór, mam fantastycznych przyjaciół, mnóstwo energii do
              działania i sto pomysłów na minutę.
            </FadeUpLine>
          </div>
        </div>
      </section>
    </>
  );
}
