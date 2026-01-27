import { accommodations } from "../data/accommodations";
import { findItineraryByKey, makeReviewItinerary } from "../data/commonFunction";
import { destinations } from "../data/destinations";
import { restaurants } from "../data/restaurants";



const allDestinations = [
  ...destinations,
  ...restaurants,
  ...accommodations
];

interface ReviewTextPlanProps {
  itineraryKey: string
}

export default function ReviewTextPlan({itineraryKey}: ReviewTextPlanProps) {
  return (
    <div className="space-y-3">
      {makeReviewItinerary(allDestinations, findItineraryByKey(itineraryKey)).map((item, idx) => (
        <div key={idx} className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-2 flex gap-4">
          <div className="flex-shrink-0">
            <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">
              {item.day}
            </span>
          </div>
          <p className="text-gray-700 flex-1">{item.schedule}</p>
        </div>
      ))}
    </div>
  );
}