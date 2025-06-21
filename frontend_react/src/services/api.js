import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

export const getAllNucleos = () => API.get("/nucleo-conhecimento/get-all");
export const getNucleoById = (id) => API.get(`/nucleo-conhecimento/get-by-id/${id}`);
export const responderManifestacao = (id) => API.post(`/manifestacao-intencao/responder/${id}`);