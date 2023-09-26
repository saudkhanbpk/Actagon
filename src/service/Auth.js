import API from "./Baseurl";

export const phoneAuth = (data) => API.post("/api/v1/phoneAuth", data);
export const verifyOtp = (data) => API.post("/api/v1/verifyOTP", data);
export const emailAuth = (data) => API.put("/api/v1/emailAuth", data);
export const verifyEmailOtp = (data) => API.post("/api/v1/verifyEmailOTP", data);
export const getUsers = (data) => API.post("/api/v1/getUsers", data);
export const updateAllData = (data) => API.put("/api/v1/updateProfile", data);
export const addFriend = (data) => API.post("/api/v1/addFriend", data);
export const getFriends = (data) => API.post("/api/v1/getFriends", data);
export const addSchedule = (data) => API.post("/api/v1/addSchedule", data)
export const getSchedule = (data) => API.post("/api/v1/getScheduleById", data)