import { Container, Content } from "./styles";

interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <Container>
      <Content>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
