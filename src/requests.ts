import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const get = async (path: string) => (await instance.get(path)).data;
