import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
