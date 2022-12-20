import "./App.css";
import { useState } from "react";

function App() {
    const [b1,setb1] = useState('1')
    const [b2,setb2] = useState('2')
    const [b3,setb3] = useState('3')
    const [b4,setb4] = useState('4')
    const [b5,setb5] = useState('5')
    const [b6,setb6] = useState('6')
    const [b7,setb7] = useState('7')
    const [b8,setb8] = useState(' ')
    const [b9,setb9] = useState('8')

    const [win,setwin] = useState(" ")

  const btn1 = () => {
    // alert()
    if (b2 == " ") {
      // alert()
      setb2(b1);
      setb1(" ");
    }
    if (b4 == " ") {
      setb4(b1);
      setb1(" ");
    }
    winner();
  };
  const btn2 = () => {
    // alert()
    if (b1 == " ") {
      setb1(b2);
      setb2(" ");
    }
    if (b3 == " ") {
      setb3(b2);
      setb2(" ");
    }
    if(b5 == " ")
    {
      setb5(b2)
      setb2(" ")
    }
    winner();
  };
  const btn3 = () => {
    // alert()
    if (b2 == " ") {
      setb2(b3);
      setb3(" ");
    }
    if (b6 == " ") {
      setb6(b3);
      setb3(" ");
    }
    winner();
  };
  const btn4 = () => {
    // alert();
    if (b1 == " ") {
      setb1(b4);
      setb4(" ");
    }
    if (b5 == " ") {
      setb5(b4);
      setb4(" ");
    }
    if (b7 == " ") {
      setb7(b4);
      setb4(" ");
    }
    winner();
  };
  const btn5 = () => {
    if (b2 == " ") {
      setb2(b5);
      setb5(" ");
    }
    if (b4 == " ") {
      setb4(b5);
      setb5(" ");
    }
    if (b6 == " ") {
      setb6(b5);
      setb5(" ");
    }
    if (b8 == " ") {
      setb8(b5);
      setb5(" ");
    }
    winner();
  };
  const btn6 = () =>
  {
    if (b3 == " ") {
      setb3(b6);
      setb6(" ");
    }
    if (b5 == " ") {
      setb5(b6);
      setb6(" ");
    }
    if (b9 == " ") {
      setb9(b6);
      setb6(" ");
    }
    winner();
  };
    const btn7 = () =>
  {
    if (b4 == " ") {
      setb4(b7);
      setb7(" ");
    }
    if (b8 == " ") {
      setb8(b7);
      setb7(" ");
    }
    winner();
  };
  const btn8 = () => 
  {
    if (b7 == " ") {
      setb7(b8);
      setb8(" ");
    }
    if (b5 == " ") {
      setb5(b8);
      setb8(" ");
    }
    if (b9 == " ") {
      setb9(b8);
      setb8(" ");
    }
    winner();
  };
  const btn9 = () =>
  {
    if (b6 == " ") {
      setb6(b9);
      setb9(" ");
    }
    if (b8 == " ") {
      setb8(b9);
      setb9(" ");
    }
    winner();
  };
  const winner = () =>
  {if(b1=="1" && b2=="2" && b3=="3" && b4=="4" && b5=="5" && b6=="6" && b7=="7" && b8=="8" && b9 == " ")
  {
    setwin("game over you are winner");
    alert("hellow");
  }
  };

  return (
    <div className="App">
      <h1>number of puzzle</h1>
    <div className="box_outer">
        <div>
          <input type="button" onClick={()=>{btn1()}} value={b1} />
          <input type="button" onClick={()=>{btn2()}} value={b2} />
          <input type="button" onClick={()=>{btn3()}} value={b3} />
        </div>
          <div>
          <input type="button" onClick={()=>{btn4()}} value={b4} />
          <input type="button" onClick={()=>{btn5()}} value={b5} />
          <input type="button" onClick={()=>{btn6()}} value={b6} />
        </div>
        <div>
          <input type="button" onClick={()=>{btn7()}} value={b7} />
          <input type="button" onClick={()=>{btn8()}} value={b8} />
          <input type="button" onClick={()=>{btn9()}} value={b9} />
        </div>
    </div>
    {/* <h1>{win}</h1> */}
    <input type="text" onChange={()=>{winner()}} value={win} readOnly/>
    </div>
  );
}

export default App;
