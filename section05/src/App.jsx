import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import Bulb from './components/Bulb.jsx';
import Counter from './components/Counter.jsx';
import Register from './components/Register.jsx';
import HookExam from './components/HookExam.jsx';

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



  // return (
  //   <>
  //     <Bulb/>
  //     <Counter />
  //   </>
  // );


  // return (
  //   <>
  //     <Register />
  //   </>
  // ); 

  return (
    <>
      <HookExam />
    </>
  )
}

export default App;