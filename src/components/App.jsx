import React from "react";
import styles from "../index.css";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import FriendListItem from "./FriendListItem/FriendListItem";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <Statistics 
        title="Upload stats" 
        stats={data} 
      />
      <FriendList 
        friends={friends} 
      />;
      <FriendListItem 
        avatar="https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
        name="Mango"
        isOnline="true"
        id="666"
      />;
      <TransactionHistory
        items={transactions} 
      />;
    </div>
  );
};
