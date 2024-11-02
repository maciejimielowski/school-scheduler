"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    name: "Mon",
    total: 8,
  },
  {
    name: "Tue",
    total: 7,
  },
  {
    name: "Wed",
    total: 9,
  },
  {
    name: "Thu",
    total: 6,
  },
  {
    name: "Fri",
    total: 7,
  },
];

export function Overview() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Weekly Class Distribution</CardTitle>
        <CardDescription>
          Number of classes scheduled per day
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}