import produce from 'immer';

const KatagorysInitialState={
    Katagory:{},
    Katagorys:[],
    KatagoryByCategories:[]

}


export const KatagorysReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "GET_Katagory":state.Katagory=action.payload;break;
        case "GET_ALL_KATAGORYS":state.Katagorys.push(action.payload);break;
        case "ADD_KATAGORY":state.Katagorys.push(action.payload);break;
        case "REMOVE_KATAGORY":state.Katagorys.push(action.payload);break;
        case "UPDATE_KATAGORY":state.Katagorys.push(action.payload);break;
        case "GET_BY_CATEGORIE":state.KatagoryByCategories.push(action.payload);break;
    }
},KatagorysInitialState)




