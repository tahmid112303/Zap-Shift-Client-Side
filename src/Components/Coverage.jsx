import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router'

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const serviceCenters = useLoaderData()
    console.log(serviceCenters)
  return (
    <div className='bg-white h-235 mt-8 rounded-4xl pl-20 '>
        <h1 className='text-secondary text-[56px] font-extrabold'>We are available in 64 districts</h1>

        <div>

        </div>

        <div className='border w-full h-175'>
            <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-175' >
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