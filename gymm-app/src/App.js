import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import Custom from "./components/custom.js";
import Details from "./components/details.js";
import Teams from "./components/teams.js";
import Pricing from "./components/pricing.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Custom />
      <Details />
      <Teams />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
