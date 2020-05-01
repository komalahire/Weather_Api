import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

class Country extends Component {
  render() {
    const { data, classes } = this.props;
    return (
      <div className={classes.container}>
        {data.map((country, index) => (
          <Box my={2} style={{ minWidth: "200", background: "#f8F8FF" }}>
            <Grid
              container
              xs={12}
              style={{ padding: "10" }}
              component="main"
              maxWidth="xs"
            >
              <Grid item xs={4}>
                <Typography>{country.name}</Typography>
                <img
                  className={classes.FlagImage}
                  alt="thumbnail"
                  src={country.flag}
                />
                <Typography>Capital:-{country.capital}</Typography>
                <Typography>Population:-{country.population}</Typography>

                <Typography>Latlng -{country.latlng}</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </div>
    );
  }
}
export default withStyles({
  container: {
    marginLeft:'20%'
    
  },
  FlagImage: {
    width: "30ch",
  },
})(Country);
