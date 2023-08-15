import {
              BrowserRouter as Router,
              Routes,
              Route,
              Link,
              Redirect ,
              Navigate
            } from 'react-router-dom';
import React  from 'react';
import SearchCoin from './searchCoin';
import './coins.css'
const SearchBar= () =>{
 
return(

   <div>
     
     <div className='search-img'>
     <div className='search-header'>Search Coin</div>
     <p className='search-par'>Get information  from here</p>
     </div>
     <p className='search-par2'>Crypto Currency Prices By Market Cap </p>
     <SearchCoin />
  
   </div>
  


);
}


export default SearchBar;