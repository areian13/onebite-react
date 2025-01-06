import { useState } from "react";

function useInput() { // 함수 접두사를 use로 하면 커스텀 훅으로 인식한다..(네?)
    const [input, setInput] = useState("");
    
    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput;