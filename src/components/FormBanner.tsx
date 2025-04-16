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
    <div
      className="
        w-full
        pt-11
        sm:px-4
        md:px-0
        form
        sm:absolute sm:-bottom-44 sm:left-[50%] sm:translate-x-[-50%]
        lg:w-auto
        xl:relative xl:bottom-0
      "
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="
            w-full
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
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
                  timeCaption="Horario"
                  onChange={(date) => {
                    console.log(`aaa`, date);
                    field.onChange(date);
                  }}
                  selected={field.value}
                  className="
                    w-full
                    p-4 pl-12
                    bg-c-white
                    rounded-lg
                  "
                />
              </InputIcon>
            )}
          />
        </div>

        <div
          className="
            w-full
            flex
            flex-col
            sm:flex-row
            pt-4
            gap-4
          "
        >
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
                  timeCaption="Horario"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                  className="
                    w-full
                    p-4 pl-12
                    bg-c-white
                    rounded-lg
                  "
                />
              </InputIcon>
            )}
          />
        </div>

        {errors.example && <span>This field is required</span>}

        <div>
          <button
            type="submit"
            className="
              flex
              w-full h-14
              mt-4
              font-bold text-c-white
              bg-c-orange
              rounded-lg
              justify-center items-center hover:cursor-pointer
            "
          >
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
}
