import { useQuery } from "@tanstack/react-query"
import UseAxiosSecure from "./UseAxiosSecure"
import { useParams } from "react-router"

const Payment = () => {
    const {parcelId} = useParams()
    const axiosSecure = UseAxiosSecure()
    const { isLoading ,data: parcel} = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async() => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data
        }
    })

    const handlePayment = async() => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/create-checkout-session',paymentInfo)
        console.log(res.data)
        window.location.href = res.data.url
    }

    if(isLoading){
        return <span className="loading loading-spinner text-error"></span>
    }

  return (
    <div>
        <h1>Please Pay ${parcel.cost} for: {parcel.parcelName}</h1>
        <button onClick={handlePayment} className="btn bg-primary">Pay</button>
    </div>
  )
}

export default Payment