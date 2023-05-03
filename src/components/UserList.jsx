import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../styles/UserList.css'

const UserList = () => {

    const [userListCount, setUserListCount] = useState(0);

    useEffect(() => {
        // Retrieve the user lists from local storage
        const storedUserLists = localStorage.getItem("users");
        const userLists = storedUserLists ? JSON.parse(storedUserLists) : [];

        // Update the user list count
        setUserListCount(userLists.length);
    }, []);
    console.log(userListCount);
    return (
        <div>
            <Navbar />
            <div className="user-list">
                <p>Total No. of Users : {userListCount}</p>
            </div>
        </div>
    );
}

export default UserList;