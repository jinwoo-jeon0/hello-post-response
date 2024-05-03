'use client'

import { useEffect, useState } from "react";

export default function ClientGet({ url }: { url: string; }) {
  const [resource, setResource] = useState<Record<string, unknown> | null>(null)
  const [error, setError] = useState<unknown>(null)
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url, { cache: 'force-cache', headers: { 'Accept': 'application/json' } })
        if (response.ok) {
          setResource(await response.json())
          setError(null)
        }
        else {
          setResource(null)
          setError({
            status: response.status,
            statusText: response.statusText,
            type: response.type,
          })
        }
      } catch (error) {
        setResource(null)
        setError(error)
      }
    })()
  }, [url])

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
