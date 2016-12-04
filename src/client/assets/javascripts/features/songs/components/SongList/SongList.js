import React, { Component, PropTypes } from 'react';

import SongListItem from '../SongListItem';
import './SongList.scss';

export default class SongList extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    songs: PropTypes.array.isRequired
  };

  renderList() {
    return this.props.songs.map((song, index) =>
      (
        <SongListItem
          key={song.id}
          id={song.id}
          name={song.name}
          index={index}
          {...this.props.actions} />
      )
    );
  }

  render() {
    return (
      <ul className="songList">
        {this.renderList()}
      </ul>
    );
  }
}
