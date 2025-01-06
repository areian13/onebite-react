import './App.css'
import { useState,useEffect,useRef } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // deps의 개수를 0개: 최초 마운트시에만 호출

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); // deps를 생략 -> 변수 상관 없이 업데이트 마다 부름
  
  // 3. 언마운트: 죽음
  // Even.jsx 코드 참고

  // useEffect(() => { // 배열 안에 있는 변수가 변경되면 콜백함수를 실행한다.
  //   console.log(count);
  //   console.log(input);
  // }, [count, input]);
  // 의존성 배열
  // dependency array
  // deps
  
  const onClickButton = (value) => {
    setCount(count + value);
  }
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}

export default App;
