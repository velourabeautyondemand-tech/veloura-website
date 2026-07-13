/**
 * IndexNow Submission Script for VÉLOURA
 * This script notifies search engines of new or updated content.
 */

const HOST = 'velourabeautyondemand.com';
const KEY = 'ed9e45eb6c2f42099395e12d35282eb1';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const API_ENDPOINT = 'https://api.indexnow.org/indexnow';

async function submitUrls(urlList) {
  if (!urlList || urlList.length === 0) {
    console.error('Error: No URLs provided for submission.');
    return;
  }

  // Point 4: Ensure all URLs begin with the required marketing domain prefix
  const validUrls = urlList.filter(url => url.startsWith(`https://${HOST}/`));
  
  if (validUrls.length === 0) {
    console.error(`Error: No valid URLs found. All URLs must begin with https://${HOST}/`);
    return;
  }

  if (validUrls.length < urlList.length) {
    console.warn(`Warning: Filtered out ${urlList.length - validUrls.length} URLs that do not belong to the target host.`);
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: validUrls,
  };

  console.log(`Initiating IndexNow submission for ${validUrls.length} URLs...`);

  try {
    // Point 2: Submit to the standard IndexNow API endpoint
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('IndexNow submission successful. Search engines have been notified.');
    } else {
      const errorText = await response.text();
      console.error(`IndexNow submission failed with status ${response.status}: ${errorText}`);
    }
  } catch (error) {
    console.error('An unexpected error occurred during IndexNow submission:', error);
  }
}

// CLI entry point
const args = process.argv.slice(2);
if (args.length > 0) {
  submitUrls(args);
} else {
  // Default submission if no arguments provided
  console.log('No arguments provided. Submitting the marketing homepage as a heartbeat...');
  submitUrls([`https://${HOST}/`]);
}