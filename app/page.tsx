import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import GlobalNetwork from "@/components/GlobalNetwork";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Price from "@/components/Price";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Navigation/>
      <Feature/>
      <Price/>
      <GlobalNetwork/>
      <Testimonial/>
      <Subscribe/>
      <Footer/>
    </main>
  );
}
