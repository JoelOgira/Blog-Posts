import Feed from "./Feed";

const Home = ({ posts, isLoading, fetchError }) => {
  return (
    <main className="Home container">
      {isLoading && <p className="mt-4">Requested posts are loading... </p>}
      {!isLoading && fetchError && <p className="mt-4 text-danger">{fetchError}</p>}
      {!isLoading && !fetchError && (posts.length ? 
      <Feed posts={posts} />  : 
        <p style={{marginTop: '2rem'}}>No posts are available</p>
      )}
    </main>
  )
}

export default Home;