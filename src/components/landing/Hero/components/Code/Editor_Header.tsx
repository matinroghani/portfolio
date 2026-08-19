import React from "react";

export default function Editor_Header() {
  return (
    <div
      className="
            flex
            items-center
            gap-2
            border-b
            border-[var(--color-border)]
            px-4
            py-3
          "
    >
      <span className="size-2.5 rounded-full bg-red-400/70" />
      <span className="size-2.5 rounded-full bg-yellow-400/70" />
      <span className="size-2.5 rounded-full bg-green-400/70" />

      <span
        className="
              ml-2
              text-xs
              text-[var(--color-text-muted)]
            "
      >
        developer.ts
      </span>
    </div>
  );
}
