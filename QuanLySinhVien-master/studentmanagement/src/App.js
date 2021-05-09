import "./App.css";

import { Component } from "react";

import MainQLSV from "./components/mainQLSV";
import Login from "./components/loginForm";
import NotFound from "./components/notFound";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Routes from "./components/routes";
import Navbar from "./components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Switch>
          {Routes.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                render={() => {
                  return localStorage.getItem("access")? <Home children={(value)=><route.component menu={value}></route.component>}></Home>  : <Login/>
                }}
              >
              </Route>
            );
          })}
          
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Home render={(value) => (<MainQLSV component={value}></MainQLSV>)}></Home> */}
    </div>
  );
}

export default App;
