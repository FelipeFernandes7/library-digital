import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Aside,
  Content,
  Form,
  Social,
  TextField,
  Text,
  ContainerForm,
} from "./styles";
import { AnimationReading } from "./components";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

import toast from "react-hot-toast";

import { social } from "./locale/social";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("O campo email é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório"),
});
type FormData = z.infer<typeof schema>;
export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  function onSubmit(formData: FormData) {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        toast.success("Login efetuado com sucesso");

        navigate("/", { replace: true });
      })
      .catch((error) => {
        toast.error("Não foi possível realizar o login :(");
        console.log(error.message);
      });
  }
  useEffect(() => {
    async function handleLogout() {
      await signOut(auth);
    }
    handleLogout();
  }, []);
  return (
    <Content>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Text>
            <h1>
              Seja bem vindo {":)"} <strong>Login</strong>
            </h1>
          </Text>
          <TextField
            name="email"
            register={register}
            type="email"
            placeholder="Digite seu e-mail"
            label={"email"}
            error={errors?.email}
          />
          <TextField
            name="password"
            register={register}
            placeholder="Digite sua senha"
            label={"Senha"}
            error={errors?.password}
          />
          <button>Entrar</button>
          <Text>
            <p>
              não tem uma conta? <Link to={""}>registre se</Link>
            </p>
          </Text>
        </Form>
      </ContainerForm>
      <Aside>
        <h1>Palavras entre Páginas: Navegue, Explore e Descubra!</h1>
        <AnimationReading />
        <p>© 2023 - Todos os direitos reservados</p>
        <Social>
          <Link to={social.instagram}>
            <BsInstagram />
          </Link>
          <Link to={social.linkedin}>
            <BsLinkedin />
          </Link>
          <Link to={social.github}>
            <BsGithub />
          </Link>
        </Social>
      </Aside>
    </Content>
  );
}
