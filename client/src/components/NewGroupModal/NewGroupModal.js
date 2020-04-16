import React, { useState } from 'react';
import Button from "../Button/Button";
import styles from "./NewGroupModal.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Checkbox from "../Checkbox/Checkbox";
import Tags from "../Tags/Tags";
import axios from "axios";

export default function NewGroupModal(props) {

    const [groupNameValue, setGroupNameValue] = useState("");
    const [groupTimeValue, setGroupTimeValue] = useState("");
    const [groupLocationValue, setGroupLocationValue] = useState("");
    const [groupDescriptionValue, setGroupDescriptionValue] = useState("");

    const [sundayCheck, setSundayChecked] = useState(false);
    const [mondayCheck, setMondayChecked] = useState(false);
    const [tuesdayCheck, setTuesdayChecked] = useState(false);
    const [wednesdayCheck, setWednesdayChecked] = useState(false);
    const [thursdayCheck, setThursdayChecked] = useState(false);
    const [fridayCheck, setFridayChecked] = useState(false);
    const [saturdayCheck, setSaturdayChecked] = useState(false);

    const [isHAChecked, setHAChecked] = useState(false);
    const [isAAChecked, setAAChecked] = useState(false);
    const [isCMAChecked, setCMAChecked] = useState(false);
    const [isNAChecked, setNAChecked] = useState(false);
    const [isSpeakerChecked, setSpeakerChecked] = useState(false)
    const [isHalfSpeakerChecked, setHalfSpeakerChecked] = useState(false)
    const [isBigBookChecked, setBigBookChecked] = useState(false);
    const [isMensWomensChecked, setMensWomensChecked] = useState(false);

    const handleCheck = setter => e => {
        const value = e.target.checked;
        setter(value);
    }

    const handleNewGroupSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className={props.show ? styles.overlay : styles.hide} onClick={props.modalClose}></div>
            <div className={props.show ? styles.newGroupModal : styles.hide}>
                <form onSubmit={handleNewGroupSubmit}>
                    <h1 className={styles.newGroupModalHeader}>Group Name</h1>
                    <SearchBar inputText="Group Name" width="15" type="text" name="groupName" value={groupNameValue} onChange={e => setGroupNameValue(e.target.value)} />
                    <h1 className={styles.newGroupModalHeader}>Meeting Time</h1>
                    <SearchBar inputText="Group Time" width="15" type="text" name="groupTime" value={groupTimeValue} onChange={e => setGroupTimeValue(e.target.value)} />
                    <h1 className={styles.newGroupModalHeader}>Location</h1>
                    <SearchBar inputText=" Group Location" width="15" type="text" name="groupLocation" value={groupLocationValue} onChange={e => setGroupLocationValue(e.target.value)} />
                    <h1 className={styles.newGroupModalHeader}>Description</h1>
                    <SearchBar inputText=" Group Description" width="15" type="text" name="groupDescription" value={groupDescriptionValue} onChange={e => setGroupDescriptionValue(e.target.value)} />
                    <h1 className={styles.newGroupModalHeader}>Meeting Days</h1>
                    <div className={styles.tags}>
                        <Checkbox checked={sundayCheck} onClick={handleCheck(setSundayChecked)} value="sun" text={<Tags text="Sun" />} />
                        <Checkbox checked={mondayCheck} onClick={handleCheck(setMondayChecked)} value="mon" text={<Tags text="Mon" />} />
                        <Checkbox checked={tuesdayCheck} onClick={handleCheck(setTuesdayChecked)} value="tues" text={<Tags text="Tues" />} />
                        <Checkbox checked={wednesdayCheck} onClick={handleCheck(setWednesdayChecked)} value="wed" text={<Tags text="Wed" />} />
                        <Checkbox checked={thursdayCheck} onClick={handleCheck(setThursdayChecked)} value="thurs" text={<Tags text="Thurs" />} />
                        <Checkbox checked={fridayCheck} onClick={handleCheck(setFridayChecked)} value="fri" text={<Tags text="Fri" />} />
                        <Checkbox checked={saturdayCheck} onClick={handleCheck(setSaturdayChecked)} value="sat" text={<Tags text="Sat" />} />
                    </div>
                    <h1 className={styles.newGroupModalHeader}>Group Tags</h1>
                    <div className={styles.tags}>
                        <Checkbox checked={isHAChecked} onClick={handleCheck(setHAChecked)} value='HA' text={<Tags text='HA' />} />
                        <Checkbox checked={isAAChecked} onClick={handleCheck(setAAChecked)} value='AA' text={<Tags text='AA' />} />
                        <Checkbox checked={isCMAChecked} onClick={handleCheck(setCMAChecked)} value='CMA' text={<Tags text='CMA' />} />
                        <Checkbox checked={isNAChecked} onClick={handleCheck(setNAChecked)} value='NA' text={<Tags text='NA' />} />
                        <Checkbox checked={isSpeakerChecked} onClick={handleCheck(setSpeakerChecked)} value='Speaker (Full)' text={<Tags text='Speaker (Full)' />} />
                        <Checkbox checked={isHalfSpeakerChecked} onClick={handleCheck(setHalfSpeakerChecked)} value='Speaker (Half)' text={<Tags text='Speaker (Half)' />} />
                        <Checkbox checked={isBigBookChecked} onClick={handleCheck(setBigBookChecked)} value='Big Book Study' text={<Tags text='Big Book Study' />} />
                        <Checkbox checked={isMensWomensChecked} onClick={handleCheck(setMensWomensChecked)} value='Mens/Womens' text={<Tags text='Mens/Womens' />} />
                    </div>
                    <div className={styles.newGroupModalButton}>
                        <Button buttonText="Create" variant="accent" onClick={handleNewGroupSubmit} />
                    </div>

                </form>
            </div>
        </div>
    )
}
