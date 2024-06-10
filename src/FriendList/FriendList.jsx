import "./FriendList.css";

export default function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map((f) => {
        return <FriendListItem key={f.id} friend={f} />;
      })}
    </ul>
  );
}

function FriendListItem({ friend }) {
  return (
    <li className="friendCard">
      <img src={friend.avatar} alt="Avatar" width="48" className="friendAva" />
      <p className="friendName">{friend.name}</p>
      {friend.isOnline ? (
        <p className="online">Online</p>
      ) : (
        <p className="offline">Offline</p>
      )}
    </li>
  );
}
