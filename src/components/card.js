import "./styles/amt.css"
function Card(props)
{
    let sty = {
        width:"230px",
        height:"270px",
        borderRadius:"20px",
        boxShadow:"2px 2px 10px",
    }
    return(
    <div style={sty}>
        <div style={{width:"200px",height:"200px",margin:"0px auto"}}>
        <img src={props.url} width="190px" height="190px" alt="img" style={{borderRadius:"50%",margin:"0px auto",display:"block"}}></img>
        </div>
        <figcaption style={{textAlign:"center",color:"var(--darkblue)",width:"120px",height:"40px",margin:"0px auto"}}>{props.text}</figcaption>
    </div>
    );

}
export default Card;