import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import React from "react";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "abbas@example.com",
      customer: "Abbas",
      date: new Date(),
    },
    {
      id: "728ed53f",
      amount: 500,
      status: "paid",
      email: "moiz@example.com",
      customer: "Moiz",
      date: new Date(),
    },
    {
      id: "728ed342f",
      amount: 100,
      status: "failed",
      email: "hunaid@example.com",
      customer: "Hunaid",
      date: new Date(),
    },
  ];
}

const DashboardPage = async () => {
  const data = await getData();

  return (
    <main className="flex flex-col gap-5 items-center h-full justify-center max-w-6xl mx-auto my-12">
      <section className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-semibold">Invoices</h1>
        <Button variant="ghost" className="inline-flex gap-2 text-md" asChild>
          <Link href={"/invoices/new"}>
            <CirclePlus className="h-4 w-4" /> Create Invoice
          </Link>
        </Button>
      </section>
      <section className="w-full">
        <DataTable columns={columns} data={data} />
      </section>
    </main>
  );
};

export default DashboardPage;
