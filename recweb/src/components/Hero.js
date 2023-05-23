import "./HeroStyles.css";
import Navbar from "./Navbar";
import FlightSearchForm from "./FlightSearchForm";
function Hero(props,{showForm}){
    return (
        <>
           <div className={props.cName}>
               <img alt="HeroImage"  src={require(`/Users/Ahmed/WebstormProjects/recweb/src/assets/${props.heroimage}`)}/>

               <div className="hero-Text">

                   <h1>{props.title}</h1>
                   <p> {props.text}</p>
                   {showForm && <flightSearchForm/>}
                   <FlightSearchForm/>
               </div>



           </div>
        </>
    )

}

export default Hero;
