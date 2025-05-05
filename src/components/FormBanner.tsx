import { Controller, useForm } from "react-hook-form";
import { InputIcon } from "./InputIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale"; // ou pt, ptPT etc
import "../styles/CustomDateRangePicker.css";
import { gerarLinkWhatsApp } from "../scripts/getLinkWhatsapp";
import { formatarDataHora } from "../scripts/convert";

registerLocale("pt-BR", ptBR);

export function FormBanner() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const link = gerarLinkWhatsApp(
      "",
      data.localRetirada,
      formatarDataHora(data.dataRetirada),
      data.localDevolucao,
      formatarDataHora(data.dataDevolucao)
    );

    window.open(link, "_blank");
  };

  const [startDate, setStartDate] = useState<Date | null>(null);

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
                  placeholderText="Data de retirada"
                  timeCaption="Horário"
                  onChange={(date) => {
                    field.onChange(date);
                    setStartDate(date); // Atualiza a data de retirada
                  }}
                  selected={field.value}
                  className="
                    w-full
                    p-4 pl-12
                    bg-c-white
                    rounded-lg
                  "
                  filterDate={(date) => {
                    const day = date.getDay();
                    // Permitir apenas Segunda (1) a Sábado (6)
                    return day !== 0; // Bloqueia Domingo (0)
                  }}
                  filterTime={(date) => {
                    const day = date.getDay();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();

                    if (day === 6) {
                      // Sábado: 08h00 às 11h45
                      return (
                        (hours === 8 && minutes >= 0) ||
                        (hours === 9) ||
                        (hours === 10) ||
                        (hours === 11 && minutes <= 45)
                      );
                    } else if (day >= 1 && day <= 5) {
                      // Segunda a Sexta: 08h00 às 17h45
                      return (
                        (hours >= 8 && hours < 17) ||
                        (hours === 17 && minutes <= 45)
                      );
                    }
                    return false; // Bloqueia horários fora das condições
                  }}
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
            placeholder="Local de devolução"
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
                  timeCaption="Horário"
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
                  minDate={startDate} // Bloqueia datas anteriores à retirada
                  minTime={
                    startDate &&
                    field.value &&
                    new Date(startDate).toDateString() === new Date(field.value).toDateString()
                      ? new Date(startDate) // Se for no mesmo dia, usa o horário da retirada como mínimo
                      : new Date(new Date().setHours(8, 0, 0, 0)) // Caso contrário, usa 08:00 como mínimo
                  }
                  maxTime={
                    field.value &&
                    new Date(startDate).toDateString() === new Date(field.value).toDateString()
                      ? new Date(new Date().setHours(17, 45, 0, 0)) // Define 17:45 como horário máximo no mesmo dia
                      : new Date(new Date().setHours(17, 45, 0, 0)) // Define 17:45 como horário máximo para outros dias
                  }
                  filterDate={(date) => {
                    const day = date.getDay();
                    // Permitir apenas Segunda (1) a Sábado (6)
                    return day !== 0; // Bloqueia Domingo (0)
                  }}
                  filterTime={(date) => {
                    const day = date.getDay();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();

                    if (startDate && date <= startDate) {
                      return false; // Bloqueia horários anteriores à retirada
                    }

                    if (day === 6) {
                      // Sábado: 08h00 às 11h45
                      return (
                        (hours === 8 && minutes >= 0) ||
                        (hours === 9) ||
                        (hours === 10) ||
                        (hours === 11 && minutes <= 45)
                      );
                    } else if (day >= 1 && day <= 5) {
                      // Segunda a Sexta: 08h00 às 17h45
                      return (
                        (hours >= 8 && hours < 17) ||
                        (hours === 17 && minutes <= 45)
                      );
                    }
                    return false; // Bloqueia horários fora das condições
                  }}
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
