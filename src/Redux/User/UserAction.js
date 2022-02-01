export function GetUser(User) {
    return { type: "GET_USER",payload:User }
}
export function GetAllUsers(User) {
    return { type: "GET_ALL_USERS",payload:User }
}
export function AddUser(User) {
    return { type: "ADD_USER",payload:User }
}
export function RemoveUser(User) {
    return { type: "REMOVE_USER",payload:User }
}
export function UpdateUser(User) {
    return { type: "UPDATE_USER",payload:User }
}
export function GetByCategorie(User) {
    return { type: "GET_BY_CATEGORIE",paylod:User }
}