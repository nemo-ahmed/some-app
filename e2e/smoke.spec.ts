import { expect, test } from "@playwright/test";

test("App loads, nav works, and page visited", async ({ page }) => {
  await page.goto("/");

  const nav = page.getByRole("navigation");
  const blogLink = nav.getByRole("link", { name: "Cloth" });
  await blogLink.click();

  await expect(blogLink).toHaveClass(/active/);

  await expect(page).toHaveURL(/.*cloth/);
  await expect(
    page.getByRole("heading", { level: 1, name: "Cloth" })
  ).toBeVisible();
});
