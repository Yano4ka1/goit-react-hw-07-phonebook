import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6488d5ed0e2469c038fe6e3b.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post('/contacts', contact);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
   
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);