import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core"


const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    console.log(video);
    const videoId = video.id.videoId;
    const url =`https://youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail" style={{minWidth: '100%'}}>
            <Paper className="borderRadius" style={{border: 2, borderRadius: 20, position: 'relative', overflow: 'hidden', height: 500, minWidth: '100%'}}>
                <div className="video embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" style={{height: 500, minWidth: '100%', border: 'none', borderRadius: '15px'}} src={url} />
                </div>
            </Paper>
            <div className="details" style={{marginTop: 20}}>
                <Typography variant="headline">{video.snippet.title}</Typography>
                {/*<div>{video.snippet.description}</div>*/}
            </div>
        </div>
    );
};

export default VideoDetail;