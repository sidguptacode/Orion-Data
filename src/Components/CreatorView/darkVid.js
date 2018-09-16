import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core"
import {Motion, spring} from "react-motion";


const DarkVideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    console.log(video);
    const videoId = video.id.videoId;
    const url =`https://youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail" style={{minWidth: '100%'}}>
            <Motion defaultStyle={{x: -800, opacity: 1}} style={{
                x: spring(0, {stiffness: 100, damping: 26}),
                opacity: spring(1)
            }}>
                {(style) => (
            <Paper className="borderRadius" style={{ opacity: style.opacity, transform: `translateX(${style.x}%)`, border: 2, borderRadius: 20, position: 'relative', overflow: 'hidden', height: 500, minWidth: '100%'}}>
                <div className="video embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" style={{height: 500, minWidth: '100%', border: 'none', borderRadius: '15px'}} src={url} />
                </div>
            </Paper>
                )}
            </Motion>
            <Motion defaultStyle={{x: 0, opacity: 0}} style={{
                x: spring(0, {stiffness: 100, damping: 26}),
                opacity: spring(1, {stiffness: 20, damping: 26})
            }}>
                {(style) => (
            <div className="details" style={{marginTop: 20, opacity: style.opacity, transform: `translateX(${style.x}%)`}}>
                <Typography style={{color: '#fff'}} variant="headline">{video.snippet.title}</Typography>
                {/*<div>{video.snippet.description}</div>*/}
            </div>
                )}
            </Motion>
        </div>
    );
};

export default DarkVideoDetail;