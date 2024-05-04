import ClientGet from './client-get';
import Fetch from './fetch';
import Form from './form';

export default async function Page() {
  return (
    <>
      <section className="grow">
        <Form action="/api/foo/A" />
        <ClientGet url="/api/foo/A" />
      </section>
      <section className="grow">
        <Fetch />
      </section>
    </>
  );
}
