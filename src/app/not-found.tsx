export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)]">
      <div className="text-center">
        <p className="text-sm text-[var(--color-primary)]">404</p>

        <h1 className="mt-2 text-3xl font-semibold text-[var(--color-text-primary)]">
          Page not found
        </h1>

        <p className="mt-2 text-[var(--color-text-tertiary)]">
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}