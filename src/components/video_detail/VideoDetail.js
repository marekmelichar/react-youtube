import React, { Component } from 'react';

import YouTube from 'react-youtube';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: 0
    }
  }

  // componentDidMount() {
  //   console.log('this.refs.play', this.refs.play);
  //
  // }

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
    const player = event.target

    // this.refs.previous.addEventListener('click', function() {
    //   event.target.previousVideo()
    // })
    //
    // this.refs.reward.addEventListener('click', function() {
    //   event.target.playVideo()
    // })

    this.refs.play.addEventListener('click', function() {
      player.playVideo()
    })

    this.refs.pause.addEventListener('click', function() {
      player.pauseVideo()
    })

    this.refs.stop.addEventListener('click', function() {
      player.stopVideo()
    })

    // this.refs.forward.addEventListener('click', function() {
    //   event.target.playVideo()
    // })

    // this.refs.next.addEventListener('click', function() {
    //   event.target.nextVideo()
    // })

    // console.log('this.refs.pause', this.refs.pause);

    // console.log('this.refs.progressBar', this.refs.progressBar);

    const progress = document.getElementById('progress');

    // progress.addEventListener('mouseup touchend input change click', function (e) {
    progress.addEventListener('click', function (e) {

      // Calculate the new time for the video.
      // new time in seconds = total duration in seconds * ( value of range input / 100 )
      var newTime = player.getDuration() * (e.target.value / 100);

      // Skip video to new time.
      player.seekTo(newTime);

    });
  }

  // pause(e) {
  //   this.player().pauseVideo()
  // }

  // disableClick(e) {
  //   e.preventDefault()
  // }

  render() {

    // console.log('this.state.progress', this.state.progress);

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

    // const player = <YouTube
    //   videoId={videoId}
    //   opts={opts}
    //   onReady={this._onReady.bind(this)}
    // />

    // console.log('this.player', this.player);


    return (
      <div className="video-detail col-md-8">
        <div className="iframe-wrapper embed-responsive embed-responsive-16by9">
          {/* <iframe className="embed-responsive-item" src={url}></iframe> */}
          {/* <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this._onReady.bind(this)}
          /> */}

          {/* {player} */}

          {/* {this.player(videoId, opts)} */}
          {/* {this.state.player} */}

          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={event => this._onReady(event)}
            // onReady={this._onReady.bind(this)}
          />
        </div>
        {/* <div className="curtain" onClick={event => this.disableClick(event)}></div> */}

        <div className="video-progress">
          <input
            type="range"
            id="progress"
            onChange={e => this.setState({ progress: e.target.value })}
            value={this.state.progress}
          />
        </div>

        <div className="video-controls">
          {/* <button ref="previous">Previous video</button> */}
          {/* <button ref="reward">Reward</button> */}
          <button ref="play">Play</button>
          <button ref="pause">Pause</button>
          <button ref="stop">Stop</button>
          {/* <button ref="forward">Forward</button> */}
          {/* <button ref="next">Next video</button> */}
        </div>

        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};
