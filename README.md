# VÉLOURA Beauty on Demand

This is a NextJS luxury marketplace application built in Firebase Studio.

## 🚀 Remote Config Controls
We use Firebase Remote Config to toggle features dynamically without redeploying code.

### **How to toggle the Ad Section:**
To show or hide the "Elite Partner Showcase" on the Home Page:
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Release & Monitor** -> **Remote Config** in the left sidebar.
3. **If it's your first time:** Click the large **"Create configuration"** button in the center of the page.
4. **If not:** Look for the **"Add parameter"** button located at the top right of the parameters table.
5. In the drawer that opens:
   - **Parameter key**: `show_ads`
   - **Data type**: `Boolean`
   - **Value**: `true` (Visible) or `false` (Hidden).
6. Click **Save** and then look for the **"Publish changes"** button in the blue banner at the top of the screen.

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Backend**: Firebase (Auth, Firestore, Remote Config)
- **AI**: Google Genkit (Concierge & Review Summaries)
- **i18n**: Custom context-based provider (English, Chinese, Italian)
