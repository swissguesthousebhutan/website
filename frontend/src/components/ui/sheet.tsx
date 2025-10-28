"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

function SheetPortal({
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) {
  return <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-100 bg-black/50 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  side = "left",
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  side?: "left" | "right" | "top" | "bottom";
}) {
  const base = "fixed z-101 bg-background text-foreground shadow-lg";
  const sides: Record<string, string> = {
    left: "inset-y-0 left-0 w-80 border-r border-border/20",
    right: "inset-y-0 right-0 w-80 border-l border-border/20",
    top: "inset-x-0 top-0 h-80 border-b border-border/20",
    bottom: "inset-x-0 bottom-0 h-80 border-t border-border/20",
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(base, sides[side], className)}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-4 py-3 border-b border-black/10 dark:border-white/10",
        className
      )}
      {...props}
    />
  );
}

function SheetBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />;
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
};
