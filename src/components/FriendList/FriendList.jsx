import "./FriendList.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map((f) => {
        return <FriendListItem key={f.id} friend={f} />;
      })}
    </ul>
  );
}
