import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<App />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
