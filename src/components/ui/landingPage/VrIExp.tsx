"use client";

type ImmersiveSectionProps = {
  highlightText: string;

  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export function ImmersiveSection({
  highlightText,

  description,
  imageSrc,
  imageAlt = "Immersive experience",
}: ImmersiveSectionProps) {
  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-100 to-teal-200 dark:from-[#0b0f1a] dark:via-[#1a2e4a] dark:to-[#0f3d3e] -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 max-w-full">
              {highlightText.split(" ").map((word, index) =>
                index === 0 ? (
                  <span
                    key={index}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#20E19F]"
                  >
                    {word}
                  </span>
                ) : (
                  <span className="ml-0 sm:ml-2" key={index}>
                    {word}{" "}
                  </span>
                )
              )}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 capitalize leading-relaxed max-w-[520px]">
              {description}
            </p>
          </div>
          <div
            className="w-full h-[240px] sm:h-[400px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden relative bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${imageSrc})` }}
            aria-label={imageAlt}
          ></div>
        </div>
      </div>
    </section>
  );
}
