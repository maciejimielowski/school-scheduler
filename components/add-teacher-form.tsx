"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const subjects = [
  { id: "mat", name: "Matematyka" },
  { id: "pol", name: "Język Polski" },
  { id: "inf", name: "Informatyka" },
  { id: "ang", name: "Język Angielski" },
  { id: "his", name: "Historia" },
];

const teacherFormSchema = z.object({
  name: z.string().min(2, {
    message: "Imię i nazwisko musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Wprowadź poprawny adres email.",
  }),
  subject: z.string({
    required_error: "Wybierz przedmiot.",
  }),
  availability: z.object({
    monday: z.boolean().default(false),
    tuesday: z.boolean().default(false),
    wednesday: z.boolean().default(false),
    thursday: z.boolean().default(false),
    friday: z.boolean().default(false),
  }),
});

type TeacherFormValues = z.infer<typeof teacherFormSchema>;

const defaultValues: Partial<TeacherFormValues> = {
  availability: {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
  },
};

interface AddTeacherFormProps {
  onSuccess: () => void;
}

export function AddTeacherForm({ onSuccess }: AddTeacherFormProps) {
  const form = useForm<TeacherFormValues>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues,
  });

  function onSubmit(data: TeacherFormValues) {
    toast.success("Nauczyciel dodany pomyślnie!");
    onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imię i Nazwisko</FormLabel>
              <FormControl>
                <Input placeholder="Jan Kowalski" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jan.kowalski@szkola.pl" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Przedmiot</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz przedmiot" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <FormLabel>Dostępność</FormLabel>
          {Object.keys(defaultValues.availability!).map((day) => (
            <FormField
              key={day}
              control={form.control}
              name={`availability.${day}` as any}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="font-normal capitalize">
                    {day === "monday" ? "Poniedziałek" :
                     day === "tuesday" ? "Wtorek" :
                     day === "wednesday" ? "Środa" :
                     day === "thursday" ? "Czwartek" : "Piątek"}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type="submit">Dodaj Nauczyciela</Button>
      </form>
    </Form>
  );
}