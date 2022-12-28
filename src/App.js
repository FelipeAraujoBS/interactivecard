import "./index.css"
import CardFront from "./components/UI/CardFront";
import CardBack from "./components/UI/CardBack";
import Form from "./components/Form/Form";
import SucessPage from "./components/UI/Sucess/SucessPage";

import { useState } from "react";

function App(props) {
  const [pageState, setPageState] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [dateMM, setDateMM] = useState('')
  const [dateYY, setDateYY] = useState('')
  const [cvc, setCvc] = useState('')

 const formData ={
    name: name,
    number: number,
    dateMM: dateMM,
    dateYY: dateYY,
    cvc: cvc
  }

  const handleState = () => {
      if(!pageState){
        setPageState(true)
      }else{
        setPageState(false)
      }
  }

  return (
    <div className="App">
      <div className="purpleSideBar">
          
      </div>
      <div className="cardContainer">
        <CardFront formInfo={formData}/>
        <CardBack formInfo={formData.cvc}/>
      </div>
      <div className="whiteSideBar">
          {!pageState ? <Form formInfo={formData} ccFormat={number} setName={setName} setNumber={setNumber} setDateMM={setDateMM}
           setDateYY={setDateYY} setCvc={setCvc} sucessState={setPageState}/> : <SucessPage onClick={handleState} />}
      </div>
    </div>
  );
}


export default App;
