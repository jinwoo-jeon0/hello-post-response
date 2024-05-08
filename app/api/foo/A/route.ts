import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ id: 'B', from: 'get' }, {
    headers: {
      'Cache-Control': 'max-age=604800',
    }
  })
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type');
  const body: Record<string, unknown> & { status?: number; Location?: string } = contentType?.match(/json/) ? await request.json() : {}
  if (contentType?.match(/form/))
    (await request.formData()).forEach((value, key) => body[key] = value)

  return NextResponse.json(
    body,
    {
      status: body.status,
      headers: {
        ...body.Location && { 'Location': body.Location },
        'Content-Location': '/api/foo/A',
        'Cache-Control': request.headers.get('Cache-Control') ?? '',
      }
    }
  )
}
