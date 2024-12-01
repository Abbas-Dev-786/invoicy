"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const InvoicePreviewTab = () => {
  return (
    <section className="border h-full px-5 py-2" id="preview-container">
      <div className="flex items-center justify-center gap-12">
        <div className="h-32 w-32 bg-blue-300 rounded-full"></div>
        <div className="text-center">
          <p className="text-3xl">Company Name</p>
          <p className="text-md">Address</p>
          <p className="text-md">Mobile No:- </p>
          <p className="text-md">Email:- </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <div className="flex items-center justify-between">
          <p>
            <b>Invoice ID:-</b>{" "}
          </p>
          <p>
            <b>Date:-</b>{" "}
          </p>
        </div>

        <p>
          <b>CUstomer Name:- </b>
        </p>
        <p>
          <b>Company Name:-</b>{" "}
        </p>
        <p>
          <b>Company Address:-</b>
        </p>

        <div className="flex items-center justify-between">
          <p>
            <b>GSTIN:-</b>{" "}
          </p>
          <p>
            <b>Email:-</b>{" "}
          </p>
          <p>
            <b>Phone:-</b>{" "}
          </p>
        </div>
      </div>

      {/* table */}
      <div className="mt-6">
        <p>Please check all the items</p>
        <Table className="border mt-1">
          <TableHeader>
            <TableRow>
              <TableHead className="w-16 text-center font-bold border">
                S.No
              </TableHead>
              <TableHead className="text-center font-bold border">
                Particulars
              </TableHead>
              <TableHead className="w-32 text-center font-bold border">
                Price (&#8377;)
              </TableHead>
              <TableHead className="w-32 text-center font-bold border">
                Quantity
              </TableHead>
              <TableHead className="w-20 text-center font-bold border">
                GST %
              </TableHead>
              <TableHead className="w-32 text-center font-bold border">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center border">1</TableCell>
              <TableCell>Ball Pen</TableCell>
              <TableCell className="text-center border">10</TableCell>
              <TableCell className="text-center border">10</TableCell>
              <TableCell className="text-center border">5</TableCell>
              <TableCell className="text-center">1050</TableCell>
            </TableRow>
            {/* total */}
            <TableRow>
              <TableCell className="" colSpan={4} rowSpan={4}>
                <p>
                  <b>GSTIN:-</b>
                </p>
                <p>
                  <b>Grand Total in Words:-</b>
                </p>
              </TableCell>

              <TableCell className="text-center border font-bold">
                Total
              </TableCell>
              <TableCell className="text-center">1000</TableCell>
            </TableRow>
            {/* cGST */}
            <TableRow>
              <TableCell className="text-center border font-bold">
                CGST
              </TableCell>
              <TableCell className="text-center">25</TableCell>
            </TableRow>
            {/* sGST */}
            <TableRow>
              <TableCell className="text-center border font-bold">
                SGST
              </TableCell>
              <TableCell className="text-center">25</TableCell>
            </TableRow>
            {/* Grand Total */}
            <TableRow>
              <TableCell className="text-center border font-bold">
                Grand Total
              </TableCell>
              <TableCell className="text-center">1050</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-6">
        <p>
          <b>Additional Info:-</b>{" "}
        </p>
      </div>
    </section>
  );
};

export default InvoicePreviewTab;
