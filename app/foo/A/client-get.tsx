'use client'

import { useEffect, useState } from "react";
import Result from "./result";

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

  return <Result resource={resource} error={error} />
}
