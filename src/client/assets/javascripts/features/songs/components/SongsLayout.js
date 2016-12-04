import React, { Component, PropTypes } from 'react';

import SongList from './SongList';
import LoompaVideo from './LoompaVideo/LoompaVideo'
import './SongListApp.scss';

export default class SongsLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    songs: PropTypes.object.isRequired
  };

  render() {
    const { songs: { songsById, selectedSong }, actions } = this.props;
    if(selectedSong != null){
      return(
        <div className="loompaApp">
          <LoompaVideo song={selectedSong} actions={actions} />
        </div>
      );
    }
    return (
      <div className="loompaApp">
        <SongList songs={songsById} actions={actions} />
      </div>
    );
  }
}
