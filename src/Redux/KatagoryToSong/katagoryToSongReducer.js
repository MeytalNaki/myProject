import produce from 'immer';

const KatagoryToSongsInitialState={
    KatagoryToSong:{},
    KatagoryToSongs:[],
    KatagoryToSongByCode:[]
    KatagoryToSongByKatagoryCode:[]
    KatagoryToSongBySongCode:[]

}


export const KatagoryToSongsReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "GET_KATAGORY_TO_SONG_BY_SONG_CODE":state.KatagoryToSongBySongCode=action.payload;break;
        case "GET_ALL_KATAGORYTOSONGS":state.KatagoryToSongs.push(action.payload);break;
        case "ADD_KATAGORYTOSONG":state.KatagoryToSongs.push(action.payload);break;
        case "REMOVE_KATAGORYTOSONG":state.KatagoryToSongs.push(action.payload);break;
        case "UPDATE_KATAGORYTOSONG":state.KatagoryToSongs.push(action.payload);break;
        case "GET_BY_KATAGORY_CODE":state.KatagoryToSongByKatagoryCode.push(action.payload);break;
        case "GET_BY__CODE":state.KatagoryToSongByCode.push(action.payload);break;
    }
},KatagoryToSongsInitialState)




