# Thriftstudio
![thriftstudio_preview](https://www.szasz.dev/images/thriftstudio_preview.avif)

While my wife was pursuing her UI/UX Design Course from Google on Coursera, she designed an e-commerce site as part of her coursework. Inspired by her design, I took on the challenge of bringing it to life. Together, we collaborated to build a responsive e-commerce platform with an admin login UI that allowed administrators to upload new clothing articles to a Supabase database.

This project was a significant milestone for me, as it was my first time diving deep into several new technologies. For example, previously only had limited experience with TypeScript, having used it only once in my Guess My Number project. Tailwind, Supabase was completely new to me at the time. For this project, I decided to leverage the then-new Next.js App Router with server components, which gave me hands-on experience with cutting-edge tools and methodologies in modern web development.

## Live demo
[https://monumental-zuccutto-62f1b9.netlify.app/en/women](https://monumental-zuccutto-62f1b9.netlify.app/en/women)

## Tech stack
Next.js, TypeScript, Tailwind, Supabase

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Clone this project using your favorite method.
2. `cd thrifty` and run either one of these commands:
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

## Special thanks
Big thanks to my wife for her incredible design contributions!
Check out her work:
- [Dribbble](https://dribbble.com/Lyonixa) 
- [GitHub](https://www.github.com/Lyonixa)
