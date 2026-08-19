import React from "react";

export default function Main_Code() {
  return (
    <div className="flex-1 overflow-auto p-5 sm:p-6">
      <pre
        className="
              font-mono
              text-[11px]
              leading-6
              text-[var(--color-text-primary)]
              sm:text-xs
            "
      >
        <code>
          <span className="text-[var(--color-primary-light)]">const</span>{" "}
          <span className="text-[var(--color-secondary-light)]">developer</span>{" "}
          = {"{"}
          {"\n"}
          {"  "}
          <span className="text-[var(--color-primary-lighter)]">
            name
          </span>: <span className="text-emerald-300">{"Matin Roghani"}</span>,
          {"\n"}
          {"  "}
          <span className="text-[var(--color-primary-lighter)]">
            role
          </span>:{" "}
          <span className="text-emerald-300">{"Frontend Developer"}</span>,
          {"\n\n"}
          {"  "}
          <span className="text-[var(--color-primary-lighter)]">
            philosophy
          </span>
          : {"{"}
          {"\n"}
          {"    "}
          <span className="text-[var(--color-primary-lighter)]">focus</span>:{" "}
          <span className="text-emerald-300">{"Clean Code"}</span>,{"\n"}
          {"    "}
          <span className="text-[var(--color-primary-lighter)]">mindset</span>:{" "}
          <span className="text-emerald-300">{"Build. Learn. Improve."}</span>,
          {"\n"}
          {"  "}
          {"},"}
          {"\n\n"}
          {"  "}
          <span className="text-[var(--color-primary-lighter)]">stack</span>: [
          {"\n"}
          {"    "}
          <span className="text-emerald-300">{"React"}</span>,{"\n"}
          {"    "}
          <span className="text-emerald-300">{"Next.js"}</span>,{"\n"}
          {"    "}
          <span className="text-emerald-300">{"TypeScript"}</span>,{"\n"}
          {"  "}] ,{"\n\n"}
          {"  "}
          <span className="text-[var(--color-primary-lighter)]">
            currentlyBuilding
          </span>
          :{" "}
          <span className="text-emerald-300">
            {"Digital experiences that matter."}
          </span>
          ,{"\n"}
          {"};"}
          {"\n\n"}
          <span className="text-[var(--color-text-muted)]">
            {"// Always Learning. Always building."}
          </span>
        </code>
      </pre>
    </div>
  );
}
