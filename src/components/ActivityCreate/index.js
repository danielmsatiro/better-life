import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./styles";
import { useMyGroups } from "../../providers/mygroups";

export const ActivityCreate = ({ closeFunction, identity }) => {
  const dateTime = [
    "00:00",
  ];

  const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    date: yup.string().required("Categoria obrigatória"),
    time: yup.string().required("Descrição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const { createActivity } = useMyGroups();

  const handleMaker = (data) => {
    createActivity(data);
    console.log(data, "submit")
  };

  return (
    <Card
      titulo="Criar Nova Atividade"
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
            nome="name"
            register={register}
            error={errors.title?.message}
          />

          <Select
            label="Data"
            nome="date"
            register={register}
            error={errors.category?.message}
            options={Category}
          />

          <Select
            label="Horário"
            nome="time"
            register={register}
            error={errors.category?.message}
            options={dateTime}
          />
        </Form>
      </Container>
    </Card>
  );
};