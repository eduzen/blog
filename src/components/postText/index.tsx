import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

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
    <Paper >
      <Typography variant="h4" component="h2" >
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
      {content}
      </Typography>;
      <div dangerouslySetInnerHTML={{ __html: decodeHtml(content) }} />

    </Paper>

  );
}

export default BlogPost;
