import { Link } from '@mui/icons-material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/'}),
    endpoints: (builder) => ({
        fetchComments: builder.query({
            query: (postId) => ({
                url: `comments/${postId}/.json`,
            }),
        }),
    }),
});

export const { useFetchCommentsQuery } = commentsApi;