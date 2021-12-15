import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { useState } from "react";
import { useMyGroups } from "../../providers/mygroups";

export const ActivityEdit = ({ closeFunction, identity, activity }) => {

  const { editActivity } = useMyGroups();

  const Schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleEditor = (data) => {
    editActivity(data, currentAct.id);
  };

  const [currentAct, setCurrentAct] = useState(activity);

  return (
    <Card
      titulo="Editar Atividade"
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
            value={currentAct.name}
            onChange={(e) =>
                setCurrentAct({ ...currentAct, title: e.target.value })
           }
        />

        </Form>
      </Container>
    </Card>
  );
};
