import { Link } from '@mui/icons-material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/'}),
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: (searchTerm) => ({
                url: `search/.json`,
                params: {
                    q: searchTerm,
                    type: 'link',
                    sort: "top",
                }
            }),
        }),
        fetchComments: builder.query({
            query: (postId) => ({
                url: `comments/${postId}/.json`,
            }),
        }),
    }),
})

export const {useFetchPostsQuery, useFetchCommentsQuery} = postsApi;
