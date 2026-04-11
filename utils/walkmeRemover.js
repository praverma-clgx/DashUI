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
    // Check if page is still open
    if (page.isClosed()) {
      return;
    }

    await page.evaluate(() => {
      const walkmeElements = document.querySelectorAll(
        '[id^="walkme-"], .walkme-to-remove, .wm-visual-design-shape, #walkme-overlay-all, .walkme-css-reset',
      );
      walkmeElements.forEach((el) => el.remove());
    });
  } catch (error) {
    // Silently ignore errors - don't break tests
    // Page might be closed or navigating
  }
}

/**
 * Sets up continuous monitoring to auto-remove WalkMe overlays
 * Uses MutationObserver to detect and remove overlays as they appear
 * @param {Page} page - Playwright page object
 */
export async function setupWalkMeRemoval(page) {
  // Check if page is still open
  if (page.isClosed()) {
    return;
  }

  // Remove existing overlays
  await removeWalkMeOverlays(page);

  // Set up continuous monitoring for dynamic overlays
  try {
    await page.evaluate(() => {
      // Ensure document.body exists before setting up observer
      if (!document.body) {
        console.log('Document body not ready, skipping WalkMe observer setup');
        return;
      }

      // Remove any existing observer to prevent duplicates
      if (window.__walkmeObserver) {
        window.__walkmeObserver.disconnect();
        delete window.__walkmeObserver;
      }

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
  } catch (error) {
    // Silently ignore errors - page might be closed or navigating
  }
}

/**
 * Sets up WalkMe removal on navigation events
 * Re-initializes the MutationObserver after each navigation
 * @param {Page} page - Playwright page object
 */
export function setupNavigationWalkMeRemoval(page) {
  page.on('framenavigated', async () => {
    try {
      if (!page.isClosed()) {
        await setupWalkMeRemoval(page);
      }
    } catch (error) {
      // Silently ignore - page might be closing/navigating
    }
  });

  // Also handle page load events
  page.on('load', async () => {
    try {
      if (!page.isClosed()) {
        await setupWalkMeRemoval(page);
      }
    } catch (error) {
      // Silently ignore - page might be closing/navigating
    }
  });

  // Handle domcontentloaded for faster removal
  page.on('domcontentloaded', async () => {
    try {
      if (!page.isClosed()) {
        await removeWalkMeOverlays(page);
      }
    } catch (error) {
      // Silently ignore - page might be closing/navigating
    }
  });
}
