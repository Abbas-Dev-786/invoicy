import React from "react";
import CustomerDetailsTab from "@/components/create-invoice/customer-details";
import Stepper, { StepperItems } from "@/components/ui/stepper";
import ItemDetailsTab from "@/components/create-invoice/item-details";
import InvoicePreviewTab from "@/components/create-invoice/invoice-preview";

const NewInvoicePage = () => {
  const stepperItems: StepperItems[] = [
    {
      link: "Customer Details",
      element: <CustomerDetailsTab />,
    },
    {
      link: "Item Details",
      element: <ItemDetailsTab />,
    },
    {
      link: "Preview",
      element: <InvoicePreviewTab />,
    },
  ];

  return (
    <main className="flex flex-col min-h-[80vh] gap-5 items-center h-full justify-center max-w-6xl mx-auto my-12">
      <section className="w-full">
        <h1 className="text-center text-3xl font-semibold mb-7">
          Create Invoice
        </h1>

        <Stepper items={stepperItems} />
      </section>
    </main>
  );
};

export default NewInvoicePage;
