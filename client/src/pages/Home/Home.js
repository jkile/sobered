import React, { useState, useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import Toggle from "../../components/toggle/toggle.js";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar"
import Sidebar from "../../components/Sidebar/Sidebar"
import CardContainer from "../../components/CardContainer/CardContainer";
import styles from "./Home.module.scss";
import Chat from "../../components/Chat/Chat";
import NewGroupModal from "../../components/NewGroupModal/NewGroupModal";
import axios from "axios";
import { useMediaQuery } from 'react-responsive';
import UserContext from "../../components/UserContext/UserContext";
import chatIcon from "../../assets/chat_bubble_outline-black-18dp.svg";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchGroups, setSearchGroups] = useState([]);
    const [showChat, setShowChat] = useState(false);
    const isFullScreen = useMediaQuery({ query: "(min-width: 90rem)" });
    const { userId } = useContext(UserContext);
    const [myGroups, setMyGroups] = useState([]);

    function closeModal() {
        setShow(false);
    }

    function openModal() {
        setShow(true);

    }

    const groupRerender = () => {
        axios.get("/api/groups/" + userId)
            .then(res => {
                if (res.data) {
                    setMyGroups(res.data);
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

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

    useEffect(() => {
        axios.get("/api/groups/" + userId)
            .then(res => {
                if (res.data) {
                    setMyGroups(res.data);
                }
            })
            .catch(e => {
                console.log(e)
            })
    }, [myGroups])

    return (
        <div className={darkMode && styles.darkerModeBackground}>
            <Nav />
            <div className={styles.container}>
                <div className="leftView">
                    <div className={styles.headerContainer}>
                        <h1 className={darkMode ? styles.darkModeHeader : styles.cardContainerHeader}>My Groups</h1>
                        <div className={styles.toggle}>
                            <Toggle
                                isOn={darkMode}
                                onColor="#0ce5e1"
                                handleToggle={() => setDarkMode(!darkMode)}
                            />
                        </div>

                        <div className={styles.createButton}>
                            <Button variant="accent" buttonText="Create A Group" size='large' onClick={openModal} />
                        </div>
                    </div>
                    <div className={styles.flexContainerRow}>
                        <CardContainer results={myGroups} darkMode={darkMode} />
                    </div>
                    <h1 className={darkMode ? styles.darkModeHeader : styles.cardContainerHeader}>Search Groups</h1>
                    <div className={styles.searchBar}>
                        <SearchBar width="18" inputText="Search Groups" type="text" name="search" value={searchValue} onChange={handleSearchChange} darkMode={darkMode} />
                    </div>
                    <div className={styles.flexContainerRow}>
                        <CardContainer results={searchGroups} darkMode={darkMode} />
                    </div>
                    {!isFullScreen && <div className={styles.chatIconBackground} onClick={() => setShowChat(!showChat)}><img src={chatIcon} className={styles.chatIcon}></img></div>}
                </div>

                {isFullScreen && <div className="chat"><Chat darkMode={darkMode} /></div>}
                {showChat ? <div className={styles.floatingChat}><Chat /></div> : <> </>}

            </div>
            <NewGroupModal show={show} modalClose={closeModal} groupRerender={groupRerender} />
        </div>
    );
}
