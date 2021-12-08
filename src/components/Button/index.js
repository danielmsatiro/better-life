import { Container } from "./style";

const Button = ({ children, whiteSchema, ...rest }) => (
  <Container whiteSchema={whiteSchema} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
