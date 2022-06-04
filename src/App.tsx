import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login, Register, Home, RouteGuard } from "./views";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App(): JSX.Element {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<RouteGuard isAuth={user} />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
