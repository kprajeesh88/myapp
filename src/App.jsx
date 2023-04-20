import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Layout/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
