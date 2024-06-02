import Challenges from "./components/Challenges/Challenges";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Highlight from "./components/Highlight/Highlight";
import IntroSection from "./components/IntroSection/IntroSection";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <IntroSection/>
      <Challenges/>
      <Highlight/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
