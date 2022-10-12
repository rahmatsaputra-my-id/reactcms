import Axios, * as others from 'axios';
import { env } from '../Constants';

export const getAllData = async () => {
   try {
      const url = 'https://api.belajartableau.com/api/WarehouseReps';
      const result = await Axios.get(url);

      return result;
   } catch (error) {
      console.log('Helper/Action/index.js@getAllData', error);

      let errorResponse = {
         isError: true,
      };
      return errorResponse;
   }
};

export const getDataById = async (warehouseIdSelected) => {
   try {
      const url = `https://api.belajartableau.com/api/WarehouseReps/${warehouseIdSelected}`;
      const result = await Axios.get(url);

      return result;
   } catch (error) {
      console.log('Helper/Action/index.js@getDataById', error);

      let errorResponse = {
         isError: true,
      };
      return errorResponse;
   }
};

export const postLogin = async (payload) => {
   try {
      const url = `${env.baseUrl}/v0/login`;
      const result = await Axios.post(url, payload);

      return result;
   } catch (error) {
      console.log('Helper/Action/index.js@postLogin', error?.response);

      let errorResponse = {
         isError: true,
         responseData: error?.response?.data
      };
      return errorResponse;
   }
};