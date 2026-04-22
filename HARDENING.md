# Hardening Checklist

## Security
- [x] Content-Security-Policy header added (next.config.js)
- [x] Rate limiting is now IP-based (prevents global lockout)
- [ ] Move rate limiting to Redis / Upstash for multi-instance deployments
- [ ] Switch Cloudinary to **signed uploads** (unsigned preset allows anyone to upload to your account)
- [ ] Add CSRF review and auth callback validation
- [ ] Store secrets only in host-managed env vars (never commit .env)
- [ ] Add Sentry and alerting
- [ ] Review file upload restrictions and MIME validation

## Auth
- [x] Password reset token scaffold added (connect email provider to activate)
- [x] Email verification token scaffold added (connect email provider to activate)
- [x] bcrypt rounds increased to 12
- [x] Register rate limiting is now per-IP
- [x] Email enumeration protection on forgot-password and send-verification
- [ ] Connect real email provider (Resend, Postmark, etc.) for reset/verify flows
- [ ] Add OAuth providers (Google, GitHub)
- [ ] Suspicious login notifications

## Data
- [x] Prisma schema switched to PostgreSQL
- [x] PasswordResetToken and EmailVerificationToken models added to schema
- [ ] Run `prisma migrate dev` after switching database
- [ ] Enable automated backups on your DB host
- [ ] Add migration pipeline for CI/CD
- [ ] Add soft-delete/archive strategy if needed

## Bug Fixes Applied
- [x] `getSimilarPinsBySlug` now filters hidden pins on the base pin lookup
- [x] `getBoards` now filters out private boards from public listings
- [x] Hardcoded fallback profile image URL removed

## Moderation
- [ ] Connect email notifications for moderation actions
- [ ] Report queues and escalation policy

## SEO
- [x] sitemap.ts included
- [x] robots.ts included
- [ ] Add per-pin metadata and OG images
