export function GetSongsAtMashapp(SongsAtMashapp) {
    return { type: "GET_SONGSATMASHAPP",payload:SongsAtMashapp }
}
export function GetAllSongsAtMashapps(SongsAtMashapp) {
    return { type: "GET_ALL_SONGSATMASHAPPS",payload:SongsAtMashapp }
}
export function AddSongsAtMashapp(SongsAtMashapp) {
    return { type: "ADD_SONGSATMASHAPP",payload:SongsAtMashapp }
}
export function RemoveSongsAtMashapp(SongsAtMashapp) {
    return { type: "REMOVE_SONGSATMASHAPP",payload:SongsAtMashapp }
}
export function UpdateSongsAtMashapp(SongsAtMashapp) {
    return { type: "UPDATE_SONGSATMASHAPP",payload:SongsAtMashapp }
}
export function GetByCategorie(SongsAtMashapp) {
    return { type: "GET_BY_CATEGORIE",paylod:SongsAtMashapp }
}