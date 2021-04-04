import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()
const port = 3000

const router = new Router()
const movies = new Map()
movies.set('1', {
  id: '1',
  title: 'Star Wars',
  publisher: 'Lucas Films',
})

router
.get('/api', ctx => {
  ctx.response.body = 'API working'
})
.get('/api/movies', ctx => {
  ctx.response.body = Array.from(movies.values())
})
.get('/api/movies/:id', ctx => {
  if (movies.has(ctx.params?.id)) {
    ctx.response.body = movies.get(ctx.params.id)
  }
})
.post('/api/movies', async ctx => {
  const body = await ctx.request.body()
})

app.use(async (ctx, next) => {
  await next()
  console.log(`${ctx.request.method} ${ctx.request.url}`)
})


// app.use((ctx) => {
//   ctx.response.body = "hello from deno"
// })

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port })



