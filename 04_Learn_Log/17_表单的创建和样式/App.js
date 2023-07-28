import Logs from "./Components/logs/logs";
import LogsForm from "./Components/LogsForm/logsForm";
import './App.css'

const App = () =>{
    return <div className="app">
        {/* 引入LogsForm*/}
        <LogsForm/>
        <Logs/>
    </div>
}
export default App;

