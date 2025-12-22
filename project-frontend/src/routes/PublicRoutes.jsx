import React from "react";
import { lazy } from "react";
import Loadable from "../commoncomponents/Loadable/Loadable";
import Layout from "../layouts/Layout";
import GuestGuard from "../utils/GuestGuard";
const Gallery = Loadable(lazy(() => import("../pages/Gallery")));
const ContactsUs = Loadable(lazy(() => import("../components/AboutPages/ContactsUs")));
const AboutUs = Loadable(lazy(() => import("../components/AboutPages/AboutUs")));
const Landing = Loadable(lazy(() => import("../pages/Landing")));
const AppointmentPage = Loadable(lazy(() => import("../pages/AppointmentPage")));
const TreatmentPage = Loadable(lazy(() => import("../pages/TreatmentPage")));
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
      path: "/our-services/:id",
      element: <TreatmentPage />,
    }
  ],
};

export default PublicRoutes;
