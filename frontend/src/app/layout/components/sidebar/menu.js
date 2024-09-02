export const navbarMenu = [
    {
      title: "Inicio",
      path: "/dashboard",
      icon: "House",
      permission: ["HOME"],
      action: "disable",
    },
    {
      title: "Almacén",
      path: "/storage",
      icon: "LayoutPanelTop",
      permission: ["HOME", "HOME_STORAGE"],
      action: "disable",
    },
    {
      title: "Compras",
      path: "/shopping",
      permission: ["HOME_ACADEMICO"],
      action: "disable",
      icon: "ShoppingBag",
    },
    {
      title: "Recolector",
      path: "/collector",
      permission: ["HOME_PERSONAL"],
      action: "disable",
      icon: "PackageSearch",
    },
    {
      title: "Proveedores",
      path: "/providers",
      icon: "Contact",
      permission: ["HOME", "HOME_CONTROL"],
      action: "hidden",
    },
    {
      title: "Control",
      path: "/control",
      icon: "Lock",
      permission: ["HOME", "HOME_CONTROL"],
      action: "hidden",
      subMenu: [
        {
          title: "Administrar Usuarios",
          path: "/control/usuarios",
          permission: ["HOME_CONTROL", "CONTROL_ADMIN_USERS"],
          icon: "UserRoundCog",
        },
        {
          title: "Bitacora de sistema",
          path: "/control/bitacora",
          permission: ["HOME_CONTROL", "CONTROL_BITACORA"],
          icon: "BookOpenText",
        },
      ],
    },
  ];