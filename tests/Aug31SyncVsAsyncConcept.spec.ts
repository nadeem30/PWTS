import { test, expect } from "@playwright/test";

test('Playwright with TypeScript - Synchronous vs Asynchronous', async ({ page }) => {

    console.log(`Playwright with TypeScript - Synchronous vs Asynchronous

JavaScript/TypeScript is asynchronous by nature.
Almost everything in Playwright is asynchronous.

1. Synchronous (Sequential)

In a synchronous system, tasks are performed one at a time.
Each task must finish before the next one starts.

If a task takes a long time, the entire process is blocked.

Real-world analogy:
A line at a coffee shop.

You order and stand in the line.
Wait for the barista to make your drink, receive it,
and then the next person in line can order.

2. Asynchronous (Parallel/Non-blocking)

In an asynchronous system, you can start a task and
then move on to the next one without waiting for the first one to finish.

When the long-running task completes,
the system notifies you, often through a Promise.

Real-world analogy:
You order, and you get an order token.

You sit in the shop while they prepare your coffee.
You are not stuck in the line.

The next person can place their order.
`);

});