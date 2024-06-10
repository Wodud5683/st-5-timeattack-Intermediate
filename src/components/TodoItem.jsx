import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/slices/todoSlice";

export default function TodoItem({ id, title, content, isDone }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {title}</p>
        <p>내용: {content}</p>
      </section>
      <section>
        <button onClick={() => dispatch(toggleTodo(id))}>
          {isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => dispatch(deleteTodo(id))}>삭제</button>
      </section>
    </li>
  );
}
