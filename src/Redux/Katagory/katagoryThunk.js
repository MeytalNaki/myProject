import axios from "axios"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { GetKatagory, GetAllKatagorys, AddKatagory, RemoveKatagory, UpdateKatagory, GetByCategorie } from './KatagoryAction'
export const defaultURL = "https://localhost:44393/api/katagory/"//!!!!!!!!!!!!!!!!!!!!!!!!!!צריך  להחליף!!!!!!!!!!!!!!!!!!!!!!!!!!



export const getAllKatagorysFromServer = async (dispatch) => {
    debugger
    const KatagorysPromise = await axios.get(defaultURL + "GetAllKatagorys");
    try {
        await dispatch(GetAllKATAGORYs(KatagorysPromise));

        const response = KatagorysPromise.data;

        return response;
    }
    catch (e) {
        console.log(e)
    }

}
export const getKatagoryById = async (dispatch, id) => {
    debugger
    let myId = Number(id)
    const KatagoryPromise = await axios.get(`${defaultURL}GetKatagoryByCode/${myId}`);
    try {
        await dispatch(GetKATAGORY(KatagoryPromise));
        const response = await KatagoryPromise.data;
        debugger;
        console.log(KatagoryPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const addKatagory = async (dispatch, nameKatagory, idCategorie, priceKatagory, imageKatagory, colorKatagory, amountKatagory) => {
    debugger
    const NewKatagory = { nameKatagory: nameKatagory, IdCategorie: idCategorie, priceKatagory: priceKatagory, imageKatagory: imageKatagory, colorKatagory: colorKatagory, amountKatagory: amountKatagory };
    try {
        console.log("...", NewKatagory);

        const KatagoryPromise = await axios.post(defaultURL + "AddKatagory", NewKatagory);
        console.log(NewKatagory);

        console.log(KatagoryPromise);
        await dispatch(AddKATAGORY(KatagoryPromise.data));
        const response = await KatagoryPromise.data;
        return response;
    }
    catch (e) {
        console.log(e);

    }

    return Katagory;
}
export const updateKatagory = async (dispatch, idKatagory, nameKatagory, idCategorie, priceKatagory, imageKatagory, sizeKatagory, amountKatagory) => {
    const updateKatagory = { idKatagory: idKatagory, nameKatagory: nameKatagory, IdCategorie: idCategorie, priceKatagory: priceKatagory, imageKatagory: imageKatagory, sizeKatagory: sizeKatagory, amountKatagory: amountKatagory };
    try {
        const KatagoryPromise = await axios.put(defaultURL + "UpdateKatagory/", updateKatagory);
        await dispatch(UpdateKATAGORY(KatagoryPromise.data));
        const response = await KatagoryPromise;
        return KatagoryPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const removeKatagory = async (dispatch, id) => {
    try {
        const KatagoryPromise = await axios.delete(defaultURL + "/RemoveKatagory?Id=" + id);
        await dispatch(RemoveKATAGORY(KatagoryPromise));
        const response = await KatagoryPromise.data;
        return KatagoryPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}




