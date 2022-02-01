import axios from "axios"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { GetUser, GetAllUsers, AddUser, RemoveUser, UpdateUser, GetByCategorie } from './UserAction'
export const defaultURL = "https://localhost:44312"//!!!!!!!!!!!!!!!!!!!!!!!!!!צריך  להחליף!!!!!!!!!!!!!!!!!!!!!!!!!!



export const getAllUsersFromServer = async (dispatch) => {
    debugger
    const UsersPromise = await axios.get(defaultURL + "/GetAllUsers");
    try {
        await dispatch(GetAllUsers(UsersPromise));

        const response = UsersPromise.data;

        return response;
    }
    catch (e) {
        console.log(e)
    }

}
export const getUserByIdAndName = async (dispatch, id,pass) => {
    debugger
    const UserPromise = await axios.get(`${defaultURL}/GetUser/${id}`);
    try {
        await dispatch(GetUser(UserPromise));
        const response = await UserPromise.data;
        debugger;
        console.log(UserPromise.data)
        debugger
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
export const addUser = async (dispatch, Code, UserCode, UserName, Name) => {
    debugger
    const NewUser = { 
        Code: Code, 
        UserCode: UserCode,
         UserName: UserName,
          Name: Name };
    try {
        console.log("...", NewUser);

        const UserPromise = await axios.post(defaultURL + "/AddUser", NewUser);
        console.log(UserPromise);
        await dispatch(AddUser(UserPromise.data));
        const response = await UserPromise.data;
        return response;
    }
    catch (e) {
        console.log(e);

    }

    return User;
}
export const updateUser =async (dispatch, Code, UserCode, UserName, Name) => {
    const updateUser =  { 
        Code: Code, 
        UserCode: UserCode,
         UserName: UserName,
          Name: Name };
    try {
        const UserPromise = await axios.put(defaultURL + "/UpdateUser/", updateUser);
        await dispatch(UpdateUser(UserPromise.data));
        const response = await UserPromise;
        return UserPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const removeUser = async (dispatch, id) => {
    try {
        const UserPromise = await axios.delete(defaultURL + "/RemoveUser?Id=" + id);
        await dispatch(RemoveUser(UserPromise));
        const response = await UserPromise.data;
        return UserPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const getByCategorie = async (dispatch, idCategory) => {
    try {
        debugger
        const UserPromise = await axios.get(defaultURL + "/GetByCategorie/" + idCategory);
        await dispatch(GetByCategorie(UserPromise.data));
        const response = await UserPromise;
        return UserPromise.data;
    }
    catch (e) {
        console.log(e);
    }
}



