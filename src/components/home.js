import homeimg from "../images/home.jpg"
import "./styles/home.css"
import Ftbox from "./ftbox";
import bank from "../images/bank.png"
import percent from "../images/percentage.jfif"
import handover from "../images/handover1.jfif"
import area from "../images/area1.png"
function Home()
{
    let obj =  {
    width:"305px",
    height:"40px",
    top:"470px",
    left:"160px",
    position:"absolute",
    backgroundColor:"rgba(0,0,0,0.26)"
    }
    let obj1 = {
    backgroundColor:"#17ABFF",
    display:"inline-block",
    position:"absolute",
    width: "3px",
    height: "38px",
    top: "470px",
    left:"157px",
    zIndex:"2"
    }
    let obj2 = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight:"600",
        lineHeight:"15px"
    }
    let txt = {
      fontFamily:"Poppins",
      fontSize:"13px",
      fontWeight:"400",
      lineHeight: "17px",
      textAlign: "left"
    }
    let instxt = {
      fontFamily: "Poppins",
      display:"inline-block",
      textAlign: "left",
      fontSize: "15px",
      fontWeight: "400",
      color:"white",
      height:"20px",
      margin:"10px auto"
    }
    return(
       <div style={{width:"100%",height:"830px"}}>
       <div class="img-fluid" style={{width:"100%",height:"650px",backgroundImage:`linear-gradient(90deg, rgba(6, 35, 73, 0.64) 10%, rgba(24, 141, 249, 0) 60%,rgba(6, 35, 73, 0.2) 10%),url(${homeimg})`,backgroundSize:"cover",position:"relative"}}>
     
       <h1 id="logo" title="companyname">DAMAC</h1>
       <button id="en" >ENQUIRE NOW</button>
    
       <div id="hc">HARBOUR LIGHTS<br></br>
       <b style={{color:"#17ABFF"}}>DE GRESOGONO</b><br></br>
       <span style={{fontFamily:"sans-serif"}}>1, 2 & 3 Bedrooms Seaside Apartments<br></br>in Dubai Maritime City</span>
        </div>

       <div id="card">
        <div style={{margin:"10%"}}> 
        <small style={{color:"white",fontFamily:"sans-serif"}}>PRICING STARTS FROM</small>
        <h1 style={{color:"white",fontFamily:"sans-serif",margin:"0px",padding:"10% 10% 10% 0px",boxSizing:"border-box"}}>$ 425,000</h1>
        <h2 style={{color:"white",fontFamily:"sans-serif"}}>AED 1.3 Million</h2>
        <button id="bluebtn">GET A PRESENTATION</button>
        </div>
        <div style={{...txt,color:"rgb(215 233 247)",textAlign:"center",backgroundColor:"#3d83bdda",height:"60px",fontWeight:"bold"}}><br></br>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</div>
       </div>

        <div>
        <span style={obj1}></span>
        <div style={obj}>
          <p style={instxt}>Rental Returns of <span style={obj2}>UPTO 11%**</span></p>
        </div>
       <span style={{...obj1,top:"520px"}}></span>
       <div style={{...obj,top:"520px"}}>
        <p style={instxt}>Capital Appreciation of <span style={obj2}>UPTO 32%**</span></p>
        </div>
        </div>

       </div>
       <div>
         <div id="feature" style={{display:"flex",justifyContent:"spacearound",alignItems:"center",width:"100%",paddingBottom:"1%"}}>
            <Ftbox img={bank} type="BOOK WITH" offer="ONLY 20%"></Ftbox>
            <Ftbox img={percent} type="PAYMENT PLAN" offer="EASY 70/30"></Ftbox>
            <Ftbox img={handover} type="HANDOVER ON" offer="Q2 2027"></Ftbox>
            <Ftbox img={area} type="AREA STARTS FROM" offer="700 SQMT"></Ftbox>
         </div>
        </div>
        </div>
    );
}
export default Home;