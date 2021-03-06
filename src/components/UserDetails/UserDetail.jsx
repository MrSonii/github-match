export default function UserDetail({ apiData, split }) {
  const detailItems = [
    "name",
    "bio",
    "followers",
    "following",
    "location",
    "public_gists",
    "public_repos",
  ];

  const texts = [
    "Name",
    "Bio",
    "Follower-Count",
    "following",
    "User-Location",
    "Public-gists",
    "Public-Repos",
  ];

  return (
    <div className={`detail-element ${split}`}>
      {detailItems.map((item, ind) => (
        <p key={item}>{`${texts[ind]}: ${apiData[item]}`}</p>
      ))}
    </div>
  );
}
