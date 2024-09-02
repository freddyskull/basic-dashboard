import React from "react";
import { Input } from "@ux/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@ux/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ux/dropdown-menu";
import { useAuthStore } from "../../../store/auth";
import { useNavigate } from "react-router-dom";
import { useAlertStore } from "../../../store/alerts";

export const Header = ({ title }) => {
  const { logOut } = useAuthStore();
  const { changeState } = useAlertStore();
  const navigate = useNavigate();
  const logOutButton = async () => {
    navigate("/login");
    const resp = await logOut();
    changeState(resp[1]);
  }
  return (
    <div className="grid grid-cols-2">
      <div className="uppercase flex items-center">
        <h1 className="text-white text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex justify-end  gap-4">
        <div className="w-[300px] relative">
          <Input placeholder="Buscar algo..." />
          <Search className="absolute top-2 right-5 " />
        </div>
        <DropdownMenu >
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="absolute -right-9 top-2">
            <DropdownMenuLabel className="uppercase">Mi Perfil</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar perfil</DropdownMenuItem>
            <DropdownMenuItem>Mis movimientos</DropdownMenuItem>
            <DropdownMenuItem>Mis permisos</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logOutButton}>Cerrar sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
