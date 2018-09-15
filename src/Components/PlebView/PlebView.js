import React, { Component } from 'react';
import { Grid, Typography } from "@material-ui/core"
import XLVideo from "./XLVideo"
import Switch from '@material-ui/core/Switch';
import Logo from '../../svgs/Logo.svg';

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
            <Title/>
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
          <ViewSwitch />
          {/* recommended */}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />
      </Grid>
    );
  }
}


class Title extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 15, marginBottom: 15}}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <img src={Logo} style={{width: 35, height: 35}} />
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography variant="headline">{"Orion Data"}</Typography>
        </Grid>
      </Grid>
    );
  }
}

class ViewSwitch extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}  style={{marginTop: 15, marginBottom: 15}}>
        <Grid item xs={8} sm={8} md={8} lg={7} xl={8} />
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
          <Switch color={"primary"}/>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={3} xl={2} >
          <div style={{marginLeft: 10, marginTop: 12}}>
            <Typography variant="body2" style={{color: "#6E6E6E"}}>User view</Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}



export default PlebView;
