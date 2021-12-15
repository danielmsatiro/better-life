import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";
import { useState } from "react";
import { useMyGroups } from "../../providers/mygroups";

export const GoalEdit = ({ closeFunction, identity, goal }) => {
  //O parâmetro goal é um objeto com todas as informações
  const { editGoal } = useMyGroups();

  const difficulty = ["Fácil", "Médio", "Difícil"];

  const Schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleEditor = (data) => {
    editGoal(data, currentGoal.id);
  };

  const [currentGoal, setCurrentGoal] = useState(goal);

  return (
    <Card
      titulo="Editar Meta"
      action="Editar"
      closeFunction={closeFunction}
      identity={identity}
    >
      <Container>
        <Form
          id={identity}
          className="card-form"
          onSubmit={handleSubmit(handleEditor)}
        >
          <Input
            label="Titulo"
            nome="title"
            register={register}
            error={errors.title?.message}
            value={currentGoal.name}
            onChange={(e) =>
              setCurrentGoal({ ...currentGoal, title: e.target.value })
            }
          />

          <Select
            label="Dificuldade"
            nome="difficulty"
            register={register}
            error={errors.difficulty?.message}
            options={difficulty}
            selected={currentGoal.difficulty}
          />
        </Form>
      </Container>
    </Card>
  );
};
