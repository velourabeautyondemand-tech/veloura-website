
# VÉLOURA Beauty on Demand

This is a NextJS luxury marketplace application built in Firebase Studio. It serves as a high-performance business engine connecting elite talent with clientele.

## 🚀 Remote Config Controls (Mission Control)
We use Firebase Remote Config to control visibility and content dynamically without redeploying code.

### **Current Active Parameters:**
| Parameter Key | Data Type | Description |
| :--- | :--- | :--- |
| `show_ads` | Boolean | Toggles the "Partner Showcase" section on the Home Page. |
| `show_promo_banner` | Boolean | Toggles the top announcement bar. |
| `promo_banner_text` | String | Content for the top announcement bar. |
| `hero_title_override` | String | Replaces the main Home Page title (SEO tool). |
| `hero_subtitle_override`| String | Replaces the main Home Page subtitle (A/B testing tool). |

### **How to update these settings:**
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Release & Monitor** -> **Remote Config**.
3. Ensure you are on the **"Parameters"** tab.
4. Update the values as desired.
5. **IMPORTANT:** Click the blue **"Publish changes"** button in the top right banner to make them live.

## 🧪 A/B Testing for SEO & Growth
You can use the **A/B Testing** section in the Firebase Console to optimize your marketing.

### **Why use this?**
- **SEO Optimization**: Test which keywords in the `hero_title_override` result in more user engagement.
- **Conversion Lifting**: Find out if "20% Off" or "Free Consultation" leads to more app downloads.
- **Risk Reduction**: Test new features on 10% of your audience before rolling them out to everyone.

### **How to start a test:**
1. Go to **Release & Monitor** -> **A/B Testing**.
2. Click **Create experiment** -> **Remote Config**.
3. Target your `hero_title_override` parameter.
4. Define two variants (e.g., "Luxury Beauty" vs "Pro Mobile Glam").
5. Set the goal to "User Engagement" and start the experiment.

## 💎 Strategic Foundation
VÉLOURA is built on a foundation designed for premium scaling:

- **AI-Powered Concierge**: Automates matchmaking between event needs and elite talent.
- **Trust & Verification**: Integrated systems for onboarding and professional vetting.
- **SEO Engine**: Dynamic marketplace nodes for Locations, Venues, and Occasions.
- **Global Readiness**: Full i18n support (English, Chinese, Italian).

## 🛠 Tech Stack
- **Framework**: Next.js 15
- **Backend**: Firebase (Auth, Firestore, Remote Config)
- **AI**: Google Genkit
