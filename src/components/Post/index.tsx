import { Link } from "react-router-dom";
import { PostContainer } from "./styles";

export function Post() {
  return (
    <Link to={"/post"}>
      <PostContainer>
        <div>
          <h1>Javascript data types and Data Strucutures</h1>
          <span>Há 1 dia</span>
        </div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>
      </PostContainer>
    </Link>
  );
}
