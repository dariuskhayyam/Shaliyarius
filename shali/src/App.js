import React from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import Shaliyarius from "./pages/Shaliyarius"

class App extends React.Component{
    render(){
        return(
            <Router>
               <Route exact path ="/" component={Shaliyarius}/>
            </Router>
        )
    }
}

export default App
