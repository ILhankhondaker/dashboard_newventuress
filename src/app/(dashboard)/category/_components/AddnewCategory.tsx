"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import type { SubCategoryDataResponse } from "@/data/subCategory";
import { useQuery } from "@tanstack/react-query";
import { ImageIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import { toast } from "sonner";

export default function AddCategoryForm({
  setShowCategory,
}: {
  setShowCategory: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [id, setId] = useState("");

  const [formData, setFormData] = useState({
    categoryName: "",
    subCategory: "",
    description: "",
    industry: "cbd/hemp", // Default to CBD/HEMP
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadstart = () => {
        setUploadProgress(0);
      };

      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100;
          setUploadProgress(progress);
        }
      };

      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
        setUploadProgress(100);
        setSelectedFileName(file.name);
      };

      reader.readAsDataURL(file);
    } else {
      toast.error("Please select a JPEG or PNG file");
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImageFile(null);
    setImagePreview(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle radio group change
  const handleRadioChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      industry: value,
    }));
  };

  const { data } = useQuery<SubCategoryDataResponse>({
    queryKey: ["allsubcategory"],
    queryFn: async (): Promise<SubCategoryDataResponse> =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subcategories`, {
        method: "GET",
      }).then((res) => res.json() as Promise<SubCategoryDataResponse>),
  });

  const handleSelect = (item: string, id: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    setId(id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.categoryName) {
      toast.error("Category name is required");
      return;
    }

    if (!id) {
      toast.error("Please select a subcategory");
      return;
    }

    setIsLoading(true);
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("categoryName", formData.categoryName);
    formDataToSubmit.append("subCategory", id);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("industry", "cbd/hemp");

    if (imageFile) {
      formDataToSubmit.append("image", imageFile);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
          body: formDataToSubmit,
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("Category created successfully!");
        setShowCategory(false);
      } else {
        toast.error(`Error: ${result.message || "Failed to create category"}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl">
      <div className="rounded-t-3xl bg-primary px-[32px] py-4">
        <h1 className="text-[28px] font-semibold text-white">
          Add New Category
        </h1>
      </div>
      <div className="mt-4">
        <CardContent className="p-6">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="categoryName">Category Name *</Label>
                  <Input
                    className="h-[50px] mt-2"
                    id="categoryName"
                    name="categoryName"
                    required
                    value={formData.categoryName}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label>Sub Category *</Label>
                  <div className="relative inline-block text-left w-full border-[1px] border-[#B0B0B0]/50 py-2 rounded-[8px] mt-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                      }}
                      className="font-medium rounded-lg text-sm text-[#444444] px-2 py-2.5 text-center inline-flex justify-between items-center w-full"
                      type="button"
                    >
                      {selectedItem || "Select Sub Category"}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg w-full shadow-md cursor-pointer">
                        <ul className="py-2 text-sm text-gray-700 max-h-60 overflow-y-auto">
                          {data?.data?.map((item) => (
                            <li key={item._id}>
                              <p
                                onClick={() =>
                                  handleSelect(item.subCategoryName, item._id)
                                }
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                              >
                                {item.subCategoryName}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    className="mt-2"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Industry *</Label>
                  <RadioGroup
                    value={formData.industry}
                    onValueChange={handleRadioChange}
                    className="flex items-center space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hemp/cbd" id="cbd" />
                      <Label htmlFor="cbd">HEMP/CBD</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="recreational" id="recreational" />
                      <Label htmlFor="recreational">Recreational</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Category Image</Label>
                <div
                  className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    isDragging
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={openFileDialog}
                >
                  <Input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/jpeg,image/png"
                    onChange={handleFileInput}
                  />

                  {imagePreview ? (
                    <div className="relative aspect-video w-full h-[170px]">
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Category preview"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 h-[180px]">
                      <ImageIcon className="w-12 h-12 text-gray-400 mt-10" />
                      <p className="text-sm text-gray-600">
                        Drop your image here, or browse
                      </p>
                      <p className="text-xs text-gray-500">
                        Jpeg, png are allowed
                      </p>
                    </div>
                  )}
                </div>

                {uploadProgress === 100 && (
                  <p className="text-green-500">{selectedFileName}</p>
                )}
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  />
                )}

                <div className="flex justify-between items-center mt-4">
                  {imageFile && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="text-red-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                  {!imageFile && <div />}

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Confirm"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </div>
    </div>
  );
}
