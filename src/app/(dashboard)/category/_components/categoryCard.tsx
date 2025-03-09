<<<<<<< HEAD
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
=======
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { useState } from "react";
import Modal from "@/components/shared/modal/modal";
import EditCategory from "./EditCategory";


interface CategoryCardProps {
  categoryId: string;
  title: string;
  imageUrl: string;
  description: string;
  slug: string,
  // subCategory: number
  onDelete: () => void; 
}

export function CategoryCard({ title, imageUrl, onDelete, description, slug, categoryId  }: CategoryCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const handleModal = () => setIsOpen(true);
  const handleCategoryEditModal = () => setIsOpenEditModal(true);
  // console.log(description);
  
  return (
    <div>
      <Card>
        <CardContent className="pt-4">
          <div className="aspect-square relative mb-3">
            <Image
              src={imageUrl }
              alt={imageUrl}
              fill
              className="object-cover w-[306px] h-[270px]"
            />
          </div>
          <h3 className="text-center text-lg font-medium">{title}</h3>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2">
          <Button 
            onClick={handleCategoryEditModal}
            variant="default"
            className="w-full bg-[#1a237e] hover:bg-[#0d47a1]"
          >
            Edit
          </Button>
          <Button
            onClick={handleModal}
            variant="outline"
            className="w-full"
          >
            Delete
          </Button>
        </CardFooter>
      </Card>

      {/* Delete Confirmation Modal */}
      {isOpen && (
        <Modal >
          <div className="flex justify-center pt-[24px]">
            <Image
              src="/assets/img/logo.png"
              alt="Modal"
              width={205}
              height={205}
              className="object-cover"
            />
          </div>
          <h2 className="text-[36px] text-[#333333] font-bold text-center mt-3">
            PACIFIC RIM FUSION
          </h2>
          <h3 className="text-[32px] text-gradient font-bold text-center mt-3">
            Are You Sure To Delete this Category?
          </h3>
          <p className="text-[26px] text-[#102011] font-normal text-center mt-3">
            Keep shopping with Rim Fusion.
          </p>
          <div className="flex justify-center mt-[50px]">
            <button
              onClick={() => {
                onDelete(); // Call delete function
                setIsOpen(false);
              }}
              className="w-full border-[1px] border-[#4857BD] py-[18px] text-base text-gradient font-semibold rounded-[8px]"
            >
              Yes
            </button>
          </div>
          <div className="mt-[20px]">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary border-[1px] py-[18px] text-base text-[#FFFFFF] font-semibold rounded-[8px]"
            >
              NO
            </button>
          </div>
        </Modal>
      )}

      {/* Edit Category Modal */}
      {isOpenEditModal && (
        <section
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
          onClick={() => setIsOpenEditModal(false)}
        >
          <div
            style={{ boxShadow: "0px 0px 22px 8px #C1C9E4" }}
            className="relative w-[343px] md:w-[1250px] rounded-3xl border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 z-0 bg-[url('/assets/img/modalbg.png')] bg-no-repeat bg-cover rounded-[16px] opacity-50" />
            <div className="relative z-10">
              <EditCategory title={title} imageUrl={imageUrl} description={description} slug={slug} categoryId={categoryId} setIsOpenEditModal={setIsOpenEditModal} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
}

