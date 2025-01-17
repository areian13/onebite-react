import Header from "./Header";
import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

/*// 콜백함수 없이 TodoItem만 memo하면 값이 바뀔때마다 아예 새로운
// 객체를 생성하기 때문에 무조건 서로 다르다고 판단한다.
// 따라서 콜백함수를 통해 커스텀 판단 조건을 만들어준다.
export default memo(TodoItem, (prevProps, nextProps) => {
    if (prevProps.id !== nextProps.id) return false;
    if (prevProps.isDone !== nextProps.isDone) return false;
    if (prevProps.content !== nextProps.content) return false;
    if (prevProps.date !== nextProps.date) return false;
    return true;
});*/

export default memo(TodoItem);