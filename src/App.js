import Home from "./components/home"
import Amt from "./components/amenties";
import Photos from "./components/photo";


function App() {
  return (
      <div style={{display:"flex",flexDirection:"column"}}>
      <Home></Home>
      <br></br>
      <Amt></Amt>
      <Photos></Photos>
      </div>
  );
}

export default App;
