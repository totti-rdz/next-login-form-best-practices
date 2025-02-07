# Login Form Best Practices

This project should be an example and a showcase for best practices for an accessible login form, which should keep its functionality and accessibility even without javascript, but javascript should enhance the
user experience e.g. by dynamically updating the password requirements field as the user types, providing real-time feedback on password strength.

Next.js was used to be able to render the form server-side and have an api where the form data could be send to and validated.
But the login form should be usable in any React project.

# Features

- [ ] Implement HTML5 validation, including built-in password check
- [ ] Show form input errors using CSS only
- [ ] Display password requirements
- [ ] Use progressive enhancement to visually indicate which password requirements are met and which are not.
- [ ] Automatic testing of accessibility features

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Disclaimer

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
