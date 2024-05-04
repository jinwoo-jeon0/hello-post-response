'use client'

export default function Result({ resource, error }: {
  resource: Record<string, unknown> | null;
  error: unknown;
}) {
  return (<>
    {resource && <div>resource:
      <pre>
        <code>
          {JSON.stringify(resource, undefined, 2)}
        </code>
      </pre>
    </div>}
    {error && <div>error: {`${error}`}</div>}
  </>)
}
