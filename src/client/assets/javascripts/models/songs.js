type SongById = {
  id?: number,
  name: string
};

// This is the model of our module state
export type State = {
  songs: number[],
  songsById: Array<SongById>
};
