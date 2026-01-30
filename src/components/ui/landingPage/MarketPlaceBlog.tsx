import { ArrowRight } from "lucide-react";
import { CommonGradientBtn } from "../../../../public/common/gradient-button";

export function MarketplaceBlog() {
  const articles = [
    {
      id: 1,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consecr Adipiscing Elit. Curabitur Auctor, Lorem Quis Consectetur Vulputate",
      author: "John Doe",
      category: "Thoughts Leadership",
      date: "12 Feb, 2024",
      image: "/assets/image2.jpg",
    },
    {
      id: 2,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consecr Adipiscing Elit. Curabitur Auctor, Lorem Quis Consectetur Vulputate",
      author: "John Doe",
      category: "Thoughts Leadership",
      date: "12 Feb, 2024",
      image: "/assets/image2.jpg",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#0b0f1a] dark:to-[#071022] py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            The Marketplace Blog
          </h2>
          <div className="inline-block rounded-xl bg-gradient-to-r from-[#7C6CFF] to-[#20E19F] p-[1.5px] w-full sm:w-auto">
            <button className="rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-gray-900 dark:text-white bg-gradient-to-r from-[#EFEAFF] to-[#E8FFF6] dark:from-[#1a1f2e] dark:to-[#0f1822] hover:opacity-90 transition w-full sm:w-auto">
              Browse All Articles
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-[#071022] dark:border dark:border-gray-700/50 rounded-xl shadow-sm hover:shadow-md dark:shadow-none transition-shadow"
            >
              <div className="p-3 sm:p-4">
                <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800/50">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col h-full">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-2 sm:mb-3">
                  {article.title}
                </h3>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  <span>{article.author}</span>
                  <span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
                  <span>{article.category}</span>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {article.date}
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-[#9945FF] to-[#20E19F] text-transparent bg-clip-text hover:opacity-80 transition"
                  >
                    CTA Button
                    <ArrowRight size={16} className="text-[#20E19F]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
