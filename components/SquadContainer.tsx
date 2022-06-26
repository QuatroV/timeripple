import { Panel } from "./Panel";
import { Avatar } from "./Avatar";

import { Unit } from "../generalTypes";

interface SquadContainerProps {
  squad: Unit[];
}

export const SquadContainer = (props: SquadContainerProps) => {
  const { squad } = props;
  return (
    <Panel>
      {squad.map((unit) => (
        <Avatar key={unit.id} unit={unit} />
      ))}
    </Panel>
  );
};
