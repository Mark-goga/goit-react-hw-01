import css from "../Profile/Profile.module.css"


export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={ css.container}>
      <div className={css.userWrap}>
        <img
          src={image}
          alt="User avatar"
          className={css.img}
          width="50"
          height="50"
        />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.title}>{stats.followers }</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Views</span>
          <span className={css.title}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.title}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}