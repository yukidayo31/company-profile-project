"use client";
import React from "react";
import Navbar from "../(Home)/Navbar";
import Footer from "../(Home)/Footer";
import Hero from "./(components)/Hero";
import ServiceChoice from "./(components)/ServiceChoice";
import ConsumerProducts from "./(components)/ConsumerProducts";
import ProfProducts from "./(components)/ProfProducts";
import Testimonials from "./(components)/Testimonials";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceChoice />
      <ConsumerProducts />
      <ProfProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
