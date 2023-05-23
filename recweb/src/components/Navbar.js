import "./NavbarStyles.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import {MenuObjects} from "./MenuObjects";

class Navbar extends Component{
    state = {clicked : false };
    handleClick = ()=> (
        this.setState({clicked: !this.state.clicked})
    )
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Avventura</h1>

                <ul className="nav-menu">
                    {MenuObjects.map((item,index)=> {return(
                        <li key={index}>
                            <Link className={item.cName} to ={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                    })}
                </ul>
            </nav>
        )
    } //as were extending the component
}

export default Navbar;