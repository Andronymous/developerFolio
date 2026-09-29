// Date helpers for portfolio.js. Dates are [year, month] or [year, month, day]
// with 1-based months. All math is done in UTC so DST shifts can't skew it.

const DAY_MS = 24 * 60 * 60 * 1000;

const daysInMonth = (year, month) =>
  new Date(Date.UTC(year, month, 0)).getUTCDate();

// A range covers whole days, both ends included. A month-only start begins on
// the 1st and a month-only end runs to the last day of that month, so
// month-only ranges still count both the first and the last month.
function startOf([year, month, day = 1]) {
  return {year, month, day};
}

function endOf([year, month, day = daysInMonth(year, month)]) {
  return {year, month, day};
}

// The date `months` whole months after `date`, with the day clamped to the
// length of the target month (Jan 31 + 1 month = Feb 28/29)
function addMonths({year, month, day}, months) {
  const index = year * 12 + (month - 1) + months;
  const y = Math.floor(index / 12);
  const m = (index % 12) + 1;
  return Date.UTC(y, m - 1, Math.min(day, daysInMonth(y, m)));
}

// Length of the range in months, rounded to the nearest whole month. The
// leftover days are weighed against the length of the month they fall in, so
// a job ending on the 21st and the next one starting on the 22nd split that
// month between them instead of both counting it.
function monthsBetween(start, end) {
  const endExclusive = Date.UTC(end.year, end.month - 1, end.day) + DAY_MS;
  let months = (end.year - start.year) * 12 + (end.month - start.month);
  while (months > 0 && addMonths(start, months) > endExclusive) months--;
  const anchor = addMonths(start, months);
  const anchorDate = new Date(anchor);
  const leftoverDays = Math.round((endExclusive - anchor) / DAY_MS);
  const monthLength = daysInMonth(
    anchorDate.getUTCFullYear(),
    anchorDate.getUTCMonth() + 1
  );
  return months + Math.round(leftoverDays / monthLength);
}

const monthName = ({year, month}) =>
  new Date(Date.UTC(year, month - 1)).toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC"
  }) + ` ${year}`;

// LinkedIn-style range, e.g. "Dec 2017 - Feb 2022 · 4 yrs 3 mos". Without an
// end date the range runs to today and ends in "Present", so it never goes
// stale.
export function dateRange(start, end) {
  const now = new Date();
  const from = startOf(start);
  const to = endOf(
    end || [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  );
  const total = monthsBetween(from, to);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  if (parts.length === 0) parts.push("less than a month");
  const endLabel = end ? monthName(to) : "Present";
  return `${monthName(from)} - ${endLabel} · ${parts.join(" ")}`;
}

// Whole years since the given date, recomputed on every page load
export function yearsSince(year, month, day) {
  const now = new Date();
  const hadAnniversary =
    now.getMonth() + 1 > month ||
    (now.getMonth() + 1 === month && now.getDate() >= day);
  return now.getFullYear() - year - (hadAnniversary ? 0 : 1);
}
