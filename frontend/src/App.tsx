import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Sign-in";
import  SignUp  from "./pages/Sign-up";
import JMS from "./components/admin/jms_layout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Inmates from "./pages/Inmates";
import Visitors from "./pages/Visitors";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<JMS/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/inmates" element={<Inmates />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/account" element={<Settings />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
