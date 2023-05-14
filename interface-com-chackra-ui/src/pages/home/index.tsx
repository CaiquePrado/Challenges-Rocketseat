import { Banner } from "@/components/Banner";
import { Carousel } from "@/components/Carousel";
import { Divider } from "@/components/Divider";
import { Header } from "@/components/Header";
import { TravelTypes } from "@/components/TravelTypes";
import { VamosNessa } from "@/components/VamosNessa";

export default function home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <VamosNessa />
      <Carousel />
    </>
  );
}
