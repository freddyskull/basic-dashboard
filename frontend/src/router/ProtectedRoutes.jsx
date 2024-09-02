// import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useAlertStore } from "../store/alerts";

export const ProtectedRoutes = ({ redirectTo = "/login" }) => {
  const user = useAuthStore((state) => state.user);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const { changeState, alert } = useAlertStore();
  if (user.Authstatus == null) {
    if (user.token != null) {
      checkAuth();
    } else {
      return <Navigate to={redirectTo} />;
    }
  }

  if (user.Authstatus) {
    return <Outlet />;
  }
  if (user.Authstatus == false) {
    if (!alert.status) {
      changeState({
        status: true,
        message: "El tiempo de uso ha expirado, inicia sesión nuevamente.",
        title: "Se ha cerrado sesión",
        variant: "",
      });
    }
    return <Navigate to={redirectTo} />;
  }
};
