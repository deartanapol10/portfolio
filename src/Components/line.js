import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class Line extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false,
         title: "Line Thailand's Gala Dinner"
         // credit: "Whizdom Forest",
         // creditLink: "https://www.whizdomforest.com/"
      };

      this.toggle = this.toggle.bind(this);
   }

   toggle() {
      this.setState({
         modal: !this.state.modal
      });
   }

   imgWithDesc(img, desc) {
      return (
         <div>
            <img src={img} alt="" width="100%" />
            <p
               className="lead"
               style={{ textAlign: "center", fontSize: "1rem" }}
            >
               {desc}
               <br />
               {". . . ."}
            </p>
         </div>
      );
   }

   render() {
      return (
         <div>
            <button className="exp-button" onClick={this.toggle}>
               {this.state.title}
            </button>
            <Modal
               isOpen={this.state.modal}
               toggle={this.toggle}
               className={this.props.className}
            >
               <ModalHeader toggle={this.toggle}>
                  {this.state.title}
               </ModalHeader>

               <ModalBody>
                  {this.imgWithDesc(
                     "./images/line1.jpg",
                     "งาน Gala Dinner ของบริษัท Line Thailand จัดขึ้นที่โรงแรม Park Hyatt Bangkok"
                  )}

                  {this.imgWithDesc(
                     "./images/line2.jpg",
                     "ได้รับมอบหมายให้ทำ Projection Mapping จาก Projector 6 เครื่อง โดยเลือกใช้โปรแกรม Resolume"
                  )}

                  {this.imgWithDesc("./images/line3.jpg", "โปรแกรม Resolume")}
               </ModalBody>

               {/* <ModalFooter>
                  <i className="far fa-copyright" />
                  <a href={this.state.creditLink}>{this.state.credit}</a>
               </ModalFooter> */}
            </Modal>
         </div>
      );
   }
}

export default Line;
