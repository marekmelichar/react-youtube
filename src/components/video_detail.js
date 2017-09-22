import React, { Component } from 'react';

import YouTube from 'react-youtube';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  // player(videoId, opts) {
  //   // return (
  //   //   <YouTube
  //   //     videoId={videoId}
  //   //     opts={opts}
  //   //     onReady={this._onReady.bind(this)}
  //   //   />
  //   // )
  //   this.player = {
  //     player: <YouTube
  //       videoId={videoId}
  //       opts={opts}
  //       onReady={this._onReady.bind(this)}
  //     />
  //   }
  // }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.stopVideo();
    // event.target.playVideo();
    // event.target.pauseVideo();

    this.refs.play.addEventListener('click', function() {
      event.target.playVideo()
    })

    this.refs.pause.addEventListener('click', function() {
      event.target.pauseVideo()
    })

    this.refs.stop.addEventListener('click', function() {
      event.target.stopVideo()
    })

    // console.log('this.refs.pause', this.refs.pause);
  }

  // pause(e) {
  //   this.player().pauseVideo()
  // }

  // disableClick(e) {
  //   e.preventDefault()
  // }

  render() {
    const {video} = this.props;

    if (!video) {
      return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    // const url = `https://www.youtube.com/embed/${videoId}?width=980&height=640&autoplay=0&rel=0&modestbranding=1&fs=0&showinfo=0`;
    // https://www.youtube.com/embed/T7jC3LDlLi8?autoplay=0&rel=0&modestbranding=1&fs=0&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A8080&widgetid=1

    const opts = {
      // height: '390',
      // width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        rel: 0, // no related videos at the end
        modestbranding: 1,
        showinfo: 0,
        fs: 0, // to avoid show info when fullscreen mode is on
        controls: 0,
        // wmode: 'opaque',
        // enablejsapi: 1,
        // autohide: 2
      }
    };

    let player = <YouTube
      videoId={videoId}
      opts={opts}
      onReady={this._onReady.bind(this)}
    />

    return (
      <div className="video-detail col-md-8">
        <div className="iframe-wrapper embed-responsive embed-responsive-16by9">
          {/* <iframe className="embed-responsive-item" src={url}></iframe> */}
          {/* <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this._onReady.bind(this)}
          /> */}

          {player}

          {/* {this.player(videoId, opts)} */}
          {/* {this.state.player} */}
        </div>
        {/* <div className="curtain" onClick={event => this.disableClick(event)}></div> */}

        <div className="video-controls">
          <button ref="play">Play</button>
          <button ref="pause">Pause</button>
          <button ref="stop">Stop</button>
        </div>

        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};
