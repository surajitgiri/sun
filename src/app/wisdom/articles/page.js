import ArticleGrid from "@/components/wisdom/ArticleGrid";

export default function WisdomArticlesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Wisdom Articles</h1>
        <p className="text-gray-600 mb-8 max-w-2xl text-lg">
          Explore profound articles and written guidance by Pujya Param Aalay Ji on the Sun to Human philosophy and practical spiritual living.
        </p>
      </div>

      {/* Integrating the ArticleGrid component */}
      <ArticleGrid />
    </div>
  );
}