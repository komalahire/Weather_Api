import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Country from "./Country";
import axios from "axios";

export class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      Text: "",
      data: "",
    };
  }

  handleChange = (e) => {
    const regex = /[A-Za-z]/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      this.setState({ text: e.target.value });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      "https://restcountries.eu/rest/v2/name/" + this.state.text,
      {}
    );
    console.log(response);
    this.setState({ data: response.data });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-secondary"
            label="search..."
            className={classes.input}
            variant="outlined"
            color="secondary"
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={this.handleSubmit}
            disable={!this.state.text}
          >
            Submit
          </Button>
        </form>
        {this.state.data !== "" && <Country {...this.state} />}
      </div>
    );
  }
}

export default withStyles({
  root: {
    
    marginTop: "2%",
  },
  input: {
    width: "50%",
  },

  btn: {
    marginTop: "5px",
    marginLeft: "10px",
  },
})(Homepage);
