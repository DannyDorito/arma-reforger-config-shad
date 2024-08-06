"use client";

import { Routes } from "@/types/Routes";
import { NavigatorProps } from "../props/NavigatorProps";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbPage,
} from "./breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { Button } from "./button";

export const Navigator = (props: NavigatorProps) => {
  const currentFormatting = (page: string) =>
    props.current === page ? "red" : "";

  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const ITEMS_TO_DISPLAY = 3;

  return (
    <Breadcrumb className="flex justify-evenly p-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="cursor-pointer"
            onClick={() => props.setCurrent("Base")}
          >
            <h2 className={currentFormatting("Base")}>Base</h2>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {Routes.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {Routes.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => props.setCurrent(item)}
                      >
                        <h2 className={currentFormatting(item)}>{item}</h2>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {Routes.slice(1, -2).map((item, index) => (
                        <h2
                          key={index}
                          className={currentFormatting(item)}
                          onClick={() => props.setCurrent(item)}
                        >
                          {item}
                        </h2>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {Routes.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
          <>
            <BreadcrumbItem
              key={index}
              onClick={() => props.setCurrent(item)}
              className={currentFormatting(item)}
            >
              <BreadcrumbPage
                className={`max-w-20 md:max-w-none cursor-pointer ${currentFormatting(
                  item
                )}`}
              >
                {item}
              </BreadcrumbPage>
            </BreadcrumbItem>
            {item !== Routes[Routes.length - 1] && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
