/**
 * @fileOverview Script to submit URLs to the IndexNow API for faster search engine indexing.
 */

const host = 'velourabeautyondemand.com';
const key = 'ed9e45eb6c2f42099395e12d35282eb1';
const keyLocation = `https://${host}/${key}.txt`;

// List of high-priority URLs to notify search engines about
const urlList = [
  `https://${host}/`,
  `https://${host}/services`,
  `https://${host}/match`,
  `https://${host}/talent-agency`,
  `https://${host}/apply`,
  `https://${host}/pro-discounts`,
  `https://${host}/blog`,
  `https://${host}/about`,
  `https://${host}/events`,
  `https://${host}/download-app`,
  `https://${host}/venues/hotels`,
  `https://${host}/venues/home-service`,
  `https://${host}/occasions/weddings`,
  `https://${host}/solutions/seniors`,
];

async function submitIndexNow() {
  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);
  
  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  try {
    // IndexNow recommends submitting to api.indexnow.org
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('Successfully submitted URLs to IndexNow.');
    } else {
      const errorText = await response.text();
      console.error(`Failed to submit to IndexNow: ${response.status} ${response.statusText}`);
      console.error('Error details:', errorText);
    }
  } catch (error) {
    console.error('Error submitting to IndexNow:', error);
  }
}

submitIndexNow();
