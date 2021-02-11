import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import RobotList from "../components/robot-list";
import SearchBar from "../components/searchbar/search-bar";
import { IRobot, robots } from "../utils";

const Robots = () => {
  const [robotList, setRobotList] = useState<IRobot[]>(robots);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => updateRobotsList(), [searchKeyword]);

  const handleSearchChange = (keyword) => {
    setSearchKeyword(keyword)
  }

  const updateRobotsList = () => {
    let newRobotsList;

    if (searchKeyword) {
      newRobotsList =  robotList.filter(
        robot => robot.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    } else {
      newRobotsList = robots;
    }
    
    setRobotList(newRobotsList);
  }

  return (
    <div className="text-center mt-5">
      <h1 className="text-green-300 font-semibold">Robofriends v2!</h1>
      <SearchBar searchKeyword={searchKeyword} onSearchChange={handleSearchChange}/>
      <RobotList robots={robotList} />
    </div>
  )
}


export default Robots;