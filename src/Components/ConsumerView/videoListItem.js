import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core"
import {Motion, spring} from "react-motion";

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.high.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item" style={{marginBottom: 20, maxWidth: '80%'}}>
            <Motion defaultStyle={{x: 0, opacity: 0, scale: 0}} style={{
                x: spring(0, {stiffness: 130, damping: 26}),
                opacity: spring(1, {stiffness: 60, damping: 26}),
                scale: spring(100, { stiffness: 70, damping: 20})
            }}>
                {(style) => (
            <Paper style={{opacity: style.opacity,
                width: `${style.scale}%`, border: 2, borderRadius: 20, position: 'relative', overflow: 'hidden', minHeight: 240}}>
            <div className="video-list media media-left" style={{float:'left',
                overflow: 'hidden', /* this is important */
                border:0}}>
                <div className="">
                    <img className="media-object" src={imageURL} style={{width: '100%', marginTop: -35, marginBottom: -40 }} />
                </div>
            </div>

            <div style={{marginTop: 148, marginLeft: 20, paddingRight: 20}}>
                <Typography variant="subheading"  className="media-heading">{video.snippet.title.slice(0,25)+ '...'}</Typography>
                <Typography style={{marginTop: 38}} variant="caption"  className="media-heading">{video.snippet.channelTitle}</Typography>
            </div>
            </Paper>
                    )}
            </Motion>
        </li>

    )
};

export default VideoListItem;