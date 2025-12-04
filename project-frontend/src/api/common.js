import { fetcherPost, fetcherPostFormData } from "../utils/axios";

export const endpoints = {
    key: "common/",
    patientinquiry: "patient-inquiry",
};

// get portal DropDown list
export async function patientinquiry(formValue) {
  try {
    const newData = await fetcherPost([
      endpoints.key + endpoints.patientinquiry,
      formValue,
    ]);
    return newData;
  } catch (error) {
    return error;
  }
}