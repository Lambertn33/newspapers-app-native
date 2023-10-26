import axios from "axios";

const endpoint = process.env.EXPO_PUBLIC_BACKEND_URL;

const GET = async (par: string) => {
  const response = await axios.get(`${endpoint}/${par}`);
  return await response.data;
};

const POST = async (par: string, data: object, headers?: any) => {
  const response = await axios.post(`${endpoint}/${par}`, data, {
    headers,
  });
  return await response.data;
};

const PUT = async (par: string, data: object) => {
  const response = await axios.put(`${endpoint}/${par}`, data);
  return await response.data;
};

const DELETE = async (par: string) => {
  const response = await axios.delete(`${endpoint}/${par}`);
  return await response.data;
};

export const getPublishers = async () => {
  const { publishers } = await GET("publishers");
  return publishers;
};

export const getPublisher = async (id: string) => {
  const { publisher } = await GET(`publishers/${id}`);
  return publisher;
};