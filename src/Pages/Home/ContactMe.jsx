export default function ContactMe () {
    return (
        <section id="Contact" className="contact-section">
            <div>
                <p className="sub-title">
                    Get In Touch
                </p>
                <h2>Contact Us</h2>
                <p className="text-lg">
                    Contact Us for all kind of software development, cyber-security, networking, graphic designing works.
                </p>
            </div>
            <form className="contact-form-container">
                <div className="container">
                    <label htmlFor="first-name" 
                    className="contact-label">
                        <span className="text-md">First Name</span>
                        <input
                         type="text" 
                         className="contact-input text-md"
                         name="first-name"
                         id="first-name"
                         required
                         />
                    </label>
                    <label htmlFor="last-name" 
                    className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input
                         type="text" 
                         className="contact-input text-md"
                         name="last-name"
                         id="last-name"
                         required
                         />
                    </label>
                    <label htmlFor="email" 
                    className="contact-label">
                        <span className="text-md">Email</span>
                        <input
                         type="email" 
                         className="contact-input text-md"
                         name="email"
                         id="email"
                         required
                         />
                    </label>
                    <label htmlFor="phone-number" 
                    className="contact-label">
                        <span className="text-md">phone-number</span>
                        <input
                         type="number" 
                         className="contact-input text-md"
                         name="phone-number"
                         id="phone-number"
                         required
                         />
                    </label>
                    <label htmlFor="choose-topic" 
                    className="contact-label">
                        <span className="text-md">Choose a topic</span>
                        <select  id="choose-topic" 
                        className="contact-input text-md">
                        <option>Select One</option>
                        <option>Programming</option>
                        <option>Real Estate</option>
                        <option>Evagelism</option>
                        </select>

                    </label>
                    <label htmlFor="message" 
                    className="contact-label">
                        <span className="text-md">Message</span>
                        <textarea
                        
                         className="contact -input text-md"
                         type="number"
                         id="message"
                         rows="8"
                         placeholder="Type your message"
                         />
                    </label>
                    <label htmlFor="checkbox" 
                    className="checkbox-label">
                    
                        <input
                         type="checkbox" required name="checkbox" id="checkbox" />
                         <span className="text-sm">I accept the term</span>
                         
                    </label>
                    <div><button className="btn btn-primary contact-form-btn">Submit </button></div>
                </div>
            </form>
        </section>
    )
}