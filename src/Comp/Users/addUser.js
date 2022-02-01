import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserByIdAndName } from "../../Redux/User/UserThunk";
import { addUser } from '../../Redux/User/UserThunk';
export default function AddUser() {
    let Name = "";
    let UserName = "";
    let UserCode = "";
    let Code = "";
    let check;
    const dispach = useDispatch();
    let myUsersAfterAdd;
    debugger
    const func = async (event) => {
        debugger
        event.preventDefault();
        // setname(event.target["name"].value);
        Name = event.target["Name"].value;
        UserName = event.target["UserName"].value;
        UserCode = event.target["UserCode"].value;
        Code = event.target["Code"].value;
        check = await getUserByIdAndName(dispach, UserCode,UserName);
        debugger
        console.log(check);
        if (check == "") {
            myUsersAfterAdd = await addCustummerToserver(dispach, Code, UserCode, UserName, Name);
            console.log(myUsersAfterAdd);
            alert("נוספת בהצלחה למערכת!");
        }
        else {
            alert("שם משתמש ואו סיסמא קיימים כבר נסה שם אחר..");
        }

    }
    return <>
        <form onSubmit={func}  >
            <input placeholder="enter your name" id="Name" />
            <input placeholder="enter your user name" id="UserName" />
            <input type="password" placeholder="enter your pass" id="UserCode" />
            <input placeholder="enter your code" id="Code" />
            <input type="submit" value="OK!" />
        </form>
    </>
}
