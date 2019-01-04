import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class LeviProject extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false,
         title: "Mahanakhon Skywalk",
         credit: "brandbuffet",
         creditLink:
            "https://www.brandbuffet.in.th/2018/11/5-hilights-mahanakhon-skywalk/"
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
                     "http://www.mahanakhon.com/images/building/mobile_building_observatory.jpg",
                     "จุดรับชมวิวและตัวผลงานที่ทำตั้งอยู่บนชั้น 74 ของตึกมหานคร"
                  )}
                  {this.imgWithDesc(
                     "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/46493227_2183592908359304_5735745497423937536_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk22-2.fna&oh=af7a882eec6f83bac699727d3a15660b&oe=5C7AFC56",
                     "Interactive Touch Screen Kiosk"
                  )}
                  {this.imgWithDesc(
                     "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/46489431_2183592921692636_7231035797430861824_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk22-2.fna&oh=8e0c7db29b68447c6c131d55dbf48cec&oe=5C755B3C",
                     "โปรแกรมบนหน้าจอ Touch Screen ให้ผู้เข้าชมงานสามารถดูประวัติความเป็นมาของสิ่งปลูกสร้างรอบๆตึกมหานครควบคู่ไปกับการดูวิว 360 องศา"
                  )}
                  {this.imgWithDesc(
                     "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/46504098_2183592915025970_5798598980841504768_n.jpg?_nc_cat=104&_nc_ht=scontent.fbkk22-1.fna&oh=61ec26e2644de6fa1f3e25b3fd7d43ab&oe=5C781BB4",
                     "Interactive Touch Screen Kiosk ถูกตั้งขึ้น 6 จุด (ครอบคลุมวิว360องศา) ถูกควบคุมด้วย Database 6 ชุดแยกกัน โดยเพื่อความสะดวก Admin จะสามารถ Update ได้ตลอดเวลาจากที่ไหนก็ได้"
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

export default LeviProject;
