import Header from "../components/header/header";
import RobotCard from "../components/robot-card/robot-card";
import { robots } from "../utils";

const Robots = () => (
  <div>
    <Header />
    <div className="flex flex-row flex-wrap pt-3 justify-center">
      {
        robots.map(robot => (<RobotCard key={robot.id} robot={robot} />))
      }
    </div>
  </div>
)


export default Robots;