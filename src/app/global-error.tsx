"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-white">
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-xl w-full rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
              Critical error
            </h2>
            <p className="text-slate-600 mb-6">
              {error?.message || "A critical application error occurred."}
            </p>
            <button
              onClick={reset}
              className="px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}

