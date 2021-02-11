import { IRobot } from "../../utils";

interface Props {
  robot:  IRobot;
}

const RobotCard:React.FC<Props> = ({ robot }) => {
  const { id, name, email } = robot;

  return (
    <div className="transition duration-500 ease-in-out bg-green-400 p-3 m-3 rounded-lg text-center h-auto w-52 transform hover:scale-110">
      <img alt={robot.name} src={`https://robohash.org/${id}`} />
      <div className="mt-2">
        <h2 className="text-sm pt-3 font-bold">{name}</h2>
        <p className="text-sm">{email}</p>
      </div>
    </div>
  );
}

export default RobotCard;