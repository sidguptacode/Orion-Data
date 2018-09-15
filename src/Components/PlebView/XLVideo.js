import React, { Component } from 'react';
import { Grid, Typography } from "@material-ui/core"
import SearchBar from 'material-ui-search-bar'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from "@material-ui/core/IconButton";

const borderStyles = {
  borderColor: 'white',
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white',
  borderRadius: 10
};

class XLVideo extends Component {
  render() {
    return (
      <Grid container  xs={12} sm={12} md={12} lg={12} xl={12} >
        <Grid container xs={11} sm={11} md={11} lg={11} xl={11} >
          {/* The search bar */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 10}} >
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              onClear={() => console.log('onClear')}
              style={{height: 30, fontSize: 6}}
              searchIcon={<div/>}
            />
          </Grid>
          {/* The vid */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{height: 400, ...borderStyles, background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}} />
          {/* Text */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 10}}>
            <Typography variant="headline">{"The Eye of the Tiger (Sid Gupta Cover) "}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">{"1B Views "}</Typography>
          </Grid>
        </Grid>
        <Grid container xs={1} sm={1} md={1} lg={1} xl={1} />
      </Grid>
    );
  }
}

export default XLVideo;
