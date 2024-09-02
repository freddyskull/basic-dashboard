import React, { useEffect } from "react";
import { Input } from "@ux/input";
import { Button } from "@ux/Button";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/auth";
import { useAlertStore } from "../../store/alerts";
import { useNavigate } from "react-router-dom";
import { Key, Mail, SquareUserRound, User } from "lucide-react";

export const RegisterForm = ({ setloginState }) => {
  const { auth, user } = useAuthStore();
  const { changeState } = useAlertStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
  };

  return (
    <div className="text-center w-full">
      <h2 className="text-4xl uppercase font-bold text-white">
        Registrate ahora
      </h2>
      <div className="mt-2">
        <span
          className="text-ring text-[20px] hover:text-primary font-b cursor-pointer"
          onClick={() => setloginState("login")}
        >
          ¿Ya posees un usuario?
        </span>
      </div>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-left relative">
            <Label>Nombres</Label>
            <Input
              {...register("name")}
              className="h-[50px] mt-2 pl-10"
            />
            <User className="absolute top-[48px] left-3" />
          </div>
          <div className="text-left relative">
            <Label>Apellidos</Label>
            <Input className="h-[50px] mt-2 pl-10" {...register("last_name")} />
            <User className="absolute top-[48px] left-3" />
          </div>
          <div className="text-left relative">
            <Label>Número de cédula</Label>
            <Input
              type="number"
              {...register("document_id")}
              className="h-[50px] mt-2 pl-10"
            />
            <SquareUserRound className="absolute top-[48px] left-3" />
          </div>
          <div className="text-left relative">
            <Label>Correo electrónico</Label>
            <Input className="h-[50px] mt-2 pl-10" {...register("email")} />
            <Mail className="absolute top-[48px] left-3" />
          </div>
          <div className="text-left relative">
            <Label>Contraseña</Label>
            <Input
              {...register("password")}
              className="h-[50px] mt-2 pl-10"
              type="password"
            />
            <Key className="absolute top-[48px] left-3" />
          </div>
          <div className="text-left relative">
            <Label>Repita contraseña</Label>
            <Input type="password" className="h-[50px] mt-2 pl-10" {...register("c_password")} />
            <Key className="absolute top-[48px] left-3" />
          </div>
        </div>

        <div className="mt-4">
          <Button disabled={user.load}>
            {user.load ? `Verificando datos...` : "Iniciar sesión"}
          </Button>
        </div>
      </form>
    </div>
  );
};

// "name": "string",
// "last_name": "string",
// "document_id": "string",
// "email": "user@example.com",
// "password": "string",
// "c_password": "string"
