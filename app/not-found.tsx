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
          <Button>
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
