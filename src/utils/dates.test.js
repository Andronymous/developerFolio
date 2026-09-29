import {dateRange} from "./dates";

afterEach(() => {
  vi.useRealTimers();
});

describe("dateRange", () => {
  it("counts both the first and the last month for month-only dates", () => {
    expect(dateRange([2017, 12], [2022, 2])).toBe(
      "Dec 2017 - Feb 2022 · 4 yrs 3 mos"
    );
    expect(dateRange([2016, 9], [2017, 12])).toBe(
      "Sep 2016 - Dec 2017 · 1 yr 4 mos"
    );
    expect(dateRange([2016, 2], [2016, 6])).toBe("Feb 2016 - Jun 2016 · 5 mos");
    expect(dateRange([2020, 1], [2020, 12])).toBe("Jan 2020 - Dec 2020 · 1 yr");
  });

  it("splits a shared month by exact days instead of counting it twice", () => {
    // 3 yrs 4 mos + 21 of June's 30 days, which rounds up
    expect(dateRange([2022, 2], [2025, 6, 21])).toBe(
      "Feb 2022 - Jun 2025 · 3 yrs 5 mos"
    );
    // 9 of June's days round down, so June is not counted again here
    expect(dateRange([2025, 6, 22], [2025, 12, 31])).toBe(
      "Jun 2025 - Dec 2025 · 6 mos"
    );
    expect(dateRange([2025, 6, 22], [2026, 6, 21])).toBe(
      "Jun 2025 - Jun 2026 · 1 yr"
    );
  });

  it("clamps month-end start days", () => {
    expect(dateRange([2024, 1, 31], [2024, 2, 28])).toBe(
      "Jan 2024 - Feb 2024 · 1 mo"
    );
  });

  it("runs open ranges to today and shows Present", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 8, 29, 12));
    expect(dateRange([2025, 6, 22])).toBe("Jun 2025 - Present · 1 yr 3 mos");
    expect(dateRange([2026, 9])).toBe("Sep 2026 - Present · 1 mo");
    expect(dateRange([2026, 9, 28])).toBe(
      "Sep 2026 - Present · less than a month"
    );
  });
});
