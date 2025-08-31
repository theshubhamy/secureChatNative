// utils/dateUtils.ts

// Helper: strip time (midnight comparison)
const stripTime = (d: Date) =>
  new Date(d?.getFullYear(), d?.getMonth(), d?.getDate());

// ---- Basic formatters ----
export const formatDateOnly = (date: Date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export const formatTimeOnly = (date: Date) =>
  new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

export const formatDateTime = (date: Date) =>
  new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

// ---- Comparisons ----
export const isToday = (date: Date) => {
  const today = stripTime(new Date());
  return stripTime(date).getTime() === today.getTime();
};

export const isYesterday = (date: Date) => {
  const today = stripTime(new Date());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return stripTime(date).getTime() === yesterday.getTime();
};

// ---- Status formatter ----
export const formatDateStatus = (date: Date) => {
  if (isToday(date)) {
    return `Today, ${formatTimeOnly(date)}`;
  }
  if (isYesterday(date)) {
    return `Yesterday, ${formatTimeOnly(date)}`;
  }
  return formatDateOnly(date);
};
