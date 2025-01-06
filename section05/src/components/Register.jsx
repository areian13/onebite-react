import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });
    const countRef = useRef(0);
    const inputRef = useRef("");

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    };

    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div>

            <div>
                <input ref={inputRef} name="name" onChange={onChange} placeholder={"이름"} />
                {input.name}
            </div>
            <div>
                <input name="birth" onChange={onChange} type="date" />
                {input.birth}
            </div>
            <div>
                <select name="country" onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option>영국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea name="bio" onChange={onChange} />
                {input.bio}
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}

export default Register;