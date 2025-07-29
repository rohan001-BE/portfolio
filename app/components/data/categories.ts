import { Award, Code2, Globe, Camera, TrendingUp } from "lucide-react"
import { portfolioItems } from "./portfolio-items"

export const categories = [
  { id: "all", label: "All Projects", count: portfolioItems.length, icon: Award },
  {
    id: "programming",
    label: "Programming",
    count: portfolioItems.filter((item) => item.category === "programming").length,
    icon: Code2,
  },
  {
    id: "web",
    label: "Web Development",
    count: portfolioItems.filter((item) => item.category === "web").length,
    icon: Globe,
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    count: portfolioItems.filter((item) => item.category === "marketing").length,
    icon: TrendingUp,
  },
  {
    id: "photography",
    label: "Photography",
    count: portfolioItems.filter((item) => item.category === "photography").length,
    icon: Camera,
  },
]
