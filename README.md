# DB Info

## Permissions & Groups
```
Groups

user
support
sales
warehouse
designer
legal
dev




permissions

support:
	support.users_read
	support.access
		Acceder al panel de soporte
	support.ticket_read
		Acceso a la lectura de tickets
	support.ticket_follow
		Acceso a la resolucion de tickets
sales:
	support.*
	sales.orders_access
		Acceso al panel de ordenes
	sales.orders_edit
		Acceso al reajuste de las ordenes
	sales.orders_read
		Lectura de las ordenes 
	sales.coupons_read
	sales.coupons_edit
	sales.coupons_create
	
	warehouse.tracking_read
warehouse:
	support.*
	warehouse.tracking_read
	warehouse.tracking_edit
dev:
	*
```

# Project start

## Brand new install
```bash
npx create-next-app@latest
# move 'my_app' contents to root /
npm i fastify
npm i @fastify/nextjs next react react-dom
npm uninstall next
npm i next@12
npm i sequelize mysql2
sequelize init
```

Create file `server.js`, with contents
```js
const fastify = require('fastify')()

fastify
  .register(require('@fastify/nextjs'))
  .after(() => {
    fastify.next('/')
  })

fastify.listen({port:3000}, err => {
  if (err) throw err
  console.log('Server listening on http://localhost:3000')
})
```

Edit `package.json` and edit
```json
"scripts": {
  "dev": "node server.js",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

## Download repo
```bash
git remote add origin giturl
git branch -M main
git pull
npm i
```





# Next.js welcome

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
