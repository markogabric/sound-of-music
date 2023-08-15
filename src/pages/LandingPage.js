import React from "react";
import Hero from '../components/Hero';
import FeaturedGrid from '../cards/FeaturedGrid';
import Testimonail from '../components/Testimonail';

function LandingPage() {
  return (
    <>
        <Hero />
        <FeaturedGrid />
        <Testimonail />
    </>
  );
}

export default LandingPage; 