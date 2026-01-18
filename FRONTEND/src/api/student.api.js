import api from "./axios";

export const getStudents = () => api.get("/students");
export const updateStudent = (id, payload) =>
  api.patch(`/students/${id}`, payload);
