import { CardHeader, Container } from "./style";
import Button from "../Button";

const Card = ({ children, titulo, action, closeFunction, identity }) => {
  return (
    <Container>
      <CardHeader>
        <div className="action">
          <span>{titulo}</span>
        </div>
        <div className="button-holder">
          <Button
            className="exec"
            submit
            form={identity}
            /* onClick={() => setTimeout(closeFunction)} */
          >
            {action}
          </Button>
          <Button className="close" onClick={closeFunction}>
            X
          </Button>
        </div>
      </CardHeader>
      {/* Aqui dev ir um Children <Form className="card-form"></Form> */}
      {children}
    </Container>
  );
};

export default Card;
