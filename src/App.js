import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Menu from "./components/menu/menu";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
