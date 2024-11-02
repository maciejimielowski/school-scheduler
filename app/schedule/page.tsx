"use client";

import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { addDays, format } from "date-fns";

export default function SchedulePage() {
  const [date, setDate] = useState<Date>(new Date());

  // Example schedule data
  const scheduleData = [
    {
      time: "09:00 AM",
      subject: "Mathematics",
      teacher: "Mr. Smith",
      class: "10A",
    },
    {
      time: "10:00 AM",
      subject: "English",
      teacher: "Mrs. Johnson",
      class: "11B",
    },
    {
      time: "11:00 AM",
      subject: "Physics",
      teacher: "Mr. Smith",
      class: "12C",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                disabled={(date) =>
                  date < new Date() || date > addDays(new Date(), 30)
                }
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Schedule for {format(date, "EEEE, MMMM do, yyyy")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.time}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.subject}
                      </p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-sm font-medium leading-none">
                        {item.teacher}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Class {item.class}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}