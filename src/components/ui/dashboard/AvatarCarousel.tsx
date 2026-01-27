"use client"

import { useState, useEffect } from "react"

interface AvatarCarouselProps {
  avatarCount?: number
}

export function AvatarCarousel({ avatarCount = 10 }: AvatarCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const avatars = Array.from({ length: avatarCount }, (_, i) => ({
    id: i,
    src: `/assets/${i + 1}.png`,
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % avatarCount)
    }, 50)
    return () => clearInterval(interval)
  }, [avatarCount])

  const firstRow = avatars.slice(0, 5)
  const secondRow = avatars.slice(5, 10)

  return (
    <div className="w-full flex justify-center mb-8">
      {/* Mobile: 2 rows of 5 avatars */}
      <div className="w-full flex flex-col gap-3 sm:hidden">
        <div className="w-full flex justify-between items-center">
          {firstRow.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`flex-shrink-0 w-12 h-12 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                index === 2 ? "scale-110" : ""
              } hover:border-2 hover:border-purple-400 hover:p-1 hover:bg-pink-200 dark:hover:bg-pink-300/30`}
            >
              <img
                src={avatar.src}
                alt={`Avatar ${index + 1}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center">
          {secondRow.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`flex-shrink-0 w-12 h-12 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                index === 2 ? "scale-110" : ""
              } hover:border-2 hover:border-purple-400 hover:p-1 hover:bg-pink-200 dark:hover:bg-pink-300/30`}
            >
              <img
                src={avatar.src}
                alt={`Avatar ${index + 6}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: Single row of all avatars */}
      <div className="hidden sm:flex w-full justify-between items-center">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`flex-shrink-0 w-14 h-14 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
              index === 2 ? "scale-110" : ""
            } hover:border-2 hover:border-purple-400 hover:p-1 hover:bg-pink-200 dark:hover:bg-pink-300/30`}
          >
            <img
              src={avatar.src}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
