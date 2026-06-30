"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import Button from "@/components/ui/Button";
import { budgetCategories } from "@/features/Home/budget/budget-config";

const paidSchema = z.object({
  amount: z
    .number({ error: "مبلغ را وارد کنید" })
    .positive("مبلغ باید بزرگتر از صفر باشد"),
  budget_type: z
    .string({ error: "دسته بندی را انتخاب کنید" })
    .min(1, "دسته بندی را انتخاب کنید"),
  date: z.string({ error: "تاریخ را وارد کنید" }).min(1, "تاریخ را وارد کنید"),
});

type PaidFormValues = z.infer<typeof paidSchema>;

const getDefaultDate = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
};

const PaidContent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PaidFormValues>({
    resolver: zodResolver(paidSchema),
    defaultValues: {
      date: getDefaultDate(),
    },
  });

  const onSubmit = (data: PaidFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col gap-4"
    >
      <InputField
        label="مبلغ"
        type="number"
        placeholder="مبلغ را وارد کنید"
        error={errors.amount?.message}
        {...register("amount", { valueAsNumber: true })}
      />

      <Controller
        control={control}
        name="budget_type"
        render={({ field }) => (
          <SelectField
            label="دسته بندی"
            placeholder="دسته بندی را انتخاب کنید"
            error={errors.budget_type?.message}
            options={budgetCategories.map((cat) => ({
              value: cat.key,
              label: cat.label,
            }))}
            {...field}
          />
        )}
      />

      <InputField
        label="تاریخ"
        type="datetime-local"
        error={errors.date?.message}
        {...register("date")}
      />

      <Button
        type="submit"
        color="error"
        loading={isSubmitting}
        loadingText="درحال ثبت..."
        className="mt-2 w-full"
      >
        ثبت خرج
      </Button>
    </form>
  );
};

export default PaidContent;
