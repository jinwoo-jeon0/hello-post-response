'use client'

import React, { useState } from "react";
import Result from "./result";

export default function Fetch() {
  const [resource, setResource] = useState<React.ComponentProps<typeof Result>['resource']>(null)
  const [error, setError] = useState<React.ComponentProps<typeof Result>['error']>(null)
  const url = '/api/foo/A';

  async function post(serialized: Record<string, string>) {
    try {
      const response = await fetch(
        url,
        {
          method: 'post',
          body: JSON.stringify({
            ...serialized,
            id: 'A',
            from: 'fetch post',
          }),
        }
      )
      setResource(await response.json())
      setError(null)
    } catch (error) {
      setResource(null)
      setError(error)
    }
  }

  async function get() {
    try {
      const response = await fetch(url)
      setResource(await response.json())
      setError(null)
    } catch (error) {
      setResource(null)
      setError(error)
    }
  }

  return (<>
    <form onSubmit={(formEvent) => {
      formEvent.preventDefault()
      const serialized: Parameters<typeof post>[0] = {}
      new FormData(formEvent.currentTarget).forEach((value, key) => serialized[key] = value.toString())
      post(serialized)
      return false
    }}>
      <p>
        status: <input type="text" name="status" defaultValue={201} />
      </p>
      <p>
        Location: <input type="text" name="Location" defaultValue="/api/foo/A" />
      </p>
      <p>
        <button type="submit">post to {url}</button>
      </p>
    </form>
    <p>
      <button type="button" onClick={get}>get from {url}</button>
    </p>
    <Result resource={resource} error={error} />
  </>)
}
