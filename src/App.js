import { Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
