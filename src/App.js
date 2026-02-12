import React, { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./style.css";
import Brands from "./components/Brands";
import WorkingProcess from "./components/WorkingProcess";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
export default function PositivusWebsite() {
  const [activeProcess, setActiveProcess] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    }
  ];

 

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Brands />
      <WorkingProcess
  activeProcess={activeProcess}
  setActiveProcess={setActiveProcess}
/>

<Testimonials
  testimonials={testimonials}
  currentTestimonial={currentTestimonial}
  setCurrentTestimonial={setCurrentTestimonial}
/>
 <Footer />
    </div>
  );
}