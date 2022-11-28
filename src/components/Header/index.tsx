import { Container } from "./styles";
import photoDraw from "../../assets/photo-draw.jpeg";

export function Header() {
  return (
    <Container>
      <div>
        <img src={photoDraw}></img>
      </div>
      <div className="title">
        <h1>valentina</h1>
        <h1>garavaglia</h1>
        <h2>front-end developer</h2>
      </div>
    </Container>
  );
}
