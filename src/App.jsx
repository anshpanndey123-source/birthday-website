import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import SectionDivider from "./components/sectionDivider/SectionDivider";
import LoveLetter from "./components/loveLetter/LoveLetter";
import LoveDivider from "./components/divider/LoveDivider";
import BirthdayWish from "./components/birthday/BirthdayWish";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <SectionDivider />
      <Gallery />
      <LoveDivider />
      <LoveLetter />
      <BirthdayWish />
      <Footer />
    </>
  );
}

export default App;