import { routing } from '@/navigation';
import createMiddleware from 'next-intl/middleware';


export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(ko|en)/:path*', '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)']
};