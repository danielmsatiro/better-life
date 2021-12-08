import { Container } from "./style";

function Input({ label, register, nome, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <div>
        {label} {!!error && <span>: {error} </span>}
      </div>
      <input {...register(nome)} {...rest} />
    </Container>
  );
}

export default Input;
