export function GetKatagory(Katagory) {
    return { type: "GET_Katagory",payload:Katagory }
}
export function GetAllKatagorys(Katagory) {
    return { type: "GET_ALL_KATAGORYS",payload:Katagory }
}
export function AddKatagory(Katagory) {
    return { type: "ADD_KATAGORY",payload:Katagory }
}
export function RemoveKatagory(Katagory) {
    return { type: "REMOVE_KATAGORY",payload:Katagory }
}
export function UpdateKatagory(Katagory) {
    return { type: "UPDATE_KATAGORY",payload:Katagory }
}
export function GetByCategorie(Katagory) {
    return { type: "GET_BY_CATEGORIE",paylod:Katagory }
}