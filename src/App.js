import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Form from "./components/Form";
import { productData } from "./components/Products/data.js";
import Team from "./components/Team"
import { teamData} from "./components/Team/data.js"
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Hero />
      <Products heading="Escolha o seu sabor favorito!" dados={productData} />
      <Form />
      <Team heading="Conheça o Squad 16!" dados={teamData} />
      <Footer />
    </Router>
  );
}

export default App;
