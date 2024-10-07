const FriendList = () => {
    return (
        <li class="item">
            <span class="status"></span>
            <img class="avatar" src="" alt="User avatar" width="48" />
            <p class="name"></p>
        </li>
    )
}

export default FriendList;

//date props:
// avatar - link către avatar
// name - numele prietenului
// isOnline - valoarea boolean care specifică statusul prietenului: online sau nu.