import Button from "../components/Button"
import { arrowRight } from "../assets/icons"


const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-14" id="contact-us">
    <h3 className="text-4xl leading-[68px]  font-palanquin font-bold">Sign Up for <span className="text-coral-red mx-3">Updates</span><br/>& Newsletter</h3>
    
    
<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">

<input type="text"  placeholder="Subscribe@nike.com " className="input"/>
<div className="flex max-sm:justify-end itmes-center max-sm:w-full">
<Button label="Sign Up" iconUrl={arrowRight}/>
</div>

</div>

    </section>
  )
}

export default Subscribe
