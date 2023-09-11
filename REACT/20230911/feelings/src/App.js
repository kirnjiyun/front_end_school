import MenuList from "./components/MenuList/MenuList";
import DisplayMood from "./components/DisplayMood/DisplayMood";

function App(){

  const[currentMood, setCurrentMood]=useState("오늘의기분");

  return(
    <div>
      <h1>오늘의 기분을 선택해 주세요 ㅎㅎ</h1>
      {currentMood}
      <MenuList setCurrentMood={setCurrentMood}/>
      <DisplayMood/>
    </div>
  )
}



export default App;
