import axios from 'axios';

const API_URL = "http://localhost:8080";

 

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${API_URL}/invoice`, payload);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}
 

export const getAllInvoices = async () => {  
    try {
        return await axios.get(`${API_URL}/invoice`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data; 
    }
}


// ye wala main h 
// export const deleteInvoice = async (id) => {
//     try {
//         return await axios.delete(`${API_URL}/invoice\${id}`);
//     } catch (error) {
//         console.log('Error: ', error.message);
//         return error.response.data;
//     }
// }

// // 2nd-------------
export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice\${id}`);
    } catch (error) {
        console.log('Error deleting invoice:', error.message);
       // return error.response.data;
    }
}; 


// export const deleteInvoice = async (invoiceId) => {
//     try {
//         const response = await axios.delete(`/api/invoices/${invoiceId}`);
//         console.log('Full API response:', response); // Log the entire response object
//         return response.data; // Ensure response has a data property
//     } catch (error) {
//         console.error('Error deleting invoice:', error);
//         throw error;
//     }
// };



export default getAllInvoices;
