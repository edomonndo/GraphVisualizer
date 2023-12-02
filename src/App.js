import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
// import About from "./About"; // Aboutページのインポート
import GraphGenerator from "./GraphNetworkGenerator";
import NotFound from "./NotFound";

function App() {
  return (
		<div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          {/* <Route path="/GraphVisualizer/about" element={<About />} /> */}
          <Route path="/" element={<GraphGenerator />} />
          <Route path="/network-graph" element={<GraphGenerator />} />
          <Route path="/2d-graph" element={<GraphGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
		</div>
  );
}

export default App;