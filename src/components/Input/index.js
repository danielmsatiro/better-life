import { Container } from "./style";

function Input({ register, nome, label, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <label>{label}</label>
      <input {...register(nome)} {...rest} />
    </Container>
  );
}

export default Input;
