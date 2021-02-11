import React, { useEffect, useState } from "react";
import RobotList from "../components/robot-list";
import SearchBar from "../components/searchbar/search-bar";
import { IRobot, robots } from "../utils";

const Robots = () => {
  const [ robotList, _setRobotList ] = useState<IRobot[]>(robots);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchChange = (keyword) => {
    setSearchKeyword(keyword)
  }

  const filteredRobots = robotList.filter(
    robot => robot.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="text-center mt-5">
      <h1 className="text-green-300 font-semibold">Robofriends v2!</h1>
      <SearchBar searchKeyword={searchKeyword} onSearchChange={handleSearchChange}/>
      <RobotList robots={filteredRobots} />
    </div>
  )
}


export default Robots;