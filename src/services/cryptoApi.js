import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_CRYPTOCURRENCIES_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  };

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2' }), 
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
} = cryptoApi;