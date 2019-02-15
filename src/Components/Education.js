import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";

export default class Education extends Component {
   render() {
      return (
         <Container>
            <div className="section">
               <Row>
                  <Col className="right lead" xs="12">
                     <div className="head">
                        <img
                           src="https://image.flaticon.com/icons/svg/924/924485.svg"
                           alt="Edu"
                           width="15%"
                           style={{ margin: "0 1rem" }}
                        />
                        <h1>Bio</h1>
                     </div>
                     <p className="lead">
                        <Table>
                           <tbody>
                              <tr>
                                 <th scope="row">
                                    <i className="fas fa-user-alt" />
                                 </th>
                                 <td>นาย ธนพล พิมพ์ผิว (เดียร์)</td>
                              </tr>
                              <tr>
                                 <th scope="row">
                                    <i className="fas fa-birthday-cake" />
                                 </th>
                                 <td>12 กุมภาพันธ์ พ.ศ. 2539</td>
                              </tr>
                              <tr>
                                 <th scope="row">
                                    <i className="fas fa-school" />
                                 </th>
                                 <td>โรงเรียนเซนต์ดอมินิก</td>
                              </tr>
                              <tr>
                                 <th scope="row">
                                    <i className="fas fa-university" />
                                 </th>
                                 <td>
                                    คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                                 </td>
                              </tr>
                              <tr>
                                 <th scope="row">
                                    <i className="fas fa-briefcase" />
                                 </th>
                                 <td>
                                    Developer at{" "}
                                    <a
                                       href="https://puginstudio.com"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                       Pugin-Studio
                                    </a>{" "}
                                    / Freelance Programmer / Artificial
                                    Intelligent Private Fund Manager
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </p>
                  </Col>
               </Row>
            </div>
         </Container>
      );
   }
}
