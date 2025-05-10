import fs from 'fs';
import path from 'path';

/**
 * Decorator to extend VitePress config by auto-generating nav and sidebar
 * based on the Markdown files inside the src directory.
 * 
 * @param {object} config - The base VitePress configuration.
 * @returns {object} - The extended configuration with auto-generated nav/sidebar.
 */
export function withMagic(config) {
  const srcRoot = path.resolve(process.cwd(), config.srcDir || './src');

  const navItems = [];    // Holds top-level nav menu items.
  let fileCount = 0;      // Tracks total number of Markdown files processed.

  console.log(`\n🔍 [withMagic] Scanning directory: ${srcRoot}`);

  // Scan root folders to build the top-level navigation (nav bar).
  const rootEntries = fs.readdirSync(srcRoot, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  rootEntries.forEach(entry => {
    const folderName = entry.name;
    const folderPath = path.join(srcRoot, folderName);
    const firstFileLink = findFirstMarkdownLink(folderPath, folderName);

    const subItems = [];
    const subEntries = fs.readdirSync(folderPath, { withFileTypes: true })
      .filter(e => e.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));

    subEntries.forEach(subEntry => {
      const subFolderName = subEntry.name;
      const subFolderPath = path.join(folderPath, subFolderName);
      const subFirstFileLink = findFirstMarkdownLink(subFolderPath, `${folderName}/${subFolderName}`);

      if (subFirstFileLink) {
        subItems.push({
          text: sanitizeTitle(subFolderName),
          link: subFirstFileLink
        });
      }
    });

    if (firstFileLink) {
      let navItem;

      if (subItems.length > 0) {
        navItem = {
          text: sanitizeTitle(folderName),
          items: subItems
        };
      } else if (firstFileLink) {
        navItem = {
          text: sanitizeTitle(folderName),
          link: firstFileLink
        };
      }

      if (navItem) {
        navItems.push(navItem);
      }
    }
  });

  // Recursively build the sidebar structure.
  const sidebar = buildSidebar(srcRoot, '');

  console.log(`\n✅ [withMagic] Total Markdown files processed: ${fileCount}`);
  console.log(`✅ [withMagic] Generated nav entries: ${navItems.length}`);
  console.log(`✅ [withMagic] Generated sidebar groups: ${sidebar.length}\n`);

  // Return the modified VitePress configuration.
  return {
    ...config,
    themeConfig: {
      ...config.themeConfig,
      nav: [...navItems],
      sidebar: [...sidebar]
    }
  };

  /**
   * Finds the first Markdown file inside a folder (recursively) 
   * to use as the link in the nav bar.
   */
  function findFirstMarkdownLink(folderPath, folderName) {
    const entries = fs.readdirSync(folderPath, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of entries) {
      const fullPath = path.join(folderPath, entry.name);
      if (entry.isFile() && entry.name.endsWith('.md')) {
        return `/${folderName}/${entry.name.replace(/\.md$/, '')}`;
      } else if (entry.isDirectory()) {
        const deeper = findFirstMarkdownLink(fullPath, `${folderName}/${entry.name}`);
        if (deeper) return deeper;
      }
    }
    return null;
  }

  /**
   * Recursively builds the sidebar structure.
   * 
   * @param {string} currentPath - The current filesystem path.
   * @param {string} basePath - The relative path used for linking.
   * @returns {Array} - Array of sidebar groups or file links.
   */
  function buildSidebar(currentPath, basePath) {
    const groups = [];
    const entries = fs.readdirSync(currentPath, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name));

    const fileItems = [];
    const folderItems = [];

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      const relativePath = path.posix.join(basePath, entry.name);

      if (entry.isFile() && entry.name.endsWith('.md')) {
        // Skip index.md at the root level.
        if (basePath === '' && entry.name === 'index.md') {
          console.log(`⚠️ Skipping root index.md: ${relativePath}`);
          continue;
        }

        fileCount++;
        const content = fs.readFileSync(fullPath, 'utf-8');
        const firstLine = content.split('\n').find(line => line.startsWith('#'));
        let text = firstLine ? firstLine.replace(/^#+\s*/, '').trim() : entry.name.replace(/\.md$/, '');

        text = sanitizeTitle(text);
        const link = `/${relativePath.replace(/\.md$/, '')}`;

        console.log(`📄 File: ${relativePath}`);
        console.log(`    → Title: "${text}"`);
        console.log(`    → Link:  "${link}"`);

        fileItems.push({ text, link });
      }

      if (entry.isDirectory()) {
        const children = buildSidebar(fullPath, relativePath);
        if (children.length > 0) {
          folderItems.push({
            text: sanitizeTitle(entry.name),
            collapsed: true,
            items: children
          });
        }
      }
    }

    return [...fileItems, ...folderItems];
  }

  /**
   * Cleans up raw titles by removing Markdown formatting and making them readable.
   * 
   * @param {string} raw - The raw title or filename.
   * @returns {string} - The cleaned, formatted title.
   */
  function sanitizeTitle(raw) {
    return raw
      .replace(/[*_~`]/g, '')                 // Remove markdown formatting (*, _, ~, `)
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')     // Replace [text](link) with text
      .replace(/`([^`]*)`/g, '$1')            // Replace `code` with code
      .replace(/#{1,6}\s*/g, '')              // Remove markdown headers
      .replace(/[-_]/g, ' ')                  // Replace hyphens/underscores with space
      .replace(/\s+/g, ' ')                   // Collapse multiple spaces
      .trim()
      .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize first letter of each word
  }
}
