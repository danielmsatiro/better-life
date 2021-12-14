import { Container } from "./style";

function TextArea({ label, register, nome, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <div>
        {label} {!!error && <span>: {error} </span>}
      </div>

      <textarea {...register(nome)} {...rest} />
    </Container>
  );
}

export default TextArea;
