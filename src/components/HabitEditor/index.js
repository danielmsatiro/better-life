import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";
import Button from "../Button";
import { useState } from "react";
import { useMyHabits } from "../../providers/myHabits";

export const HabitEditor = ({ closeFunction, identity, item }) => {
  const Difficulty = ["Fácil", "Médio", "Díficil"];
  const Category = [
    "Saúde",
    "Profissional",
    "Intelectual",
    "Lazer",
    "Espiritual",
    "Domésticos",
  ];
  const Frequency = ["Diário", "Semanal"];
  const [currentHabit] = useState(item);
  const [how_much_achieved, setHow_much_achieved] = useState(
    currentHabit.how_much_achieved
  );

  const Schema = yup.object().shape({
    title: yup.string().required("title is required"),
    difficulty: yup.string().required("difficulty is required"),
    category: yup.string().required("category is required"),
    frequency: yup.string().required("frequency is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const { editHabit } = useMyHabits();

  const progressBar = (period) => {
    if (period === "Diário") {
      return (parseInt(how_much_achieved) * (100 / 21)).toFixed(0);
    }
    if (period === "Semanal") {
      return (parseInt(how_much_achieved) * (100 / 4)).toFixed(0);
    }
  };

  const lapso = currentHabit.frequency;

  const Sender = (data, id) => {
    const achieved = progressBar(lapso) === "100" ? true : false;
    id = currentHabit.id;
    const user = currentHabit.user;
    const complete = { ...data, how_much_achieved, user, id, achieved };
    editHabit(complete, id)
      .then((_) => closeFunction())
      .catch((_) => closeFunction());
  };

  const disminuye = () => {
    how_much_achieved > 0 && setHow_much_achieved(how_much_achieved - 1);
  };

  const aumenta = (period) => {
    if (period === "Diário") {
      how_much_achieved < 21 && setHow_much_achieved(how_much_achieved + 1);
    }
    if (period === "Semanal") {
      how_much_achieved < 4 && setHow_much_achieved(how_much_achieved + 1);
    }
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
          <p>Progresso</p>
          <div className="quantificador">
            <Button
              type="button"
              className="btnMinus"
              onClick={() => disminuye()}
            >
              -
            </Button>
            <p>{how_much_achieved}</p>
            <Button
              type="button"
              className="btnPlus"
              onClick={() => aumenta(lapso)}
            >
              +
            </Button>
          </div>
        </Form>
      </Container>
    </Card>
  );
};
