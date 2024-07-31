/* eslint-disable react-refresh/only-export-components */
import Transition from "../components/Transition";

const Home = () => {
    return (
        <div className="container">
            <video src="/assets/video-1.mp4" muted loop autoPlay></video>
            <h1>Nature</h1>
        </div>
    );
}

export default Transition(Home);
