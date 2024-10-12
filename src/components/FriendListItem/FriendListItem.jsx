import React from "react";
const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

export default FriendListItem;

// props:
//     avatar - link către avatar
//     name - numele prietenului
//     isOnline - valoarea boolean care specifică statusul prietenului: online sau nu.