import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_CRYPTOCURRENCIES_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_CRYPTOCURRENCIES_HOST,
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

// const options = {
//     method: 'GET',//     
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//   };

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPaqth: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }), 
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});