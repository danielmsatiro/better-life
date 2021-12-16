import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./styles";
import { useMyGroups } from "../../providers/mygroups";

export const ActivityCreate = ({ closeFunction, identity, group_id }) => {
  const yearOp = ["2021", "2022", "2023", "2024", "2025", "2025"];
  const monthOp = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const dayOp = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

  const Schema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    year: yup.string().required("Data obrigatória"),
    month: yup.string().required("Data obrigatória"),
    day: yup.string().required("Data obrigatória"),
    time: yup
      .string()
      .required("Horário obrigatória")
      .matches(/^[0-2][0-3]:[0-5][0-9]$/, "Horário inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const { createActivity } = useMyGroups();

  const handleMaker = (data) => {
    console.log(data);
    const realization_time = `${data.year}-${data.month}-${data.day}T${data.time}:00Z`;
    const newData = { title: data.title, realization_time, group: group_id };
    console.log(newData);
    createActivity(newData);
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
            nome="title"
            register={register}
            error={errors.title?.message}
          />

          <div className="Date_box">
            <Select
              label="Ano"
              nome="year"
              register={register}
              options={yearOp}
              error={errors.year?.message}
            />

            <Select
              label="Mês"
              nome="month"
              register={register}
              options={monthOp}
              error={errors.month?.message}
            />

            <Select
              label="Dia"
              nome="day"
              register={register}
              options={dayOp}
              error={errors.day?.message}
            />
          </div>

          <Input
            label="Horário | 00:00"
            nome="time"
            register={register}
            defaultValue="12:00"
            error={errors.time?.message}
          />
        </Form>
      </Container>
    </Card>
  );
};
