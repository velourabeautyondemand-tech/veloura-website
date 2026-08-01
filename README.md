# VÉLOURA Beauty on Demand

This is a NextJS luxury marketplace application built in Firebase Studio.

## 🚀 Remote Config Controls
We use Firebase Remote Config to toggle features dynamically without redeploying code.

### **How to toggle the Ad Section:**
To show or hide the "Elite Partner Showcase" on the Home Page:
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Remote Config** (under Release & Monitor).
3. Look for the parameter: `show_ads`.
4. If it doesn't exist, create it as a **Boolean**.
5. Set the value to `true` (Visible) or `false` (Hidden).
6. Click **Save** and then **Publish changes** in the top banner.

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Backend**: Firebase (Auth, Firestore, Remote Config)
- **AI**: Google Genkit (Concierge & Review Summaries)
- **i18n**: Custom context-based provider (English, Chinese, Italian)
