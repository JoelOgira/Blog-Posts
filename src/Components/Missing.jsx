import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="container">
      <div className="card p-4">
        <h2 className="card-title">Page Not Found</h2>
        <Link to='/'>
          <p className="card-text">Go back to Homepage</p>
        </Link>
      </div>
    </main>
  )
}

export default Missing;