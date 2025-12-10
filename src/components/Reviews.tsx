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
    author: "Natalia Cortés",
    rating: 5,
    comment:
      "The best Venezuelan food you will find it here. Excellent customer service. They really put so much love and good sazón in their food, they even make the bread from scratch! I’ll def come back ♥️",
    date: "2025",
  },
  {
    id: 2,
    author: "Leandro Chuello",
    rating: 5,
    comment:
      "Excelente atención muy buena la comida recomendado 200%. Ambiente familiar.",
    date: "2025",
  },
  {
    id: 3,
    author: "Daliana Stefania Castillo Pernia",
    rating: 5,
    comment:
      "Demasiado bueno este lugar lo recomiendo 100% no tarden en ir no se van arrepentir",
    date: "2025",
  },
  {
    id: 4,
    author: "Alexis Delgado",
    rating: 5,
    comment:
      "Espectacular ! 10 de 10 .. sabor .. calidad .. presentación .. ingredientes .. todo perfecto ! Gracias Latitud 58! ! COMÍ BRUTAL !",
    date: "2025",
  },
  {
    id: 5,
    author: "Dulcey Art",
    rating: 4,
    comment:
      "Tenía mucho tiempo buscando un lugar con el sabor de nuestro hogar (Venezuela) probé en muchos lugares, ninguno me convencía. Pero sin duda este ha sido el favorito de todos. Y planeo quedarme. Gracias por dejar en alto nuestra bandera con su gastronomía",
    date: "2025",
  },
  {
    id: 6,
    author: "Alvin De Jesus",
    rating: 5,
    comment:
      "Great food and better service!!! Food was delicious and the portions were more than plenty.",
    date: "2025",
  },
  {
    id: 7,
    author: "Mahayana Ap. Rodrigues",
    rating: 5,
    comment:
      "The snacks we received yesterday were very good.😋…",
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
