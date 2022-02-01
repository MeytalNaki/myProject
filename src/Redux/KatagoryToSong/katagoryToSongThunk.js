import axios from "axios"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import {GetByCode, GetByKatagoryCode, GetAllKatagoryToSongs, AddKatagoryToSong, RemoveKatagoryToSong, UpdateKatagoryToSong, GetKatagoryToSongBySongCode } from './KatagoryToSongAction'
export const defaultURL = "https://localhost:44393/api/katagoryToSong/"



export const getAllKatagoryToSongsFromServer = async (dispatch) => {
    debugger
    const KatagoryToSongsPromise = await axios.get(defaultURL + "GetAllkatagoriesToSong");
    try {
        await dispatch(GetAllKATAGORYTOSONGs(KatagoryToSongsPromise));

        const response = KatagoryToSongsPromise.data;

        return response;
    }
    catch (e) {
        console.log(e)
    }

}
export const getKatagoryToSongByKatagoryCode = async (dispatch, id) => {
    debugger
    let myId = Number(id)
    const KatagoryToSongPromise = await axios.get(`${defaultURL}/GetKatagoryToSongsByKatagoryCode/${myId}`);
    try {
        await dispatch(GetKATAGORYTOSONG(KatagoryToSongPromise));
        const response = await KatagoryToSongPromise.data;
        debugger;
        console.log(KatagoryToSongPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const getKatagoryToSongByCode = async (dispatch, id) => {
    debugger
    let myId = Number(id)
    const KatagoryToSongPromise = await axios.get(`${defaultURL}/GetKatagoryToSongsByCode/${myId}`);
    try {
        await dispatch(GetKATAGORYTOSONG(KatagoryToSongPromise));
        const response = await KatagoryToSongPromise.data;
        debugger;
        console.log(KatagoryToSongPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const addKatagoryToSong = async (dispatch, nameKatagoryToSong, idCategorie, priceKatagoryToSong, imageKatagoryToSong, colorKatagoryToSong, amountKatagoryToSong) => {
    debugger
    const NewKatagoryToSong = { nameKatagoryToSong: nameKatagoryToSong, IdCategorie: idCategorie, priceKatagoryToSong: priceKatagoryToSong, imageKatagoryToSong: imageKatagoryToSong, colorKatagoryToSong: colorKatagoryToSong, amountKatagoryToSong: amountKatagoryToSong };
    try {
        console.log("...", NewKatagoryToSong);

        const KatagoryToSongPromise = await axios.post(defaultURL + "/AddKatagoryToSong", NewKatagoryToSong);
        console.log(NewKatagoryToSong);

        console.log(KatagoryToSongPromise);
        await dispatch(AddKATAGORYTOSONG(KatagoryToSongPromise.data));
        const response = await KatagoryToSongPromise.data;
        return response;
    }
    catch (e) {
        console.log(e);

    }

    return KatagoryToSong;
}
export const updateKatagoryToSong = async (dispatch, idKatagoryToSong, nameKatagoryToSong, idCategorie, priceKatagoryToSong, imageKatagoryToSong, sizeKatagoryToSong, amountKatagoryToSong) => {
    const updateKatagoryToSong = { idKatagoryToSong: idKatagoryToSong, nameKatagoryToSong: nameKatagoryToSong, IdCategorie: idCategorie, priceKatagoryToSong: priceKatagoryToSong, imageKatagoryToSong: imageKatagoryToSong, sizeKatagoryToSong: sizeKatagoryToSong, amountKatagoryToSong: amountKatagoryToSong };
    try {
        const KatagoryToSongPromise = await axios.put(defaultURL + "/UpdateKatagoryToSong/", updateKatagoryToSong);
        await dispatch(UpdateKATAGORYTOSONG(KatagoryToSongPromise.data));
        const response = await KatagoryToSongPromise;
        return KatagoryToSongPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const removeKatagoryToSong = async (dispatch, id) => {
    try {
        const KatagoryToSongPromise = await axios.delete(defaultURL + "/RemoveKatagoryToSong?Id=" + id);
        await dispatch(RemoveKATAGORYTOSONG(KatagoryToSongPromise));
        const response = await KatagoryToSongPromise.data;
        return KatagoryToSongPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const getKatagoryToSongBySongCode = async (dispatch, idSong) => {
    try {
        debugger
        const KatagoryToSongPromise = await axios.get(defaultURL + "/getKatagoryToSongsBySongCode/" + idSong);
        await dispatch(GetByCategorie(KatagoryToSongPromise.data));
        const response = await KatagoryToSongPromise;
        return KatagoryToSongPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}



