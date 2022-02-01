export function GetKatagoryToSongBySongCode(KatagoryToSongToSong) {
    return { type: "GET_KATAGORY_TO_SONG_BY_SONG_CODE",payload:KatagoryToSong }
}
export function GetAllKatagoryToSongs(KatagoryToSong) {
    return { type: "GET_ALL_KATAGORYTOSONGS",payload:KatagoryToSong }
}
export function AddKatagoryToSong(KatagoryToSong) {
    return { type: "ADD_KATAGORYTOSONG",payload:KatagoryToSong }
}
export function RemoveKatagoryToSong(KatagoryToSong) {
    return { type: "REMOVE_KATAGORYTOSONG",payload:KatagoryToSong }
}
export function UpdateKatagoryToSong(KatagoryToSong) {
    return { type: "UPDATE_KATAGORYTOSONG",payload:KatagoryToSong }
}
export function GetByKatagoryCode(KatagoryToSong) {
    return { type: "GET_BY_KATAGORY_CODE",paylod:KatagoryToSong }
}
export function GetByCode(Code) {
    return { type: "GET_BY__CODE",paylod:Code }
}