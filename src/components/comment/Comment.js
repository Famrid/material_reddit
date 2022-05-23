import React from "react";
import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
    Typography,
  } from "@mui/material";
  import CommentIcon from "@mui/icons-material/Comment";
  import RecommendIcon from "@mui/icons-material/Recommend";
  import { Box } from "@mui/system";
  import DOMPurify from "dompurify";

  function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
  

export const Comment = (props) => {
    const {date, author, body, score } = props;
    let decodingBody = decodeHTMLEntities(body);
    let cleanBody = DOMPurify(decodingBody);
    console.log(decodingBody);

    return(
        <Grid item 
            xs={12}
            sm={10}
            md={8}>
        <Card raised>
            <CardHeader avatar={<Chip avatar={<Avatar></Avatar>} label={author} />} subheader={`Publish at ${new Date(date).toLocaleString()}`} />
            <CardContent dangerouslySetInnerHTML={{__html: decodingBody }} />
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <RecommendIcon />
                <Typography variant="body2">{score}</Typography>
            </Box>
        </Card>
        </Grid>
        )
}