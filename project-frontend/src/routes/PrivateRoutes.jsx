import React from "react";
import { lazy } from "react";
import Loadable from "../commoncomponents/Loadable/Loadable";
import LayoutAdmin from "../layoutsAdmin/LayoutAdmin";
import AuthGuard from "../utils/AuthGuard";
const PageNotfound = Loadable(
  lazy(() => import("../commoncomponents/PageNotfound/PageNotfound"))
);
const PrivateRoutes = {
  path: "/",
  element: (
    // <AuthGuard allowedRoles={[0, 1, 2]}>
    <LayoutAdmin />
    // </AuthGuard>
  ),
  children: [
    {
      path: "*",
      element: <PageNotfound />,
    },
  ],
};

export default PrivateRoutes;
