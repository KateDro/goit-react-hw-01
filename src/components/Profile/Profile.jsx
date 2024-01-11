const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" />
      <h2>{username}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
      <p>{followers}</p>
      <p>{views}</p>
      <p>{likes}</p>
    </div>
  );
};

export default Profile;
