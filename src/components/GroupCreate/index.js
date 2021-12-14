import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";

export const GroupCreate = ({ closeFunction }) => {
  const Category = [
    "Saúde",
    "Profissional",
    "Intelectual",
    "Lazer",
    "Espiritual",
    "Domésticos",
  ];

  const Schema = yup.object().shape({
    title: yup.string().required("Name obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleMaker = (data) => {
    console.log("Criar grupo", data);
  };

  return (
    <Card
      titulo="Criar Novo Grupo"
      action="Criar"
      closeFunction={closeFunction}
      idForm={3}
    >
      <Container>
        <Form id={3} className="card-form" onSubmit={handleSubmit(handleMaker)}>
          <Input
            label="Titulo"
            nome="title"
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
