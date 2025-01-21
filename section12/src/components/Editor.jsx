import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";

const emotionList = [
    {
        emotionId: 1,
        emotionName: "완전 좋음"
    },
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "그럭저럭"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    },
];

const getStringedDate = (targetDate) => {
    // 날짜 -> YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = String(targetDate.getMonth() + 1).padStart(2, '0');
    let day = String(targetDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const Editor = () => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    const onChangeInput = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        });
    }

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)}
                    type="date"
                />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            onClick={() => onChangeInput({
                                target : {
                                    name:"emotionId",
                                    value: item.emotionId,
                                },
                            })}
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea placeholder="오늘은 어땠나요?"></textarea>
            </section>
            <section className="button_section">
                <Button text={"취소하기"} />
                <Button text={"작성완료"} type={"POSITIVE"} />
            </section>
        </div>
    );
}

export default Editor;