import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import googletranslate from '../assets/images/googletranslate.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData = [
   {
      imgUrl: googletranslate,
      title: `Language Translator`,
      desc: `Break down language barriers effortlessly with our language translator feature, making communication`,
   },
   {
      imgUrl: guideImg,
      title: `Currency Convertor`,
      desc: `Experience hassle-free transactions with our built-in currency conversion`,
   },
   {
      imgUrl: weatherImg,
      title: 'Weather Insights',
      desc: `Get instant weather updates from anywhere, helping you plan your adventures with ease and confidence.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
              
            </Col>))
      }
   </>

}

export default ServiceList