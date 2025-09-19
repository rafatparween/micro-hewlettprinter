import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { HOME } from "./page/Homepage";
import { CustomForm } from "./page/Query"
import { Disclaimer } from "./page/disclaimer"
import { PrivacyPolicy } from "./page/privacyPolicy"
import { TermsAndCondition } from "./page/termAndCondition"
import { Navbar } from "./component/navbar";
import { AboutUs } from './page/aboutUs'

function App() {
  return (
    <>
     

 
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/query" element={<CustomForm />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


