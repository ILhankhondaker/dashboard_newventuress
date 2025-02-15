"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputWithTags } from "@/components/ui/input-with-tags";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ProductGallery from "./ProductGallery";
import { enUS } from "date-fns/locale";

import { DateTimePicker } from "@/components/ui/datetime-picker";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  category: z.string().min(1, "Category is required"),
  startingPrice: z.string(),
  startingTime: z.coerce.date().optional(),
  endingTime: z.coerce.date().optional(),
  sku: z.string().optional(),
  stockQuantity: z.string().optional(),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  productType: z.array(z.string()).optional(),
  images: z.array(z.any()).optional(), // Add this line to the schema
});

const AddAuctionForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      startingPrice: "",
      startingTime: new Date(),
      endingTime: new Date(),
      sku: "",
      stockQuantity: "",
      tags: [],
      productType: [],
      images: [], // Set default value for images
    },
  });

  const [tags, setTags] = React.useState<string[]>([]);

  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    form.setValue("tags", tags); // Update the 'tags' field in the form
    form.trigger("tags");
  }, [tags, form, form.trigger]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const [date24, setDate24] = useState<Date | undefined>(undefined);
  return (
    <div className="pb-[32px]">
    <div className="bg-white rounded-[24px] p-[30px]">
      <div
        className={
          "bg-primary px-[32px] py-3 mb- rounded-t-3xl text-white text-[32px] leading-[38px] font-semibold"
        }
      >
        Add Auction
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <div className="w-[58%] space-y-[16px] mt-[30px]">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#444444] text-[16px] font-normal">
                      Title<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type=""
                        className="h-[51px] border-[#9C9C9C]"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#9C9C9C] text-[16px] font-normal">Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description Here"
                        className="resize-none border-[#9C9C9C]"
                        rows={3}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#9C9C9C] text-[16px] font-normal">
                      Product Type<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {["CBD", "Recreational"].map((type) => (
                          <div
                            key={type}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              value={type}
                              checked={field.value?.includes(type)}
                              onChange={(e) => {
                                const valueArray = field.value || [];
                                if (e.target.checked) {
                                  field.onChange([...valueArray, type]);
                                } else {
                                  field.onChange(
                                    valueArray.filter((val) => val !== type)
                                  );
                                }
                              }}
                              className="h-4 w-4 border-[#9C9C9C]"
                            />
                            <label className="text-sm text-[#9C9C9C]">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#444444] text-[16px] font-normal">
                      Category<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type=""
                        className="h-[51px] border-[#9C9C9C]"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startingPrice"
                render={({ field }) => (
                  <FormItem className="flex flex-col ">
                    <FormLabel className=" leading-tight text-[#444444] text-[14px] font-normal">
                      Starting Price
                    </FormLabel>
                    <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px]">
                      <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#0057A8] bg-gray-200 rounded-lg h-[49px] w-[42px] flex items-center justify-center">
                        $
                      </div>
                      <FormControl>
                        <Input
                          placeholder="0.00"
                          type="number"
                          className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg min-w-[240px] border-none h-[50px]"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="startingTime"
                    render={({}) => (
                      <FormItem>
                        <FormLabel className="text-[#444444] text-[16px] font-normal">Starting Time</FormLabel>
                        <FormControl>
                        <DateTimePicker
                          hourCycle={24}
                          value={date24}
                          onChange={setDate24}
                          locale={enUS} // ✅ Correct locale
                          weekStartsOn={0}
                          showWeekNumber={false}
                          showOutsideDays={true}
                        />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="endingTime"
                    render={({}) => (
                      <FormItem>
                        <FormLabel className="text-[#444444] text-[16px] font-normal">Ending Time</FormLabel>
                        <FormControl>
                          <DateTimePicker
                            hourCycle={24}
                            value={date24}
                            onChange={setDate24}
                            locale={enUS} // ✅ Correct locale
                            weekStartsOn={0}
                            showWeekNumber={false}
                            showOutsideDays={true}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="sku"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#444444] text-[16px] font-normal">SKU</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Fox-0369"
                            type="text"
                            className="h-[51px] border-[#9C9C9C]"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="stockQuantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#444444] text-[16px] font-normal">Stock Quantity</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123"
                            type="number"
                            className="h-[51px] border-[#9C9C9C]"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mt-3">
                <InputWithTags
                  placeholder="Add Tags"
                  limit={10}
                  tags={tags} // Pass tags
                  setTags={setTags} // Pass setTags
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="save-info" />
                <Label
                  htmlFor="save-info"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save this information for faster check-out next time
                </Label>
              </div>
            </div>
            <div className="w-[600px] h-full mt-[16px] border border-[#9C9C9C] rounded-lg  ">
              <ProductGallery files={images} setFiles={setImages}/>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" className="px-8">
            Update
          </Button>
            <Button type="submit" className="py-[12px] px-[24px]">
              Confirm
            </Button>
          </div>
        </form>
      </Form>
    </div>
    </div>
  );
};

export default AddAuctionForm;
