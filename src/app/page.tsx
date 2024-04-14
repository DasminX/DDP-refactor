import { BriefAboutUs } from "@/components/Homepage/BriefAboutUs";
import { HomePageContact } from "@/components/Homepage/Contact";
import { HomePageHeader } from "@/components/Homepage/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&D Bezpieczna Przystań | Strona główna",
  description:
    "Jeżeli chcesz poprawić swoje samopoczucie, zwiększyć pewność siebie lub masz z czymś trudności, Bezpieczna Przystań jest idealnym miejscem dla Ciebie.",
  alternates: {
    canonical: "https://ddbezpiecznaprzystan.pl/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageHeader />
      <BriefAboutUs />
      <HomePageContact />
    </>
  );
}
