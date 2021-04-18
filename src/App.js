import "./App.scss";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Services from "./pages/services";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
