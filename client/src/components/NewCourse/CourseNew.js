import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import "./customStyle.css";

class CourseNew extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    uploadStatus: 0
  };

  onFileChange = event => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleUploadFile = () => {
    const config = {
      onUploadProgress: progressEvent => {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log("progress", percentCompleted);
        this.setState({ uploadStatus: percentCompleted });
      }
    };

    if (this.state.selectedFile == null) return;
    console.log("uploading file");

    console.log(this.state.selectedFile);
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("name", this.state.selectedFile.name);
    data.append("description", "some value user types");
    axios.post("/files", data, config).then(response => console.log(response));
  };
  render() {
    return (
      <div>
        <Form style={{ marginTop: "25px", width: "70%" }} />
        <center>
          <input
            type="file"
            name="file"
            id="file"
            onChange={this.onFileChange}
            className="inputfile"
          />
          <label
            className="btn waves-effect waves-light light-blue accent-3 btn-large"
            htmlFor="file"
          >
            <i className="material-icons left">ondemand_video</i>
            Choose File
          </label>

          <div style={{ marginTop: "25px" }}>
            {this.state.selectedFile == null
              ? ""
              : this.state.selectedFile.name}
          </div>
        </center>
        <div
          className="progress blue lighten-4 tooltipped"
          data-position="top"
          data-tooltip="65% completion of the first phase has been reached."
        >
          <span>Completion</span>
          <div
            className="determinate blue"
            style={{
              width: this.state.uploadStatus + "%",
              animation: "grow 1s"
            }}
          ></div>
        </div>

        <center>
          <button
            style={{ marginTop: "25px" }}
            className="btn waves-effect waves-light green darken-1 btn-large"
            type="submit"
            name="action"
            onClick={this.handleUploadFile}
          >
            Upload
            <i className="material-icons right">cloud</i>
          </button>
        </center>
      </div>
    );
  }
}

export default CourseNew;
