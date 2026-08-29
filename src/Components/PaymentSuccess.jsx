import { memo, useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import UseAxiosSecure from "./UseAxiosSecure"

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [paymentInfo,setPaymentInfo] = useState({})
  const axiosSecure = UseAxiosSecure()
  console.log(sessionId)

  useEffect(()=>{

    console.log("Payment success effect");
    if(sessionId){
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
      .then(res=>{
        console.log(res.data)
        setPaymentInfo({
          transactionId: res.data.transactionId,
          trackingId: res.data.trackingId
        })
      })
    }
  },[sessionId,axiosSecure])

  return (
    <div>
        <h2 className="text-4xl font-bold">Payment Successful</h2>
        <h3>Transaction ID: {paymentInfo.transactionId}</h3>
        <h3>Tracking ID: {paymentInfo.trackingId}</h3>
    </div>
  )
}

export default memo(PaymentSuccess)