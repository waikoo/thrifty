This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Clone this project using your favorite method.
2. Run either one of these commands:
```bash
npm i
yarn add
pnpm i
bun i
```
3. To use this project you'll need a [Supabase](https://supabase.com/) account.
4. After setting up your account, you'll need to make a `.env.local` in the project root file with the following contents:
```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url-here>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<you-supabase-anon-key-here>
```
You can get these by going to your Supabase dashboard, from the left-hand menu to `Project Settings`, then `API`.

5. Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the e-commerce site.
