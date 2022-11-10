import "./style.css";
import { useCurrentDate } from "../utils/useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    const formatDate = date.toLocaleDateString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const formatTime = date.toLocaleTimeString("pl", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (
        < p className="clock" >
            Dzisiaj jest {formatDate}, {formatTime}
        </p >
    )
};

export default Clock;