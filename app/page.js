import Quality from "./quality/page.jsx";
import Hero from "./home/page";
import Features from "./features/page.jsx"
import QualityFeatures from "./qualityfeatures/page.jsx";
import CoreFeatures from "./corefeatures/page.jsx"
import Functions from "./function/page.jsx"
import Testimonial from "./testimonial/page.jsx"
import Payment from "./payment/page.jsx";
import Signup from "./signup/page.jsx";
import Question from "./question/page.jsx";
import About from "./about/page.jsx";
import Navbar from "./navbar/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Quality/>
      <Features/>
      <QualityFeatures/>
      <CoreFeatures/>
      <Functions/>
      <Testimonial/>
      <Payment/>
      <Signup/>
      <Question/>
      <About/>
    </>
  );
}
