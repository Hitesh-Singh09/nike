import { star } from "../assets/icons"


const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex jsutify-center items-center flex-col  p-4  bg-white shadow-xl rounded-[10px]">
    <img src={imgURL} alt={customerName} className="rounded-full w-[120px] h-[120px]"/>
    <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
    
    <div className="mt-3 flex jsutify-center items-center gap-2.5">
    <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
    <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
    </div>
    <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    
    </div>
  )
}

export default ReviewCard
