import PostCard from "../components/PostCard";

const PostPage = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );

  return (
    <div>ß
      <h2 className="text-blue-500 text-2xl font-bold">Post Page</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {
            posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
        }
      </div>
    </div>
  );
};

export default PostPage;
