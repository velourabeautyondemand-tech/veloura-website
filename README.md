# VÉLOURA Beauty on Demand

**Live Website:** [https://velourabeautyondemand.com](https://velourabeautyondemand.com)

VÉLOURA is a luxury beauty marketplace connecting elite professionals with clients — on-demand, in-home, and on your schedule. No traffic. No waiting. Just beauty, delivered.

---

## ✨ What Makes VÉLOURA Different

- ## 📸 See VÉLOURA in Action

### LifeStyle. Beauty. Captured. Celebrated.

VÉLOURA brings luxury beauty, photography, and events directly to you — whether you're at home, in a hotel, or at the studio. Home. Hotel. Studio. Anywhere.

---

### 🌟 The VÉLOURA Experience

| Feature | What It Means For You |
|---------|----------------------|
| **Anywhere, Anytime** | Home. Hotel. Studio. Anywhere. We come to you, or you come to us. |
| **All-in-One Platform** | Beauty • Fashion • Wellness • Photography • Event Planning — all in one app |
| **Your Team, Your Choice** | Browse licensed, verified professionals with ratings and portfolios |
| **Real Reviews** | See what others say — "Christine was great! Detailed and professional." |

---

### 💄 Our Services

Choose from our full range of professional services:

| Category | Services |
|----------|----------|
| **Beauty** | Hair Styling • Makeup Artistry • Nail Care • Skincare • Waxing • Lash Extensions |
| **Fashion** | Personal Styling • Wardrobe Consulting • Fashion Photography • Runway Prep |
| **Wellness** | Massage Therapy • Yoga Instruction • Personal Training • Meditation Coaching |
| **Photography** | Portrait Photography • Event Photography • Wedding Photography • Headshots |
| **Events** | Event Planning • Wedding Coordination • Party Styling • Corporate Events |
| **Specialty** | Wedding Glam • Hotel Service • At-Home Salon • Host Program |

---

### 📱 App Preview

![App Preview](public/app-preview.png)
*The VÉLOURA app — browse professionals, view portfolios, and book instantly*

---

### 👩‍🎤 Meet Your Professionals

Our network includes elite, licensed professionals with years of experience:

![Professional Profile](public/professional-profile.png)
*View bios, ratings, and work galleries — like Jason Little, 10+ years experience*

---

### 📋 How It Works

| Step | Action |
|------|--------|
| **1. Download** | Get the VÉLOURA app on iOS or Android |
| **2. Browse** | View profiles, ratings, and portfolios of elite professionals |
| **3. Match** | Find your perfect match — Wedding Glam, Hotel Service, At-Home Salon, or Host Program |
| **4. Book** | Choose a time and location that fits your life |
| **5. Relax** | Experience professional care — no traffic, no waiting |

---

### 📍 Where We Serve

| Location | Experience |
|----------|------------|
| **At Home** | Gentle, relaxing care — even during nap time |
| **At the Hotel** | Professional, respectful care wherever you're staying |
| **At the Studio** | Full-service beauty, photography, and events |
| **Anywhere** | From everyday needs to special occasions, handled seamlessly |

---

### 🎯 Find Your Match

| Service Type | Description |
|--------------|-------------|
| **Wedding Glam** | Professional beauty and photography for your special day |
| **Hotel Service** | Luxury care delivered to your hotel room |
| **At-Home Salon** | Full salon experience in the comfort of your home |
| **Host Program** | Event hosting and coordination services |

---

### 🏆 What Makes VÉLOURA Different

- **Licensed, Verified Professionals** — Every pro is vetted and verified
- **Your Choice** — We come to you, or you come to us
- **Moments** — You pick your own team
- **All-in-One** — Beauty, fashion, wellness, photography, and events

---

### 🎯 Ready to Experience VÉLOURA?

**Visit our website:** [https://velourabeautyondemand.com](https://velourabeautyondemand.com)

**Download the app:**
- [iOS App Store](https://apps.apple.com/)
- [Google Play Store](https://play.google.com/)

---

### 📸 Screenshots

| Homepage | Booking Flow | Mobile View |
|----------|--------------|-------------|
| ![Homepage](public/homepage.png) | ![Booking Flow](public/booking-flow.png) | ![Mobile View](public/mobile-view.png) |
| *Browse services* | *Select your pro* | *Book on the go* |
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
