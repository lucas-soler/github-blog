import ArrowUp from "../../assets/arrow-up.svg";
import BuildingIcon from "../../assets/building.svg";
import GitHubIcon from "../../assets/github.svg";
import UserGroupIcon from "../../assets/user-group.svg";

import { GitHubUser } from "../../pages/Home";
import { ProfileContainer, ProfileSectionContainer } from "./styles";

interface ProfileProps {
  gitHubUser: GitHubUser;
}

export function Profile({ gitHubUser }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={gitHubUser.avatar_url} width={148} height={148} id="avatar" />
      <ProfileSectionContainer>
        <article>
          <div>
            <h1>Lucas Soler</h1>
            <section>
              <a href="https://github.com/lucas-soler" target="_blank">
                <span>GitHub</span> <img src={ArrowUp} />
              </a>
            </section>
          </div>
          <p>{gitHubUser.bio}</p>
        </article>
        <footer>
          <section>
            <img src={GitHubIcon} /> <span>{gitHubUser.login}</span>
          </section>
          <section>
            <img src={BuildingIcon} /> <span>{gitHubUser.company}</span>
          </section>
          <section>
            <img src={UserGroupIcon} />
            <span>{gitHubUser.followers} seguidores</span>
          </section>
        </footer>
      </ProfileSectionContainer>
    </ProfileContainer>
  );
}
