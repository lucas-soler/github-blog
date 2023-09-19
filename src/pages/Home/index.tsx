import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { api } from "../../lib/axios";
import { HomeContainer, SearchContainer } from "./styles";

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

export interface RepositoryIssue {
  user: GitHubUser;
  id: number;
  number: number;
  comments: number;
  url: string;
  title: string;
  body: string;
  created_at: string;
}

interface GitHubRepositoryIssue {
  items: RepositoryIssue[];
}

export function Home() {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser>();
  const [searchedIssues, setSearchedIssues] = useState<RepositoryIssue[]>();

  const [repositoryIssues, setRepositoryIssues] = useState<RepositoryIssue[]>();

  const getGitHubUser = async () => {
    const response = await api.get<GitHubUser>("users/lucas-soler");

    setGitHubUser(response.data);
  };

  const getRepositoryIssues = async () => {
    const response = await api.get<GitHubRepositoryIssue>(
      `/search/issues?q=%20repo:lucas-soler/github-blog`
    );

    setRepositoryIssues(response.data.items);
    setSearchedIssues(response.data.items);
  };

  useEffect(() => {
    getGitHubUser();
    getRepositoryIssues();
  }, []);

  // ATENÇÃO! Eu fiz assim e não sempre requisitando a API do GitHub
  // quando o usuário pesquisa porque a API retorna exceção dependendo da
  // quantidade de requições contra ela. Então busquei todas no primeiro carregamento
  // e depois filtro a carga inicial. Também renovo a carga inicial quando o
  // usuário limpa o campo de pesquisa, pra garantir que sempre temos o conteúdo atualizado

  const handleChangeSearchTerm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchedExpression = event.target.value.toLocaleLowerCase().trim();

    if (searchedExpression.length > 0) {
      const filteredIssues = repositoryIssues!.filter(
        (issue) =>
          issue.title.toLowerCase().includes(searchedExpression) ||
          issue.body.toLowerCase().includes(searchedExpression)
      );

      setSearchedIssues(filteredIssues);
    } else {
      getRepositoryIssues();
    }
  };

  return (
    <HomeContainer>
      {gitHubUser && (
        <>
          <section>
            <Profile gitHubUser={gitHubUser} />
          </section>
          <SearchContainer>
            <header>
              <span>Publicações</span>
              <span>
                {searchedIssues
                  ? `${searchedIssues.length} publicações`
                  : "carregando..."}
              </span>
            </header>
            <section>
              <input
                type="text"
                autoFocus={true}
                placeholder="Buscar conteúdo"
                onChange={handleChangeSearchTerm}
              />
            </section>
          </SearchContainer>
          <section>
            {searchedIssues
              ? searchedIssues.length > 0
                ? searchedIssues.map((issue) => (
                    <Post issue={issue} key={`issue-post-${issue.id}`} />
                  ))
                : "Nenhum resultado encontrado"
              : "Carregando"}
          </section>
        </>
      )}
    </HomeContainer>
  );
}
