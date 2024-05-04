import Form from "./A/form";

export default function Page() {
  return (
    <section className="grow">
      <Form action="/api/foo" />
    </section>
  );
}
