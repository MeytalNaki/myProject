import produce from 'immer';

const MashappsInitialState={
    Mashapp:{},
    Mashapps:[],
    MashappByUserCode:[]

}


export const MashappsReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "GET_MASHAPP":state.Mashapp=action.payload;break;
        case "GET_ALL_MASHAPPS":state.Mashapps.push(action.payload);break;
        case "ADD_MASHAPP":state.Mashapps.push(action.payload);break;
        case "REMOVE_MASHAPP":state.Mashapps.push(action.payload);break;
        case "UPDATE_MASHAPP":state.Mashapps.push(action.payload);break;
        case "
        GET_BY_USER_CODE":state.MashappByUserCode.push(action.payload);break;
    }
},MashappsInitialState)




