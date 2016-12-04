// @flow

import { createStructuredSelector } from 'reselect';
import assign from 'lodash/assign';

import { State } from 'models/songs';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'
const ROTATE_LIST = 'redux-app/songs/ROTATE_LIST';
const SET_TIMER = 'redux-app/songs/SET_TIMER';
const SET_SELECTED_SONG = 'redux-app/songs/SET_SELECTED_SONG'
const CLEAR_SELECTION = 'redux-app/songs/CLEAR_SELECTION'

// This will be used in our root reducer and selectors

export const NAME = 'songs';

// Define the initial state for `songs` module

const initialState: State = {
  songs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  songsById: [
    {
      id: 0,
      name: 'Danny Trejo',
      fileName: 'http://test.madalynparker.com/oompa/videos/0.mp4'
    },
    {
      id: 1,
      name: 'Doompity Memes',
      fileName: 'http://test.madalynparker.com/oompa/videos/1.mp4'
    },
    {
      id: 2,
      name: 'Fruit Bruises',
      fileName: 'http://test.madalynparker.com/oompa/videos/2.mp4'
    },
    {
      id: 3,
      name: 'J Crew',
      fileName: 'http://test.madalynparker.com/oompa/videos/3.mp4'
    },
    {
      id: 4,
      name: '3 Chord Songs',
      fileName: 'http://test.madalynparker.com/oompa/videos/4.mp4'
    },
    {
      id: 5,
      name: 'Kinsey Scale',
      fileName: 'http://test.madalynparker.com/oompa/videos/5.mp4'
    },
    {
      id: 6,
      name: 'Kung Fu',
      fileName: 'http://test.madalynparker.com/oompa/videos/6.mp4'
    },
    {
      id: 7,
      name: "Worker's Rights",
      fileName: 'http://test.madalynparker.com/oompa/videos/7.mp4'
    },
    {
      id: 8,
      name: 'Kazoo Solo',
      fileName: 'http://test.madalynparker.com/oompa/videos/8.mp4'
    },
    {
      id: 9,
      name: 'Hypochondriac',
      fileName: 'http://test.madalynparker.com/oompa/videos/9.mp4'
    },
    {
      id: 10,
      name: 'Artificial Hair Products',
      fileName: 'http://test.madalynparker.com/oompa/videos/10.mp4'
    }
  ],
  timer: null,
  selectedSong: null
};

// Reducer

/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

export default function reducer(state: State = initialState, action: any = {}): State {
  switch (action.type) {

    case ROTATE_LIST:
      const songs = [...state.songsById]
      return{
        ...state,
        songsById: rotateSongs(songs)
      };

    case SET_TIMER:
      return{
        ...state,
        timer: action.id
      };

    case SET_SELECTED_SONG:
      return{
        ...state,
        selectedSong: action.song
      };

    case CLEAR_SELECTION:
      return{
        ...state,
        selectedSong: null
      };

    default:
      return state;
  }
}


function rotateSongs(songs) {
  songs.push.apply(songs, songs.splice(0, 1))
  return songs
}

// Action Creators


function rotateList() {
  return {
    type: ROTATE_LIST
  };
}


function setTimer(id:string) {
  return {
    type: SET_TIMER,
    id
  };
}



function setSelectedSong(song:object) {
  return {
    type: SET_SELECTED_SONG,
    song
  };
}

function clearSelection() {
  return {
    type: CLEAR_SELECTION
  };
}

// Selectors

const songs = (state) => state[NAME];

export const selector = createStructuredSelector({
  songs
});

export const actionCreators = {
  rotateList,
  setTimer,
  setSelectedSong,
  clearSelection
};
