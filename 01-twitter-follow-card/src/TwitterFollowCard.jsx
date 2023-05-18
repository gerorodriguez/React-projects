import { useState } from "react";

export function TwitterFollowCard({ children, userName = "unknown" }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  console.log(isFollowing);
  const img = `https://unavatar.io/${userName}`;
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={img}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleFollowClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
