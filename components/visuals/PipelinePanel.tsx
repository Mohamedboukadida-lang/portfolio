import { Check } from "lucide-react";

const steps = [
  { name: "Lint", time: "18s" },
  { name: "Test", time: "42s" },
  { name: "Build image", time: "1m 06s" },
  { name: "Deploy staging", time: "24s" },
];

export function PipelinePanel() {
  return (
    <div className="panel" aria-label="CI/CD pipeline for the sample API">
      <div className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <p className="font-display text-lg text-ink">sample-api</p>
          <p className="text-xs text-muted">main · run 128 · GitHub Actions</p>
        </div>
        <p className="text-xs font-medium tracking-wide text-accent">Passed</p>
      </div>
      <ol>
        {steps.map((step, index) => (
          <li
            key={step.name}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-line px-4 py-3"
          >
            <span className="grid size-6 place-items-center bg-accent text-accent-ink" aria-hidden="true">
              <Check size={14} strokeWidth={2.5} />
            </span>
            <span className="text-sm text-ink">
              <span className="mr-2 text-xs text-muted">0{index + 1}</span>
              {step.name}
            </span>
            <span className="text-sm text-muted">{step.time}</span>
          </li>
        ))}
      </ol>
      <p className="px-4 py-3 text-xs leading-5 text-muted">
        Image <span className="text-ink-soft">sample-api:1.4.2</span> deployed to staging.
        The previous tag stays available for rollback.
      </p>
    </div>
  );
}
