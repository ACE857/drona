import React, { Component } from "react";
import M from "materialize-css";
class CourseName extends Component {
  componentDidMount() {
    const options = {
      //Data object for autocomplete
      data: this.props.data,

      //Limit of results autocomplete shows
      limit: 7,

      //Callback function for Autocomplete
      onAutocomplete() {
        console.log("Completed");
        let input = document.getElementById("autocomplete-input");
        console.log(input.value);
      },

      //Minimum number of characters before autocomplete starts.
      minLength: 1
    };
    M.Autocomplete.init(this.Autocomplete, options);

    //Instance Plugin
    //let instance = M.Autocomplete.getInstance(this.Autocomplete);

    // instance.open();
    // instance.updateData({
    //   "Nothing": null
    // });
    // instance.destroy();
  }

  render() {
    //console.log(this.props.autoCompleteValue);
    return (
      <div style={{ marginTop: "25px" }}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="icon_prefix2"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="icon_prefix2">Domain</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">textsms</i>
                <input
                  ref={Autocomplete => {
                    this.Autocomplete = Autocomplete;
                  }}
                  type="text"
                  id="autocomplete-input"
                  className="autocomplete"
                  onChange={this.onAutoCompleteChange}
                  value={this.props.autoCompleteValue}
                />
                <label htmlFor="autocomplete-input">Topic Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">bubble_chart</i>
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="textarea1">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">featured_video</i>
                <textarea
                  id="textarea2"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="textarea2">Video Name</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseName;
