# VÉLOURA Beauty on Demand

**Live Website:** [https://velourabeautyondemand.com](https://velourabeautyondemand.com)

VÉLOURA is a luxury beauty marketplace connecting elite professionals with clients — on-demand, in-home, and on your schedule. No traffic. No waiting. Just beauty, delivered.

---

## ✨ What Makes VÉLOURA Different

- **Convenience:** Professionals come to your home, office, or hotel
- **Quality:** Every pro is vetted with ratings, portfolios, and reviews
- **Flexibility:** Book on your schedule — one click, one app
- **For Pros:** Build your business on your terms with exclusive equipment discounts

---

## 🛠️ Technical Architecture

This is a **NextJS** application built in **Firebase Studio** with:

- Firebase Remote Config for dynamic content control
- Firebase Authentication for secure user access
- Cloud Firestore for real-time data
- iOS and Android mobile apps

---

## 🎛️ Remote Config Controls (Mission Control)

We use Firebase Remote Config to control visibility and content dynamically without redeploying code.

### Current Active Parameters:

| Parameter Key | Data Type | Description |
|---------------|-----------|-------------|
| `show_ads` | Boolean | Toggles the "Partner Showcase" section on the Home Page |
| `show_promo_banner` | Boolean | Toggles the top announcement bar |
| `promo_banner_text` | String | Content for the top announcement bar |
| `hero_title_override` | String | Replaces the main Home Page title (SEO tool) |
| `hero_subtitle_override` | String | Replaces the main Home Page subtitle (A/B testing tool) |

### How to Update These Settings:
1. Open the [Firebase Console](https://console.firebase.google.com/)
2. Navigate to **Release & Monitor** > **Remote Config**
3. Ensure you are on the **Parameters** tab
4. Update the values as desired
5. **IMPORTANT:** Click the blue **Publish changes** button to make them live

---

## 📱 Download the App

- **iOS:** [Download on the App Store](https://apps.apple.com/)
- **Android:** [Get it on Google Play](https://play.google.com/)

---

## 🌐 Learn More

Visit our website: [https://velourabeautyondemand.com](https://velourabeautyondemand.com)

Follow us:
- [YouTube](https://youtube.com/)
- [Instagram](https://instagram.com/)
- [TikTok](https://tiktok.com/)

---

## 📄 License

All rights reserved. © iAmDreamMaker Production Group
