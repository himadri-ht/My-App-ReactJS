import './App.css';
//import DataFetching from './DataFetching';
import SearchBar from "./Components/SeachBar";
import JsonData from "./Data.json";

function App() {
  return (
    <div className="App">
        <SearchBar placeholder="Enter agent name..." data = {JsonData}/>        
    </div>
  );
}

export default App;
