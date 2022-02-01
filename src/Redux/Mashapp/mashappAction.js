export function GetMashapp(Mashapp) {
    return { type: "GET_Mashapp",payload:Mashapp }
}
export function GetAllMashapps(Mashapp) {
    return { type: "GET_ALL_MASHAPPS",payload:Mashapp }
}
export function AddMashapp(Mashapp) {
    return { type: "ADD_MASHAPP",payload:Mashapp }
}
export function RemoveMashapp(Mashapp) {
    return { type: "REMOVE_MASHAPP",payload:Mashapp }
}
export function UpdateMashapp(Mashapp) {
    return { type: "UPDATE_MASHAPP",payload:Mashapp }
}
export function GetByUserCode(id) {
    return { type: "GET_BY_USER_CODE",paylod:id }
}