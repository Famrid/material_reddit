import React from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import RecommendIcon from "@mui/icons-material/Recommend";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const Post = (props) => {
  const {
    title,
    subReddit,
    thumbnail,
    author,
    thumbnailWidth,
    numComment,
    score,
    id,
  } = props;

  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={8}
      container
      justifyContent="center"
      direction="row"
    >
      <Card raised sx={{ width: "100%", borderRadius: "35px" }}>
        <CardActionArea component={Link} to={`/comments/${id}`} >
          <Grid item xs={12}>
            <Chip avatar={<Avatar>{author[0]}</Avatar>} label={author} />
            <Chip label={subReddit} />
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "column", "row"],
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CardHeader title={title} />
            <CardMedia
              component="img"
              image={thumbnail}
              sx={{ width: "auto", height: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CommentIcon />
            <Typography variant="body2">{numComment}</Typography>
            <RecommendIcon sx={{ color: "green" }} />
            <Typography variant="body2">{score}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
