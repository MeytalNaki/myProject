import produce from 'immer';

const UsersInitialState={
    User:{},
    Users:[],
    UserByCategories:[]

}


export const UsersReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "GET_USER":state.User=action.payload;break;
        case "GET_ALL_USERS":state.Users.push(action.payload);break;
        case "ADD_USER":state.Users.push(action.payload);break;
        case "REMOVE_USER":state.Users.push(action.payload);break;
        case "UPDATE_USER":state.Users.push(action.payload);break;
        case "GET_BY_CATEGORIE":state.UserByCategories.push(action.payload);break;
    }
},UsersInitialState)




