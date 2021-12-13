import { Container } from "./style";

function Select({ label, register, nome, options, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <div>
        {label} {!!error && <span>: {error}</span>}
      </div>
      <select {...register(nome)} {...rest}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Select;
