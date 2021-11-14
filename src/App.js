import './App.css';
//import DataFetching from './DataFetching';
//import SearchBar from "./Components/SeachBar";
//import JsonData from "./Data.json";
import SearchBar from "./Components/SeachBar";
import CallDuration from './Components/CallDuration';
import AgentTable from './Components/AgentTable';

function App() {
  return (
    <div className="App">
        <SearchBar/>
        <CallDuration />
        <AgentTable />
    </div>
  );
}

export default App;
