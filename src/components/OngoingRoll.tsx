import  { memo } from "react";
import { Cell, PieChart, Pie, Tooltip } from "recharts";

type OngoinPollProps = {
  poll: { title: string; id: number; data: { name: string; value: number }[] };
  chartWidth: number;
  chartHeight: number;
};

export const OngoinPoll = memo<OngoinPollProps>(function Poll(props) {
  if (!props.poll || props.poll.data?.length < 2) return null;
  const { poll, chartWidth, chartHeight } = props;
  const data = poll.data;
  return (
    <div id="ongoing-root">
      <h2>{poll.title}</h2>
      <div id="ongoing-chart">
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
      <p id="ongoing-result">
        Total number of votes records: {data[0].value + data[1].value}
      </p>
    </div>
  );
});
