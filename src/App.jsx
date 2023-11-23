import {
  Hero,CustomerReview,Footer,Popularproducts,Services,SpecialOffer,Subscribe,SuperQuality
} from "./sections"
import Navbar from "./components/Navbar"

export default function App() {
  return (
 <main className="relative">
<Navbar/>
 <section className="">
 <Hero/>
 </section>
 <section className="padding">
 <Popularproducts/> 
 </section>
 <section className="padding">
 <SuperQuality/> 
 </section>
 <section className="padding-x py-10">
 <Services/>
 </section>
 <section className="padding">
 <SpecialOffer/> 
 </section>
 <section className="bg-pale-blue padding">
 <CustomerReview/> 
 </section>
 <section className="padding-x sm:py-32 py-16 w-full">
<Subscribe/>
 </section>
 <section className="bg-black padding-x padding-t pb-8 ">
<Footer/>
 </section>
 
 </main>   
  )
}