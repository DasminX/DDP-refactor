import { SourcePicture } from "../_shared/SourcePicture";

export const HomePageHeader = () => {
  return (
    <header className="header" id="header">
      <div
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-once="true"
        className="header__logo-wrapper"
      >
        <SourcePicture path="logo_dd.png" alt="Logo D&D Bezpieczna Przystań" />
      </div>
      <blockquote
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-delay="450"
        data-aos-once="true"
      >
        <p>„Wszystko rozpoczyna się od myśli.</p>
        <p>Myśli prowadzą do uczuć,</p>
        <p>uczucia prowadzą do działań,</p>
        <p>działania prowadzą do rezultatów”.</p>
        <p>~J. Beck</p>
      </blockquote>
    </header>
  );
};
