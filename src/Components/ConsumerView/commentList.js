import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core";
import axios from 'axios';
import CommentListItem from './commentListItem';
import { Component } from 'react';





class CommentList extends Component {

    constructor(props){
        super(props);
        this.state = {
            gotComments: false,
            extractedComments: [],
            apiSent: false,
            video: null
        };
    }

    render(){
        // If no vid then get da vid!
        if(this.props.video && !this.state.apiSent){
            this.setState({apiSent: true, video: this.props.video});
            console.log(this.props.video);
            let comments = [];
            const videoId = this.props.video.id.videoId;
            const url =`https://youtube.com/embed/${videoId}`;
            axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
                params: {
                    part: 'snippet',
                    key: 'AIzaSyBHYZzCCkMD7YYXJqEY5q6Vgd08gBs_KPA',
                    videoId: videoId,
                    maxResults: 10
                }
            })
                .then((response) => {
                    console.log(response);
                    comments = response;

                    // extractedComments = response.data.items.map((comment) => {
                    //
                    //     console.log("this is called");
                    //     console.log(extractedComments);
                    //     return <CommentListItem
                    //         key={comment.etag}
                    //         video={comment} />
                    // });
                    console.log(response.data.items.length);
                    response.data.items.forEach((comment) => {
                        console.log("trust the process");
                        this.state.extractedComments.push(<CommentListItem
                            key={comment.etag}
                            video={comment} />);
                    });
                    console.log(this.state.extractedComments);
                    this.setState({gotComments: true});
                    // let extractedComments = comments.map(function(key) {
                    //     console.log(key.data.items.snippet.topLevelComment.snippet.textDisplay);
                    //     return
                    //
                    // });
                })
                .catch((error) => {
                    console.log(error);
                });
        }else if(this.state.video != this.props.video){
            this.setState({
                apiSent: false,
                gotComments: false,
                extractedComments: [],
            });
            
        }

        if (!this.props.video) {
            console.log("loading :O");
            return <div>Loading...</div>
        }

        return (

            <ul className="list-group" style={{listStyleType: 'none', marginLeft: -40, minWidth: '100%'}}>
                {this.state.gotComments ? this.state.extractedComments : <div/>}
            </ul>

        );
    }
};

export default CommentList;