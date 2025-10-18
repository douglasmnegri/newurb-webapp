export interface Videos {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    views: string;
    category: string;
    youtubeUrl: string;
}

export const videos: Videos[] = [
  {
    id: 1,
    title: "Real Estate Investment Fundamentals",
    description:
      "Learn the basics of real estate investing and how to get started",
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop",
    duration: "15:30",
    views: "125K",
    category: "Investment",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Property Valuation Techniques",
    description: "Master the art of property valuation and market analysis",
    thumbnail:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=450&fit=crop",
    duration: "22:15",
    views: "89K",
    category: "Analysis",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Understanding Market Trends",
    description: "Decode market indicators and predict future trends",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    duration: "18:45",
    views: "234K",
    category: "Market",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Legal Aspects of Real Estate",
    description: "Navigate contracts, regulations, and legal requirements",
    thumbnail:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop",
    duration: "25:00",
    views: "67K",
    category: "Legal",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Financing Your Investment",
    description: "Explore mortgage options and financing strategies",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop",
    duration: "20:30",
    views: "156K",
    category: "Finance",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Property Management Essentials",
    description: "Best practices for managing rental properties effectively",
    thumbnail:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=450&fit=crop",
    duration: "17:20",
    views: "92K",
    category: "Management",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
