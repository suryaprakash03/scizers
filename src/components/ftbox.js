
function Ftbox(props)
{ 
    let rec = {
        width:"73px",
        height:"5px",
        borderRadius:"13px 0px 0px 0px",
        opacity:"12%",
        backgroundColor:"#00357B"
    }
    let off = {
        fontFamily: "Oswald",
        fontSize: "30px",
        fontWeight: "500",
        lineHeight: "30px",
        letterSpacing: "0.03em",
        color: "#00357B",
        textAlign:"center",
        margin:"2%"

    }

    let ty = {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: "40px",
        lineHeight: "16px",
        color: "#00357B",
        textAlign:"center"
    }
    return(
        <div>
            <img src={props.img} alt="img" style={{display:"block",width:"50px",height:"50px",margin:"0px auto"}}></img>
            <h4 style={ty}>{props.type}</h4>
            <h3 style={off}>{props.offer}</h3>
            <div style={rec}></div>
        </div>
    );
}
export default Ftbox;