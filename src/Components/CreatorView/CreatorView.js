import React, { Component } from 'react';
import { Grid, Typography } from "@material-ui/core"
import XLVideo from "../PlebView/XLVideo"
import Switch from '@material-ui/core/Switch';
import orionIMG from '../../svgs/orionIMG.png';
import DarkVideoDetail from './darkVid';
import SearchBarMine from '../PlebView/searchBar';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import VideoList from './darkVid';
import VideoListItem from '../PlebView/videoListItem';
import CommentListDark from './commendListDark'
import { LineChart, Line, AreaChart, Area, Tooltip, PieChart, Pie, Legend } from 'recharts';
import Paper from '@material-ui/core/Paper';
import axios from "axios/index";
import reactHeatmapGraph from 'react-heatmap-graph'
import HeatMap from 'react-heatmap-grid'
import {Motion, spring} from "react-motion";
import {Route, Redirect } from 'react-router-dom'
import { setVideo } from '../../ReduxActions/videoActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

const API_key = 'AIzaSyBHYZzCCkMD7YYXJqEY5q6Vgd08gBs_KPA';

class CreatorView extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            submitted: 1000,
            eraseText: 1,
            checkedA: false,
            checkedB: true,
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




    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);
        const data3 = [
            {name: 'Page A', uv: 0, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 1, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 0.1, pv: 9800, amt: 2290},
            {name: 'Page D', uv: -1, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 0.4, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 0, pv: 3800, amt: 2500},
            {name: 'Page G', uv: -0.8, pv: 4300, amt: 2100},
        ];

        const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
            {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
            {name: 'Group E', value: 278}, {name: 'Group F', value: 189}];

        const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
            {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
            {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

        const xLabels = new Array(120).fill(0).map((_, i) => '');
        const yLabels = [''];
        const data = new Array(yLabels.length)
            .fill(0)
            .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));

        if (this.state.redirect) {
            return (<Redirect to="/"/>);
        } else {
            return (
                <div>
                    <Motion defaultStyle={{x: 1000, opacity: 1}} style={{
                        x: spring(this.state.submitted, {stiffness: 130, damping: 26}),
                        opacity: spring(1)
                    }}>
                        {(style) => (
                            <Paper style={{
                                backgroundColor: '#fff',
                                position: 'absolute',
                                zIndex: 5000,
                                opacity: style.opacity,
                                transform: `translateX(${style.x}%)`,
                                minHeight: 1000,
                                minWidth: 5000
                            }}>
                            </Paper>
                        )}
                    </Motion>
                    <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: '#0E1831'}}>
                        <Grid container xs={8} sm={8} md={8} lg={8} xl={8}>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                            <Grid container xs={11} sm={11} md={11} lg={11} xl={11}>
                                <Title/>
                                <DarkVideoDetail video={this.props.selectedVideo}/>
                                <div className="details" style={{marginTop: 20}}>
                                    {/*<div>{video.snippet.description}</div>*/}
                                </div>
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
                                            marginTop: 30,
                                            color: '#fff'
                                        }}>Sentiment Heat Map</Typography>
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
                                            backgroundColor: '#1E2943',
                                            marginTop: 20,
                                            border: 2,
                                            borderRadius: 20,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            minHeight: 75,
                                            textAlign: 'center'
                                        }}>
                                            {/*<AreaChart width={850} height={100} data={data3}*/}
                                            {/*margin={{top: 25, right: 0, left: 0, bottom: 5}} style={{textAlign: 'center'}}>*/}
                                            {/*<Area type='monotone' dataKey='uv' stroke='#3949AB' fill='#3949AB' />*/}
                                            {/*<Tooltip/>*/}
                                            {/*</AreaChart>*/}
                                            <div style={{textAlign: 'center', marginLeft: -100, marginTop: 10}}>
                                                <HeatMap
                                                    xLabels={xLabels}
                                                    yLabels={yLabels}
                                                    data={data}
                                                    background={'#FF595E'}
                                                    height={50}

                                                />
                                            </div>
                                        </Paper>
                                    )}
                                </Motion>
                                <br/>
                                <Typography variant="subheading"
                                            style={{color: '#fff', marginTop: 30}}>Comments</Typography>
                                <CommentListDark video={this.props.selectedVideo} style={{minWidth: '100%'}}/>
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
                                            <Typography variant="body2" style={{color: "#6E6E6E"}}>User
                                                view</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div style={{paddingLeft: 40, width: '80%', marginTop: -50}}>
                                    <Motion defaultStyle={{x: 0, opacity: 0, scale: 0}} style={{
                                        x: spring(0, {stiffness: 130, damping: 26}),
                                        opacity: spring(1, {stiffness: 60, damping: 26}),
                                        scale: spring(100, {stiffness: 70, damping: 20})
                                    }}>
                                        {(style) => (
                                            <Paper style={{
                                                opacity: style.opacity,
                                                width: `${style.scale}%`,
                                                backgroundColor: '#1E2943',
                                                marginTop: 20,
                                                border: 2,
                                                borderRadius: 20,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                minHeight: 120
                                            }}>
                                                <Typography variant="subheading"
                                                            style={{marginLeft: 20, color: '#fff', marginTop: 20}}>Emotion
                                                    During Video</Typography>
                                                <PieChart width={300} height={220}>
                                                    <Pie data={data02} innerRadius={55} outerRadius={80}
                                                         fill="#FF595E"/>
                                                    <Tooltip/>
                                                </PieChart>
                                            </Paper>
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
                                                backgroundColor: '#1E2943',
                                                marginTop: 20,
                                                border: 2,
                                                borderRadius: 20,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                minHeight: 120
                                            }}>
                                                <Typography variant="subheading"
                                                            style={{marginLeft: 20, color: '#fff', marginTop: 20}}>Viewer
                                                    Demographics by Race</Typography>
                                                <PieChart width={300} height={220}>
                                                    <Pie data={data02} innerRadius={55} outerRadius={80}
                                                         fill="#FFCA3A"/>
                                                    <Tooltip/>
                                                </PieChart>
                                            </Paper>
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
                                                backgroundColor: '#1E2943',
                                                marginTop: 20,
                                                border: 2,
                                                borderRadius: 20,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                minHeight: 120
                                            }}>
                                                <Typography variant="subheading"
                                                            style={{marginLeft: 20, color: '#fff', marginTop: 20}}>Viewer
                                                    Demographics by Age</Typography>
                                                <PieChart width={300} height={220}>
                                                    <Pie data={data02} innerRadius={55} outerRadius={80}
                                                         fill="#8AC926"/>
                                                    <Tooltip/>
                                                </PieChart>
                                            </Paper>
                                        )}
                                    </Motion>

                                </div>
                                {/*<VideoList*/}
                                {/*onVideoSelect={selectedVideo => this.setState({selectedVideo})}*/}
                                {/*videos={this.state.videos} />*/}
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
                    <img src={orionIMG} style={{width: 45, height: 35}} />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <Typography style={{color: '#fff'}} variant="headline">{"Orion Data"}</Typography>
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

function mapStateToProps(state){
  return {
    selectedVideo: state.videoReducer.video
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({setVideo: setVideo},
                            dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CreatorView);
