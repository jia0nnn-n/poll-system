import { useState } from "react";
import "./App.css";
import { OngoinPoll } from "./components/OngoingRoll";
import { PreviewRoll } from "./components/PreviewRoll";
import defaultData from "./database.json";
import { Poll } from "./PollType";

function App() {
  const { polls } = defaultData;
  const [data, setData] = useState<Poll[]>(polls);
  const [selectedPoll, setSelectedPoll] = useState(polls[0]);

  const handleDataChange = (id: number, yes: number, no: number) => {
    setData((state) => {
      const changingItem = state.find((p) => p.id === id);
      if (changingItem) {
        changingItem.data[0].value = yes;
        changingItem.data[1].value = no;
        return [...state];
      }
      return state;
    });
  };

  return (
    <div className="App">
      <OngoinPoll
        poll={selectedPoll}
        chartHeight={180}
        chartWidth={360}
        voteFn={handleDataChange}
      />
      <div id="preview-root">
        {data.map((poll, index) => (
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
