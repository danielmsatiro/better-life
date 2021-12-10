import { Container } from "./style";

const ButtonGroup = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default ButtonGroup;
