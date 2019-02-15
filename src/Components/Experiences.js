import React, { Component } from "react";
import {
   Container,
   Row,
   Col,
   ListGroup,
   ListGroupItem,
   ListGroupItemHeading,
   ListGroupItemText
} from "reactstrap";

import MomeProject from "./mome";
import LeviProject from "./levi";
import MhnkProject from "./mhnk";
import Whizdom from "./whizdom";
import Line from "./line";
import Lighting from "./yimyamlighting";

export default class Experiences extends Component {
   newList(jsx, desc) {
      return (
         <ListGroupItem>
            <ListGroupItemHeading>{jsx}</ListGroupItemHeading>
            <ListGroupItemText>{desc}</ListGroupItemText>
         </ListGroupItem>
      );
   }
   render() {
      return (
         <Container>
            <div className="section">
               <Row>
                  <Col className="right lead" xs="12">
                     <div className="head">
                        <img
                           src="https://image.flaticon.com/icons/svg/924/924450.svg"
                           alt="Exp"
                           width="15%"
                           style={{ margin: "0 1rem" }}
                        />
                        <h1>Experiences</h1>
                     </div>
                     <hr />
                     <div className="display-4 text-center">{"2 0 1 8"}</div>
                     <ListGroup>
                        {this.newList(
                           "Thesis : Machine Learning for Forex Trading",
                           "โปรแกรม Trade ค่าเงินอัตโนมัติ โดยใช้ LSTM; Deep Learning เป็น Algorithm หลัก"
                        )}

                        {this.newList(
                           <MomeProject />,
                           "Experimental Interactive Art Exhibition"
                        )}

                        {this.newList(<LeviProject />, "Web Application")}

                        {this.newList(
                           <MhnkProject />,
                           "Interactive Touch Screen Kiosk"
                        )}

                        {this.newList(<Whizdom />, "Web Application")}

                        {this.newList(
                           "Law Firm Software (เปิดเผยไม่ได้)",
                           "Software จัดการงานเอกสารของบริษัทกฎหมาย Charin & Associates"
                        )}

                        {this.newList(<Line />, "Projection Mapping")}

                        {this.newList(<Lighting />, "Interactive Lighting")}
                     </ListGroup>
                  </Col>
               </Row>
            </div>
         </Container>
      );
   }
}
