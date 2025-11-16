import React from "react";
import { lazy } from "react";
import Loadable from "../commoncomponents/Loadable/Loadable";
import Layout from "../layouts/Layout";
import GuestGuard from "../utils/GuestGuard";
import ForgotPassword from "../pages/ForgotPassword";
import ContactsUs from "../components/AboutPages/ContactsUs";
import AppointmentPage from "../pages/AppointmentPage";
import Gallery from "../pages/Gallery";
import AboutUs from "../components/AboutPages/AboutUs";
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
const TreatmentPage = Loadable(lazy(() => import("../pages/TreatmentPage")));
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
      path: "/appointmentpage",
      element: <AppointmentPage />,
    },
     {
      path: "/gallerypage",
      element: <Gallery />,
    },
    {
      path: "/contactus",
      element: <ContactsUs />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/our-services/:id",
      element: <TreatmentPage />,
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
