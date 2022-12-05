import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AllNation from "./pages/AllNation";
import NewNation from "./pages/NewNation";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<AllNation />} />
          <Route path="/new" exact element={<NewNation />} />
          {/* <Route path="/*" exact element={<MainRoute />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
