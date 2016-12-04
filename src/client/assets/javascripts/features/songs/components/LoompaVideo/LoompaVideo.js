import React, { Component, PropTypes } from 'react';
import ReactPlayer from 'react-player';
import './LoompaVideo.scss';

export default class LoompaVideo extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    song: PropTypes.object.isRequired
  };

  clearSelection(){
    this.props.actions.clearSelection();
    const timer = setInterval(this.props.actions.rotateList, 100);
    this.props.actions.setTimer(timer);
  }

  render() {
    const { song, actions } = this.props;
    const config = {autoplay:true};
    if(song==null){
      return(<div></div>);
    }
    return (
      <ReactPlayer className="loompaVideo" url={song.fileName} playing={true} controls={false} width={window.innerWidth} height={window.innerHeight} fileConfig={config} onEnded={this.clearSelection.bind(this)}/>
    );
  }
}
