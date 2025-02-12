import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "./components/App.jsx";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={App} />

      </Routes>
    </Router>
  );
}

export default AppRoute;
