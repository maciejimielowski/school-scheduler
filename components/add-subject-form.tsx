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
import { toast } from "sonner";

const subjectFormSchema = z.object({
  name: z.string().min(2, {
    message: "Nazwa musi mieć co najmniej 2 znaki.",
  }),
  shortName: z.string().min(2, {
    message: "Skrót musi mieć co najmniej 2 znaki.",
  }),
  years: z.object({
    year1: z.boolean().default(false),
    year2: z.boolean().default(false),
    year3: z.boolean().default(false),
  }),
});

type SubjectFormValues = z.infer<typeof subjectFormSchema>;

const defaultValues: SubjectFormValues = {
  name: "",
  shortName: "",
  years: {
    year1: false,
    year2: false,
    year3: false,
  },
};

interface AddSubjectFormProps {
  onSuccess: () => void;
}

export function AddSubjectForm({ onSuccess }: AddSubjectFormProps) {
  const form = useForm<SubjectFormValues>({
    resolver: zodResolver(subjectFormSchema),
    defaultValues,
  });

  function onSubmit(data: SubjectFormValues) {
    toast.success("Przedmiot dodany pomyślnie!");
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
              <FormLabel>Nazwa Przedmiotu</FormLabel>
              <FormControl>
                <Input placeholder="Matematyka" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shortName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skrót</FormLabel>
              <FormControl>
                <Input placeholder="MAT" {...field} />
              </FormControl>
              <FormDescription>
                Skrót używany w planie lekcji
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <FormLabel>Nauczany w klasach</FormLabel>
          {Object.entries({
            year1: "Klasa 1",
            year2: "Klasa 2",
            year3: "Klasa 3",
          }).map(([year, label]) => (
            <FormField
              key={year}
              control={form.control}
              name={`years.${year}` as any}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {label}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type="submit">Dodaj Przedmiot</Button>
      </form>
    </Form>
  );
}