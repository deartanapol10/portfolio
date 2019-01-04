import React from "react";
import { Row, Col } from "reactstrap";

export default class Example extends React.Component {
   render() {
      return (
         <Row>
            <Col>
               <div className="landing-img">
                  <img
                     src="https://images.unsplash.com/photo-1510843572979-e4b9e790fdd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=238526856465b28e7372a88c82ee05d5&auto=format&fit=crop&w=1693&q=80"
                     alt="Landing"
                     width="100%"
                     style={{ opacity: "0.5" }}
                  />
               </div>
               <div className="landing-text">
                  <h1 style={{ fontSize: "1.85rem" }}>My portfolio website</h1>
                  <h4 style={{ fontSize: "1rem" }}>
                     Web / App / Software / Event
                     <a
                        href="https://puginstudio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src="./images/pug.svg"
                           style={{ padding: "3px", marginBottom: "4px" }}
                           width="15%"
                           alt=""
                        />
                     </a>
                  </h4>
                  <div className="lds-heart">
                     <div />
                  </div>
               </div>
            </Col>
         </Row>
      );
   }
}
