import { Select } from "./select/select";
import "./select/styles.scss";

const select = new Select("#select", {
  placeholder: "Выберите, пожалуйста, месяц",
  //   selectedId: "4",
  data: [
    { id: "1", value: "Январь" },
    { id: "2", value: "Февраль" },
    { id: "3", value: "Март" },
    { id: "4", value: "Апрель" },
    { id: "5", value: "Май" },
    { id: "6", value: "Июнь" },
    { id: "7", value: "Июль" },
    { id: "8", value: "Август" },
    { id: "9", value: "Сентябрь" },
    { id: "10", value: "Октябрь" },
    { id: "11", value: "Ноябрь" },
    { id: "12", value: "Декабрь" },
  ],
  onSelect(item) {
    console.log("Selected Item: ", item);
  },
});

window.s = select;
