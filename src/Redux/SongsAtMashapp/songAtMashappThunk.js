import axios from "axios"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { GetSongsAtMashapp, GetAllSongsAtMashapps, AddSongsAtMashapp, RemoveSongsAtMashapp, UpdateSongsAtMashapp, GetByCategorie } from './SongsAtMashappAction'
export const defaultURL = "https://localhost:44312"//!!!!!!!!!!!!!!!!!!!!!!!!!!צריך  להחליף!!!!!!!!!!!!!!!!!!!!!!!!!!



export const getAllSongsAtMashappsFromServer = async (dispatch) => {
    debugger
    const SongsAtMashappsPromise = await axios.get(defaultURL + "/GetAllSongsAtMashapps");
    try {
        await dispatch(GetAllSongsAtMashapps(SongsAtMashappsPromise));

        const response = SongsAtMashappsPromise.data;

        return response;
    }
    catch (e) {
        console.log(e)
    }

}
export const getSongsAtMashappById = async (dispatch, id) => {
    debugger
    let myId = Number(id)
    const SongsAtMashappPromise = await axios.get(`${defaultURL}/GetSongsAtMashapp/${myId}`);
    try {
        await dispatch(GetSongsAtMashapp(SongsAtMashappPromise));
        const response = await SongsAtMashappPromise.data;
        debugger;
        console.log(SongsAtMashappPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const addSongsAtMashapp = async (dispatch, nameSongsAtMashapp, idCategorie, priceSongsAtMashapp, imageSongsAtMashapp, colorSongsAtMashapp, amountSongsAtMashapp) => {
    debugger
    const NewSongsAtMashapp = { nameSongsAtMashapp: nameSongsAtMashapp, IdCategorie: idCategorie, priceSongsAtMashapp: priceSongsAtMashapp, imageSongsAtMashapp: imageSongsAtMashapp, colorSongsAtMashapp: colorSongsAtMashapp, amountSongsAtMashapp: amountSongsAtMashapp };
    try {
        console.log("...", NewSongsAtMashapp);

        const SongsAtMashappPromise = await axios.post(defaultURL + "/AddSongsAtMashapp", NewSongsAtMashapp);
        console.log(NewSongsAtMashapp);

        console.log(SongsAtMashappPromise);
        await dispatch(AddSongsAtMashapp(SongsAtMashappPromise.data));
        const response = await SongsAtMashappPromise.data;
        return response;
    }
    catch (e) {
        console.log(e);

    }

    return SongsAtMashapp;
}
export const updateSongsAtMashapp = async (dispatch, idSongsAtMashapp, nameSongsAtMashapp, idCategorie, priceSongsAtMashapp, imageSongsAtMashapp, sizeSongsAtMashapp, amountSongsAtMashapp) => {
    const updateSongsAtMashapp = { idSongsAtMashapp: idSongsAtMashapp, nameSongsAtMashapp: nameSongsAtMashapp, IdCategorie: idCategorie, priceSongsAtMashapp: priceSongsAtMashapp, imageSongsAtMashapp: imageSongsAtMashapp, sizeSongsAtMashapp: sizeSongsAtMashapp, amountSongsAtMashapp: amountSongsAtMashapp };
    try {
        const SongsAtMashappPromise = await axios.put(defaultURL + "/UpdateSongsAtMashapp/", updateSongsAtMashapp);
        await dispatch(UpdateSongsAtMashapp(SongsAtMashappPromise.data));
        const response = await SongsAtMashappPromise;
        return SongsAtMashappPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const removeSongsAtMashapp = async (dispatch, id) => {
    try {
        const SongsAtMashappPromise = await axios.delete(defaultURL + "/RemoveSongsAtMashapp?Id=" + id);
        await dispatch(RemoveSongsAtMashapp(SongsAtMashappPromise));
        const response = await SongsAtMashappPromise.data;
        return SongsAtMashappPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const getByCategorie = async (dispatch, idCategory) => {
    try {
        debugger
        const SongsAtMashappPromise = await axios.get(defaultURL + "/GetByCategorie/" + idCategory);
        await dispatch(GetByCategorie(SongsAtMashappPromise.data));
        const response = await SongsAtMashappPromise;
        return SongsAtMashappPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}



