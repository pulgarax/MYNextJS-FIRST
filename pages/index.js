import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";


export default function Home({ posts }) {
  return (
    <>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  // somewhow get the Data
  return {
    props: {
      posts: posts, 
    },
  
  };

}
