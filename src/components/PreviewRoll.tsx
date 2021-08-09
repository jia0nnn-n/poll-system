import React, { memo } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Poll } from "../PollType";

type PreviewPollProps = {
  poll: Poll;
  toOngoingPollFn: React.Dispatch<React.SetStateAction<Poll>>;
};

export const PreviewRoll = memo<PreviewPollProps>(function PreviewRoll(props) {
  const { poll, toOngoingPollFn } = props;
  // just for preview, use this mock data
  const mockData = [
    { name: "yes", value: 50 },
    { name: "no", value: 50 },
  ];
  return (
    <div className="preview-item" onClick={() => toOngoingPollFn(poll)}>
      <div className="preview-item-chart">
        <PieChart width={160} height={160}>
          <Pie
            data={mockData}
            cx={"50%"}
            cy={"50%"}
            innerRadius={20}
            outerRadius={60}
            paddingAngle={1}
            dataKey="value"
          >
            {mockData.map((_: any, pollInnerIndex: number) => (
              <Cell
                key={`cell-${pollInnerIndex}`}
                fill={pollInnerIndex % 2 === 0 ? "#da621f" : "#79aac5"}
              />
            ))}
          </Pie>
        </PieChart>
        <p>%</p>
      </div>
      <div className="preview-item-description">
        <h5>{poll.time}</h5>
        <p>{poll.title}</p>
      </div>
    </div>
  );
});
