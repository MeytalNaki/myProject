import axios from "axios"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { GetSong, GetAllSongs, AddSong, RemoveSong, UpdateSong, GetByCategorie } from './SongAction'
export const defaultURL = "https://localhost:44312"//!!!!!!!!!!!!!!!!!!!!!!!!!!צריך  להחליף!!!!!!!!!!!!!!!!!!!!!!!!!!



export const getAllSongsFromServer = async (dispatch) => {
    debugger
    const SongsPromise = await axios.get(defaultURL + "/GetAllSongs");
    try {
        await dispatch(GetAllSongs(SongsPromise));

        const response = SongsPromise.data;

        return response;
    }
    catch (e) {
        console.log(e)
    }

}
export const getSongById = async (dispatch, id) => {
    debugger
    let myId = Number(id)
    const SongPromise = await axios.get(`${defaultURL}/GetSong/${myId}`);
    try {
        await dispatch(GetSong(SongPromise));
        const response = await SongPromise.data;
        debugger;
        console.log(SongPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const addSong = async (dispatch, nameSong, idCategorie, priceSong, imageSong, colorSong, amountSong) => {
    debugger
    const NewSong = { nameSong: nameSong, IdCategorie: idCategorie, priceSong: priceSong, imageSong: imageSong, colorSong: colorSong, amountSong: amountSong };
    try {
        console.log("...", NewSong);

        const SongPromise = await axios.post(defaultURL + "/AddSong", NewSong);
        console.log(NewSong);

        console.log(SongPromise);
        await dispatch(AddSong(SongPromise.data));
        const response = await SongPromise.data;
        return response;
    }
    catch (e) {
        console.log(e);

    }

    return Song;
}
export const updateSong = async (dispatch, idSong, nameSong, idCategorie, priceSong, imageSong, sizeSong, amountSong) => {
    const updateSong = { idSong: idSong, nameSong: nameSong, IdCategorie: idCategorie, priceSong: priceSong, imageSong: imageSong, sizeSong: sizeSong, amountSong: amountSong };
    try {
        const SongPromise = await axios.put(defaultURL + "/UpdateSong/", updateSong);
        await dispatch(UpdateSong(SongPromise.data));
        const response = await SongPromise;
        return SongPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const removeSong = async (dispatch, id) => {
    try {
        const SongPromise = await axios.delete(defaultURL + "/RemoveSong?Id=" + id);
        await dispatch(RemoveSong(SongPromise));
        const response = await SongPromise.data;
        return SongPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const getByCategorie = async (dispatch, idCategory) => {
    try {
        debugger
        const SongPromise = await axios.get(defaultURL + "/GetByCategorie/" + idCategory);
        await dispatch(GetByCategorie(SongPromise.data));
        const response = await SongPromise;
        return SongPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}



