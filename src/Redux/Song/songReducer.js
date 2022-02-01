import produce from 'immer';

const SongsInitialState={
    Song:{},
    Songs:[],
    SongByCategories:[]

}


export const SongsReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "GET_SONG":state.Song=action.payload;break;
        case "GET_ALL_SONGS":state.Songs.push(action.payload);break;
        case "ADD_SONG":state.Songs.push(action.payload);break;
        case "REMOVE_SONG":state.Songs.push(action.payload);break;
        case "UPDATE_SONG":state.Songs.push(action.payload);break;
        case "GET_BY_CATEGORIE":state.SongByCategories.push(action.payload);break;
    }
},SongsInitialState)




