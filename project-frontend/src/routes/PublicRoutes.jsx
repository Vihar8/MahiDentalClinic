import React from "react";
import { lazy } from "react";
import Loadable from "../commoncomponents/Loadable/Loadable";
import Layout from "../layouts/Layout";
import GuestGuard from "../utils/GuestGuard";
import ForgotPassword from "../pages/ForgotPassword";
import ContactsUs from "../components/AboutPages/ContactsUs";
const Landing = Loadable(lazy(() => import("../pages/Landing")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const Project = Loadable(lazy(() => import("../pages/Project")));
const PlantDetails = Loadable(lazy(() => import("../pages/PlantDetails")));
const SubscriberLogin = Loadable(
  lazy(() => import("../pages/SubscriberLogin"))
);
const PanVerification = Loadable(
  lazy(() => import("../components/Project/PanVerification/PanVerification"))
);
const AddDiscom = Loadable(
  lazy(() => import("../components/Project/AddDiscom/AddDiscom"))
);
const ProjectSummary = Loadable(
  lazy(() => import("../components/Project/ProjectSummary/ProjectSummary"))
);
const ProjectCapacity = Loadable(
  lazy(() => import("../components/Project/ProjectCapacity/ProjectCapacity"))
);
const PlantOwnerRegistration = Loadable(
  lazy(
    () =>
      import(
        "../components/Registration/PlantOwnerRegistration/PlantOwnerRegistration"
      )
  )
);

const PublicRoutes = {
  path: "/",
  element: (
    // <GuestGuard>
    <Layout />
    // </GuestGuard>
  ),
  children: [
    // routing for landing
    {
      path: "",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/contactus",
      element: <ContactsUs />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/plantdetails",
      element: <PlantDetails />,
    },
    {
      path: "/subscriberlogin",
      element: <SubscriberLogin />,
    },
    {
      path: "/verify-pan",
      element: <PanVerification />,
    },
    {
      path: "/add-discom",
      element: <AddDiscom />,
    },
    {
      path: "/project-summary",
      element: <ProjectSummary />,
    },
    {
      path: "/project-capacity",
      element: <ProjectCapacity />,
    },
    {
      path: "/registration",
      element: <PlantOwnerRegistration />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
  ],
};

export default PublicRoutes;
