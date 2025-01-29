import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  imageUrl: string
  onEdit: () => void
  onDelete: () => void
}

export function CategoryCard({ title, imageUrl}: CategoryCardProps) {
  return (
    <Card className="overflow-hidden h-[383px]">
      <CardContent className="">
        <div className="aspect-square relative mb-3">
          <Image  src={imageUrl || "/placeholder.svg"} alt={title} fill  className="object-contain w-[306px] h-[270px]" />
        </div>
        <h3 className="text-center text-lg font-medium">{title}</h3>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2 p-2">
        <Button variant="default" className="w-full bg-[#1a237e] hover:bg-[#0d47a1]" >
          Edit
        </Button>
        <Button variant="outline" className="w-full" >
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}

