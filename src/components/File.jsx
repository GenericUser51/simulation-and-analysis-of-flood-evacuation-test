import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Settings2 } from "lucide-react";

import { Button } from "./ui/button";

const items = [
  {
    title: "Settings2",
    url: "#",
    icon: Settings2,
  },
];

export default function File() {
  return (
    <div className="max-h-28 flex-1">
      <Card>
        <CardHeader className="">
          <CardTitle>
            <div className="flex justify-between">
              <text className="text-lg">File Name</text>
              <button className="rounded-full" size="icon"></button>
              <Settings2 />
            </div>
          </CardTitle>
          <div>
            <CardDescription>File ID: #####</CardDescription>
            <CardDescription>Date Created: #####</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex justify-center">
          <button className="h-8 w-full bg-black text-white">Run</button>
          <button className="h-8 w-full underline underline-offset-2">
            Delete
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
