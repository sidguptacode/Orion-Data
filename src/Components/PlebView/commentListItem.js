import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core"
import randomcolor from 'randomcolor';
import { Circle } from 'react-shapes';

const CommentListItem = ({video}) => {
    // const imageURL = video.snippet.thumbnails.high.url;
    console.log("comment list item component is run");
    return (
        <li className="list-group-item" style={{marginBottom: 20, Width: '100%'}}>
            <Paper style={{border: 2, borderRadius: 20, position: 'relative', overflow: 'hidden'}}>
                <div style={{opacity: 0.5, position: 'absolute', paddingTop: 15, paddingLeft: 20}}><Circle  r={20} fill={{color:randomcolor()}} stroke={{color:'#fff'}} strokeWidth={2} /></div>
                <Typography style={{paddingLeft: 70, paddingRight: 20, paddingTop: 25, paddingBottom: 10}} variant="body2"  gutterBottom>{video.snippet.topLevelComment.snippet.authorDisplayName}</Typography>
                <Typography style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 10}} variant="subheading" gutterBottom>{video.snippet.topLevelComment.snippet.textOriginal}</Typography>
            </Paper>
        </li>

    )
};

export default CommentListItem;