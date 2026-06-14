export default function RatingBadge({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1 rounded-md bg-brand-600 px-2 py-1 text-xs font-bold text-white">
        {rating.toFixed(1)}
        <StarIcon />
      </span>
      <span className="text-xs text-gray-500">
        {reviewCount.toLocaleString()} reviews
      </span>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3 w-3"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.951-.69l1.286-3.95z" />
    </svg>
  );
}
