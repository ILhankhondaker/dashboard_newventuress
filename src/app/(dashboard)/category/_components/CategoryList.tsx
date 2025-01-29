import { CategoryCard } from "./categoryCard"


const categories = [
  {
    id: 1,
    title: "Flowers",
    imageUrl:
      "/categoryImg/bong.png",
  },
  {
    id: 2,
    title: "Wax",
    imageUrl:
      "/categoryImg/hats.png",
  },
  {
    id: 3,
    title: "Hats",
    imageUrl:
      "/categoryImg/bong.png",
  },
  {
    id: 4,
    title: "Glasswear",
    imageUrl:
      "/categoryImg/flower.png",
  },
  {
    id: 5,
    title: "Apparel",
    imageUrl:
      "/categoryImg/bong.png",
  },
  {
    id: 6,
    title: "Pipes",
    imageUrl:
      "/categoryImg/hats.png",
  },
  {
    id: 7,
    title: "Bongs",
    imageUrl:
      "/categoryImg/bong.png",
  },
  {
    id: 8,
    title: "Trays",
    imageUrl:
      "/categoryImg/hats.png",
  },
]

export default function CategoryList() {
  return (
    <div className="min-h-screen max-w-[max-w-[1506px]506px] bg-red-500 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-t-lg bg-primary p-4">
          <h1 className="text-[28px] font-semibold text-white">Category List</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              imageUrl={category.imageUrl}
              onEdit={() => console.log(`Edit ${category.title}`)}
              onDelete={() => console.log(`Delete ${category.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

