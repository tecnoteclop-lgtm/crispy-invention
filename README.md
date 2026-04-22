# TasteGraph Ready More

This version adds a few high-value product polish features before local testing:

- save / unsave toggle
- profile edit form
- admin overview page
- hide / unhide pin actions
- board edit / delete
- pin delete
- empty states for profile and boards
- audit log starter

## Local setup
```bash
npm install
cp .env.example .env
rm -f prisma/dev.db prisma/dev.db-journal
npm run db:push
npm run db:seed
npm run dev
```

## Demo login
- demo@tastegraph.app
- demo12345
