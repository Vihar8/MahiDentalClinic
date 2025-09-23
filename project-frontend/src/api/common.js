import { fetcherPost, fetcherPostFormData } from "../utils/axios";

export const endpoints = {
    key: "common/",
    // getPortalDropDown: "portalDropDownMenu",
};

// get portal DropDown list
// export async function getPortalDropDown(formValue) {
//   try {
//     const newData = await fetcherPost([
//       endpoints.key + endpoints.getPortalDropDown,
//       formValue,
//     ]);
//     return newData;
//   } catch (error) {
//     return error;
//   }
// }