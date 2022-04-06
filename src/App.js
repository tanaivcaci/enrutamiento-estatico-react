import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Dog from "./components/Dog"
import Cat from "./components/Cat"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dog" element={<Dog />}/>
        <Route path="/cat" element={<Cat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
