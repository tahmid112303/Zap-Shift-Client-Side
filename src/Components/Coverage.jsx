import React, { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router'

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const serviceCenters = useLoaderData()
    const mapRef = useRef(null)

    const handleSearch = (event) =>{
        event.preventDefault()
        const location = event.target.location.value;
        const district = serviceCenters.find(x => x.district.toLowerCase().includes(location.toLowerCase()))

        if(district){
            const coOrdinate = [district.latitude,district.longitude]
            console.log(district,coOrdinate)
            mapRef.current.flyTo(coOrdinate, 12)
        }else{
            alert("Could not find anything")
        }
    }
  return (
    <div className='bg-white h-310 mt-8 rounded-4xl pl-20 pt-20 mb-21'>
        <h1 className='text-secondary text-[56px] font-extrabold'>We are available in 64 districts</h1>

        <form className='flex mt-10' onSubmit={handleSearch}>
             <input type="text" name='location' placeholder="Search here" className="$$input 
        bg-[#CBD5E1] w-140 h-12.5 rounded-4xl pl-4"/>

        <button className='btn bg-primary h-12.5 rounded-4xl w-32 font-bold relative right-32'>Search</button>
        </form>
   

        <div className='w-full h-175 mt-12'>

            <h1 className='font-extrabold text-[30px] text-secondary mt-20 mb-20'>We deliver almost all over Bangladesh</h1>

            <MapContainer center={position} zoom={8} ref={mapRef} scrollWheelZoom={false} className='h-175' >
                <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></TileLayer>

                {
                    serviceCenters.map((center,index) => <Marker key={index} position={[center.latitude,center.longitude]}>
                    <Popup> 
                        <strong>{center.district}</strong> <br />
                        Service Area: {center.covered_area.join(', ')}
                    </Popup>
                </Marker>)
                }               
            </MapContainer>
        </div>
    </div>
  )
}

export default Coverage