import { LinkedIn } from "../../assets/icons/linkedIn";
import { Github } from "../../assets/icons/github";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/valentina-garavaglia/"
          target="_blank"
        >
          <LinkedIn />
        </a>
        <a href="https://github.com/vaahxx" target="_blank">
          <Github />
        </a>
      </div>
    </Container>
  );
}
