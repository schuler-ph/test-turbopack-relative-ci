"use client";

import { hugeData, hugeDataBytes } from "../../generated/huge-data-large";

function fingerprint(value: string) {
  let result = 0;
  for (let i = 0; i < value.length; i += 4096) {
    result ^= value.charCodeAt(i);
  }
  return result >>> 0;
}

export default function BloatClientLarge() {
  const fp = fingerprint(hugeData);

  return (
    <section className="mt-8 rounded-md border border-zinc-200 p-4 text-sm dark:border-zinc-800">
      <div className="font-medium">Large bundle demo</div>
      <div>hugeDataBytes: {hugeDataBytes}</div>
      <div>fingerprint: {fp}</div>
      <div className="mt-2 font-mono break-all opacity-70">
        {hugeData.slice(0, 80)}…
      </div>
    </section>
  );
}
