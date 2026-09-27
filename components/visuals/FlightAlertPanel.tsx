const rows = [
  { route: "TUN → MUC", price: "€142", note: "Deal · at or under €150", alert: true },
  { route: "MIR → VIE", price: "€176", note: "Was €198 · drop €22", alert: true },
  { route: "NBE → FRA", price: "€214", note: "Direct · next month", alert: false },
  { route: "TUN → SZG", price: "€189", note: "Direct · next month", alert: false },
];

export function FlightAlertPanel() {
  return (
    <div className="panel" aria-label="Sample Flight Alerts check">
      <div className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <p className="font-display text-lg text-ink">Flight Alerts</p>
          <p className="text-xs text-muted">Sample check · direct, one-way</p>
        </div>
        <p className="text-xs font-medium tracking-wide text-accent">Telegram</p>
      </div>
      <ul>
        {rows.map((row) => (
          <li
            key={row.route}
            className={
              row.alert
                ? "alert-row border-b border-line px-4 py-3"
                : "border-b border-line px-4 py-3"
            }
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-medium text-ink">{row.route}</span>
              <span
                className={
                  row.alert ? "text-sm font-semibold text-accent" : "text-sm text-ink-soft"
                }
              >
                {row.price}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{row.note}</p>
          </li>
        ))}
      </ul>
      <p className="px-4 py-3 text-xs text-muted">
        Example fares, not a live result. A deal is €150 or less. A drop is €15 or 10%.
      </p>
    </div>
  );
}
