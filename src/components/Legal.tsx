import { Container } from "./ui";

export function Legal({ title, updated, sections }: { title: string; updated: string; sections: [string, string][] }) {
  return (
    <Container className="max-w-3xl pb-24 pt-36 sm:pt-44">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
      <div className="mt-12 space-y-10">
        {sections.map(([h, p]) => (
          <section key={h}>
            <h2 className="font-display text-xl font-semibold">{h}</h2>
            <p className="mt-3 leading-7 text-muted">{p}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
