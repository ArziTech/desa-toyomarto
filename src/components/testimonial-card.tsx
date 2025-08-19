import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface Testimonial10Props {
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const TestimonialCard = (
    {
     quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
     author = {
       name: "Customer Name",
       role: "Role",
       avatar: {
         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
         alt: "Customer Name",
       },
     },
   }: Testimonial10Props) => {
  return (<div className="flex flex-col items-center text-center">
        <p className="mb-4 max-w-4xl px-8 font-medium lg:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-2 md:gap-4">
          <Avatar className="size-12 md:size-16">
            <AvatarImage src={author.avatar.src} alt={author.avatar.alt}/>
            <AvatarFallback>{author.name}</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-sm font-medium md:text-base">{author.name}</p>
            <p className="text-muted-foreground text-sm md:text-base">
              {author.role}
            </p>
          </div>
        </div>
      </div>)
}
export default TestimonialCard
