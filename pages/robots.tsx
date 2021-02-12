import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from "react";
import RobotList from "../components/robot-list";
import SearchBar from "../components/searchbar/search-bar";
import { IRobot } from "../utils";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      robots: data
    },
    revalidate: 1,
  }
}

const Robots = ({ robots }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [robotList, setRobotList] = useState<IRobot[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => { setRobotList(robots) }, [])

  const handleSearchChange = (keyword) => {
    setSearchKeyword(keyword)
  }

  const filteredRobots = robotList.filter(
    robot => robot.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-green-800 to-blue-900 text-center min-h-screen py-10">
      <h1 className="text-green-300 font-sega text-4xl pb-5">Robofriends NextJS</h1>
      <SearchBar searchKeyword={searchKeyword} onSearchChange={handleSearchChange} />
      <RobotList robots={filteredRobots} />
    </div>
  )
}

export default Robots;