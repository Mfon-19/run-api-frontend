import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, TimerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
// import React = require("react")

interface RunCardProps {
  title: string;
  startedOn: string;
  completedOn: string;
  location: string;
  miles: number;
  personalBest?: boolean;
  onDelete: () => void;
}

export function RunCard({ title, startedOn, completedOn, location, miles, personalBest = false, onDelete }: RunCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          {personalBest && (
            <Badge variant="secondary" className="ml-2">
              Personal Best!
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>Started: {startedOn}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <TimerIcon className="h-4 w-4" />
          <span>Completed: {completedOn}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPinIcon className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{miles.toFixed(2)}</span>
          <span className="text-muted-foreground">miles</span>
        </div>
        <Button variant="destructive" size="sm" onClick={onDelete} className="w-full">
          <Trash2Icon className="mr-2 h-4 w-4" />
          Delete Run
        </Button>
      </CardContent>
    </Card>
  );
}
