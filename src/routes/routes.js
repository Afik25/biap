import MainLayout from "../MainLayout";
import PersistLogin from "../hooks/context/state/PersistLogin";
import RequireAuth from "../hooks/context/state/RequireAuth";
// pages
import Authentication from "../pages/Authentication";
import Analytics from "../pages/Analytics";
import Forms from "../pages/Forms";
//

import NotFound from "../pages/404";
import Unauthorized from "../pages/Unauthorized";

const ROLES = {
  admin: "admin",
  user: "user",
  dga: "dga",
  parent: "",
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Authentication /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/forms", element: <Forms /> },
      // {
      //   element: <PersistLogin />,
      //   children: [
      //     {
      //       element: <RequireAuth allowedRoles={[ROLES.admin]} />,
      //       children: [
      //         {
      //           path: "/dga",
      //           element: <Dga />,
      //         },
      //       ],
      //     },
      //   ],
      // },
      { path: "*", element: <NotFound /> },
      { path: "/unauthorized", element: <Unauthorized /> },
    ],
  },
];
