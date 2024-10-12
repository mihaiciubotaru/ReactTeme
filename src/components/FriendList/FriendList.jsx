import React from "react";

import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends}) => {
    const listItems = friends.map(friend =>
        <li>
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        </li>
    )   
    return(
        <ul class="friend-list">
            {listItems}
        </ul>
    )

}

export default FriendList;

//date props:
// friends - o matrice cu obiecte FriendListItem