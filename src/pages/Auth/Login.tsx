import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../../interfaces/auth/login";
import LoginService from "../../services/login";

const Login: React.FC = () => {
  const isLoading = false;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = (data: any) =>
    LoginService.login(data);

  return (
    <>
      <h5 className="mt-5" style={{ fontWeight: "bolder", color: "#383838" }}>
        Login
      </h5>
      <p>Olá, seja bem-vindo(a). Identifique-se.</p>
      <hr />

      <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register("email")}
            name="email"
            isInvalid={!!errors.email}
            placeholder="Informe seu email"
          />
          {errors.email && (
            <Form.Control.Feedback type="invalid">
              {errors?.email?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            {...register("password")}
            type="password"
            name="password"
            placeholder="Informe a senha"
          />

          <Form.Text className="text-muted">
            Esqueceu sua senha?{" "}
            <Link
              style={{
                color: "#707070",
                fontWeight: 700,
              }}
              to={"./password/forgot"}
            >
              Redefina sua senha
            </Link>
          </Form.Text>
        </Form.Group>

        <Button className={"mt-5shadow-none"} block type="submit">
          {isLoading ? <Spinner animation={"border"} /> : "Entrar no sistema"}
        </Button>

        <Button variant="outline-primary" block>
          Criar uma nova conta
        </Button>
      </Form>
    </>
  );
};

export default Login;
