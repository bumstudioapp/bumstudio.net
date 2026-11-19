// Central site settings — edit links and titles here only.
export const SITE_URL = 'https://bumstudio.net';
export const BASE = '/blog';
export const GAME_NAME = 'RPS Master';
export const STUDIO_NAME = 'BumStudio';
export const STUDIO_URL = 'https://bumstudio.net/';
export const STUDIO_URL_VI = 'https://bumstudio.net/vi/';
// Google Play link (package net.bumstudio.rpsgame).
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=net.bumstudio.rpsgame';
export const CONTACT_EMAIL = 'hello@bumstudio.net';

export const CATEGORIES = ['News', 'Guides', 'Updates'] as const;
export type Category = (typeof CATEGORIES)[number];
export const categorySlug = (c: string) => c.toLowerCase();

// ---- Bilingual (English / Vietnamese) ----
export const LANGS = ['en', 'vi'] as const;
export type Lang = (typeof LANGS)[number];

// Category values stay English in frontmatter + URLs; only the label is localised.
export const CAT_LABEL: Record<Lang, Record<Category, string>> = {
  en: { News: 'News', Guides: 'Guides', Updates: 'Updates' },
  vi: { News: 'Tin tức', Guides: 'Hướng dẫn', Updates: 'Cập nhật' },
};

export const UI = {
  en: {
    siteTitle: 'RPS Master Blog — News, Guides & Updates',
    siteDescription:
      'Official RPS Master blog by BumStudio: game news, beginner guides, rock paper scissors strategy and update notes for the Android & iOS game.',
    homeTitle: 'RPS Master News & Guides',
    homeLede:
      'Announcements, beginner guides and rock paper scissors strategy from BumStudio — the team behind RPS Master for Android & iOS.',
    allPosts: 'All posts',
    noPosts: 'No articles in this category yet — check back soon.',
    categoryDesc: (c: Category) =>
      `All ${CAT_LABEL.en[c]} articles from the official RPS Master blog by BumStudio.`,
    getGame: 'Get the game',
    updated: 'Updated',
    ctaTitle: 'Play RPS Master',
    ctaBody:
      'Put every tip into practice in live 1v1 matches, friend rooms and the Conquest map. Free to play on Android.',
    ctaLink: 'Download on Google Play →',
    contact: 'Contact',
    dateLocale: 'en-GB',
    ogLocale: 'en_US',
  },
  vi: {
    siteTitle: 'RPS Master Blog — Tin tức, Hướng dẫn & Cập nhật',
    siteDescription:
      'Blog chính thức của RPS Master từ BumStudio: tin tức game, hướng dẫn cho người mới, chiến thuật oẳn tù tì và ghi chú cập nhật cho game Android & iOS.',
    homeTitle: 'Tin tức & Hướng dẫn RPS Master',
    homeLede:
      'Thông báo, hướng dẫn cho người mới và chiến thuật oẳn tù tì từ BumStudio — đội ngũ đứng sau RPS Master trên Android & iOS.',
    allPosts: 'Tất cả bài viết',
    noPosts: 'Chuyên mục này chưa có bài viết — quay lại sau nhé.',
    categoryDesc: (c: Category) =>
      `Tất cả bài viết thuộc mục ${CAT_LABEL.vi[c]} từ blog chính thức của RPS Master bởi BumStudio.`,
    getGame: 'Tải game',
    updated: 'Cập nhật',
    ctaTitle: 'Chơi RPS Master',
    ctaBody:
      'Áp dụng mọi mẹo vào các trận 1v1 trực tiếp, phòng bạn bè và bản đồ Chinh phục. Chơi miễn phí trên Android.',
    ctaLink: 'Tải trên Google Play →',
    contact: 'Liên hệ',
    dateLocale: 'vi-VN',
    ogLocale: 'vi_VN',
  },
} as const;

// Backwards-compatible defaults (English).
export const SITE_TITLE = UI.en.siteTitle;
export const SITE_DESCRIPTION = UI.en.siteDescription;
