import { combineReducers, createStore } from "redux";
import { KatagorysReducer } from './Katagory/katagoryReducer';
import { KatagoryToSongsReducer } from './KatagoryToSong/katagoryToSongReducer';
import { UsersReducer } from './User/UserReducer';
import { MashappsReducer } from "./Mashapp/mashappReducer";
import { SongsReducer } from "./Song/songReducer";
import { SongsAtMashappsReducer } from "./SongsAtMashapp/songAtMashappReducer";

const reducers = combineReducers({
    users: UsersReducer,
    katagory: KatagorysReducer,
    KatagoryToSong: KatagoryToSongsReducer,
    mashapp: MashappsReducer,
    Song: SongsReducer,
    SongAtMashapp: SongsAtMashappsReducer,
})
export const store = createStore(reducers);
