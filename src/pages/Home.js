import { Link } from "react-router-dom"
import Footer from "../layout/Footer";
import CommunityCard from "../layout/CommunityCard"
import Findr from "../assets/images/findr-logo.png"

const Home = () => {
    return (
        <>
        <body>
            <div className="container">
                <div className="category">
                    <h2>Popular communities</h2>
                    <h2>in Barrie, Ontario</h2>
                    <div className="list">
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                    </div>

                    <Link>View more....</Link>
                </div>
                <div className="category">
                    <h2>New Communities</h2>
                    <div className="list">
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                    </div>
                </div>
                <div className="category">
                    <h2>Your Communities</h2>
                    <div className="list">
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                    </div>
                </div>
                <div className="category">
                    <h2>Upcoming Events</h2>
                    <div className="list">
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                        <CommunityCard communityName= "Test" desc= "idk what to describe" topics = {["bowling", "football", "running"]} image = {Findr} />
                    </div>
                </div>
                <div className="category">
                    <h2>Browse by tags</h2>
                    <p>soccer</p>
                </div>
            </div>
            <Link to="/demo/community">Go to Community</Link>
        </body>
        <Footer/>
        </>
    )
}

export default Home;