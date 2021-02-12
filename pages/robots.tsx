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
    <div className="bg-gradient-to-r from-green-800 to-blue-900 text-center min-h-screen py-10">
      <h1 className="text-green-300 font-sega text-4xl pb-5">Robofriends NextJS</h1>
      <SearchBar searchKeyword={searchKeyword} onSearchChange={handleSearchChange}/>
      <RobotList robots={filteredRobots} />
    </div>
  )
}


export default Robots;