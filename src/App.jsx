import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Homepage";
import Image from "./pages/Image";
import Listing from "./pages/Listing";
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/image' element={<Image />} />
        <Route exact path='/listing' element={<Listing />} />
      </Routes>
    </Router>
  );
}

export default App;
