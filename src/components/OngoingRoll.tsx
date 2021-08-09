import React, { memo } from "react";
import { Poll } from "../PollType";

type OngoinPollProps = {
  poll: Poll;
};

export const OngoinPoll = memo<OngoinPollProps>(function OngoinPoll(props) {
  return <div id="ongoing-root">{props.poll.title}</div>;
});
