import { SourcePicture } from "@/components/_shared/SourcePicture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&D Bezpieczna Przystań | Usługi",
  description:
    "D&D Bezpieczna Przystań - Gabinet Psychologiczny świadczy takie usługi jak: terapia indywidualna, Trening Umiejętności Społecznych, bajkoterapia oraz zajęcia wspierające rozwój emocjonalny.",
  alternates: {
    canonical: "https://ddbezpiecznaprzystan.pl/uslugi",
  },
};

export default function ServicePage() {
  return (
    <>
      <section id="descriptions" className="mainsection descriptions">
        <h1
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          Dla kogo jesteśmy?
        </h1>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
          className="mainsection__block"
        >
          <p className="description">
            Na konsultację psychologiczną zapraszamy wszystkie osoby, które
            odczuwają wynikający z różnych przyczyn dyskomfort psychiczny,
            obserwują zmiany w zachowaniu, bądź trudności w wyrażaniu emocji.
          </p>
          <p className="description">
            Sygnały, które świadczą o tym, że warto skorzystać z pomocy
            specjalistów mogą pochodzić z różnych źródeł i objawiać się na wielu
            płaszczyznach.
          </p>
        </div>

        <h1
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          Kiedy warto skorzystać z konsultacji psychologicznej?
        </h1>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
          className="mainsection__block__box"
        >
          <ol className="mainsection__block__box__list">
            <li>
              Kiedy zauważasz u siebie zmiany utrudniające codzienne
              funkcjonowanie
            </li>
            <li>
              Kiedy zauważasz u siebie zmiany nastroju lub od dłuższego czasu
              towarzyszy Ci obniżony nastrój
            </li>
            <li>Kiedy zauważasz u siebie trudności w zasypianiu</li>
            <li>
              Kiedy występują u Ciebie trudności w relacjach z innymi ludźmi
            </li>
            <li>Kiedy brakuje Ci motywacji lub chcesz wzmocnić swoje zasoby</li>
            <li>
              Kiedy odczuwasz potrzebę zmiany swoich nawyków lub konkretnego
              obszaru życia
            </li>
          </ol>
        </div>

        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
          className="mainsection__block"
        >
          <p className="description">
            Nie musisz być pewien jakiej zmiany potrzebujesz - wspólnie do tego
            dojdziemy.
          </p>
          <p className="description">
            Jeżeli jesteś rodzicem lub opiekunem i zauważasz u swojego dziecka
            jakiekolwiek niepokojące zmiany lub zgłaszane przez nie trudności,
            również zachęcamy do skorzystania ze wsparcia specjalisty.
          </p>
          <p className="description">
            Stworzona przez nas Bezpieczna Przystań jest miejscem, w którym
            podczas konsultacji psychologicznej wspólnie zastanowimy się jakie
            są źródła ewentualnych trudności oraz co możemy zrobić, aby jakość
            życia pacjenta wzrosła.
          </p>
          <p className="description">
            W sytuacji, kiedy pacjentem jest dziecko lub osoba nastoletnia,
            pierwsza konsultacja odbywa się zawsze tylko z rodzicami, bądź
            opiekunami prawnymi. Zachęcamy, aby na pierwszym spotkaniu pojawili
            się oboje rodzice bądź opiekunowie.
          </p>
          <p className="description">
            W przypadku jakichkolwiek pytań zachęcamy do kontaktu telefonicznego
            oraz emailowego.
          </p>
        </div>

        <h1
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          Oferujemy następujące formy wsparcia:
        </h1>

        <div className="mainsection__therapies">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-duration="500"
            className="mainsection__block__box"
          >
            <h2>
              <strong>Terapia indywidualna</strong>
            </h2>
            <p className="description">
              Psychologiczna terapia indywidualna w Bezpiecznej Przystani
              skierowana jest do dzieci, młodzieży, jak i osób dorosłych. Jest
              to forma bezpośredniego kontaktu specjalisty z pacjentem w formie
              spotkań na żywo w naszym gabinecie lub w trybie on-line.
            </p>
            <p className="description">
              Spotkania indywidualne umożliwiają nawiązanie więzi terapeutycznej
              oraz zbudowanie zaufania, dzięki czemu psycholog jest w stanie
              poznać pacjenta, jego trudności i doświadczenia.
            </p>
            <p className="description">
              Na tej podstawie psycholog może postawić odpowiednią diagnozę lub
              dobrać odpowiednie techniki pracy z pacjentem.
            </p>
            <strong
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="500"
            >
              Czas trwania terapii indywidualnej to około 50 minut.
            </strong>
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-duration="500"
            className="mainsection__block__box"
          >
            <h2>
              <strong>Zajęcia wspierające rozwój emocjonalny</strong>
            </h2>
            <p className="description">
              Zajęcia grupowe dla dzieci skupiające się na ćwiczeniu i
              rozwijaniu umiejętności nazywania, rozpoznawania i radzenia sobie
              z emocjami.
            </p>
            <p className="description">
              Spotkania koncentrują się wokół stanów emocjonalnych ludzi w
              różnych sytuacjach, uczą dostrzegania emocji własnych i innych
              oraz pokazują, że mogą występować różnice w ich odczuwaniu.
              Dostarczają również kreatywnych sposobów radzenia sobie z nimi.
            </p>
            <p className="description">
              Szczególnie polecane dla dzieci, które mają trudność w wyrażaniu
              swoich emocji, czy adaptacyjnym radzeniu sobie ze złością lub
              innymi przykrymi emocjami.
            </p>

            <p className="description">
              Zajęcia są realizowane w małych, maksymalnie 5-cio osobowych
              grupach, raz w tygodniu.
            </p>

            <strong
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="500"
            >
              Czas trwania zajęć to około 60 minut.
            </strong>
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-duration="500"
            className="mainsection__block__box"
          >
            <h2>
              <strong>Bajkoterapia</strong>
            </h2>
            <p className="description">
              Jest to metoda udzielania wsparcia za pomocą odpowiednio dobranej
              literatury, adresowana do dzieci w wieku przedszkolnym i
              wczesnoszkolnym (od 3-4 do 9-10 lat).
            </p>
            <p className="description">
              W bajkoterapii wykorzystuje się utwory specjalnie napisane w celu
              psychoterapeutycznym, wspierające rozwój, kreatywność,
              koncentrację oraz słuchanie ze zrozumieniem.
            </p>
            <p className="description">
              Istotą bajkoterapii jest nie tylko przeczytanie, bądź opowiedzenie
              odpowiednio dobranej bajki.
            </p>
            <p className="description">
              Terapeuta zapoznaje grupę z wybraną bajką a następnie wszyscy
              członkowie grupy pod opieką terapeuty omawiają występujących w
              literaturze bohaterów, towarzyszące im emocje, przeżywane przez
              nich trudności, ich zachowania.
            </p>

            <h3
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
            >
              <strong>W plan zajęć z Bajkoterapii wchodzą:</strong>
            </h3>
            <ol
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
              className="mainsection__block__box__list"
            >
              <li>Tworzenie zasad pracy w grupie</li>
              <li>Czytanie wybranego fragmentu bajki terapeutycznej</li>
              <li>Wymiana w grupie odczuć dzieci związanych z bajką</li>
              <li>Wykorzystywanie elementów arteterapii</li>
            </ol>

            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
              className="mainsection__block"
            >
              <p className="description">
                Zajęcia są realizowane w małych, maksymalnie 5-cio osobowych
                grupach, raz w tygodniu.
              </p>
            </div>

            <strong
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="500"
            >
              Czas trwania zajęć to około 60 minut.
            </strong>
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-offset="150"
            data-aos-duration="500"
            className="mainsection__block__box"
          >
            <h2>
              <strong>Trening Umiejętności Społecznych</strong>
            </h2>
            <p className="description">
              Trening Umiejętności Społecznych (TUS) wywodzi się z metody
              terapeutycznej opracowanej przez Goldsteina. Jest oddziaływaniem
              terapeutycznym ukierunkowanym na poprawę funkcjonowania
              społecznego dzieci i młodzieży.
            </p>
            <p className="description">
              TUS przyjmuje formę regularnych zajęć grupowych, podczas których
              za pomocą różnorodnych form oddziaływania: ćwiczeń, rozmów,
              dyskusji, scenek, rozwijane są umiejętności potrzebne do
              satysfakcjonującego funkcjonowania w społeczeństwie.
            </p>
            <p className="description">
              Zajęcia odbywają się w kilkuosobowych grupach o stałym składzie,
              miejscu i czasie, co zapewnia poczucie bezpieczeństwa. Proces
              terapeutyczny w obrębie jednej grupy trwa od kilku do kilkunastu
              miesięcy. Grupy tworzone są na podstawie przedziałów wiekowych
              oraz obszarów trudności, z jakimi zmagają się uczestnicy.
            </p>
            <p className="description">
              Utworzenie grupy poprzedza indywidualna rozmowa z każdym z
              uczestników oraz z rodzicem, bądź prawnym opiekunem dziecka, która
              służy poznaniu jego potrzeb, ocenie trudności z jakimi się boryka
              oraz określeniem jego indywidualnego potencjału.
            </p>
            <p className="description">
              Początek pracy z grupą obejmuje ustalenie wspólnych zasad,
              następnie stworzenie planu działań, wybranie odpowiednich technik
              służących wyćwiczeniu pożądanych umiejętności oraz ich utrwalenie.
            </p>

            <h3
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
            >
              <strong>Do podstawowych celów TUS zaliczamy:</strong>
            </h3>
            <ol
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
              className="mainsection__block__box__list"
            >
              <li>
                Poszerzanie wiedzy na temat funkcjonowania w grupie społecznej
              </li>
              <li>
                Doskonalenia umiejętności nawiązywania relacji społecznych
              </li>
              <li>
                Nabywanie lub rozwijanie umiejętności radzenia sobie w
                sytuacjach społecznych np. w sytuacji konfliktu, porażki,
                przegranej, agresję, reagowania na zaczepki.
              </li>
              <li>
                Rozpoznawanie emocji towarzyszących innym w sytuacjach
                społecznych
              </li>
              <li>Rozwijanie procesów komunikacyjnych</li>
              <li>Doskonalenie umiejętności dzielenia się</li>
              <li>Rozwijanie wiary we własne możliwości</li>
            </ol>

            <h3
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
            >
              <strong>
                TUS skierowany jest przede wszystkim do dzieci i młodzieży
                borykających się z następującymi trudnościami:
              </strong>
            </h3>
            <ol
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
              className="mainsection__block__box__list"
            >
              <li>
                Nieśmiałością, lękiem przed nawiązywaniem relacji społecznych
              </li>
              <li>Obniżoną samooceną</li>
              <li>
                Trudnością w akceptowaniu zmian zachodzących w społeczności
              </li>
              <li>
                Nieumiejętnością dostosowania się do obowiązujących zasad, ich
                rozumieniu i respektowaniu
              </li>
              <li>Nieumiejętnością stawiania granic - asertywność</li>
              <li>Nieumiejętnością radzenia sobie z przegraną</li>
              <li>Związanymi z agresją</li>
              <li>
                Związanymi z wyrażaniem swoich emocji i komunikowaniem swoich
                potrzeb
              </li>
            </ol>

            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="150"
              data-aos-duration="500"
              className="mainsection__block"
            >
              <p className="description">
                TUS jest doskonałą formą terapii dla dzieci i młodzieży
                borykającej się z konkretną trudnością w obszarze psychicznym,
                jednak będzie też dobrą formą wsparcia.
              </p>
              <p className="description">
                Daje możliwość nawiązania nowych relacji rówieśniczych, wymianę
                doświadczeń, sposobów radzenia sobie z trudnościami z podobnych
                obszarów.
              </p>
            </div>
            <strong
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="500"
            >
              Czas trwania zajęć to około 60 minut.
            </strong>
          </div>
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
            path="domcie-welcome.jpg"
            alt="Psycholożki Dominika Jazowska i Dominika Wąchadło zapraszają na terapię"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
