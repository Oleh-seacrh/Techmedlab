"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-xl w-full rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
          Something went wrong
        </h2>
        <p className="text-slate-600 mb-6">
          {error?.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

