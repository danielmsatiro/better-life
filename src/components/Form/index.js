import { Container } from "./style";

const Form = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Form;
