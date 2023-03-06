import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/webpages/Home";
import About from "./components/webpages/About";
import Portfolio from './components/webpages/Portfolio';



function App() {

  const projectInfoTest = [

    {
        id: 1,
        title: "Project 1 Title",
        image: "",
        description: "Project 1 description",
        url: ""
    },
    {
        id: 2,
        title: "Project 2 Title",
        image: "",
        description: "Project 2 description",
        url: ""
    },
    {
        id: 3,
        title: "Project 3 Title",
        image: "",
        description: "Project 3 description",
        url: ""
    },
    {
        id: 4,
        title: "Project 4 Title",
        image: "",
        description: "Project 4 description",
        url: ""
    },
    {
        id: 5,
        title: "Project 5 Title",
        image: "",
        description: "Project 5 description",
        url: ""
    },
    {
        id: 6,
        title: "Project 6 Title",
        image: "",
        description: "Project 6 description",
        url: ""
    }
  ]


  return (
    <Router>
      {/*Place Header here outside the div so that it will show on every page */}
      <Header />
      <div>
        {/*Navigation links will point to other pages. So will use Route elements for each link, and will group them within a Routes element */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={< Portfolio info={projectInfoTest}/>} />
        </Routes>
      </div>            
    </Router>
  );
}

export default App;
