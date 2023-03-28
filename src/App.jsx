import "./App.scss";
import Header from "./Header";
import Blog from "./Blog";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
