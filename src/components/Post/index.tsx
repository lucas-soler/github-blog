import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { RepositoryIssue } from "../../pages/Home";
import { PostContainer } from "./styles";

interface PostProps {
  issue: RepositoryIssue;
}

export function Post({ issue: { number, title, body } }: PostProps) {
  const theme = useTheme();

  return (
    <PostContainer>
      <Link to={`/post/${number}`} style={{ color: theme["blue-200"] }}>
        <header>
          <h1>{title}</h1>
          <span>Há 1 dia</span>
        </header>
        <div className="post-body">
          <ReactMarkdown>{body + body}</ReactMarkdown>
        </div>
      </Link>
    </PostContainer>
  );
}
