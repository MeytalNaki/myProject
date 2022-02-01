import axios from "axios"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { GetMashapp, GetAllMashapps, AddMashapp, RemoveMashapp, UpdateMashapp, GetByUserCode } from './MashappAction'
export const defaultURL = "https://localhost:44393/api/mashapp/"//!!!!!!!!!!!!!!!!!!!!!!!!!!צריך  להחליף!!!!!!!!!!!!!!!!!!!!!!!!!!



export const getAllMashappsFromServer = async (dispatch) => {
    debugger
    const MashappsPromise = await axios.get(defaultURL + "GetAllMashapps");
    try {
        await dispatch(GetAllMashapps(MashappsPromise));

        const response = MashappsPromise.data;

        return response;
    }
    catch (e) {
        console.log(e)
    }

}
export const getMashappById = async (dispatch, id) => {
    debugger
    let myId = Number(id)
    const MashappPromise = await axios.get(`${defaultURL}/GetMashappByCode/${myId}`);
    try {
        await dispatch(GetMashapp(MashappPromise));
        const response = await MashappPromise.data;
        debugger;
        console.log(MashappPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const getMashappByUserCode = async (dispatch, id) => {
    debugger
    let myId = Number(id)
    const MashappPromise = await axios.get(`${defaultURL}/GetMashappByUserCode/${myId}`);
    try {
        await dispatch(GetMashapp(MashappPromise));
        const response = await MashappPromise.data;
        debugger;
        console.log(MashappPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const addMashapp = async (dispatch, code, name, userCode, DataCreate, fileMp3) => {
    debugger
    const NewMashapp = {

        
    };
    try {
        console.log("...", NewMashapp);

        const MashappPromise = await axios.post(defaultURL + "/AddMashapp", NewMashapp);
        console.log(NewMashapp);

        console.log(MashappPromise);
        await dispatch(AddMashapp(MashappPromise.data));
        const response = await MashappPromise.data;
        return response;
    }
    catch (e) {
        console.log(e);

    }

    return Mashapp;
}
export const updateMashapp = async (dispatch, idMashapp, nameMashapp, idCategorie, priceMashapp, imageMashapp, sizeMashapp, amountMashapp) => {
    const updateMashapp = { idMashapp: idMashapp, nameMashapp: nameMashapp, IdCategorie: idCategorie, priceMashapp: priceMashapp, imageMashapp: imageMashapp, sizeMashapp: sizeMashapp, amountMashapp: amountMashapp };
    try {
        const MashappPromise = await axios.put(defaultURL + "/UpdateMashapp/", updateMashapp);
        await dispatch(UpdateMashapp(MashappPromise.data));
        const response = await MashappPromise;
        return MashappPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const removeMashapp = async (dispatch, id) => {
    try {
        const MashappPromise = await axios.delete(defaultURL + "/RemoveMashapp?Id=" + id);
        await dispatch(RemoveMashapp(MashappPromise));
        const response = await MashappPromise.data;
        return MashappPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const getByCategorie = async (dispatch, idCategory) => {
    try {
        debugger
        const MashappPromise = await axios.get(defaultURL + "/GetByCategorie/" + idCategory);
        await dispatch(GetByCategorie(MashappPromise.data));
        const response = await MashappPromise;
        return MashappPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}



