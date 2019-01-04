import React from "react";
// import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class LeviProject extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false,
         title: "Levi's 501 Day",
         credit: "The Cloud",
         creditLink: "https://readthecloud.co/collaboration-levis/"
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
         <React.Fragment>
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
                     "https://readthecloud.co/wp-content/uploads/2018/05/work-collaboration-levis-28.jpg",
                     `LEVI’S® x Apostrophy’s`
                  )}
                  {this.imgWithDesc(
                     "https://readthecloud.co/wp-content/uploads/2018/05/work-collaboration-levis-29.jpg",
                     "ขั้นตอนในการ custom ลายกางเกงยีนส์บน Web Application นี้"
                  )}
                  {this.imgWithDesc(
                     "https://readthecloud.co/wp-content/uploads/2018/05/work-collaboration-levis-36.jpg",
                     "Preview ผลงานกางเกงยีนส์ของผู้ใช้งาน หลังจาก Application ดึงรูป Profile บน Facebook ไปผ่านกระบวนการ Image Processing แล้ว"
                  )}
                  {this.imgWithDesc(
                     "https://readthecloud.co/wp-content/uploads/2018/05/IMG_6544.jpg",
                     "Application จะเก็บไฟล์ภาพที่ต้องการจะพิมพ์โดยมีขนาดสอดคล้องกับกางเกงยีนส์ เพื่อนำมาเข้าเครื่องพิมพ์ลายกางเกงยีนส์"
                  )}
                  {this.imgWithDesc(
                     "https://readthecloud.co/wp-content/uploads/2018/05/IMG_6545.jpg",
                     "รวมผลงานของผู้ใช้งาน"
                  )}
               </ModalBody>

               <ModalFooter>
                  <i className="far fa-copyright" />
                  <a href={this.state.creditLink}>{this.state.credit}</a>
               </ModalFooter>
            </Modal>
         </React.Fragment>
      );
   }
}

export default LeviProject;
