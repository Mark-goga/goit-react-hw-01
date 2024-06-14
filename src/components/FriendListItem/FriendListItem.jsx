import css from "../FriendListItem/FriendListItem.module.css"


export default function FriendListItem({ friend }) {
    const classStatus = [css.text];
    if (friend.isOnline) {
        classStatus.push(css.isOnline);
    } else {
        classStatus.push(css.isOfline);
    }
      return (
        <div className={css.container}>
          <img src={friend.avatar} alt="Avatar" width="48" />
          <p className={css.text}>{friend.name}</p>
          <p className={classStatus.join(" ")}>{friend.isOnline ? "Online" : "Offline"}</p>
        </div>
      );
}