import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Social from "./components/Social";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Team />
      <Footer />
      <Social />
      <p style={{ textAlign: "center", color: "#FFF" }}>
        @Ronin Automotiva - 2026
      </p>
    </>
  );
}

export default App;
