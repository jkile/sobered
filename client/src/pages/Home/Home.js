import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar"
import Sidebar from "../../components/Sidebar/Sidebar"
import CardContainer from "../../components/CardContainer/CardContainer";
import styles from "./Home.module.scss";
import Chat from "../../components/Chat/Chat";
import CreateGroupButton from "../../components/CreateGroupButton/CreateGroupButton"

export default function Home() {
    const [value, setValue] = useState(false);

    const myGroups = [
        {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        },
        {
            groupName: "AA Phoenix",
            days: ["Mon", "Tues", "Fri"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
            tags: ["#AA", "#JF"]
        },
        {
            groupName: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        }, {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        }
    ]

    const groups = [
        {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        },
        {
            groupName: "AA Phoenix",
            days: ["Mon", "Tues", "Fri"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
            tags: ["#AA", "#JF"]
        },
        {
            groupName: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        }, {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        },
        {
            groupName: "AA Phoenix",
            days: ["Mon", "Tues", "Fri"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
            tags: ["#AA", "#JF"]
        },
        {
            groupName: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        }, {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        },
        {
            groupName: "AA Phoenix",
            days: ["Mon", "Tues", "Fri"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
            tags: ["#AA", "#JF"]
        },
        {
            groupName: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        },
        {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        },
        {
            groupName: "AA Phoenix",
            days: ["Mon", "Tues", "Fri"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
            tags: ["#AA", "#JF"]
        },
        {
            groupName: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        },
        {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        },
        {
            groupName: "AA Phoenix",
            days: ["Mon", "Tues", "Fri"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
            tags: ["#AA", "#JF"]
        },
        {
            groupName: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        }
    ];


    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <div className="leftView">
                    <h1 className={styles.cardContainerHeader}>My Groups</h1>
                    <CreateGroupButton/>
                    <div className={styles.flexContainerRow}>
                        <CardContainer results={myGroups}/>
                    </div>

                    <h1 className={styles.cardContainerHeader}>Search Groups</h1>
                    <div className={styles.searchBar}>
                        <SearchBar />


                        <Toggle
                            isOn={value}
                            onColor="#0ce5e1"
                            handleToggle={() => setValue(!value)}
                        />
                    </div>
                    <div className={styles.flexContainerRow}>
                        <CardContainer results={groups}/>
                    </div>
                </div>
                <div className={styles.sidebarContainer}>
                   
                        <Chat/>
                   
                </div>

            </div>

        </div>
    );
}
