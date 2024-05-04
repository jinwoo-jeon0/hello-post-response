'use client'

import React, { useState } from "react";
import Result from "./result";

export default function Fetch() {
  const [resource, setResource] = useState<React.ComponentProps<typeof Result>['resource']>(null)
  const [error, setError] = useState<React.ComponentProps<typeof Result>['error']>(null)
  const url = '/api/foo/A';

  async function post() {
    try {
      const response = await fetch(
        url,
        {
          method: 'post',
          body: JSON.stringify({
            status: 201,
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
    <p>
      <button type="button" onClick={post}>post to {url}</button>
    </p>
    <p>
      <button type="button" onClick={get}>get from {url}</button>
    </p>
    <Result resource={resource} error={error} />
  </>)
}
