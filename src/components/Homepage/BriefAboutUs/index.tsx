import { SourcePicture } from "@/components/_shared/SourcePicture";
import { TextblockDescription } from "./Description";

export const BriefAboutUs = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-offset="150"
      data-aos-duration="500"
      id="aboutDDP"
      className="mainsection aboutDDP"
    >
      <h1>O nas</h1>
      <div className="mainsection__presentation">
        <div className="img-placeholder">
          <h2 className="mainsection__presentation__header">
            <strong>D&D Bezpieczna Przystań - Gabinet Psychologiczny</strong>
          </h2>
          <SourcePicture
            path="domcie-duo.jpg"
            alt="Dominika Jazowska i Dominika Wąchadło"
          />
        </div>
        <TextblockDescription />
      </div>
    </section>
  );
};
