"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus, Trash } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { GST_RATES } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Istate {
  grandTotal: number;
  gstTotal: number;
  amount: number;
}

const formSchema = z.object({
  items: z.array(
    z.object({
      s_no: z.number().positive().readonly(),
      item_name: z.string().min(1, "Item name is required"),
      price: z.string(),
      quantity: z.string(),
      gst_rate: z.enum(GST_RATES),
      total: z.string().readonly(),
    })
  ),
});

const ItemDetailsTab = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
    mode: "onBlur",
    defaultValues: {
      items: [
        {
          s_no: 1,
          item_name: "",
          price: "",
          quantity: "",
          gst_rate: "18",
          total: "",
        },
      ],
    },
  });
  const { control, watch, setValue } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = watch("items");

  // Calculate total for each row
  const calculateTotal = (index: number) => {
    const { quantity, price, gst_rate } = items[index];

    if (!quantity || !price || !gst_rate) return;

    const amount = +quantity * +price;
    const gst = amount * (+gst_rate / 100);
    const total = amount + gst;
    setValue(`items.${index}.total`, total + "");
  };

  // Calculate grand total
  const { grandTotal, gstTotal, amount }: Istate = items.reduce(
    (sum, item) => {
      const { quantity, price, gst_rate } = item;
      const { grandTotal, gstTotal, amount } = sum;

      const amt = +quantity * +price;
      const gst = amt * (+gst_rate / 100);
      const total = amt + gst;

      return {
        grandTotal: grandTotal + total,
        gstTotal: gstTotal + gst,
        amount: amount + amt,
      };
      // sum + (+item.total || 0)
    },
    { grandTotal: 0, gstTotal: 0, amount: 0 }
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <ScrollArea className="h-[60vh] w-full overflow-x-auto rounded-md border">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center font-bold">
                    S.No
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Item Name
                  </TableHead>
                  <TableHead className="w-32 text-center font-bold">
                    Price (&#8377;)
                  </TableHead>
                  <TableHead className="w-32 text-center font-bold">
                    Quantity
                  </TableHead>
                  <TableHead className="w-20 text-center font-bold">
                    GST %
                  </TableHead>
                  <TableHead className="w-32 text-center font-bold">
                    Total
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((field, i) => {
                  return (
                    <TableRow key={field.id} className="">
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`items.${i}.s_no`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  readOnly
                                  disabled
                                  value={i + 1}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`items.${i}.item_name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`items.${i}.price`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="number"
                                  // min={0}
                                  onBlur={() => calculateTotal(i)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`items.${i}.quantity`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="number"
                                  min={0}
                                  onBlur={() => calculateTotal(i)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`items.${i}.gst_rate`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Select
                                  {...field}
                                  onOpenChange={() => calculateTotal(i)}
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {GST_RATES.map((rate) => (
                                      <SelectItem key={rate} value={rate}>
                                        {rate}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                {/* <Input {...field} /> */}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`items.${i}.total`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input {...field} readOnly disabled />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3">
                          <Button
                            variant={"destructive"}
                            size={"icon"}
                            onClick={() => remove(i)}
                            className={i == 0 ? "hidden" : ""}
                          >
                            <Trash />
                          </Button>
                          <Button
                            variant={"secondary"}
                            size={"icon"}
                            onClick={() =>
                              append({
                                s_no: i + 1,
                                item_name: "",
                                price: "",
                                quantity: "",
                                gst_rate: "18",
                                total: "",
                              })
                            }
                            className={i != fields.length - 1 ? "hidden" : ""}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </form>
        </Form>
      </ScrollArea>

      <div className="mt-5 flex flex-col gap-1 items-end text-left">
        <p className="text-xl">
          <b>Amount Total:- </b>
          {amount}
        </p>
        <p className="text-xl">
          <b>GST Total:- </b>
          {gstTotal}
        </p>
        <p className="text-xl">
          <b>Grand Total:- </b>
          {grandTotal}
        </p>
      </div>
    </>
  );
};

export default ItemDetailsTab;
