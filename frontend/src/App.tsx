import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up"
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Inmates from "./pages/Inmates";
import Settings from "./pages/Settings";
import Visitors from "./pages/Visitors";
import JMS from "./components/jms/jms_layout";
import AuthProvider from "./components/jms/authProvider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          element={
            <AuthProvider>
              <JMS />
            </AuthProvider>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/inmates" element={<Inmates />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/account" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
