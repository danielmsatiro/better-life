import { CardHeader, Container } from "./style";
// import Form from "../Form";
import Button from "../Button";
// import Input from "../Input";

const Card = ({ Children }) => {
  return (
    <Container>
      <CardHeader>
        <div className="action">
          <span>Titulo</span>
        </div>
        <div className="button-holder">
          <Button className="exec">Button</Button>
          <Button className="delete">X</Button>
        </div>
      </CardHeader>
      {/* Aqui dev ir um Children <Form className="card-form"></Form> 
          Não esqueça descomentar as importações do Form e Input*/}
      {Children}
    </Container>
  );
};

export default Card;
