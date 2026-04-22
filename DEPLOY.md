# Deploy Notes

## Recommended stack
- Vercel for web hosting
- Neon / Supabase / Railway PostgreSQL
- Cloudinary for images
- Upstash Redis for real rate limiting
- Sentry for error monitoring
- PostHog or Plausible for analytics

## Move from SQLite to PostgreSQL
1. Update `prisma/schema.prisma` datasource provider from `sqlite` to `postgresql`
2. Set `DATABASE_URL` in production
3. Run:
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```
4. Seed only if needed in staging

## Launch checklist
- [ ] Replace unsigned uploads with signed uploads
- [ ] Add email verification
- [ ] Add password reset
- [ ] Add Redis-backed rate limiting
- [ ] Add bot/spam protection
- [ ] Add Sentry
- [ ] Add analytics dashboard
- [ ] Add sitemap and robots
- [ ] Review privacy/terms with counsel
- [ ] Enable backups for database
- [ ] Configure image CDN rules
- [ ] Set CSP/security headers
- [ ] Test auth callback URLs
- [ ] Test report and moderation workflows

## Suggested hosting flow
- connect repo to Vercel
- set production env vars
- provision PostgreSQL
- provision Cloudinary
- deploy preview
- run migrations
- smoke test auth / upload / profile / for-you
- point domain
