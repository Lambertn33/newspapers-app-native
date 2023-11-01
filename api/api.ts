import axios from "axios";
import { stringifyDate } from "../helpers/date";

const endpoint = process.env.EXPO_PUBLIC_BACKEND_URL;

interface IPublisherInputs {
  id?: number;
  names: string;
  joinedDate: string;
}

interface IFile {
  uri: string;
  name: string;
  type: string;
}

interface INewsPaperInputs {
  id?: number;
  title: string;
  link: string;
  abstract: string;
  publisherId: any;
  creationDate: string;
  file: IFile | null;
}

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

// publishers
export const getPublishers = async () => {
  const { publishers } = await GET("publishers");
  return publishers;
};

export const getPublisher = async (id: string) => {
  const { publisher } = await GET(`publishers/${id}`);
  return publisher;
};

export const createPublisher = async (data: IPublisherInputs) => {
  const response = await POST("publishers", data);
  return await response;
};

export const deletePublisher = async (id: number) => {
  const response = await DELETE(`publishers/${id}`);
  return response;
};

export const updatePublisher = async (id: number, data: IPublisherInputs) => {
  const response = await PUT(`publishers/${id}`, data);
  return response;
};

//newspapers
export const getNewspapers = async () => {
  const { newspapers } = await GET("newspapers");
  return newspapers;
};

export const getNewspaper = async (id: string) => {
  const { newsPaper } = await GET(`newspapers/${id}`);
  return newsPaper;
};

export const deleteNewspaper = async (id: number) => {
  const response = await DELETE(`newspapers/${id}`);
  return response;
};

export const addNewsPaper = async (data: INewsPaperInputs) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("link", data.link);
  formData.append("abstract", data.abstract);
  formData.append("publisherId", data.publisherId);
  formData.append("creationDate", stringifyDate(data.creationDate));
  formData.append("file", data.file as any);
  const response = await POST("newspapers", formData, {
    "Content-Type": "multipart/form-data"
  });
  return response;
};
