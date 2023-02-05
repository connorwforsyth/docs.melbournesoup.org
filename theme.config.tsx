import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <>
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.03755 15.01H21.4257L20.2418 23.813L10.1778 27.0513L4.51303 23.9609L2.03755 15.01Z" fill="#F15A24"/>
          <path d="M0 17.2785C0 17.5674 0.0402299 20.3307 1.44368 23.1345C3.42146 27.0931 7.1751 29.2789 12 29.2789C16.8249 29.2789 20.5755 27.0931 22.5563 23.1345C23.9563 20.3307 24 17.5674 24 17.2785V0H0V17.2785ZM4.78467 4.8249H19.2157V12.0414H4.78467V4.8249ZM4.78467 16.8245H19.2157V17.2368C19.2157 17.2785 19.1755 19.2582 18.1851 21.113C17.0299 23.3812 15.0088 24.454 12.0004 24.454C8.99195 24.454 7.01073 23.3812 5.81571 21.113C4.82529 19.2579 4.78506 17.2785 4.78506 17.2785V16.8245H4.78467Z" fill="currentColor"/>
          </svg>
        </>,
  
  docsRepositoryBase: 'https://github.com/connorwforsyth/docs.melbournesoup.org/tree/main/',

  primaryHue:{ 
    dark: 20,
    light: 20 
  },
  sidebar: {
    toggleButton: true,
  }
}
export default config
