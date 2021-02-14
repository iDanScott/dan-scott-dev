import Icon from './Icon';

const links = [
  {
    icon: "twitter",
    url: "https://twitter.com/DanDecrypted"
  },
  {
    icon: "github",
    url: "https://github.com/DanDecrypted"
  },
  {
    icon: "twitch",
    url: "https://twitch.tv/CoderDan"
  },
  {
    icon: "linkedin",
    url: "https://linkedin.com/in/iDanScott"
  },
  {
    icon: "mail",
    url: "mailto:dan.scott.dev@protomail.com"
  },
]

const SocialLinks = () => 
  <div className="social-links">
    <ul className="ls-none p-0">
      {links.map((link) => 
        <li className="d-inline p-1">
          <a href={link.url} target="_blank" rel="noreferrer">
            <Icon icon={link.icon}></Icon>
          </a>
        </li>
      )}
    </ul>
  </div>;

export default SocialLinks;