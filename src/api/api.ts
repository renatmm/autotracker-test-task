import axios from 'axios';
import { Device } from '../interfaces';
const API = 'https://jsonplaceholder.typicode.com/users'
const BEARER_TOKEN = 'RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ';

const config = { 
  headers: {
    'Content-Type': 'application/json',
    Authorization: BEARER_TOKEN
  }
}

export const getData = async () => {
  const response = await axios.get(API, config)
  return response
}

export const postObj = () => {
  const response = axios.post('https://jsonplaceholder.typicode.com/posts',{name:'qwe', phone:'123123'} , config);
  return response
}

export const deleteObj = (id: string) => {
  const response = axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, config);
  return response
}



