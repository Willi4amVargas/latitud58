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
      "The BBQ Ribs were phenomenal! Tender, smoky, and the sauce was perfect. Fast service, great atmosphere. Definitely coming back for the grill!",
    date: "2025",
  },
  {
    id: 2,
    author: "Mark J.",
    rating: 4,
    comment:
      "Tried the classic cheeseburger. It was juicy and cooked just right. Giving 4 stars because the wait for the table was a bit long, but the food made up for it.",
    date: "2025",
  },
  {
    id: 3,
    author: "Sarah P.",
    rating: 5,
    comment:
      "Amazing pizza! The crust was crispy and the ingredients were fresh. They have the best pepperoni in town. Fantastic experience from ordering to delivery!",
    date: "2025",
  },
  {
    id: 4,
    author: "David L.",
    rating: 5,
    comment:
      "Best smash burger I’ve had all year! Perfectly seasoned and melted cheese. My new go-to place for casual dinner. Highly recommend!",
    date: "2025",
  },
  {
    id: 5,
    author: "Jessica R.",
    rating: 4,
    comment:
      "Very satisfied with the food quality. The steak was great! My only suggestion would be to offer a few more side dish options. Great value for the price.",
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
