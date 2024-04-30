import { Link } from "react-router-dom"

const Home = () => {
    return (
        <body>
            <h1>Home page for demo</h1>
            <p>We can use mock data here</p>
            <Link to="/demo/community">Go to Community</Link>
        </body>
    )
}

export default Home;