import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import { useState } from "react";

function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  // return (
  //   <>
  //     {/* <Header />
  //     <Main />
  //     <Footer /> */}
      
  //     <Button {...buttonProps}/>
  //     <Button text={"카페"}/>
  //     <Button text={"블로그"}>
  //       <Header />
  //     </Button>
  //   </>
  // );

  const [ count, setCount ] = useState(0);
  const [ light, setLight ] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}>전구 {light === "ON" ? "끄기" : "켜기"}</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1);
        }}>+</button>
      </div>
    </>
  );
}

export default App;