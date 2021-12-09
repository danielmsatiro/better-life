import { Container } from "./style";

const Button = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;
