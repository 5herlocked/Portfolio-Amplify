import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Underwater VLC"
                            description="Built a mobile underwater visual light communication research testbed."
                            link="https://github.com/5herlocked/c-underwatervlc"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="mmWave Navigational Aid"
                            description="Using a mmWave radar chip to build a navigational aid for visually impaired individuals."
                            link="https://github.com/5herlocked/mmWavePython"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="To Do App - Amplify"
                            description="A To-Do List App built using React and AWS's Amplify SDK."
                            link="https://github.com/5herlocked/ToDo-App-Amplify"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
