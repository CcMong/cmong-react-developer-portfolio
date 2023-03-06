import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/webpages/Home";
import About from "./components/webpages/About";


function App() {
  return (
    <Router>
      {/*Place Header here outside the div so that it will show on every page */}
      <Header />
      <div>
        {/*Navigation links will point to other pages. So will use Route elements for each link, and will group them within a Routes element */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>            
    </Router>
  );
}

export default App;
