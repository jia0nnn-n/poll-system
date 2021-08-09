import { Button } from "@material-ui/core";
import { memo } from "react";
import { Cell, PieChart, Pie, Tooltip } from "recharts";
import { Poll } from "../PollType";

type OngoinPollProps = {
  poll: Poll;
  chartWidth: number;
  chartHeight: number;
  voteFn: (id: number, yes: number, no: number) => void;
};

export const OngoinPoll = memo<OngoinPollProps>(function Poll(props) {
  if (!props.poll || props.poll.data?.length < 2) return null;
  const { poll, chartWidth, chartHeight, voteFn } = props;
  // FIXED: chart updating doesn't work (FXIED by return new array)
  const data = poll.data.map((d) => d);

  return (
    <div id="ongoing-root">
      <h2>{poll.title}</h2>
      <div id="onging-wrapper">
        <div id="onging-wrapper-actions">
          <Button
            id="yes-btn"
            onClick={() => voteFn(poll.id, data[0].value + 1, data[1].value)}
          >
            Yes
          </Button>
          <Button
            id="no-btn"
            onClick={() => voteFn(poll.id, data[0].value, data[1].value + 1)}
          >
            No
          </Button>
        </div>
        <div id="onging-wrapper-chart">
          <PieChart width={chartWidth} height={chartHeight}>
            <Tooltip />
            <Pie
              data={data}
              cx={"50%"}
              cy={"50%"}
              innerRadius={20}
              outerRadius={90}
              dataKey="value"
            >
              {data.map((_: any, pollInnerIndex: number) => (
                <Cell
                  key={`cell-${pollInnerIndex}`}
                  fill={pollInnerIndex % 2 === 0 ? "#da621f" : "#133b6b"}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
      <p id="ongoing-result">
        Total number of votes records: {data[0].value + data[1].value}
      </p>
    </div>
  );
});
