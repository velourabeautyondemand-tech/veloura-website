# VÉLOURA Beauty on Demand

This is a NextJS luxury marketplace application built in Firebase Studio. It serves as a high-performance business engine connecting elite talent with discerning clientele.

## 💎 Strategic Foundation
VÉLOURA is built on a foundation designed for premium scaling and operational efficiency:

- **AI-Powered Concierge**: Automates the "matchmaking" process between event needs and elite talent, providing a 24/7 luxury sales agent experience.
- **Trust & Verification Architecture**: Integrated backend systems for professional onboarding, license verification, and background check logs (Checkr) to maintain marketplace integrity.
- **SEO Engine**: Dynamic marketplace nodes for Locations (LA, NYC, Miami), Venues (Hotels, Suites), and Occasions (Weddings, Corporate) to capture high-intent organic search traffic.
- **Omni-Channel Revenue**: Seamlessly bridges the gap between digital service bookings and physical product sales via the integrated Etsy Boutique.
- **Global Readiness**: Full i18n support (English, Chinese, Italian) allows for immediate expansion into diverse and international luxury markets.

## 🚀 Remote Config Controls (Mission Control)
We use Firebase Remote Config to control visibility and content dynamically without redeploying code.

### **Available Parameters:**
| Parameter Key | Data Type | Description |
| :--- | :--- | :--- |
| `show_ads` | Boolean | Toggles the "Elite Partner Showcase" on the Home Page. |
| `ad_badge_text` | String | Changes the text in the animated ad badge. |
| `show_promo_banner` | Boolean | Toggles an announcement bar at the very top of the site. |
| `promo_banner_text` | String | Content for the top promo bar. |
| `hero_title_override` | String | Replaces the main Home Page H1 (Great for testing SEO keywords). |

### **How to update these settings:**
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Release & Monitor** -> **Remote Config**.
3. Ensure you are on the **"Parameters"** tab.
4. Click **"Add parameter"** or edit an existing one.
5. Enter the Key and Value as shown in the table above.
6. Click **Save** and then **Publish changes** in the blue banner at the top.

### **Troubleshooting:**
- **I published but don't see the changes:** Remote Config values are cached for performance. Try opening the site in an **Incognito/Private window** or wait a few minutes and refresh.
- **Still not working:** Double check that the parameter key is spelled exactly as shown above (case-sensitive).

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Backend**: Firebase (Auth, Firestore, Remote Config)
- **AI**: Google Genkit (Concierge & Review Summaries)
- **i18n**: Custom context-based provider (English, Chinese, Italian)
