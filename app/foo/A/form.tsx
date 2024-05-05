export default function Form({ action }: { action: string; }) {
  return (
    <>
      <h1>post to <code>{action}</code></h1>
      <form method="post" action={action}>
        <p>
          status: <input name="status" defaultValue="303" />
        </p>
        <p>
          Location: <input name="Location" defaultValue="/foo/A" />
        </p>
        <p>
          id: <input name="id" defaultValue="A" />
        </p>
        <p>
          from: <input name="from" defaultValue="post" />
        </p>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
