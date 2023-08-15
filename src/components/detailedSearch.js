import React from "react";
import {
              BrowserRouter as Router,
              Switch,
              Route,
              Link,
              Routes
            } from "react-router-dom";
            
const DetailedSearch = ({childern}) =>{

              return(
              <Router>
                            <Link to ='/search/detail'></Link>
                            <Routes>
                                          <Route exact path="/search/detail" >{childern.detail.name}</Route>
                            </Routes>
              </Router>
              );
}
export default DetailedSearch;
