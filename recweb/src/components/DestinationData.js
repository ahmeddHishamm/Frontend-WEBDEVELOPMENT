import "./DestinationsStyles.css";
import {Component} from "react";
import Pyramids from "../assets/Egypt.avif";
import pyramids2
    from "../assets/png-transparent-great-sphinx-of-giza-great-pyramid-of-giza-egyptian-pyramids-cairo-ancient-egypt-egypt-landscape-egypt-world.png";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="description-text">
                    <h2>{this.props.heading}</h2>
                    <p> {this.props.text}</p>

                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default DestinationData