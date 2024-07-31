import Transition from "../components/Transition";

const About = () => {
    return (
        <div className="container">
            <video src="/assets/video-2.mp4" muted loop autoPlay></video>
            <h1>JOURNEY</h1>
        </div>
    )
}

const AboutPage = Transition(About);

export default AboutPage;
