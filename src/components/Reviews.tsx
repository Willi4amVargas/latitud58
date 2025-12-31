import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
  const [reviews, setReviews] = useState<google.maps.places.Review[]>([]);

  const getReviews = async () => {
    if (!window.google || !window.google.maps.places) {
      console.error("La librería de Places no está cargada");
      return;
    }

    try {
      const place = new window.google.maps.places.Place({
        id: "ChIJVeXu5y9n_ogRJK8btuYOG8I",
      });

      await place.fetchFields({
        fields: ["reviews", "rating"],
      });

      if (place.reviews) {
        setReviews(place.reviews);
      } else {
        console.log("No se encontraron reseñas para este lugar.");
      }
    } catch (error) {
      console.error("Error al obtener reseñas:", error);
    }
  };

  useEffect(() => {

    const checkAndFetch = () => {
      if (window.google && window.google.maps.places) {
        getReviews();
      } else {
        // Si no está lista, reintentamos en 500ms (solo si es necesario)
        setTimeout(checkAndFetch, 500);
      }
    };

    checkAndFetch();
  }, []);

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
            {reviews.map((review, index) => (
              <CarouselItem
                key={review.authorAttribution?.displayName + index.toString()}
                className="pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-between aspect-square p-6">
                      <div>
                        <RatingStars rating={review.rating} />
                        <p className="mt-4   italic line-clamp-5">
                          "{review.text}"
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t ">
                        <p className="text-lg font-semibold ">
                          {review.authorAttribution?.displayName}
                        </p>
                        <p className="text-sm ">
                          {review.publishTime.toDateString()}
                        </p>
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
