# Driven Recharge

## Deploy

https://driven-recharge-747h.onrender.com/

## API

-   GET to `/health`
-   POST to `/sign-up`

```ts
{
    "name": string,
    "email": string,
    "password": string
}
```

-   POST to `/sign-in`

```ts
{
    "email": string,
    "password": string
}
```

-   GET to `/credentials`
-   GET to `/credentials/:id`
-   PUT to `/credentials/:id`
-   DELETE to `/credentials/:id`
-   POST to `/credentials` and PUT to `/credentials/:id`

```ts
{
    "title": string,
    "url": string,
    "username": string,
    "password": string
}
```

-   DELETE to `/erase`
