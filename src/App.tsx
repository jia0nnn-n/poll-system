import "./App.css";
import { OngoinPoll } from "./components/OngoingRoll";
import { PreviewRoll } from "./components/PreviewRoll";
import data from "./database.json";
function App() {
  console.log(data.polls);
  return (
    <div className="App">
      <OngoinPoll />
      <PreviewRoll />
    </div>
  );
}

export default App;
