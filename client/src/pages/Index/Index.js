import React from 'react'
import Hero from "../../components/Hero/Hero";
import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from "../../components/CardContainer/CardContainer";
import styles from "./Index.module.scss";

export default function Index() {
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
        },
        {
            name: "Some Name",
            days: ["Tues"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#AA", "#HA", "#BO", "#LA", "#FJ"]
        }
    ]
    return (
        <div>
            <Hero/>
            <div className={styles.searchContainer}>
                <h1 className={styles.searchHeader}>Search</h1>
                <SearchBar inputText={"Search Groups"} width="18" type="text"/>
                <CardContainer results={myGroups}/>
            </div>
        </div>
    )
}
