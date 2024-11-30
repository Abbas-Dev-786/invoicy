"use client";

import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./button";

export interface StepperItems {
  link: string;
  element: React.ReactElement;
}

interface StepperProps {
  items: StepperItems[];
}

const Stepper = ({ items }: StepperProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNextBtnClick = () => {
    if (activeStep === items.length - 1) {
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBackBtnClick = () => {
    if (activeStep <= 0) {
      return;
    }

    setActiveStep((prev) => prev - 1);
  };

  return (
    <>
      <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {items.map((stepItem, id) => (
          <li
            key={`step-${id}`}
            className={cn("flex items-center", {
              "w-full  after:w-full  after:bg-gray-400 after:h-[2px] after:border-b after:border-gray-200 after:border-1  after:mx-4 xl:after:mx-3 ":
                items.length - 1 !== id,
              "text-black font-bold": activeStep >= id,
            })}
          >
            {items.length - 1 !== id ? (
              <span className="flex flex-col gap-2 items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <CircleCheck />
                <p>
                  {stepItem.link.split(" ")[0]}{" "}
                  <span className="hidden md:inline-block">
                    {stepItem.link.split(" ").slice(1).join(" ")}
                  </span>
                </p>
              </span>
            ) : (
              <span className="flex flex-col items-center gap-2 after:mx-2">
                <CircleCheck />
                <p>{stepItem.link}</p>
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-10">{items[activeStep].element}</div>

      <div className="w-full flex items-center justify-between mt-5">
        <Button onClick={handleBackBtnClick} disabled={!activeStep}>
          Back
        </Button>
        <Button onClick={handleNextBtnClick}>
          {activeStep === items.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </>
  );
};

export default Stepper;
