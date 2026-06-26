import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import FeaturedSuites from "./components/FeaturedSuites";
import Experiences from "./components/Experience";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import BookingBar from "./components/BookingBar";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <Concept />
      <FeaturedSuites />
      <BookingBar />
      <Experiences />
      <Testimonials />
      <Footer />
    </main>
  );
}
