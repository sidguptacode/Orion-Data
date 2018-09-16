import React, { Component } from 'react';
import { Grid, Typography } from "@material-ui/core"
import XLVideo from "./XLVideo"
import Switch from '@material-ui/core/Switch';
import Logo from '../../svgs/Logo.svg';
import VideoDetail from './videoPlayer';
import SearchBarMine from './searchBar';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import VideoList from './videoList';
import VideoListItem from './videoListItem';
import CommentList from './commentList'
import { LineChart, Line, AreaChart, Area, Tooltip } from 'recharts';
import Paper from '@material-ui/core/Paper';
import axios from "axios/index";
import { Motion, spring } from "react-motion";
import {Route, Redirect } from 'react-router-dom'
import { setVideo } from '../../ReduxActions/videoActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from "@material-ui/core/styles";

const API_key = 'AIzaSyBHYZzCCkMD7YYXJqEY5q6Vgd08gBs_KPA';

class PlebView extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            checkedA: true,
            checkedB: true,
            submitted: 1000,
            eraseText: 1,
        };
        this.videoSearch('')
    }

    videoSearch(term){
        YTSearch({key: API_key, term: term,}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            this.props.setVideo(videos[0]);
        });
    }

    findRecommendedVids(_id){
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                key: 'AIzaSyBHYZzCCkMD7YYXJqEY5q6Vgd08gBs_KPA',
                relatedToVideoId: _id,
                maxResults: 5,
                type: 'video'
            }
        })
            .then((response) => {
                console.log(response);
                this.setState({
                    videos: response
                })

            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.checked,
            submitted: 0,
            eraseText: 0
        });
        window.setTimeout(this.setRedirect, 1500);
    };

    setRedirect = () => {
        this.setState({
                redirect: true
            }
        )
    }



  render() {
      const videoSearch = _.debounce((term) => {
          this.videoSearch(term)
      }, 300);
      const data = [
          {name: 'Page A', uv: 0, pv: 2400, amt: 2400},
          {name: 'Page B', uv: 1, pv: 1398, amt: 2210},
          {name: 'Page C', uv: 0.1, pv: 9800, amt: 2290},
          {name: 'Page D', uv: -1, pv: 3908, amt: 2000},
          {name: 'Page E', uv: 0.4, pv: 4800, amt: 2181},
          {name: 'Page F', uv: 0, pv: 3800, amt: 2500},
          {name: 'Page G', uv: -0.8, pv: 4300, amt: 2100},
      ];
      if (this.state.redirect) {
          return (<Redirect to="/creator"/>);
      } else {
          return (
              <div>
                  <Motion defaultStyle={{x: 1000, opacity: 1}} style={{
                      x: spring(this.state.submitted, {stiffness: 130, damping: 26}),
                      opacity: spring(1)
                  }}>
                      {(style) => (
                  <Paper style={{backgroundColor: '#0E1831', position: 'absolute', zIndex: 5000, opacity: style.opacity, transform: `translateX(${style.x}%)`, minHeight: 1000, minWidth: 5000}}>
                  </Paper>
                          )}
                  </Motion>
              <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Grid container xs={8} sm={8} md={8} lg={8} xl={8}>
                      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                      <Grid container xs={11} sm={11} md={11} lg={11} xl={11}>
                          <Title/>
                          <SearchBarMine onSearchTermChange={videoSearch}/>
                          <VideoDetail video={this.props.selectedVideo}/>
                          {/*<XLVideo/>*/}
                          {/* XL video */}
                          {/* heatmap */}
                          {/* comments */}
                          <Motion defaultStyle={{x: 0, opacity: 0}} style={{
                              x: spring(0, {stiffness: 100, damping: 26}),
                              opacity: spring(1, {stiffness: 20, damping: 26})
                          }}>
                              {(style) => (
                                  <Typography variant="subheading" style={{
                                      opacity: style.opacity,
                                      transform: `translateX(${style.x}%)`,
                                      marginTop: 30
                                  }}>Happiness</Typography>
                              )}
                          </Motion>
                          <Motion defaultStyle={{x: 0, opacity: 0, scale: 0}} style={{
                              x: spring(0, {stiffness: 130, damping: 26}),
                              opacity: spring(1, {stiffness: 60, damping: 26}),
                              scale: spring(100, {stiffness: 70, damping: 20})
                          }}>
                              {(style) => (
                                  <Paper style={{
                                      opacity: style.opacity,
                                      width: `${style.scale}%`,
                                      marginTop: 20,
                                      border: 2,
                                      borderRadius: 20,
                                      position: 'relative',
                                      overflow: 'hidden',
                                      minHeight: 120,
                                      textAlign: 'center'
                                  }}>
                                      <AreaChart width={850} height={100} data={data}
                                                 margin={{top: 25, right: 0, left: 0, bottom: 5}}
                                                 style={{textAlign: 'center'}}>
                                          <Area type='monotone' dataKey='uv' stroke='#3949AB' fill='#3949AB'/>
                                          <Tooltip/>
                                      </AreaChart>
                                  </Paper>
                              )}
                          </Motion>
                          <br/>
                          <Typography variant="subheading" style={{marginTop: 30}}>Comments</Typography>
                          <CommentList video={this.props.selectedVideo} style={{minWidth: '100%'}}/>

                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/><Grid item xs={12} sm={12} md={12} lg={12}
                                                                                    xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                      </Grid>
                  </Grid>
                  <Grid container xs={4} sm={4} md={4} lg={4} xl={4} style={{marginTop: -10}}>
                      <Grid container xs={10} sm={10} md={10} lg={10} xl={10}>
                          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}
                                style={{marginTop: 15, marginBottom: 15}}>
                              <Grid item xs={8} sm={8} md={8} lg={7} xl={8}/>
                              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                  <Switch checked={this.state.checkedA}
                                          onChange={this.handleChange('checkedA')}
                                          value="checkedA" color={"primary"}/>
                              </Grid>
                              <Grid item xs={2} sm={2} md={2} lg={3} xl={2}>
                                  <div style={{marginLeft: 10, marginTop: 12}}>
                                      <Typography variant="body2" style={{color: "#6E6E6E"}}>User view</Typography>
                                  </div>
                              </Grid>
                          </Grid>
                          <VideoList
                              onVideoSelect={selectedVideo => {this.setState({selectedVideo}); this.props.setVideo(selectedVideo)}}
                              videos={this.state.videos}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}/>
                      </Grid>
                      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
                  </Grid>
              </Grid>
              </div>
          );
      }
  }
}

// class LeftSide extends Component {
//   render() {
//     return (
//
//     );
//   }
// }

// class RightSide extends Component {
//   render() {
//     return (
//
//     );
//   }
// }


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
    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        console.log("switch hit")
    };
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}  style={{marginTop: 15, marginBottom: 15}}>
        <Grid item xs={8} sm={8} md={8} lg={7} xl={8} />
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
          <Switch checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}
                  value="checkedA" color={"primary"}/>
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

function mapStateToProps(state){
  return {
    selectedVideo: state.videoReducer.video
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({setVideo: setVideo},
                            dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PlebView);
