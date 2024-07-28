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
        <Card>
          <CardHeader>
            <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
              Something went wrong!
            </CardTitle>
            <CardDescription>Something went wrong!</CardDescription>
          </CardHeader>
        </Card>
        <CardContent>{error.message}</CardContent>
        <CardFooter className="flex justify-evenly">
          <Button onClick={() => reset()}>Try again</Button>
        </CardFooter>
      </body>
    </html>
  );
}
