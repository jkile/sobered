import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./CreateGroupModal.module.scss";
import axios from "axios";
import Checkbox from "../Checkbox/Checkbox";
import Tag from "../Tags/Tags";

export default function CreateGroupModal(props) {
  const [nameValue, setNameValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [isHAChecked, setHAChecked] = useState(false);
  const [isAAChecked, setAAChecked] = useState(false);
  const [isCMAChecked, setCMAChecked] = useState(false);
  const [isNAChecked, setNAChecked] = useState(false);
  const [isSpeakerChecked, setSpeakerChecked] = useState(false)
  const [isHalfSpeakerChecked, setHalfSpeakerChecked] = useState(false)
  const [isBigBookChecked, setBigBookChecked] = useState(false);
  const [isMensWomensChecked, setMensWomensChecked] = useState(false);


  const handleCheck = setter => e => {
      const value = 
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
      setter(value)
  }

//   function handleCheck(e) {
//     setChecked(!checkBoxState);
//     setCheckboxes((e,checkBoxState) => {
//       if (checkBoxState) {
//         return [...checkboxes, e.target.value];
//       } else {
//           return checkboxes.filter(item => item !== e.target.name)
//       }
//     });
//   }

  // const handleCheck = e => {
  //     dataToBeSubmitted.push(e.target.value)
  // }
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    // const groupSchema = new mongoose.Schema({
    //     members: Array,
    //     owner: String,
    //     time: Date,
    //     location: String,
    //     name: String,
    //     thumbnail: String

    //   });
    const group = {
      // owner: req.body.owner,
      // time: req.body.time,
      location: locationValue,
      name: nameValue,
    };
    axios
      .post("/api/groups/new", group)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div
        className={props.show ? styles.overlay : styles.hide}
        onClick={props.modalClose}
      ></div>
      <div className={props.show ? styles.loginModal : styles.hide}>
        <h1 className={styles.loginModalHeader}>Create a Group</h1>
        <form>
          <SearchBar
            inputText={"Group Name"}
            width="50"
            type="text"
            name="email"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </form>
        <h1 className={styles.loginModalHeader}>Tags</h1>
        <div className={styles.flexContainer}>
          <div className={styles.flexRow}>

  <Checkbox type="checkbox" onChange={handleCheck(setHAChecked)} value='HA'text={<Tag text='HA'/>}/>
  <Checkbox type="checkbox" onChange={handleCheck(setAAChecked)} value='AA'text={<Tag text='AA'/>}/>
  <Checkbox type="checkbox" onChange={handleCheck(setCMAChecked)} value='CMA'text={<Tag text='CMA'/>}/>
  <Checkbox type="checkbox" onChange={handleCheck(setNAChecked)} value='NA'text={<Tag text='NA'/>}/>
  <Checkbox type="checkbox" onChange={handleCheck(setSpeakerChecked)} value='Speaker (Full)'text={<Tag text='Speaker (Full)'/>}/>
  <Checkbox type="checkbox" onChange={handleCheck(setHalfSpeakerChecked)} value='Speaker (Half)'text={<Tag text='Speaker (Half)'/>}/>
  <Checkbox type="checkbox" onChange={handleCheck(setBigBookChecked)} value='Big Book Study'text={<Tag text='Big Book Study'/>}/>
  <Checkbox type="checkbox" onChange={handleCheck(setMensWomensChecked)} value='Mens/Womens'text={<Tag text='Mens/Womens'/>}/>
              {/* <Checkbox text={<Tag text='AA'/>} onClick={handleCheck}/> */}
              {/* <Checkbox
                text={<Tag text="HA" />}
                checked={checkBoxState}
                setChecked={setChecked}
                onChange={handleCheck}
                value="HA"
              /> */}
              {/* <Checkbox
                text={<Tag text="CMA" />}
                checked={checkBoxState}
                setChecked={setChecked}
                value="CMA"
              /> */}

              {/* <Checkbox text={<Tag text='CMA'/>} checkboxState={checkboxState} setChecked={setChecked} value='CMA'/> */}
          </div>

          {/* <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="HA" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="CA" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="NA" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="CMA" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Speaker (full)" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Speaker (Participation)" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Big Book Study" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Men/Women" />
          </div> */}
        </div>
        <h1 className={styles.loginModalHeader}>Location</h1>
        <form>
          <SearchBar
            inputText={"Location"}
            width="50"
            type="text"
            name="email"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
          />
        </form>
        {/* <div className={styles.flexContainer}>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Mon" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Tues" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Wed" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Thurs" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Fri" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Sat" />
          </div>
          <div className={styles.flexRow}>
            <Checkbox />
            <Tag text="Sun" />
          </div>
        </div> */}
        <h1 className={styles.loginModalHeader}>Description</h1>
        <textarea></textarea>
        <Button
          buttonText="Create Group"
          variant="accent"
          className={styles.createGroupButton}
          onClick={handleSubmitEvent}
        />
      </div>
    </div>
  );
}
