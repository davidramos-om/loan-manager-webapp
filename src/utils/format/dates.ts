import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en';
import _toObject from 'dayjs/plugin/toObject';

dayjs.extend(_toObject);
dayjs.extend(relativeTime);
dayjs.locale('en');

type DateValueFormat = string | number | dayjs.Dayjs | Date;

export const fromNow = (date: DateValueFormat) => {
  return dayjs(date).fromNow();
};

export const toNow = (date: DateValueFormat) => {
  return dayjs(date).toNow();
};

export const addMonths = (date: DateValueFormat, months: number) => {
  return dayjs(date).add(months, 'month');
};

export const monthName = (date: DateValueFormat) => {
  return dayjs(date).format('MMMM');
};

export const formatTime = (date: DateValueFormat) => {
  return dayjs(date).format('hh:mm A');
};

export const formatDate = (date: DateValueFormat) => {
  return dayjs(date).format('MMM DD, YYYY');
};

export const formatDateTime = (date: DateValueFormat) => {
  return dayjs(date).format('MMM DD, YYYY hh:mm A');
};

export const formatDateTimeShort = (date: DateValueFormat) => {
  return dayjs(date).format('MMM DD hh:mm A');
};

export const formatDateTimeShortest = (date: DateValueFormat) => {
  return dayjs(date).format('MMM DD hh:mm');
};

export const customDateFormat = (date: DateValueFormat, format: string) => {
  return dayjs(date).format(format);
};

export const toUnix = (date: DateValueFormat) => {
  return dayjs(date).unix();
};

export const fromUnix = (date: number) => {
  return dayjs.unix(date);
};

export const toISOString = (date: DateValueFormat) => {
  return dayjs(date).toISOString();
};

export const toObject = (date: DateValueFormat) => {
  return dayjs(date).toObject();
};
