import Link from "next/link";
import BloatClientSmall from "../_bundle-bloat/BloatClientSmall";

export default function SmallPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl space-y-6 bg-white px-16 py-20 dark:bg-black">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            Small bundle route
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            This route imports a ~1MB generated module.
          </p>
          <Link className="text-sm text-blue-600 hover:underline" href="/">
            Back to home
          </Link>
        </div>
        <BloatClientSmall />
      </main>
    </div>
  );
}
