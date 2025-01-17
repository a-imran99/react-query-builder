import type { Moment } from "react-simple-query-builder/ui";
import momentGenerateConfig from "rc-picker/lib/generate/moment";
import generateCalendar from "antd/es/calendar/generateCalendar";

const Calendar = generateCalendar<Moment>(momentGenerateConfig);

export default Calendar;