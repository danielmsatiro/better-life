import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useMyHabits } from "../../providers/myHabits";

export const HabitEditor = ({ closeFunction, identity, item }) => {
  // console.log(item);
  const Difficulty = ["Fácil", "Médio", "Díficil"];
  const Category = [
    "Saúde",
    "Profissional",
    "Intelectual",
    "Lazer",
    "Espiritual",
    "Domésticos",
  ];
  const Frequency = ["Diário", "Semanal", "Mensal", "Anual"];
  const Booleano = ["false", "true"];
  const [currentHabit, setCurrentHabit] = useState(item);
  const [how_much_achieved, setHow_much_achieved] = useState(
    currentHabit.how_much_achieved
  );

  // console.log(how_much_achieved);
  // useEffect(() => {
  //   setCurrentHabit(currentHabit);
  // }, []);
  const Schema = yup.object().shape({
    title: yup.string().required("title is required"),
    difficulty: yup.string().required("difficulty is required"),
    category: yup.string().required("category is required"),
    frequency: yup.string().required("frequency is required"),
    achieved: yup.string().required("achieved is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const { editHabit } = useMyHabits();

  const Sender = (data, id) => {
    id = currentHabit.id;
    const user = currentHabit.user;
    const complete = { ...data, how_much_achieved, user, id };
    editHabit(complete, id);
  };

  const disminuye = () => {
    how_much_achieved > 0 && setHow_much_achieved(how_much_achieved - 1);
  };

  const aumenta = () => {
    setHow_much_achieved(how_much_achieved + 1);
  };

  return (
    <Card
      titulo="Editar Habito"
      action="Salvar"
      closeFunction={closeFunction}
      identity={identity}
    >
      <Container>
        <Form
          id={identity}
          className="card-form"
          onSubmit={handleSubmit(Sender)}
        >
          <Input
            label="Titulo"
            nome="title"
            register={register}
            error={errors.title?.message}
            defaultValue={item.title}
          />
          <Select
            label="Dificuldade"
            nome="difficulty"
            register={register}
            error={errors.difficulty?.message}
            options={Difficulty}
            defaultValue={currentHabit.difficulty}
          />
          <Select
            label="Categoria"
            nome="category"
            register={register}
            error={errors.category?.message}
            options={Category}
            defaultValue={currentHabit.category}
          />
          <Select
            label="Frequência"
            nome="frequency"
            register={register}
            error={errors.frequency?.message}
            options={Frequency}
            defaultValue={currentHabit.frequency}
          />
          <Select
            label="Completado"
            nome="achieved"
            register={register}
            error={errors.frequency?.message}
            options={Booleano}
            defaultValue={currentHabit.achieved}
          />
          <p>Progresso</p>
          <div className="quantificador">
            <Button type="button" className="btnMinus" onClick={disminuye}>
              -
            </Button>
            <p>{how_much_achieved}</p>
            <Button type="button" className="btnPlus" onClick={aumenta}>
              +
            </Button>
          </div>
        </Form>
      </Container>
    </Card>
  );
};
