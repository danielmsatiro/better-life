import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";

export const HabitMaker = ({ closeFunction }) => {
  const Difficulty = ["Fácil", "Médio", "Díficil"];
  const Category = ["Saude", "Leitura"];
  const Frequency = ["Diário", "Semanal", "Mensal", "Anual"];

  const Schema = yup.object().shape({
    title: yup.string().required("name is required"),
    difficulty: yup.string().required("name is required"),
    category: yup.string().required("name is required"),
    frequency: yup.string().required("name is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  return (
    <Card
      titulo="Criar Novo Habito"
      action="Criar"
      closeFunction={closeFunction}
    >
      <Container>
        <Form className="card-form" onSubmit={() => handleSubmit()}>
          <Input
            label="Titulo"
            nome="title"
            register={register}
            error={errors.title?.message}
          />
          <Select
            label="Dificuldade"
            nome="difficulty"
            register={register}
            error={errors.difficulty?.message}
            options={Difficulty}
          />
          <Select
            label="Categoria"
            nome="category"
            register={register}
            error={errors.category?.message}
            options={Category}
          />
          <Select
            label="Frequência"
            nome="frequency"
            register={register}
            error={errors.frequency?.message}
            options={Frequency}
          />
        </Form>
      </Container>
    </Card>
  );
};
