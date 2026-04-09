import BookGrid from "@/components/wisdom/BookGrid";

export default function WisdomBooksPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Wisdom Books</h1>
        <p className="text-gray-600 mb-8 max-w-2xl text-lg">
          Explore spiritual literature and digital books offering profound insights from the Sun to Human Foundation.
        </p>
      </div>

      {/* Integrating the BookGrid component */}
      <BookGrid />
    </div>
  );
}