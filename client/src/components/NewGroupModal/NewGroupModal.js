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

    const [checkboxesDay, setCheckboxesDay] = useState([]);
    const [checkboxesTags, setCheckboxesTags] = useState([]);

    const handleCheckDay = setter => e => {
        const value = e.target.checked;
        if(value){
            setCheckboxesDay([...checkboxesDay, e.target.value])
        } else {
            setCheckboxesDay(checkboxesDay.filter(item => item != e.target.value))
        }
        setter(value);

    }

    const handleCheckTags = setter => e => {
        const value = e.target.checked;
        if(value){
            setCheckboxesTags([...checkboxesTags, e.target.value])
        } else {
            setCheckboxesTags(checkboxesTags.filter(item => item != e.target.value))
        }
        setter(value);

    }

    const handleNewGroupSubmit = (e) => {
        e.preventDefault();
        const group = {
            name: groupNameValue,
            time: groupTimeValue,
            location: groupLocationValue,
            description: groupDescriptionValue,
            days: checkboxesDay,
            tags: checkboxesTags
        }

        axios.post("/api/groups", group)
            .then(res => {
                console.log(res)
                props.modalClose();
            })
            .catch(e => console.log(e))
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
                        <Checkbox checked={sundayCheck} onClick={handleCheckDay(setSundayChecked)} value="Sun" text={<Tags text="Sun" />} />
                        <Checkbox checked={mondayCheck} onClick={handleCheckDay(setMondayChecked)} value="Mon" text={<Tags text="Mon" />} />
                        <Checkbox checked={tuesdayCheck} onClick={handleCheckDay(setTuesdayChecked)} value="Tues" text={<Tags text="Tues" />} />
                        <Checkbox checked={wednesdayCheck} onClick={handleCheckDay(setWednesdayChecked)} value="Wed" text={<Tags text="Wed" />} />
                        <Checkbox checked={thursdayCheck} onClick={handleCheckDay(setThursdayChecked)} value="Thurs" text={<Tags text="Thurs" />} />
                        <Checkbox checked={fridayCheck} onClick={handleCheckDay(setFridayChecked)} value="Fri" text={<Tags text="Fri" />} />
                        <Checkbox checked={saturdayCheck} onClick={handleCheckDay(setSaturdayChecked)} value="Sat" text={<Tags text="Sat" />} />
                    </div>
                    <h1 className={styles.newGroupModalHeader}>Group Tags</h1>
                    <div className={styles.tags}>
                        <Checkbox checked={isHAChecked} onClick={handleCheckTags(setHAChecked)} value='HA' text={<Tags text='HA' />} />
                        <Checkbox checked={isAAChecked} onClick={handleCheckTags(setAAChecked)} value='AA' text={<Tags text='AA' />} />
                        <Checkbox checked={isCMAChecked} onClick={handleCheckTags(setCMAChecked)} value='CMA' text={<Tags text='CMA' />} />
                        <Checkbox checked={isNAChecked} onClick={handleCheckTags(setNAChecked)} value='NA' text={<Tags text='NA' />} />
                        <Checkbox checked={isSpeakerChecked} onClick={handleCheckTags(setSpeakerChecked)} value='Speaker (Full)' text={<Tags text='Speaker (Full)' />} />
                        <Checkbox checked={isHalfSpeakerChecked} onClick={handleCheckTags(setHalfSpeakerChecked)} value='Speaker (Half)' text={<Tags text='Speaker (Half)' />} />
                        <Checkbox checked={isBigBookChecked} onClick={handleCheckTags(setBigBookChecked)} value='Big Book Study' text={<Tags text='Big Book Study' />} />
                        <Checkbox checked={isMensWomensChecked} onClick={handleCheckTags(setMensWomensChecked)} value='Mens/Womens' text={<Tags text='Mens/Womens' />} />
                    </div>
                    <div className={styles.newGroupModalButton}>
                        <Button buttonText="Create" variant="accent" onClick={handleNewGroupSubmit} />
                    </div>

                </form>
            </div>
        </div>
    )
}
