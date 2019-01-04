import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Contact extends Component {
   render() {
      return (
         <Container>
            <div className="section">
               <Row>
                  <Col className="right lead" xs="12">
                     <div className="head">
                        <img
                           src="https://image.flaticon.com/icons/svg/924/924453.svg"
                           alt="Contact"
                           width="15%"
                           style={{ margin: "0 1rem" }}
                        />
                        <h1>Contact</h1>
                     </div>
                     <hr />
                     <div style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "2rem" }}>Location</p>
                        <div>
                           <iframe
                              title="yimyam-address"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.878824555847!2d100.53040813115003!3d13.753117741453382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ecb0d1e7349%3A0x4bf1c241c88f8049!2sYim+Yam+Hostel+%26+Garden!5e0!3m2!1sen!2sth!4v1540195099762"
                              width="100%"
                              height="100%"
                              frameBorder="0"
                              style={{ border: 0 }}
                              allowFullScreen
                           />
                        </div>
                        <p>
                           {" "}
                           พูดคุยกันได้ที่ Yimyam Hostel & Garden (BTS ราชเทวี)
                        </p>
                     </div>
                     <hr style={{ width: "50%" }} />
                     <div style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "2rem" }}>Social Media</p>
                        <a
                           href="mailto:deartanapol10@gmail.com"
                           style={{ color: "#c71610" }}
                        >
                           <i
                              style={{ fontSize: "2rem", padding: "0px 15px" }}
                              className="fa fa-envelope"
                           />
                        </a>

                        <a
                           href="https://facebook.com/profile.php?id=100006208754729"
                           style={{ color: "#3b5998" }}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <i
                              style={{ fontSize: "2rem", padding: "0px 15px" }}
                              className="fab fa-facebook-square"
                           />
                        </a>

                        <a
                           href="http://line.me/ti/p/~ddear10"
                           style={{ color: "#00c300" }}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <i
                              style={{ fontSize: "2rem", padding: "0px 15px" }}
                              className="fab fa-line"
                           />
                        </a>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      );
   }
}
