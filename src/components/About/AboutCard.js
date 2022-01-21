import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="purple">Shardul Vaidya </span>
                        from <span className="purple"> Atlanta, Georgia.</span>
                        <br/>I am a first year Master's student at Georgia State University.
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Reading
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Music
                        </li>
                    </ul>

                    <p style={{marginBlockEnd: 0, color: "rgb(155 126 172)"}}>
                        "I want to change the world, for the better; in any small way that I can."{" "}
                    </p>
                    <footer className="blockquote-footer">Shardul</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
