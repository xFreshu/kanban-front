import React from "react";
import Card from "../../components/atoms/Card/Card";
import Button from "../../components/atoms/Button/Button";
import FormField from "../../components/molecules/FormField/FormField";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import { useForm } from "react-hook-form";
import classes from "./CreateYourKanban.module.scss";
import { useNavigate } from "react-router-dom";

const CreateYourKanban = () => {
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
            label={"Your first name"}
            id={"firstname"}
            type="text"
            {...register("firstName", {
              required: true,
              max: 16,
              min: 3,
              maxLength: 80,
            })}
          />
          {errors.firstName && (
            <ErrorMessage errorMessage={`Your first name is required.`} />
          )}
          <FormField
            label={"Your last name"}
            id={"lastname"}
            type="text"
            {...register("lastName", {
              required: true,
              max: 32,
              min: 3,
              maxLength: 100,
            })}
          />
          {errors.lastName && (
            <ErrorMessage errorMessage={`Your last name is required.`} />
          )}
          <FormField
            label={"Email"}
            id={"email"}
            type="text"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <ErrorMessage errorMessage={`Email is required.`} />}
          <FormField
            label={"Company name"}
            id={"companyName"}
            type="text"
            {...register("companyName", {
              required: true,
              max: 32,
              min: 3,
              maxLength: 100,
            })}
          />
          {errors.companyName && (
            <ErrorMessage errorMessage={`Company name is required.`} />
          )}
          <Button type="submit" btnName="Create" />
          <Button
            type="button"
            btnName="Login"
            className={classes.secondButton}
            onClick={() => navigate("/login")}
          />
        </form>
      </Card>
    </div>
  );
};

export default CreateYourKanban;
