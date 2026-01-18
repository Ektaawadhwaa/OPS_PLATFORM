import api from "./axios";

export const getDemos = () => api.get("/demos");
export const updateDemoStatus = (id, payload) =>
  api.patch(`/demos/${id}`, payload);
