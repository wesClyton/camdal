import { Controller, useForm } from "react-hook-form";
import { InputIcon } from "./InputIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale"; // ou pt, ptPT etc
import "../styles/CustomDateRangePicker.css";

registerLocale("pt-BR", ptBR);

export function FormBanner() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    console.log(errors.example);
  };

  const [startDate, setStartDate] = useState(null);

  return (
    <div className="form pt-11">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <InputIcon
            icon="add_location"
            type="text"
            placeholder="Local de retirada"
            {...register("localRetirada", { required: true })}
          />

          <Controller
            control={control}
            name="dataRetirada"
            render={({ field }) => (
              <InputIcon icon="calendar_today">
                <DatePicker
                  showTimeSelect
                  dateFormat="Pp"
                  locale="pt-BR"
                  placeholderText="Data de devolução"
                  className="bg-c-white rounded-lg p-4 w-full pl-12"
                  timeCaption="Horario"
                  onChange={(date) => {
                    console.log(`aaa`, date);
                    field.onChange(date);
                  }}
                  selected={field.value}
                />
              </InputIcon>
            )}
          />
        </div>

        <div className="flex gap-4 pt-4">
          <InputIcon
            icon="mode_of_travel"
            type="text"
            placeholder="Local de devolucao"
            {...register("localDevolucao", { required: true })}
          />

          <Controller
            control={control}
            name="dataDevolucao"
            render={({ field }) => (
              <InputIcon icon="calendar_today">
                <DatePicker
                  showTimeSelect
                  dateFormat="Pp"
                  locale="pt-BR"
                  placeholderText="Data de devolução"
                  className="bg-c-white rounded-lg p-4 w-full pl-12"
                  timeCaption="Horario"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                />
              </InputIcon>
            )}
          />
        </div>

        {errors.example && <span>This field is required</span>}

        <div>
          <button
            type="submit"
            className="w-full mt-4 h-14 bg-c-orange rounded-lg flex justify-center items-center hover:cursor-pointer font-bold text-c-white"
          >
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
}
