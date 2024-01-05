import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import "./collection.scss"

import React from 'react'
import Photocard from "../components/Photocard"
import pic1 from "../assets/images/main-gallery/pic-1.png";
import pic2 from "../assets/images/main-gallery/pic-4.png";
import pic3 from "../assets/images/main-gallery/pic-7.png";
import pic4 from "../assets/images/main-gallery/pic-10.png";
import pic5 from "../assets/images/main-gallery/pic-13.png";
import pic6 from "../assets/images/main-gallery/pic-16.png";
import pic7 from "../assets/images/main-gallery/pic-19.png";
import pic8 from "../assets/images/main-gallery/pic-22.png";
import pic9 from "../assets/images/main-gallery/pic-25.png";
import pic10 from "../assets/images/main-gallery/pic-28.png";
import Loader from "react-loaders"
const data = [
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/america+national+parks+and+landmarks", title: "America National Parks", photo: pic1},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/butterflies+and+insects", title: "Butterflies and Insects", photo: pic2},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/animals", title: "Animals", photo: pic3},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/frogs+and+reptiles", title: "Frogs and Reptiles", photo: pic4},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/birds", title: "Birds", photo: pic5},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/transport+and+speed", title: "Transport and Speed", photo: pic6},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/alex+photos", title: "Alex Photos", photo: pic7},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/flowers+and+gardens", title: "Flowers and Gardens", photo: pic8},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/cities", title: "Cities", photo: pic9},
    {link: "https://fineartamerica.com/profiles/alex-nikitsin/collections/lake+superior", title: "Lake Superior", photo: pic10},
  ]
function Collection() {
  return (
    <div className="collection-page">
        <div className="navbar animate__animated animate__bounceInLeft animate__delay-1s">
        <Sidebar/>
        </div>
        <div className="container-collection animate__animated animate__fadeIn animate__delay-1s">
          {data.map((v,i) => (
            <Link to={v.link} target="_blank" key={i}><Photocard photo={v.photo} title={v.title}/></Link>
          ))}
        </div>
        <Loader type='ball-spin-fade-loader'/>
    </div>
  )
}

export default Collection