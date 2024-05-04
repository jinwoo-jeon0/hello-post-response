import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ id: 'B', from: 'get' }, {
    headers: {
      'Cache-Control': 'public, s-maxage=604800, max-age=604800, age=0',
    }
  })
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type');
  const body: Record<string, unknown> & { status?: number; } = contentType?.match(/text/) ? await request.json() : {}
  if (contentType?.match(/form/))
    (await request.formData()).forEach((value, key) => body[key] = value)

  return NextResponse.json(
    body,
    {
      status: body.status ?? 303,
      headers: {
        'Location': '/foo/A',
        'Content-Location': '/api/foo/A',
        'Cache-Control': 'public, s-maxage=604800, max-age=604800, age=0',
      }
    }
  )
}
