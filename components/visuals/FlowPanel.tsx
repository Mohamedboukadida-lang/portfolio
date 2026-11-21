import type { ProjectFlow } from "@/content/site";

export function FlowPanel({ flow }: { flow: ProjectFlow }) {
  return (
    <div className="panel" aria-label={`${flow.title} architecture`}>
      <div className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <p className="font-display text-lg text-ink">{flow.title}</p>
          <p className="text-xs text-muted">Architecture, from the README</p>
        </div>
        <p className="text-xs font-medium text-accent">{flow.badge}</p>
      </div>
      <div className="grid gap-5 px-4 py-5">
        {flow.lanes.map((lane) => (
          <div key={lane.title}>
            <p className="text-xs text-muted">{lane.title}</p>
            <ol className="mt-2 flex flex-wrap items-center gap-2">
              {lane.steps.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-md border border-line bg-paper px-2.5 py-1.5 text-sm text-ink">
                    {step}
                  </span>
                  {index < lane.steps.length - 1 ? (
                    <span className="text-accent" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <p className="border-t border-line px-4 py-3 text-xs text-muted">{flow.note}</p>
    </div>
  );
}
