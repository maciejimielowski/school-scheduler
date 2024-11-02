"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const scheduleData = [
  { time: "08:00", class: "Mathematics", teacher: "Mr. Smith", room: "101" },
  { time: "09:00", class: "Physics", teacher: "Mrs. Johnson", room: "102" },
  { time: "10:00", class: "English", teacher: "Ms. Davis", room: "103" },
  { time: "11:00", class: "History", teacher: "Mr. Wilson", room: "104" },
  { time: "12:00", class: "Lunch Break", teacher: "-", room: "-" },
];

export function ScheduleDisplay() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Today's Schedule</CardTitle>
        <CardDescription>
          Current day's class schedule overview
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px]">
          <div className="space-y-4">
            {scheduleData.map((schedule, index) => (
              <div
                key={index}
                className="flex items-center justify-between space-x-4 rounded-lg border p-4"
              >
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {schedule.time}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {schedule.class}
                  </p>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {schedule.teacher}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Room {schedule.room}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}