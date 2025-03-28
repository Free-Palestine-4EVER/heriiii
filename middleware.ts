import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// List of supported locales
export const locales = ["en", "fr"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

// Get the preferred locale from the request
function getLocale(request: NextRequest): Locale {
  // Negotiator expects a plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // If there's a locale in the pathname, use that instead
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) as
    | Locale
    | undefined

  if (pathnameLocale) return pathnameLocale

  // Otherwise, use the preferred locale from the browser
  return match(languages, locales, defaultLocale) as Locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // If there's no locale in the pathname
  if (pathnameIsMissingLocale) {
    // Get the preferred locale
    const locale = getLocale(request)

    // Create a new URL with the locale
    const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)

    // Preserve the search params
    newUrl.search = request.nextUrl.search

    // Redirect to the new URL
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - images (public images)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
}

