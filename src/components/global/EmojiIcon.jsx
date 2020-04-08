/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import EmojiJS from 'emoji-js';

const emojiJS = new EmojiJS();
emojiJS.img_set = 'google';
emojiJS.allow_native = false;
emojiJS.supports_css = false;
emojiJS.img_sets.google.path = 'https://unpkg.com/emoji-datasource-google@4.0.4/img/google/64/';
emojiJS.img_sets.google.sheet =
  'https://unpkg.com/emoji-datasource-google@5.0.1/img/google/sheets-256/32.png';

const emojify = string => emojiJS.replace_colons(string);

const Emoji = styled.span`
  .emoji {
    width: 32px;
    height: 32px;
    display: block;
  }
`;

export default function EmojiIcon({ emoji }) {
  return <Emoji dangerouslySetInnerHTML={{ __html: emojify(emoji) }} />;
}
