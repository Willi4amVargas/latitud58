import * as React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
const sampleReviews: Review[] = [
  {
    id: 1,
    author: "Emily K.",
    rating: 5,
    comment:
      "The Parrilla was phenomenal! Juicy grilled steak and chicken, delicious chorizo, and that touch of chimichurri was perfect. Fast service, great flavor. Definitely coming back for this Venezuelan grill!",
    date: "2025",
  },
  {
    id: 2,
    author: "Mark J.",
    rating: 5,
    comment:
      "I tried the SUPER MIXTA Burger and it was HUGE! Grilled chicken, beef, pork chop, egg... a true feast. Juicy and cooked just right. It’s the best street-style burger I’ve had.",
    date: "2025",
  },
  {
    id: 3,
    author: "Sarah P.",
    rating: 5,
    comment:
      "The Reina Pepiada Arepa is incredible! Perfectly toasted, and the chicken/avocado filling was fresh and creamy. A little taste of Venezuela! Fantastic comfort food experience.",
    date: "2025",
  },
  {
    id: 4,
    author: "David L.",
    rating: 5,
    comment:
      "The Lomito Shawarma was awesome! Tender grilled steak, fresh veggies, and the garlic sauce brings it all together. Quick, satisfying, and very authentic. Highly recommend!",
    date: "2025",
  },
  {
    id: 5,
    author: "Jessica R.",
    rating: 4,
    comment:
      "Very satisfied with the food quality. The CAMPESINA Pizza was great! Love the mix of shredded meat, corn, and bell pepper. My only suggestion would be to offer a few more drink options. Great value for the price.",
    date: "2025",
  },
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 transition-colors duration-150 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export function Reviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
          What our customers say
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {sampleReviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-between aspect-square p-6">
                      <div>
                        <RatingStars rating={review.rating} />
                        <p className="mt-4   italic line-clamp-5">
                          "{review.comment}"
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t ">
                        <p className="text-lg font-semibold ">
                          {review.author}
                        </p>
                        <p className="text-sm ">{review.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform  z-10 hidden sm:flex">
            <ChevronLeft className="h-6 w-6 " />
          </CarouselPrevious>

          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform  z-10 hidden sm:flex">
            <ChevronRight className="h-6 w-6 " />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
