import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Lighting extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false,
         title: "Let it be light : The interactive christmas tree",
         credit: "Pugin Studio",
         creditLink:
            "https://web.facebook.com/puginstudio/videos/350791629045573"
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
                     "/images/letitbelight-1.jpg",
                     `LET IT BE LIGHT 
                     A RESPONSIVE CHRISTMAS TREE เวิร์คช็อป 4 วัน 
                     ว่าด้วยกระบวนการออกแบบ interactive lighting installation 
                     โดย วิทยากรและอาจารย์ที่มีประสบการณ์ในวงการ interactive design
                     สำหรับท่านที่ต้องการเรียนรู้ตั้งแต่วิธีการออกแบบ, idea
                     ไปจนถึงการสร้างและติดตั้งงานเพื่อนำไปใช้งานได้จริง
                     มาทดลองสร้างต้นคริสต์มาส interactive กันเถอะ !!`
                  )}
                  {this.imgWithDesc(
                     "/images/letitbelight-6.png",
                     `โปรแกรมและอุปกรณ์ที่ใช้สำหรับงานครั้งนี้ ได้แก่ MAX MSP/ABLETON/ARDUINO/LEAP/KINECT/RESOLUME/PROCESSING/HARDWARE HACKING/TOUCH OSC`
                  )}
                  {this.imgWithDesc(
                     "/images/letitbelight-2.png",
                     `บรรยากาศภายในงาน`
                  )}
                  {this.imgWithDesc(
                     "/images/letitbelight-3.png",
                     `บรรยากาศภายในงาน`
                  )}
                  {this.imgWithDesc(
                     "/images/letitbelight-4.png",
                     `บรรยากาศภายในงาน`
                  )}
                  {this.imgWithDesc(
                     "/images/letitbelight-5.png",
                     `บรรยากาศภายในงาน`
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

export default Lighting;
