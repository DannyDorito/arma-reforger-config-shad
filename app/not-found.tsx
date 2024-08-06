"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <Card className="w-fit">
        <CardHeader>
          <CardTitle className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
            Not Found
          </CardTitle>
          <CardDescription>404!</CardDescription>
        </CardHeader>
        <CardContent>Could not find requested resource</CardContent>
        <CardFooter className="flex justify-evenly">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>
                  <Link href="/">Return Home</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Return Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </div>
  );
}
