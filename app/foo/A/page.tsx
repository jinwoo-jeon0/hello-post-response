import ClientGet from './client-get';
import Form from './form';

export default async function Page() {
  return (
    <section>
      <Form action="/api/foo/A" />
      <ClientGet url="/api/foo/A" />
    </section>
  );
}
