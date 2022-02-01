export function GetSong(song) {
    return { type: "GET_SONG",payload:song }
}
export function GetAllSongs(song) {
    return { type: "GET_ALL_SONGS",payload:song }
}
export function AddSong(song) {
    return { type: "ADD_SONG",payload:song }
}
export function RemoveSong(song) {
    return { type: "REMOVE_SONG",payload:song }
}
export function UpdateSong(song) {
    return { type: "UPDATE_SONG",payload:song }
}
export function GetByCategorie(song) {
    return { type: "GET_BY_CATEGORIE",paylod:song }
}