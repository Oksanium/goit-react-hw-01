import "./Profile.css";

export default function Profile({ image, name, tag, location, stats }) {
  return (
    <div className="profile">
      <div>
        <img src={image} alt="User avatar" className="ava" />
        <p className="userName">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="tag">{location}</p>
      </div>

      <ul className="stats">
        <StatsItem type="Followers" value={stats.followers} />
        <StatsItem type="Views" value={stats.views} />
        <StatsItem type="Likes" value={stats.likes} />
      </ul>
    </div>
  );
}

function StatsItem({ type, value }) {
  return (
    <li className="statsItem">
      <span>{type}</span>
      <span className="statsValue">{value}</span>
    </li>
  );
}
