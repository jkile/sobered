import React, { useState } from 'react'
import Hero from "../../components/Hero/Hero";
import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from "../../components/CardContainer/CardContainer";
import axios from "axios";

import styles from "./Index.module.scss";

export default function Index() {

    const [searchGroups, setSearchGroups] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = e => {
        e.preventDefault();
        setSearchValue(e.target.value);
        if (e.target.value !== "") {
            axios.get("/api/groups/search/" + searchValue)
                .then(res => {
                    if (res.data) {
                        setSearchGroups(res.data);
                    }
                })
                .catch(e => console.log(e))
        } else {
            setSearchGroups([]);
        }

    }



    return (
        <div>
            <Hero/>
            <div className={styles.searchContainer}>
                <h1 className={styles.searchHeader}>Search</h1>
                <SearchBar width="18" inputText="Search Groups" type="text" name="search" value={searchValue} onChange={handleSearchChange}/>
                <CardContainer results={searchGroups}/>
            </div>
        </div>
    )
}
