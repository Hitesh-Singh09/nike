import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
   <h3 className="font-palanquin text-center text-[2.1rem] xl:text-[3rem] font-bold">What Our<span className="text-coral-red mx-3">Customers</span>Say?</h3>
   <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p> 
  
   <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
{
  reviews.map((review)=>(
    <ReviewCard key={review.customerName} {...review}/>
  ))
}
  </div>
   </section>
  )
}

export default CustomerReview