import React, { memo } from "react";
import { Poll } from "../PollType";

type PreviewPollProps = {
  poll: Poll;
  toOngoingPollFn: React.Dispatch<React.SetStateAction<Poll>>;
};

export const PreviewRoll = memo<PreviewPollProps>(function PreviewRoll(props) {
  const { poll, toOngoingPollFn } = props;
  return (
    <div id="preview-root" onClick={() => toOngoingPollFn(poll)}>
      {poll.title}
    </div>
  );
});
