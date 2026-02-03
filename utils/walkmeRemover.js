/**
 * WalkMe Overlay Remover Utility
 * Handles removal of WalkMe tutorial overlays that block test interactions
 */

/**
 * Removes WalkMe overlay elements from the page
 * @param {Page} page - Playwright page object
 */
export async function removeWalkMeOverlays(page) {
  try {
    await page.evaluate(() => {
      const walkmeElements = document.querySelectorAll(
        '[id^="walkme-"], .walkme-to-remove, .wm-visual-design-shape, #walkme-overlay-all, .walkme-css-reset',
      );
      walkmeElements.forEach((el) => el.remove());
    });
  } catch {
    // Silently ignore - don't break tests
  }
}

/**
 * Sets up continuous monitoring to auto-remove WalkMe overlays
 * Uses MutationObserver to detect and remove overlays as they appear
 * @param {Page} page - Playwright page object
 */
export async function setupWalkMeRemoval(page) {
  // Remove existing overlays
  await removeWalkMeOverlays(page);

  // Set up continuous monitoring for dynamic overlays
  await page.evaluate(() => {
    // Create a MutationObserver to watch for new WalkMe elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            // Check if it's a WalkMe element
            if (
              node.id?.startsWith('walkme-') ||
              node.className?.includes('walkme') ||
              node.className?.includes('wm-visual-design')
            ) {
              node.remove();
            }
          }
        });
      });
    });

    // Start observing the document body for child additions
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Store observer reference to prevent garbage collection
    window.__walkmeObserver = observer;
  });
}

/**
 * Sets up WalkMe removal on navigation events
 * @param {Page} page - Playwright page object
 */
export function setupNavigationWalkMeRemoval(page) {
  page.on('framenavigated', async () => {
    await removeWalkMeOverlays(page);
  });
}
