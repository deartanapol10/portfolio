import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Skills extends Component {
   render() {
      return (
         <Container>
            <div className="section">
               <Row>
                  <Col className="right lead" xs="12">
                     <div className="head">
                        <img
                           src="https://image.flaticon.com/icons/svg/924/924467.svg"
                           alt="Skill"
                           width="15%"
                           style={{ margin: "0 1rem" }}
                        />
                        <h1>Skills</h1>
                     </div>
                     <hr />
                     <p>
                        <i className="fas fa-check-circle" /> สร้างและติดตั้ง
                        <b>งานอีเวนต์</b>
                        ต่างๆ (Event Installation)
                        <br />
                        <i className="fas fa-check-circle" /> ออกแบบและพัฒนา
                        <b>เว็บไซต์</b> (Web Development)
                        <br />
                        <i className="fas fa-check-circle" /> ออกแบบและพัฒนา
                        <b>แอปพลิเคชัน</b> (Application Development)
                        <br />
                        <i className="fas fa-check-circle" /> ออกแบบและพัฒนา
                        <b>ซอร์ฟแวร์</b> (Software Development)
                     </p>
                     <hr />
                     <p>
                        <i className="fas fa-check-circle" /> Full Stack Web
                        Development (ReactJS, MeteorJS, NodeJS, MongoDB,
                        Express, Bootstrap, Material-UI)
                        <br />
                        <i className="fas fa-check-circle" /> Application
                        Development (React Native)
                        <br />
                        <i className="fas fa-check-circle" /> Software
                        Development (ElectronJS, Python)
                     </p>
                  </Col>
               </Row>
            </div>
         </Container>
      );
   }
}
