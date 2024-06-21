import "./styles/amt.css"
import Card from "./card"
import fp from "../images/pool.jfif"
import sp from "../images/sp.jfif"
import sf from "../images/sf.jfif"
import gym from "../images/gym.png"

function Amt()
{
   return(
    <div style={{height:"610px",width:"100%"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
        <h1>HARBOUR  LIGHTS</h1>
        <h4 style={{color:"var(--darkblue)",textAlign:"center",fontSize:"small",margin:"0px auto"}}>de GRISOGONA</h4>
        <h5 style={{fontSize:"0.5rem",color:"var(--darkblue)",textAlign:"center",margin:"0px auto"}}>GENEVE</h5>
    </div>
    <div id="head">
    <div style={{width:"770px",height:"150px",margin:"0px auto"}}>
    <h2>FEATURES & AMENITIES</h2>
    <div id="subhead">Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</div>
    </div>
    <div id="imgsel">
     <Card text="Floating Pools" url={fp}></Card>
     <Card text="Spacious Cabin Like Rooms" url={sp}></Card>
     <Card text="Sea Facing Swimming Pools" url={sf}></Card>
     <Card text="Gymnasium & Fitness" url={gym}></Card>
    </div>
     <div style={{textAlign:"right",color:"#D9D9D9",marginTop:"5%"}}>*T&Cs apply | ** Based on similar branded projects in the last 2 years. <span style={{textDecoration:"underline"}}>Source 1</span> | <span style={{textDecoration:"underline"}}>Source 2</span></div>
     <br></br>
    </div>
    </div>
   );
}
export default Amt;