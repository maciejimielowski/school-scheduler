"use client";

import { useState } from "react";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { SubjectList } from "@/components/subject-list";
import { AddSubjectForm } from "@/components/add-subject-form";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SubjectsPage() {
  const [open, setOpen] = useState(false);

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
          <h2 className="text-3xl font-bold tracking-tight">Przedmioty</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Dodaj Przedmiot
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dodaj Nowy Przedmiot</DialogTitle>
                <DialogDescription>
                  Dodaj nowy przedmiot i określ, w których klasach jest nauczany.
                </DialogDescription>
              </DialogHeader>
              <AddSubjectForm onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
        <SubjectList />
      </div>
    </div>
  );
}