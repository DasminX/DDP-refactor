import { ReactNode } from "react";

export const FadeUpLine = ({ children }: { children: ReactNode }) => {
  return (
    <p
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-offset="150"
      data-aos-duration="500"
      className="description"
    >
      {children}
    </p>
  );
};
