import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './SongListItem.scss';

const COLORS = ['#C14836','#E2571E','#FF7F00','#FFFF00','#00FF00','#96bf33','#0000FF','#227B99','#6051C4','#8B00FF','#B751C4'];

export default class SongListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    var style = {background:COLORS[this.props.id]}
    if(this.props.index == 5){
      style['borderColor'] = 'red';
      style['borderWidth'] = '5px 5px 5px 5px';
      style['borderStyle'] = 'solid';
    }
    return (
      <li className='songListItem'  style={style}>
        <div className="songInfos">
          <div><span>{this.props.name}</span></div>
        </div>
       </li>
    );
  }
}
