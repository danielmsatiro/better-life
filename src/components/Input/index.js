import { Container } from "./style";

function Input({ register, nome, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <input {...register(nome)} {...rest} />
    </Container>
  );
}

export default Input;
