import React, { Component } from 'react';
import { Grid, Typography } from "@material-ui/core"
import XLVideo from "./XLVideo"
import Switch from '@material-ui/core/Switch';

class PlebView extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <LeftSide/>
        <RightSide/>
      </Grid>
    );
  }
}

class LeftSide extends Component {
  render() {
    return (
        <Grid container xs={8} sm={8} md={8} lg={8} xl={8} >
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          <Grid container xs={11} sm={11} md={11} lg={11} xl={11} >
            <Typography variant="headline">{"Orion Data"}</Typography>
            <XLVideo/>
            {/* XL video */}
            {/* heatmap */}
            {/* comments */}
          </Grid>
        </Grid>
    );
  }
}

class RightSide extends Component {
  render() {
    return (
      <Grid container xs={4} sm={4} md={4} lg={4} xl={4} >
        <Grid container xs={10} sm={10} md={10} lg={10} xl={10}>
          {/* The switch */}
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} />
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
              <Switch/>
            </Grid>
          </Grid>
          {/* recommended */}

        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />
      </Grid>
    );
  }
}


export default PlebView;
