import React, { Component } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import styles from "./Profile.module.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }
  onChangeHandler = e => {
    console.log("onChange");
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0
    });
  };
  uploadHandler = () => {
    // console.log("Upload");
    const fd = new FormData();
    fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("http://localhost:8000/upload", fd).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div className={styles.container}>
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <button type="button" onClick={this.uploadHandler}>
            Upload
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
