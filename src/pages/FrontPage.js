import React from "react";
import Hero from '../components/Hero';
import FeaturedGrid from '../cards/FeaturedGrid';
import Review from '../components/Review';

function FrontPage() {
  return (
    <>
        <Hero />
        <FeaturedGrid />
        <Review />
    </>
  );
}

export default FrontPage; 