"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-evenly p-24">
          <Card>
            <CardHeader>
              <CardTitle className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
                Something went wrong!
              </CardTitle>
              <CardDescription>Something went wrong!</CardDescription>
            </CardHeader>
            <CardContent>{error.message}</CardContent>
            <CardFooter className="flex justify-evenly">
              <Button onClick={() => reset()}>Try again</Button>
            </CardFooter>
          </Card>
        </div>
      </body>
    </html>
  );
}
