import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Kind from "./pages/kind";
import Game from "./components/Game/Game";
import PostMain from './page/post/PostMain';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [kinds, setKinds] = useState([]);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TopNavigationBar />
        <Routes>
          <Route path="/" element={<Home kinds={kinds} setKinds={setKinds} />} />
          <Route path="/kind/:id" element={<Kind />} />
          <Route path="/WorldCup" element={<Game />} />
          <Route path='/community' element={<PostMain />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
