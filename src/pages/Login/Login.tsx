import React from "react";
import { useForm } from "react-hook-form";
import classes from "../CreateYourKanban/CreateYourKanban.module.scss";
import Card from "../../components/atoms/Card/Card";
import FormField from "../../components/molecules/FormField/FormField";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className={classes.wrapper}>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <FormField
            label={"Email"}
            id={"email"}
            type="text"
            {...register("email", {
              required: true,
              max: 16,
              min: 3,
              maxLength: 80,
            })}
          />
          {errors.email && <ErrorMessage errorMessage={`Email is required.`} />}
          <FormField
            label={"Password"}
            id={"password"}
            type="text"
            {...register("password", {
              required: true,
              max: 32,
              min: 3,
              maxLength: 100,
            })}
          />
          {errors.password && (
            <ErrorMessage errorMessage={`Password is required.`} />
          )}
          <Button type="submit" btnName="Login" />
          <Button
            type="button"
            btnName="Create your Board"
            className={classes.secondButton}
            onClick={() => navigate("/")}
          />
        </form>
      </Card>
    </div>
  );
};

export default Login;
