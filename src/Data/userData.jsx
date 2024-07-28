import React from 'react';
import JAVA from "../assets/JAVA.png";
import CSS from "../assets/CSS.png";
import NodeJS from "../assets/NODEJS.png";
import HTML from "../assets/HTML.png";
import Python from "../assets/PYTHON.png";
import JavaScript from "../assets/JS.png";
import flask from "../assets/flask.png";
import ReactJs from "../assets/ReactJs.png";
import ExpressJS from "../assets/express.png";
import SpringBoot from "../assets/SpringBoot.png";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import gmail from "../assets/mail.png"
import calculator from "../assets/CalculatorProject.png"
import crud from "../assets/CRUDproject.png"
import qrgenerator from "../assets/QRcodeproject.png"
import SK from '../assets/SK.jpg'





export const Hero_image = SK ;

export const data = {
  id: 1,
  Name: "Sabari Karthik S",
  Domain: "Full Stack Developer"
};

export const skills = [
  { id: 1, skillName: 'HTML', Img_link: HTML},
  { id: 2, skillName: 'CSS', Img_link: CSS},
  { id: 3, skillName: 'JavaScript', Img_link: JavaScript},
  { id: 4, skillName: 'ReactJs', Img_link: ReactJs},
  { id: 5, skillName: 'SpringBoot', Img_link: SpringBoot},
  { id: 6, skillName: 'Flask', Img_link: flask},
  { id: 7, skillName: 'ExpressJs', Img_link: ExpressJS},
  { id: 8, skillName: 'Node.js', Img_link: NodeJS},
  { id: 9, skillName: 'Python', Img_link: Python},
  { id: 10, skillName: 'JAVA', Img_link: JAVA},
];
export const Social_media_links =[
  {ID:1,link_address : "https://github.com/Sabarikathik-04",Img_link: github,name:"github"},
  {ID:2,link_address : "https://www.linkedin.com/in/sabari-karthik-s-1a4752277/",Img_link: linkedin,name:"linkedin"},
  {ID:3,link_address : "https://www.instagram.com/sabarikarthik_04/",Img_link: instagram,name:"instagram"},
  {ID:4,link_address : "https://www.facebook.com/sabarikarthik.sabarikarthik.14/",Img_link: facebook,name:"facebook"},
  {ID:5,link_address : "mailto:sabarikarthiks04@gmail.com",Img_link: gmail,name:"gmail"}
]
export const about = {
  about : `I'm Sabari Karthik S, a skilled web developer specializing in <span> JavaScript, HTML/CSS, and React.</span> With experience in e-commerce and interactive web apps,<span> I blend creativity with technology to deliver impactful solutions. Let's collaborate on your next project!</span> Reach out for inquiries or to connect.`
}
export const projects =[
  {ID:1,Website_link : "https://qrcode30.netlify.app/",Img_link: qrgenerator,Title : "QR Code Generator",Description:"A Simple Web Application Using React To Generate Qr code"},
  {ID:2,Website_link : "https://calculator118.netlify.app/",Img_link: calculator,Title : "Calculator",Description:"A Simple Calculator Web Application Using React "},
  {ID:3,Website_link : "https://github.com/Sabarikathik-04/CRUD",Img_link: crud,Title : "CRUD",Description:"CRUD API Created Using Java SpringBoot"},
  /*{ID:4,Website_link : "",Img_link:"",Title : "",Description:""},*/
]



const UserData = () => {

  return (
    <div>
      
    </div>
  )
}

export default UserData;
