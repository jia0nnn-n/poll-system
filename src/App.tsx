import { useState } from "react";
import "./App.css";
import { OngoinPoll } from "./components/OngoingRoll";
import { PreviewRoll } from "./components/PreviewRoll";
import data from "./database.json";

function App() {
  const { polls } = data;
  const [selectedPoll, setSelectedPoll] = useState(polls[0]);
  return (
    <div className="App">
      <OngoinPoll poll={selectedPoll} chartHeight={200} chartWidth={400} />
      <div id="preview-root">
        {polls.map((poll, index) => (
          <PreviewRoll
            key={index}
            poll={poll}
            toOngoingPollFn={setSelectedPoll}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
