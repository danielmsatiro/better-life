import { CardHeader, Container } from "./style";
// import Form from "../Form";
import Button from "../Button";
// import Input from "../Input";

const Card = ({ Children, titulo, action, actionFunction, deleteFunction }) => {
  return (
    <Container>
      <CardHeader>
        <div className="action">
          <span>{titulo}</span>
        </div>
        <div className="button-holder">
          <Button className="exec" onClick={() => actionFunction()}>
            {action}
          </Button>
          <Button
            className="delete"
            onClick={() => {
              deleteFunction();
            }}
          >
            X
          </Button>
        </div>
      </CardHeader>
      {/* Aqui dev ir um Children <Form className="card-form"></Form> 
          Não esqueça descomentar as importações do Form e Input*/}
      {Children}
    </Container>
  );
};

export default Card;
