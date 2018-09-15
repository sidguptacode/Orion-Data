import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media media-left">
                <div className="">
                    <img className="media-object" src={imageURL} />
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    )
};

export default VideoListItem;