import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Switch from "../../components/Toggle/Toggle";
import Tags from "../../components/Tags/Tags";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar"
import GroupCard from "../../components/GroupCard/GroupCard";

export default function Home() {
    const [value, setValue] = useState(false);

    const groups = [
      {
        groupName: "HA Tempe",
        days: ["Mon", "Wed", "Sat"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
        tags:["#HA"]
      },
      {
        groupName: "AA Phoenix",
        days: ["Mon", "Tues", "Fri"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
        tags:["#AA", "#JF"]
      },
      {
        groupName: "Some Name",
        days: ["Tues"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
        tags:["#AA", "#HA", "#BO", "#LA", "#FJ"]
      }
      ];
  
    return (
      <div>
        <Nav />
        <Button />
        <Switch
          isOn={value}
          onColor="#0ce5e1"
          handleToggle={() => setValue(!value)}
        />
        <Button buttonText="Button" />
        <Tags />
        <SearchBar />
        <div className="cardContainer">
          {groups.map(item => {
            return <GroupCard {...item} />
          })}
        </div>
  
      </div>
    );
}
