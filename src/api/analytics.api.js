import api from "./axios";

export const getFunnel = () => api.get("/analytics/funnel");
export const getCoachMetrics = () => api.get("/analytics/coach");
