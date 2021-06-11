import axios from 'axios';

const apiKey = process.env.REACT_APP_AIRTABLE_KEY;

const url = 'https://api.airtable.com/v0/appdPcv2eTjIOH8ZJ/Table%201';

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const getEntries = async () => {
  try {
    const response = await axios.get(url, config);
    // console.log(response.data.records);
    return response.data.records;
  } catch (error) {
    console.error(error)
  }
}

export const newEntry = async (form) => {
  try {
    const response = await axios.post(`${url}`, {fields: form}, config);
    return response.data;
  } catch (error){
    console.error(error);
  }
}


export const getEntry = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`, config);
    return response.data;
  } catch (error){
    console.error(error);
  } 
}

export const editEntry = async (id, form) => {
  try {
    const response = await axios.put(`${url}/${id}`, {fields: form}, config);
    return response.data;
  } catch (error){
    console.error(error);
  }
}

export const deleteEntry = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`, config);
    return response.data;
  } catch (error){
    console.error(error);
  }
}

