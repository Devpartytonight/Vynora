import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-5 text-center">
      <div>
        <p className="font-display grad-text text-8xl font-semibold">404</p>
        <h1 className="font-display mt-4 text-3xl font-semibold">This page took a wrong turn</h1>
        <p className="mt-3 text-muted">The page you are looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-brand to-brand2 px-8 py-3 font-medium text-bg">Back to home</Link>
      </div>
    </section>
  );
}
