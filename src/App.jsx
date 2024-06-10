import "./App.css";
import { useDispatch, useSelector } from "react-redux";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.

function App() {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.result);

  const handleAdd = () => {
    dispatch(add(Number(inputValue)));
    setInputValue(0);
  };

  const handleSubtract = () => {
    dispatch(subtract(Number(inputValue)));
    setInputValue(0);
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="nember"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        만큼을 <button>더할게요</button> <button>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
