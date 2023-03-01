import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Theme, useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

interface BlogPostProps {
  title: string;
  content: string;
}

function decodeHtml(html: string) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}


function BlogPost({ title, content }: BlogPostProps) {

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
          <Typography variant="h4" component="h2" >
            {title}
          </Typography>
          <Paper >
            {title}
          </Paper>
      </Grid2>
      <Grid2 xs={12}>
        {decodeHtml(content)}
      </Grid2>


    </Grid2>
  );
}

export default BlogPost;
