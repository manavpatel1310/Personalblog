import { test, expect } from "@playwright/test";

test("homepage renders hero and nav", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("heading", { level: 1 })).toContainText("High-performance sites");
	await expect(page.getByRole("link", { name: "Portfolio" })).toBeVisible();
});

test("newsletter form submits", async ({ page }) => {
	await page.goto("/");
	await page.getByPlaceholder("you@example.com").fill("test@example.com");
	await page.getByRole("button", { name: "Subscribe" }).click();
	await expect(page.getByText("Thanks — you're on the list.")).toBeVisible();
});

test("blog page shows fallback message when Sanity isn't configured", async ({ page }) => {
	await page.goto("/blog");
	await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
	await expect(page.getByText("Sanity isn't configured yet.")).toBeVisible();
});
