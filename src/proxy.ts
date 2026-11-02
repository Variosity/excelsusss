import { type NextRequest, NextResponse } from 'next/server'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // The educational platform is archived for later rollout.
  // Redirect legacy /dashboard and /auth attempts to the Excelsus Agency home page.
  const isArchivedPlatformRoute =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/auth') ||
    pathname.startsWith('/about') ||
    pathname.startsWith('/manifesto') ||
    pathname.startsWith('/mentors') ||
    pathname.startsWith('/contact')

  if (isArchivedPlatformRoute) {
    const homeUrl = request.nextUrl.clone()
    homeUrl.pathname = '/'
    return NextResponse.redirect(homeUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals and static files entirely
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}
