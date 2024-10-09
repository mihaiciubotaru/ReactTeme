
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends}) => {

    // const listItems = stats.map(item0 =>
    //     <li class="item">
    //         <span class="label">{item0.label}</span>
    //         <span class="percentage">{item0.percentage}</span>
    //     </li>
    // )

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
        // <div>qwqwqw</div>
    )

}

export default FriendList;

//date props:
// friends - o matrice cu obiecte FriendListItem