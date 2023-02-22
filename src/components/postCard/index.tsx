import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface BlogPostProps {
  post: {
    date: string;
    content: string;
    post_title: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { date, content, post_title } = post;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post_title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
