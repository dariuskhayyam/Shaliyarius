import React from "react"
import {Link} from "react-router-dom"



class NavBar extends React.Component{
    render(){
        return(
            <div>
            <Link>Shaliyarius</Link> |
            <Link>Anniversaries</Link> |
            <Link>Moments</Link> |
            <Link>Date Checklist</Link>
            
            </div>
        )
    }
}

export default NavBar