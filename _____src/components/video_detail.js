import React, { Component } from 'react';

import YouTube from 'react-youtube';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props)
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.stopVideo();
  }

  render() {
    const {video} = this.props;

    if (!video) {
      return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    // const url = `https://www.youtube.com/embed/${videoId}`;

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        rel: 0
      }
    };

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          {/* <iframe className="embed-responsive-item" src={url}></iframe> */}
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this._onReady.bind(this)}
          />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};
