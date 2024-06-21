import g1 from "../images/g1.jfif"
import g2 from "../images/g2.jfif"
import g3 from "../images/g3.jfif"
import g4 from "../images/g4.jfif"
import g5 from "../images/g5.jfif"
import "./styles/amt.css"
import { useState } from "react"
function Photos()
{
  let ft = {
        width:"1440px",
        height:"108px",
        backgroundColor:"#091D41",
        fontFamily:"Poppins",
        fontSize:"14px",
        fontWeight:"400",
        lineHeight:"20px",
        textAlign:"center",
        color:"#FCFCFC",
        paddingTop:"5%"
    }
  let btn =
  {
    width:"150px",
    height:"45px",
    borderRadius:"5px",
    border:"1px solid var(--darkblue)",
    marginRight:"1%",
    fontWeight:"bold"
  }
  let ar = [g1,g2,g3,g4,g5];
  const [st,setst] = useState(0);
  function more()
  {
     if(st<4)
     {
        setst(st+1);
     }
     else
     {
       setst(0);
     }
  }
  function less()
  {
    if(st > 0)
    {
       setst(st-1);
    }
    else
    {
      setst(4);
    }
  }
   return(
    <div style={{height:"800px",width:"100%"}}>
      <br></br>
        <div id="btnpht" style={{textAlign:"right"}}>
          <button style={{...btn,backgroundColor:"#00357B",color:"white"}}>EXTERIORS</button>
          <button style={{...btn,color:"#00357B",backgroundColor:"white"}}>INTERIORS</button>
        </div>
        <br></br>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <span style={{color:"blue"}} onClick={less}>&lt;&lt;&lt;</span>
        <div style={{margin:"0px auto",width:"1120px",height:"500px"}}>
            <img src={ar[st]} alt="img" width="1120px" height="500px" style={{borderRadius:"14px",margin:"0px auto"}}></img>
        </div>
        <span style={{color:"blue"}} onClick={more}>&gt;&gt;&gt;</span>
        </div>
        <br></br>
        <div>
            <div style={{display:"flex",justifyContent:"space-between",width:"1120px",height:"220px",margin:"0px auto"}}>
            <img src={g2} width="270px" height="170px" alt="img" style={{borderRadius:"14px"}}></img>
            <img src={g3} width="270px" height="170px" alt="img" style={{borderRadius:"14px"}}></img>
            <img src={g4} width="270px" height="170px" alt="img" style={{borderRadius:"14px"}}></img>
            <img src={g5} width="270px" height="170px" alt="img" style={{borderRadius:"14px"}}></img>
            </div>
        </div>
        <br></br>
        <div style={ft}>© DAMAC Copyright 2024 All rights reserved.</div>
    </div>
   );
}
export default Photos;