import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import CalendarIcon from "../../assets/calendar.svg";
import CommentsIcon from "../../assets/comments.svg";
import GitHubIcon from "../../assets/github.svg";
import { api } from "../../lib/axios";
import { RepositoryIssue } from "../Home";
import {
  PostBodyContainer,
  PostContainer,
  PostFooterContainer,
  PostHeaderContainer,
} from "./styles";

export function Post() {
  const { id } = useParams();

  const [post, setPost] = useState<RepositoryIssue>();

  useEffect(() => {
    const getIssuePost = async () => {
      const response = await api.get<RepositoryIssue>(
        `repos/lucas-soler/github-blog/issues/${id}`
      );

      setPost(response.data);
    };

    getIssuePost();
  }, []);

  return (
    <PostContainer>
      {post && (
        <>
          <PostHeaderContainer>
            <div>
              <span>
                <Link to="/">
                  <span>{"<"}</span> <span>Voltar</span>
                </Link>
              </span>
              <span>
                <a
                  href={`https://github.com/lucas-soler/github-blog/issues/${post.number}`}
                  target="_blank"
                >
                  Ver no GitHub
                </a>
              </span>
            </div>
            <div>
              <h1>{post.title}</h1>
            </div>
            <PostFooterContainer>
              <section>
                <img src={GitHubIcon} /> <span>{post.user.login}</span>
              </section>
              <section>
                <img src={CalendarIcon} />{" "}
                <span>
                  {formatDistance(new Date(post.created_at), new Date(), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </section>
              <section>
                <img src={CommentsIcon} />
                <span>{post.comments} comentários</span>
              </section>
            </PostFooterContainer>
          </PostHeaderContainer>
          <PostBodyContainer>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </PostBodyContainer>
        </>
      )}
    </PostContainer>
  );
}
