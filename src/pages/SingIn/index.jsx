import { useContext } from "react";
import { useAuth, UserContext } from "../../providers/user";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { Layout } from "../../styles/layout";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import image from "../../assets/img/woman-sitting-laptop.png";

import { Container, Image } from "./styles";

const SingIn = () => {
  const { user, login } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("O nome de usuário é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    login(data);
  };

  return (
    <Layout>
      <Container>
        <Form onSubmit={handleSubmit(submit)}>
          <div className="advice">
            <h2>Sign in</h2>
            <p>
              Ainda não é cadastrado?{" "}
              <span onClick={() => history.push("/login")}> Sign up</span>
            </p>
          </div>

          <Input
            register={register}
            nome={"username"}
            label={"Nome de usuário"}
            placeholder={"jhondoe"}
          />
          <Input
            register={register}
            nome={"password"}
            label={"Senha"}
            type="password"
          />
          <Button type="submit" children={"Login"} />
        </Form>
        <Image src={image} alt="" />
      </Container>
    </Layout>
  );
};

export default SingIn;
