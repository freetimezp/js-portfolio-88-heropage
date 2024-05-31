import Transition from "../components/Transition";

const Contact = () => {
    return (
        <div className="container">
            <video src="../public/assets/video-3.mp4" muted loop autoPlay></video>
            <h1>MEMORIES</h1>
        </div>
    )
}

const ContactPage = Transition(Contact);


export default ContactPage;
