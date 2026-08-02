export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Loading Portfolio...
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Please wait a moment.
          </p>
        </div>
      </div>
    </main>
  );
}