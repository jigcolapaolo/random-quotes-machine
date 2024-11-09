import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})


test('I can see a wrapper element with a corresponding id="quote-box".', async ({ page }) => {
  await expect(page.locator('id=quote-box')).toBeVisible();
});

test('Within #quote-box, I can see an element with corresponding id="text".', async ({ page }) => {
  const quoteBox = page.locator('#quote-box');
  await expect(quoteBox).toBeVisible();

  const textElement = quoteBox.locator('#text');
  await expect(textElement).toBeVisible();
})

test('Within #quote-box, I can see an element with corresponding id="author".', async ({ page }) => {
  const quoteBox = page.locator('#quote-box');
  await expect(quoteBox).toBeVisible();

  const authorElement = quoteBox.locator('#author');
  await expect(authorElement).toBeVisible();
})

test('Within #quote-box, I can see a clickable element with corresponding id="new-quote".', async ({ page }) => {
  const quoteBox = page.locator('#quote-box');
  await expect(quoteBox).toBeVisible();

  const newQuoteButton = quoteBox.locator('#new-quote');
  await expect(newQuoteButton).toBeVisible();

  await expect(newQuoteButton).toBeEnabled();

  await newQuoteButton.click();
})

test('Within #quote-box, I can see a clickable <a> element with corresponding id="tweet-quote".', async ({ page }) => {
  const quoteBox = page.locator('#quote-box');
  await expect(quoteBox).toBeVisible();

  const tweetQuoteButton = quoteBox.locator('#tweet-quote');
  await expect(tweetQuoteButton).toBeVisible();

  const tagName = await tweetQuoteButton.evaluate(el => el.tagName.toLowerCase());
  expect(tagName).toBe('a');

  await expect(tweetQuoteButton).toBeEnabled();

  await tweetQuoteButton.click();
})

test('On first load, my quote machine displays a random quote in the element with id="text".', async ({ page }) => {
  const quoteBox = page.locator('#quote-box');
  await expect(quoteBox).toBeVisible();

  const textElement = quoteBox.locator('#text');
  await expect(textElement).not.toBeEmpty();
})

test('On first load, my quote machine displays the random quote author in the element with id="author".', async ({ page }) => {
  const authorElement = page.locator('#author');
  await expect(authorElement).not.toBeEmpty();
})

test('When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.', async ({ page }) => {
  const newQuoteButton = page.locator('#new-quote');
  await expect(newQuoteButton).toBeVisible();

  const prevQuote = await page.locator('#text').textContent();

  await newQuoteButton.click();
  await page.waitForTimeout(1000);

  const newQuote = await page.locator('#text').textContent();
  
  expect(newQuote).not.toBe(prevQuote);
});

test('My quote machine should fetch the new quote author when the #new-quote button is clicked and display it in the #author element.', async ({ page }) => {
  const newQuoteButton = page.locator('#new-quote');
  await expect(newQuoteButton).toBeVisible();

  const prevAuthor = await page.locator('#author').textContent();

  await newQuoteButton.click();
  await page.waitForTimeout(1000);

  const newAuthor = await page.locator('#author').textContent();
  
  expect(newAuthor).not.toBe(prevAuthor);
})

test('I can tweet the current quote by clicking on the #tweet-quote <a> element. This <a> element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.', async ({ page }) => {
  const tweetQuoteButton = page.locator('#tweet-quote');
  await expect(tweetQuoteButton).toBeVisible();

  const href = await tweetQuoteButton.getAttribute('href');
  expect(href).toContain('twitter.com/intent/tweet');
})
