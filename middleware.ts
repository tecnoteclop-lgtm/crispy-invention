export { default } from "next-auth/middleware"
export const config = { matcher: ["/profile/:path*", "/for-you/:path*", "/taste-profile/:path*", "/settings/:path*", "/admin/:path*", "/upload/:path*", "/following/:path*"] }
