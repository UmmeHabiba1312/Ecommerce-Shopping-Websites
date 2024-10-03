import Hero from "@/components/hero";
import NewProducts from "@/components/new-products";
import Testimonial from "@/components/testimonial";
import Image from "next/image";

function page() {
  return (
    <main>
      <Hero/>
      <NewProducts/>
      <Testimonial/>
    </main>
  )
}

export default page
