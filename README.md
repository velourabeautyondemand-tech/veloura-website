# VÉLOURA Beauty on Demand

This is a NextJS luxury marketplace application built in Firebase Studio. It serves as a high-performance business engine connecting elite talent with discerning clientele.

## 💎 Strategic Foundation
VÉLOURA is built on a foundation designed for premium scaling and operational efficiency:

- **AI-Powered Concierge**: Automates the "matchmaking" process between event needs and elite talent, providing a 24/7 luxury sales agent experience.
- **Trust & Verification Architecture**: Integrated backend systems for professional onboarding, license verification, and background check logs (Checkr) to maintain marketplace integrity.
- **SEO Engine**: Dynamic marketplace nodes for Locations (LA, NYC, Miami), Venues (Hotels, Suites), and Occasions (Weddings, Corporate) to capture high-intent organic search traffic.
- **Omni-Channel Revenue**: Seamlessly bridges the gap between digital service bookings and physical product sales via the integrated Etsy Boutique.
- **Global Readiness**: Full i18n support (English, Chinese, Italian) allows for immediate expansion into diverse and international luxury markets.

## 🚀 Remote Config Controls
We use Firebase Remote Config to toggle features dynamically without redeploying code.

### **How to toggle the Ad Section:**
To show or hide the "Elite Partner Showcase" on the Home Page:
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Release & Monitor** -> **Remote Config** in the left sidebar.
3. **Important:** Ensure you are on the **"Parameters"** tab (this is the default view). 
4. **If you are on the "Conditions" tab (like in your screenshot):**
   - This screen is for advanced targeting (e.g., only showing ads in specific countries).
   - For a simple On/Off switch, click **"Cancel"** on that popup and switch to the **"Parameters"** tab at the top of the table.
5. **If it's your first time:** Click the large **"Create configuration"** button.
6. **If not:** Look for the **"Add parameter"** button (top right of the table).
7. In the drawer that opens:
   - **Parameter key**: `show_ads`
   - **Data type**: `Boolean`
   - **Value**: `true` (Visible) or `false` (Hidden).
8. Click **Save**.
9. **CRITICAL:** Look for the blue banner at the top that says "You have unpublished changes" and click **Publish changes**. 

### **Troubleshooting:**
- **I published but don't see the ads:** Remote Config values are cached for performance. Try opening the site in an **Incognito/Private window** or wait a few minutes and refresh.
- **Still not working:** Double check that the parameter key is exactly `show_ads` (all lowercase, with an underscore).

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Backend**: Firebase (Auth, Firestore, Remote Config)
- **AI**: Google Genkit (Concierge & Review Summaries)
- **i18n**: Custom context-based provider (English, Chinese, Italian)
