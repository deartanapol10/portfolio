import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Whizdom extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false,
         title: "Whizdom Forest by MQDC",
         credit: "Whizdom Forest",
         creditLink: "https://www.whizdomforest.com/"
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
                     "/images/whizdom.JPG",
                     "Web Application + Event Installation เกี่ยวกับให้ผู้ใช้งานได้ปลูกต้นไม้บนเว็บไซต์แล้วต้นไม้ที่ปลูกจะถูกนำไปแสดงผลบนหน้าจอที่ Whizdom Sales Gallery"
                  )}
                  {this.imgWithDesc(
                     "/images/step1.png",
                     "หน้าตา Web Application ให้ผู้ใช้งาน login facebook"
                  )}
                  {this.imgWithDesc(
                     "/images/step2.png",
                     "เลือกเมล็ดพันธุ์ที่ต้องการปลูก"
                  )}
                  {this.imgWithDesc(
                     "/images/step3.png",
                     "กด Growth เพื่อปลูกต้นไม้"
                  )}
                  {this.imgWithDesc(
                     "/images/step4.png",
                     "ระบบจะเก็บชื่อของผู้ปลูกต้นไม้แต่ละต้น และนับยอดเพื่อโชว์บน Website และหน้าจอ Kinect ที่งานแบบ Real-time"
                  )}
                  {this.imgWithDesc(
                     "/images/step5.png",
                     "Share ลง facebook ง่ายๆเพียงคลิกเดียว"
                  )}
               </ModalBody>

               <ModalFooter>
                  <i className="far fa-copyright" />
                  <a href={this.state.creditLink}>{this.state.credit}</a>
               </ModalFooter>
            </Modal>
         </div>
      );
   }
}

export default Whizdom;
