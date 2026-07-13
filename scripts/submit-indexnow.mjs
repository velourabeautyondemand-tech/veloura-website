/**
 * @fileOverview IndexNow Submission Script for VÉLOURA
 * This script submits the homepage to the IndexNow API to notify search engines like Bing.
 */

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const HOST = 'velourabeautyondemand.com';
const KEY = 'ed9e45eb6c2f42099395e12d35282eb1';
const KEY_LOCATION = 'https://velourabeautyondemand.com/ed9e45eb6c2f42099395e12d35282eb1.txt';

// The exact test URL requested for initial verification
const urlList = [
  'https://velourabeautyondemand.com/'
];

// STRICT VALIDATION: Ensure all URLs belong to the verified host
const validUrls = urlList.filter(url => url.startsWith(`https://${HOST}/`));

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: validUrls,
};

async function submitToIndexNow() {
  console.log('--- IndexNow Submission ---');
  console.log(`Endpoint: ${INDEXNOW_ENDPOINT}`);
  console.log('Payload:', JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`HTTP Status: ${response.status} ${response.statusText}`);
    const responseBody = await response.text();
    console.log('Response Body:', responseBody || '(empty)');

    if (response.status === 200 || response.status === 202) {
      console.log('SUCCESS: URL submitted successfully to IndexNow.');
    } else {
      console.error(`FAILURE: IndexNow API returned status ${response.status}`);
    }
  } catch (error) {
    console.error('CRITICAL ERROR: Failed to connect to IndexNow API:', error.message);
  }
}

if (validUrls.length > 0) {
  submitToIndexNow();
} else {
  console.error('ERROR: No valid URLs found for submission. URLs must start with https://velourabeautyondemand.com/');
}
