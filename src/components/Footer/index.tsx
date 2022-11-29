import { LinkedIn } from "../../assets/icons/linkedIn";
import { Github } from "../../assets/icons/github";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="socialMedia">
        <LinkedIn />
        <Github />
      </div>
    </Container>
  );
}
