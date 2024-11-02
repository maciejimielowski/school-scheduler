"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const subjects = [
  {
    id: 1,
    name: "Matematyka",
    shortName: "MAT",
    years: {
      year1: true,
      year2: true,
      year3: true,
    },
    teachers: ["Mr. Smith", "Mrs. Johnson"],
  },
  {
    id: 2,
    name: "Język Polski",
    shortName: "POL",
    years: {
      year1: true,
      year2: true,
      year3: true,
    },
    teachers: ["Mrs. Kowalska"],
  },
  {
    id: 3,
    name: "Informatyka",
    shortName: "INF",
    years: {
      year1: true,
      year2: false,
      year3: true,
    },
    teachers: ["Mr. Nowak"],
  },
];

export function SubjectList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Przedmiot</TableHead>
            <TableHead>Skrót</TableHead>
            <TableHead>Klasy</TableHead>
            <TableHead>Nauczyciele</TableHead>
            <TableHead className="text-right">Akcje</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjects.map((subject) => (
            <TableRow key={subject.id}>
              <TableCell className="font-medium">{subject.name}</TableCell>
              <TableCell>{subject.shortName}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {Object.entries(subject.years).map(([year, isActive]) => 
                    isActive && (
                      <Badge key={year} variant="secondary">
                        {year.replace("year", "Klasa ")}
                      </Badge>
                    )
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-1 flex-wrap">
                  {subject.teachers.map((teacher) => (
                    <Badge key={teacher} variant="outline">
                      {teacher}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}