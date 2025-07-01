import {test, expect} from '@playwright/test'

test("drag and drop with iframe", async({page}) => {
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

    await page.getByRole('button', { name: 'Consent' }).click();

    const frame = page.frameLocator('[rel-title="Photo Manager"] iframe');
    await frame.locator("li", {hasText:"High Tatras 2"}).dragTo(frame.locator("#trash"));

    
})