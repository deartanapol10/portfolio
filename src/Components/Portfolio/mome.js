import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class MomeProject extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false,
         title: "Museum of Me by Emporium",
         credit: "Soimilk",
         creditLink:
            "https://www.soimilk.com/art-exhibition/news/museum-of-me-emporium"
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
                     "https://i0.wp.com/gogetlost.co/wp-content/uploads/2018/05/00-3.jpg?fit=900%2C1199&quality=95&ssl=1",
                     "ป้ายโฆษณาเข้าชมงาน Museum of Me ซึ่งจัดขึ้นที่ศูนย์การค้า Emporium"
                  )}
                  {this.imgWithDesc(
                     "https://www.soimilk.com/sites/default/files/u143208/mome-10_0.jpg",
                     "บรรยากาศภายนอกรอบๆงาน"
                  )}
                  {this.imgWithDesc(
                     "https://www.soimilk.com/sites/default/files/u143208/mome-1_0.jpg",
                     "บัตรเข้างาน Museum of Me"
                  )}
                  {this.imgWithDesc(
                     "https://www.soimilk.com/sites/default/files/u143208/mome-15_0.jpg",
                     "เทคโนโลยี QR Code ที่ทำมาจากใบหน้าของตัวเอง และรหัส AMOEBA"
                  )}
                  {this.imgWithDesc(
                     "https://www.soimilk.com/sites/default/files/u143208/mome-17_0.jpg",
                     "นำการ์ดมาเสียบที่ช่องข้างๆหน้าจอแสดงผล หลังจากนั้น ระบบ Computer Vision จะทำการ Detect การ์ดเพื่อเชื่อมหน้าตัวเองเข้ากับงานศิลปะบนหน้าจอแสดงผล"
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

export default MomeProject;
