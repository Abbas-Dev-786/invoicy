"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    item_name: z.string().min(1),
    price: z.number().positive(),
    quantity: z.number().positive(),
    gst_rate: z.number().positive(),
    discount:z.number().positive()
  });

const ItemDetailsTab = () => {
  return (
    <div>
      
    </div>
  )
}

export default ItemDetailsTab
