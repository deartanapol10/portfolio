import React, { Component } from "react";

export default class Footer extends Component {
   render() {
      return (
         <div className="footer-bg">
            <div className="lead">
               <p>© Tanapol Phimphio | {new Date().getFullYear()}</p>
            </div>
         </div>
      );
   }
}
