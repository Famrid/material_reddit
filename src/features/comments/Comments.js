import React from "react";
import { useParams } from "react-router-dom";
import { Alert, Snackbar, Grid } from "@mui/material";
import { Comment } from "../../components/comment/Comment";
import { useFetchCommentsQuery } from "../../features/posts/postsSlice";

const Comments = () => {
  let { postId } = useParams();
  const { data, isFetching, isLoading, isSuccess } =
 useFetchCommentsQuery(postId);
  if (isFetching || isLoading) {
    return (
      <React.Fragment>
        <Snackbar open={isFetching || isLoading} autoHideDuration={6000}>
          <Alert severity="info" sx={{ width: "100%" }}>
            {isFetching ? "Fetching" : "Loading"}
          </Alert>
        </Snackbar>
        <Snackbar open={data} autoHideDuration={6000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Fetching Fulfilled!
          </Alert>
        </Snackbar>
      </React.Fragment>
    );
  }
  if(isSuccess) {
    let dataArray = data[1].data.children;
    console.log(dataArray[0]);
    let comment = dataArray.map((dataItems) => {
        return (
          <Comment
            key={dataItems.data.id}
            author={dataItems.data.author}
            date={dataItems.data.created_utc}
            body={dataItems.data.body_html}
            score={dataItems.data.ups}
          />
        )
      });
      return (
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent='center'>
            {comment}
        </Grid>
      )
  }
};

export default Comments;
