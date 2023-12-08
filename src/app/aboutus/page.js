"use client";
import Navbar from "../(Home)/Navbar";
import AboutUs from "./(contents)/aboutUsContents";
import OurTeam from "./(contents)/OurTeam";
import OurCulture from "./(contents)/OurCulture";
import Footer from "../(Home)/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <OurTeam />
      <OurCulture />
      <Footer />
    </>
  );
}
