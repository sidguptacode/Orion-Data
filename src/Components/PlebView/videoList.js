import React from 'react';
import VideoListItem from './videoListItem'
import { Grid, Typography } from "@material-ui/core"
import {Motion, spring} from "react-motion";


const VideoList = (props) =>{
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video={video} />
    });

    return (
        <div>
            <Motion defaultStyle={{x: 0, opacity: 0}} style={{
                x: spring(0, {stiffness: 100, damping: 26}),
                opacity: spring(1, {stiffness: 20, damping: 26})
            }}>
                {(style) => (
            <Typography variant="subheading" style={{opacity: style.opacity, transform: `translateX(${style.x}%)`, marginLeft: 40}}>Suggestions from Emotion</Typography>
                    )}
            </Motion>
        <ul className="list-group" style={{listStyleType: 'none'}}>
            {videoItems}
        </ul>
        </div>
    );
};

export default VideoList;