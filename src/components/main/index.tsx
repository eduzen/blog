import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
// import BlogPost from '../postCard';
import BlogPost from '../postText';

interface Post {
  url: string;
  title: string;
  text: string;
  published_date: string;
}

interface MainProps {
  posts: Post[];
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  return (
    <div className={title}>
      {posts.map((post) => (
        <BlogPost title={post.title} content={post.text} />
        // <div key={post.url}>
        //   <Typography variant="h6" gutterBottom>
        //     {post.published_date} - {title}
        //   </Typography>
        //   <Divider />
        //   <Grid
        //       item
        //       xs={12}
        //       md={8}
        //       sx={{
        //         '& .markdown': {
        //           py: 3,
        //         },
        //       }}
        //     >
        //   {post.text}
        //   </Grid>
        // </div>
      ))}
    </div>
  );
}

// const listPost = posts.map((post) => <BlogPost post={post} />);

// return (
//   <Grid
//     item
//     xs={12}
//     md={8}
//     sx={{
//       '& .markdown': {
//         py: 3,
//       },
//     }}
//   >
//     <Typography variant="h6" gutterBottom>
//       {title}
//     </Typography>
//     <Divider />
//     {listPost}
//   </Grid>
// );
