import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/LoginPage";
import { useToast } from "@/hooks/use-toast";
import { useAlertStore } from "../store/alerts";
import { shallow } from "zustand/shallow";
import { useAuthStore } from "../store/auth";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { DashboardPage } from "../app/dashboard/DashboardPage";

export const Router = () => {
  let token = localStorage.getItem("token_access");
  const { toast } = useToast();
  const { auth, user, checkAuth } = useAuthStore();
  const { alert, resetState } = useAlertStore();
  
  useEffect(() => {
    // esta parte se usa para automatizar los toast de la aplicación
    if (alert.status) {
      toast({
        title: alert.title,
        description: alert.message,
        variant: alert.variant,
      });
      setTimeout(() => {
        resetState();
      }, 3000);
    }
  }, [alert]);

  return (
    <>
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/"  element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
};
