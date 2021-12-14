import { Container } from "./style";

function Input({ label, register, nome, error, textarea, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <div>
        {label} {!!error && <span>: {error} </span>}
      </div>
      {!textarea ? (
        <input {...register(nome)} {...rest} />
      ) : (
        <textarea {...register(nome)} {...rest} />
      )}
    </Container>
  );
}

export default Input;
