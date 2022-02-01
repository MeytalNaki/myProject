import produce from 'immer';

const SongsAtMashappsInitialState={
    SongsAtMashapp:{},
    SongsAtMashapps:[],
    SongsAtMashappByCategories:[]

}


export const SongsAtMashappsReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "GET_SONGSATMASHAPP":state.SongAtMashapp=action.payload;break;
        case "GET_ALL_SONGSATMASHAPPS":state.SongAtMashapp.push(action.payload);break;
        case "ADD_SONGSATMASHAPP":state.SongsAtMashapp.push(action.payload);break;
        case "REMOVE_SONGSATMASHAPP":state.SongsAtMashapp.push(action.payload);break;
        case "UPDATE_SONGSATMASHAPP":state.SongsAtMashapp.push(action.payload);break;
        case "GET_BY_CATEGORIE":state.SongsAtMashappByCategories.push(action.payload);break;
    }
},SongsAtMashappsInitialState)




