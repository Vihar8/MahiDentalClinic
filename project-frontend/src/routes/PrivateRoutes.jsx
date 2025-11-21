import React from "react";
import { lazy } from "react";
import Loadable from "../commoncomponents/Loadable/Loadable";
import LayoutAdmin from "../layoutsAdmin/LayoutAdmin";
import AuthGuard from "../utils/AuthGuard";
// import PlantsDetailList from "../pages/PlantDetailsList";
// import PlantsSubscriberList from "../components/plant/PlantsDetailList/SubscriberDetailsList";
const PageNotfound = Loadable(
  lazy(() => import("../commoncomponents/PageNotfound/PageNotfound"))
);
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const Profile = Loadable(lazy(() => import("../pages/Profile")));
const Paybill = Loadable(lazy(() => import("../pages/Paybill")));
const Wallet = Loadable(lazy(() => import("../pages/Wallet")));
const Plant = Loadable(lazy(() => import("../pages/plant")));
const PlantList = Loadable(lazy(() => import("../pages/plantList")));
const SubverifyList = Loadable(lazy(() => import("../pages/SubverifyList")));
const PlantsDetailList = Loadable(lazy(() => import("../pages/PlantDetailsList")));
const PlantsSubscriberList = Loadable(lazy(() => import("../pages/PlantsSubscriberList")));
// const ChangePassword = Loadable(lazy(() => import("../pages/ChangePassword")));

const PrivateRoutes = {
  path: "/",
  element: (
    // <AuthGuard allowedRoles={[0, 1, 2]}>
    <LayoutAdmin />
    // </AuthGuard>
  ),
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },

    // {
    //     path: "changepassword",
    //     element: (
    //         <AuthGuard allowedRoles={[1]}>
    //             <ChangePassword />
    //         </AuthGuard>
    //     )
    // },

    {
      path: "solar-project",
      element: <Project />,
    },
    {
      path: "paybill",
      element: <Paybill />,
    },
    {
      path: "plant",
      element: <PlantList />,
    },
    {
      path: "/plant-edit/:id",
      element: <Plant />,
    },
    {
      path: "/plant-add",
      element: <Plant />,
    },
    {
      path: "subscription-verify",
      element: <SubverifyList />,
    },
    {
      path: "wallet",
      element: <Wallet />,
    },
    {
      path: "*",
      element: <PageNotfound />,
    },
    {
      path: "plants-list",
      element: <PlantsDetailList />,
    },
    {
      path: "/plant-details/:id",
      element: <PlantsSubscriberList />,
    },
  ],
};

export default PrivateRoutes;
