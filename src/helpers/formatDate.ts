import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export const formatDate = (date: Date) => {
  const dateFormatted = format(new Date(date), "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  return dateFormatted;
};
