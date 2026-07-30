import { useEffect } from "react"
import { useSearchParams } from "react-router"
import UseAxiosSecure from "./UseAxiosSecure"

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const axiosSecure = UseAxiosSecure()
  console.log(sessionId)

  useEffect(()=>{
    if(sessionId){
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
      .then(res=>{
        console.log(res.data)
      })
    }
  },[sessionId,axiosSecure])

  return (
    <div>
        <h2 className="text-4xl font-bold">Payment Successful</h2>
    </div>
  )
}

export default PaymentSuccess