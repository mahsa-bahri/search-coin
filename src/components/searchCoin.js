import React ,{useState} from "react";
//import useFetch from "../hooks/useFetch.js";
import  './coins.css';
import axios from "axios"
import DetailedSearch from "./detailedSearch";

const SearchCoin= ()=>{
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
 
  const fetchData = (e) => {
    setIsLoading(true)
    const query = e.target.value
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${query}`)
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.log({ error })
        throw new Error("Sorry something went wrong")
        setIsLoading(false)
      });
  }
  const ShowData = ()=>{
    return(<div className="showD">{isLoading && <p style={{color:"red"}}>Loading...</p>}
      <table className="table">
        <tr style={{backgroundColor: "rgb(241, 241, 99)"}}>
          <th>coin</th>
          <th>price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
        </tr>
        </table>
       
      {users.length > 0 && (<div> <table className="tableCoin">
         {users.map(user => (<div className="showImg">
          <tr className="showImgTr" style={{textAlign: "left",padding: "8px" }}>
            
        
       
          <th><img  src={user.image} style={{width:"60px" , height:"60px"}} />
          {user.symbol}<br></br>
              {user.id}</th>
          <th>{"$"+user.current_price}</th>
          <th>{"%"+user.price_change_percentage_24h}</th>
          <th>{user.market_cap}</th>
          
       
        
        </tr></div>
        ))}
        </table>
        </div>)}
       
      </div>);
  }

            
  return (
    <div className="main">
      <input className="inputSearch"
        type="text"
        placeholder="Search for a Crypto Currency .."
        onChange={fetchData}
       />
        <ShowData />
                 
      </div>
      );
}

export default SearchCoin;