import API from "./Baseurl";

export const phoneAuth = (data) => API.post("/api/v1/phoneAuth", data);
export const verifyOtp = (data) => API.post("/api/v1/verifyOTP", data);
export const emailAuth = (data) => API.put("/api/v1/emailAuth", data);
export const verifyEmailOtp = (data) => API.post("/api/v1/verifyEmailOTP", data);

export const updateAllData = (data) => API.put("/api/v1/updateProfile", data);
