import React from "react";

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {

        this.setState({name: event.target.value});

    };

    handleEmailChange(event) {

        this.setState({email: event.target.value});

    };

    handleMessageChange(event) {

        this.setState({message: event.target.value});

    };

    handleSubmit(event) {
        event.preventDefault();



    };

    resetForm() {
        this.setState({
            name: "",
            email: "",
            message: ""
        });
    };

    render() {
        return (
            <div className="Contact">
                <form id="contact-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.handleMessageChange} />
                    </div>
                    <button type="submit">Submit Form</button>
                </form> 
            </div> 
        )
    }
}

export default Contact;