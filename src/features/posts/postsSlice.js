import { Link } from '@mui/icons-material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/search/'}),
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: (searchTerm) => ({
                url: `.json`,
                params: {
                    q: searchTerm,
                    type: 'link',
                    sort: "top",
                }
            }),
        }),
    }),
})

export const {useFetchPostsQuery} = postsApi;