import './App.css';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import ThemeSelector from './ThemeSelector';
import SearchBar from './components/searchBar';
import image from './assets/background.png';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


const Container = styled.div`
  margin: 5px auto 5px auto;
`;

const App=()=> {
  // 3: Get the selected theme, font list, etc.
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
   <Router>
    <div className='App'>
      {themeLoaded && <ThemeProvider theme={ selectedTheme }>
     <GlobalStyles/>
      <Container style={{fontFamily: selectedTheme.font}}>
        
        <button className='App-search'>  <Link to="/search">search more</Link></button>
        
        
    
      <Routes>
       <Route exact path="/search" element={<SearchBar />}></Route>
       <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <ThemeSelector setter={ setSelectedTheme } />
   
    </Container>
    
  </ThemeProvider>
  }
    </div>

    </Router>
   

  );
};

export default App;
