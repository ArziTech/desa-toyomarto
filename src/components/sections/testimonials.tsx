import React from 'react'
import TestimonialCard from "@/components/testimonial-card";

const Testimonials = () => {
  return (<section className={'w-full py-16'}>
        <div className={'container mx-auto '}>
          <span>Testimonials</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>What they said about?</h2>
        </div>
        <div className={'container mx-auto py-16'}>
          <div className="grid grid-cols-2 gap-4 gap-y-16">
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
          </div>
        </div>
      </section>)
}
export default Testimonials
