import { StyledClock } from "./styled";
import { useCurrentDate } from "../utils/useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    const setFormatDate = (date) => date.toLocaleDateString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const setFormatTime = (date) => date.toLocaleTimeString("pl", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (
        <StyledClock>
            Dzisiaj jest {setFormatDate(date)}, {setFormatTime(date)}
        </StyledClock>
    )
};

export default Clock;