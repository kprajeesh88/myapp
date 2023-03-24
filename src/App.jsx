import "./App.scss";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Banner/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
