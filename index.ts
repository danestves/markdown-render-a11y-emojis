// Dependencies
import emojiRegex from "emoji-regex";
import { find } from "gemoji";

/**
 * Find and emoji by character
 *
 * @param {string} needle - It will receive an emoji like 👍
 */
export function findByEmoji(needle: string) {
  return find((emoji) => emoji.emoji === needle);
}

/**
 * Pass a markdown string containing emojis and all emojis
 * will be converted to a span with role="img"
 * and an accesible and correct aria-label
 *
 * @param {string} markdown - All your markdown text no matter the amount
 */
export default function markdownEmojiParser(markdown: string) {
  return markdown.replace(emojiRegex(), (match: string) => {
    const emoji = findByEmoji(match);
    const description = emoji ? emoji.description : "";

    return `<span role="img" aria-label="${description}">${match}</span>`;
  });
}
