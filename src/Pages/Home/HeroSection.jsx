export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
           <div className="hero-section-content-box">
            <div className="hero-section-content">
                <p className="section-title">We Are</p>
                <h1 className="hero-section-title">
                    <span className="hero-section-title-color">Technology</span>
                    <br />
                    Experts
                </h1>
                <h3 className="">BOTH <span className="hero-section-title-color">OFFICE</span> AND <span className="hero-section-title-color">REMOTE</span> TECH-WORKS</h3>
                <p className="hero-section-description">
                    SOFTWARE DEVELOPMENT || CYBER-SECURITY || NETWORKING || UI/UX DESIGNING || TECH-TALKS.
                    <br />READY AND AVAILABLE TO WORK 
                </p>
            </div>
            <button className="btn btn-primary" onClick={() => window.open('https://wa.me/message/GXKM56QBRGW2D1', '_blank')} >Get In Touch</button>
            </div> 
            <div className="hero-section-img">
                {/* <img src="./img/hero_img.png" alt="Hero Section" /> */}
                <img src="./img/serwaa-pic.jpeg" alt="hero section" />
            </div>
        </section>
    )
}