import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import userData from "../../userData.json"
import friends from "../../friends.json";
import transaction from "../../transactions.json"
import css from "../App/App.module.css"
export default function App() {
  return (
    <div className={css.container} >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transaction} />
    </div>
  );
}
