import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";
import { useState } from "react";
import TextArea from "rc-textarea";

export const GroupEdit = ({ closeFunction, group }) => {
  //O parâmetro group é um objeto com todas as informações

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

  const handleEditor = (data, id) => {
    console.log("Editar grupo", data);
  };

  const [currentGroup, setCurrentGroup] = useState(group);

  return (
    <Card
      titulo="Editar Novo Grupo"
      action="Editar"
      closeFunction={closeFunction}
      idForm={4}
    >
      <Container>
        <Form
          id={4}
          className="card-form"
          onSubmit={handleSubmit(handleEditor)}
        >
          <Input
            label="Titulo"
            nome="title"
            register={register}
            error={errors.title?.message}
            value={currentGroup.name}
            onChange={(e) =>
              setCurrentGroup({ ...currentGroup, name: e.target.value })
            }
          />

          <Select
            label="Categoria"
            nome="category"
            register={register}
            error={errors.category?.message}
            options={Category}
            selected={currentGroup.category}
          />
          <TextArea
            label="Descrição"
            nome="description"
            register={register}
            error={errors.description?.message}
            value={currentGroup.description}
            onChange={(e) =>
              setCurrentGroup({ ...currentGroup, description: e.target.value })
            }
          />
        </Form>
      </Container>
    </Card>
  );
};