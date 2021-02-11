const RobotCard = ({ robot }) => {
  return (
    <div className="transition duration-500 ease-in-out bg-green-400 p-3 m-3 rounded-lg text-center h-auto w-52 transform hover:scale-110">
      <img alt={robot.name} src={`https://robohash.org/${robot.id}`} />
      <h2 className="text-sm pt-3">{robot.name}</h2>
      <p className="text-sm">{robot.email}</p>
    </div>
  );
}

export default RobotCard;