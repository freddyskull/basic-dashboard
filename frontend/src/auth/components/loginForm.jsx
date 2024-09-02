import React, { useEffect } from "react";
import { Input } from "@ux/input";
import { Button } from "@ux/Button";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/auth";
import { useAlertStore } from "../../store/alerts";
import { useNavigate } from "react-router-dom";
import { Key, User } from "lucide-react";

export const LoginForm = ({setloginState}) => {
  const { auth, user } = useAuthStore();
  const { changeState } = useAlertStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const resp = await auth(data);
    changeState(resp[1]);
    if (resp[0].authStatus) {
      navigate("/dashboard");
    }
  };


  return (
    <div className="text-center w-full">
      <h2 className="text-4xl uppercase font-bold text-white">
        Bienvenido nuevamente
      </h2>
      <div className="mt-2">
        <span className="text-ring text-[20px] hover:text-primary font-b cursor-pointer" onClick={() => setloginState("register")}>
          ¿Aún no posees un usuario?
        </span>
      </div>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left relative">
          <Label>Nombre de usuario</Label>
          <Input {...register("document_id")} className="mt-2 h-[50px] pl-10" />
          <User className="absolute top-[48px] left-3" />
        </div>
        <div className="text-left mt-6 relative">
          <Label>Contraseña</Label>
          <Input type="password" className="mt-2 h-[50px] pl-10" {...register("password")} />
          <Key className="absolute top-[48px] left-3" />
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
