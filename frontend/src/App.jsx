import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PeerMatching from "./components/PeerMatching";
import Scheduler from "./components/Scheduler";
import VirtualMeeting from "./components/VirtualMeeting";
import ProgressTracking from "./components/ProgressTracking";
import SignUpLogin from "./components/SignUpLogin";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peermatching" element={<PeerMatching />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/virtualmeeting" element={<VirtualMeeting />} />
        <Route path="/progress" element={<ProgressTracking />} />
        <Route path="/login-signup" element={<SignUpLogin />} />
      </Routes>
    </Router>
  );
};



export default App;
