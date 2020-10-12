import { axiosWithAuth } from "./axiosWithAuth";
export const FetchColors = (setColorList) => {
  axiosWithAuth()
    .get("/api/colors")
    .then((res) => setColorList(res.data))
    .catch((err) => console.log(err));
};
