import React, { Component } from 'react';
import { Grid } from "@material-ui/core"
import XLVideo from "./XLVideo"

class PlebView extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container xs={8} sm={8} md={8} lg={8} xl={8} >
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          <XLVideo/>
          {/* XL video */}
          {/* heatmap */}
          {/* comments */}
        </Grid>
        <Grid container xs={4} sm={4} md={4} lg={4} xl={4} >
          {/* recommended */}
          <Grid item xs={1} sm={1} md={1} lg={2} xl={1} />
        </Grid>
      </Grid>
    );
  }
}

export default PlebView;
