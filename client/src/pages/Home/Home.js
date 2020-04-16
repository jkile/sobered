import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar"
import Sidebar from "../../components/Sidebar/Sidebar"
import CardContainer from "../../components/CardContainer/CardContainer";
import styles from "./Home.module.scss";
import Chat from "../../components/Chat/Chat";
import NewGroupModal from "../../components/NewGroupModal/NewGroupModal";
import CreateGroupButton from "../../components/CreateGroupButton/CreateGroupButton"
import axios from "axios";

export default function Home() {
    const [value, setValue] = useState(false);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchGroups, setSearchGroups] = useState([]);

    function closeModal() {
        setShow(false);
    }

    function openModal() {
        setShow(true);

    }

    const handleSearchChange = e => {
        e.preventDefault();
        console.log("works")
        setSearchValue(e.target.value);
        if(e.target.value !== ""){
            axios.get("/api/groups/" + searchValue)
            .then(res => {
                if(res.data){
                    setSearchGroups(res.data);
                }
                console.log(res);
            })
            .catch(e => console.log(e))
        }
        
    }

    const myGroups = [
        {
            name: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"]
        },
        {
            name: "AA Phoenix",
            days: ["Mon", "Tues", "Fri"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
            tags: ["#AA", "#JF"]
        },
        {
            name: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        }
    ]

    // const groups = [
    //     {
    //         name: "HA Tempe",
    //         days: ["Mon", "Wed", "Sat"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#HA"]
    //     },
    //     {
    //         name: "AA Phoenix",
    //         days: ["Mon", "Tues", "Fri"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
    //         tags: ["#AA", "#JF"]
    //     },
    //     {
    //         name: "Some Name",
    //         days: ["Tues"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
    //     }, {
    //         name: "HA Tempe",
    //         days: ["Mon", "Wed", "Sat"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#HA"]
    //     },
    //     {
    //         name: "AA Phoenix",
    //         days: ["Mon", "Tues", "Fri"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
    //         tags: ["#AA", "#JF"]
    //     },
    //     {
    //         name: "Some Name",
    //         days: ["Tues"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
    //     }, {
    //         name: "HA Tempe",
    //         days: ["Mon", "Wed", "Sat"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#HA"]
    //     },
    //     {
    //         name: "AA Phoenix",
    //         days: ["Mon", "Tues", "Fri"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
    //         tags: ["#AA", "#JF"]
    //     },
    //     {
    //         name: "Some Name",
    //         days: ["Tues"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
    //     },
    //     {
    //         name: "HA Tempe",
    //         days: ["Mon", "Wed", "Sat"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#HA"]
    //     },
    //     {
    //         name: "AA Phoenix",
    //         days: ["Mon", "Tues", "Fri"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
    //         tags: ["#AA", "#JF"]
    //     },
    //     {
    //         name: "Some Name",
    //         days: ["Tues"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
    //     },
    //     {
    //         name: "HA Tempe",
    //         days: ["Mon", "Wed", "Sat"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#HA"]
    //     },
    //     {
    //         name: "AA Phoenix",
    //         days: ["Mon", "Tues", "Fri"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellat.",
    //         tags: ["#AA", "#JF"]
    //     },
    //     {
    //         name: "Some Name",
    //         days: ["Tues"],
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
    //         tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
    //     }
    // ];


    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <div className="leftView">
                    <div className={styles.headerContainer}>
                        <h1 className={styles.cardContainerHeader}>My Groups</h1>
                        <div className={styles.createButton}>
                            <Button variant="accent" buttonText="Create A Group" size='large' onClick={openModal} />
                        </div>
                    </div>
                    <div className={styles.flexContainerRow}>
                        <CardContainer results={myGroups} />
                    </div>
                    <h1 className={styles.cardContainerHeader}>Search Groups</h1>
                    <div className={styles.searchBar}>
                        <SearchBar width="18" inputText="Search Groups" type="text" name="search" value={searchValue} onChange={handleSearchChange}/>


                        <Toggle
                            isOn={value}
                            onColor="#0ce5e1"
                            handleToggle={() => setValue(!value)}
                        />
                    </div>
                    <div className={styles.flexContainerRow}>
                        <CardContainer results={searchGroups} />
                    </div>
                </div>
                <div className="chat">
                    <Chat />

                </div>

            </div>
            <NewGroupModal show={show} modalClose={closeModal} />
        </div>
    );
}
