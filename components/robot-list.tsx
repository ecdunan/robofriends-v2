import React from "react";
import { IRobot } from "../utils";
import RobotCard from "./robot-card/robot-card";

interface Props {
  robots: IRobot[];
}

const RobotList: React.FC<Props> = ({ robots }) => (
  <div className="flex flex-row flex-wrap pt-3 justify-center">
    {robots.map((robot) => (
      <RobotCard key={robot.id} robot={robot} />
    ))}
  </div>
);

export default RobotList;
