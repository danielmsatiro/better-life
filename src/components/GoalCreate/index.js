import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";
import { useMyGroups } from "../../providers/mygroups";

export const GoalCreate = ({ closeFunction, identity, group_id }) => {
  const difficulty = ["Fácil", "Médio", "Difícil"];

  const Schema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const { createGoal } = useMyGroups();

  const handleMaker = (data) => {
    const newData = { ...data, group: group_id, how_much_achieved: 0 };
    createGoal(newData);
  };

  return (
    <Card
      titulo="Criar Nova Meta"
      action="Criar"
      closeFunction={closeFunction}
      identity={identity}
    >
      <Container>
        <Form
          id={identity}
          className="card-form"
          onSubmit={handleSubmit(handleMaker)}
        >
          <Input
            label="Título"
            nome="title"
            register={register}
            error={errors.title?.message}
          />

          <Select
            label="Dificuldade"
            nome="difficulty"
            register={register}
            error={errors.difficulty?.message}
            options={difficulty}
          />
        </Form>
      </Container>
    </Card>
  );
};
