import Axios, * as others from 'axios';

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