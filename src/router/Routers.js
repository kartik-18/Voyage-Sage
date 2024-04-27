import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import { HotelsList, MapView, RestaurantsList, AttractionsList, SearchResult } from "../pages";
import { PlaceDetails } from "../pages/templates";

import Tours from '../pages/Tours'
import Explore from '../pages/Explore'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Write from '../pages/Write'
import Single from '../pages/Single'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours />} />
         <Route path='/explore' element={<Explore />} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/blogs' element={<Blogs/>} />   
         <Route path='/write' element={<Write/>} />   
         <Route path='/blogs/:id' element={<Single />} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path='/map' element={<MapView />} />
         <Route path='/restaurants' element={<RestaurantsList/>} />
         <Route path='/hotels' element={<HotelsList/>} />
         <Route path='/attractions' element={<AttractionsList/>} />
         <Route path='/search' element={<SearchResult/>} />
         <Route path='/search/:type/:id' element={<PlaceDetails/>} />
         <Route path='/attractions/:id' element={<PlaceDetails/>} />
         <Route path='/explore/:type/:id' element={<PlaceDetails/>} />
      </Routes>
   )
}

export default Routers
