import React, { useState } from "react";
import Header from "../components/header/header";
import RobotList from "../components/robot-list";
import SearchBar from "../components/searchbar/search-bar";
import { IRobot, robots } from "../utils";

const Robots = () => {
  const [robotList, setRobotList] = useState<IRobot[]>(robots);

  const handleSearchBarChange = (keyword) => {
    let newRobotList = robots.filter(
      robot => robot.name.toLowerCase().includes(keyword.toLowerCase())
    );

    if (!keyword) {
      newRobotList = robots;
    }

    setRobotList(newRobotList)
  }

  return (
    <>
      <Header />
      <SearchBar onChange={handleSearchBarChange} />
      <RobotList robots={robotList} />
    </>
  )
}


export default Robots;