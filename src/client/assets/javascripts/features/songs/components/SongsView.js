import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as songsActions, selector } from '../';
import SongsLayout from './SongsLayout';

const sleep = require('es6-sleep').generator;

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(songsActions, dispatch)
}))

export default class SongsView extends Component {
  componentDidMount(){
    this.startTimer();
  }

  startTimer(){
    const timer = setInterval(this.props.actions.rotateList, 100);
    this.props.actions.setTimer(timer);
  }

  stopTimer(){
    clearTimeout(this.props.songs.timer);
    this.props.actions.setTimer(null);
  }

  waitAndSelect(){
    if (this.props.songs.selectedSong == null){

      this.stopTimer();
      const newTimer = setTimeout(this.selectSong.bind(this), 2000);

    }
  }

  selectSong(){
     this.props.actions.setSelectedSong(this.props.songs.songsById[5]);
  }

  render() {
    return (
      <div className="songList" tabIndex="1" onKeyPress={this.waitAndSelect.bind(this)} >
        <SongsLayout {...this.props} />
      </div>
    );
  }
}
