import { Container } from "./styles";
import photoDraw from "../../assets/photo-draw.jpeg";
import leaves from "../../assets/leaves.jpeg";
import flower from "../../assets/flower.jpeg";

export function Header() {
  return (
    <Container>
      {/* photo credited to Davi Moreira from Unsplash */}
      <img src={flower}></img>
      <div className="title">
        <h1>
          valentina <br />
          garavaglia
        </h1>
        <h2>front-end developer</h2>
      </div>
    </Container>
  );
}
