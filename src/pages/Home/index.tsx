import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { api } from "../../lib/axios";
import { HomeContainer } from "./styles";

export interface GitHubUser {
  id: number;
  login: string;
  url: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
}

export function Home() {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser>();

  useEffect(() => {
    console.log("Executando o useEffect");

    const getGitHubUserData = async () => {
      const response = await api.get<GitHubUser>("users/lucas-soler");

      setGitHubUser(response.data);
    };

    getGitHubUserData();
  }, []);

  console.log(gitHubUser);

  return (
    <HomeContainer>
      {gitHubUser && (
        <>
          <section>
            <Profile gitHubUser={gitHubUser} />
          </section>
          <section>Campo de busca</section>
          <section>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </section>
        </>
      )}
    </HomeContainer>
  );
}
