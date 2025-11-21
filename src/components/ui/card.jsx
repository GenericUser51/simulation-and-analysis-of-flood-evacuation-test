<<<<<<< HEAD
import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
=======
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  ...props
}) {
>>>>>>> refs/remotes/origin/main
  return (
    <div
      data-slot="card"
      className={cn(
<<<<<<< HEAD
        "bg-card text-card-foreground flex max-h-36 flex-col gap-2 rounded-xl border py-2 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
=======
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props} />
  );
}

function CardHeader({
  className,
  ...props
}) {
>>>>>>> refs/remotes/origin/main
  return (
    <div
      data-slot="card-header"
      className={cn(
<<<<<<< HEAD
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start px-3 py-1 has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-sm leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-xs leading-tight", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }) {
=======
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
>>>>>>> refs/remotes/origin/main
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
<<<<<<< HEAD
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-3 py-1", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-3 py-1 [.border-t]:pt-2", className)}
      {...props}
    />
=======
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
>>>>>>> refs/remotes/origin/main
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
<<<<<<< HEAD
};
=======
}
>>>>>>> refs/remotes/origin/main
