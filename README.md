
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
Use the **A/B Testing** tab within Remote Config to optimize your marketing copy.

### **How to start a test:**
1. Go to **Remote Config** -> **A/B Tests** -> **Create experiment**.
2. **Variants (Step 1)**: Choose your parameter (e.g., `hero_title_override`). Set the baseline and your new test title.
3. **Targeting (Step 2)**: If you don't see "All Users", click **"Create new condition"**, name it `All_Users`, and set the rule to **"App ID"** -> select your web app. Set exposure to 100%.
4. **Goal (Step 3)**: Select **"User Engagement"** as the primary metric. This tracks how long users stay or if they interact more with the new title.
5. **Name (Step 4)**: Give it a clear name like `Hero_SEO_Keywords_Test_1`.
6. **Start**: After clicking **Save**, you must click the **"Start Experiment"** button on the main A/B Testing dashboard to begin collecting data.

### **Why use this?**
- **SEO Optimization**: Test which keywords in the title result in more organic search clicks.
- **Conversion Lifting**: Find out if "20% Off" or "Free Consultation" leads to more actual bookings.
- **Data-Driven Decisions**: Firebase will tell you with "95% confidence" which version is the winner.

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
