import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { Post } from '../../components/post/Post'
import { useFetchPostsQuery } from "../posts/postsSlice";

export const Posts = () => {

    let searchTerm;
    const defaultSearch = 'cat';
    let { searchId } = useParams();
    searchId ? searchTerm = searchId : searchTerm = defaultSearch;


    const { data, isFetching, isLoading } = useFetchPostsQuery(searchTerm, {refetchOnMountOrArgChange: true});
    
    

    if(isFetching) {
        return (<p>Is Fetching...</p>)
    } else if(isLoading) {
        return (<p>Is Loading...</p>)
    } else if(data) {
        let dataArray = data.data.children;
        console.log(dataArray[0].data.title);
        const posts = dataArray.map(dataItems => {
            return <Post
                key={dataItems.data.title} 
                title={dataItems.data.title}
                subReddit={dataItems.data.subreddit_name_prefixed}
                thumbnail={dataItems.data.thumbnail}
                thumbnailWidth={dataItems.data.thumbnail_width}
                author={dataItems.data.author}
                numComment={dataItems.data.num_comments}
                score={dataItems.data.score}
                id={dataItems.data.id} />
                
        })
        return (
            <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" >
                {posts}
            </Grid>
            )
    }

}