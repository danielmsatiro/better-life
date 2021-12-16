import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";
import { useMyGroups } from "../../providers/mygroups";

export const GroupCreate = ({ closeFunction, identity }) => {
  const Category = [
    "Saúde",
    "Profissional",
    "Intelectual",
    "Lazer",
    "Espiritual",
    "Domésticos",
  ];

  const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const { createGroup } = useMyGroups();

  const handleMaker = (data) => {
    createGroup(data)
      .then((_) => closeFunction())
      .catch((_) => closeFunction());
  };

  return (
    <Card
      titulo="Criar Novo Grupo"
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
            label="Nome"
            nome="name"
            register={register}
            error={errors.title?.message}
          />

          <Select
            label="Categoria"
            nome="category"
            register={register}
            error={errors.category?.message}
            options={Category}
          />
          <TextArea
            label="Descrição"
            nome="description"
            register={register}
            error={errors.description?.message}
          />
        </Form>
      </Container>
    </Card>
  );
};
