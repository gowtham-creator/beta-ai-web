# 🎬 Pexels Media Integration Guide

## 📋 How to Get Media URLs from Pexels

### For Videos:

1. **Go to Pexels Videos**: https://www.pexels.com/search/videos/modern%20education/
2. **Find a video you like** and click on it
3. **Click the "Download" button** (or "Free Download")
4. **Choose quality**: Select "HD" (1280x720) or "Full HD" (1920x1080)
5. **Right-click on the download button** → Select "Copy Link Address"
6. **Paste the URL** in the code where it says `PASTE_PEXELS_VIDEO_URL_HERE_X`

### For Images:

1. **Go to Pexels Photos**: https://www.pexels.com/search/ai%20education/
2. **Find an image you like** and click on it
3. **Click "Download"** → Choose "Large" (1920px wide)
4. **Right-click on download button** → Select "Copy Link Address"
5. **Paste the URL** in the code where it says `PASTE_PEXELS_IMAGE_URL_HERE_X`

---

## 🎯 Recommended Search Terms for Each Section

### **Why Choose Us Section** (3 videos, 1 image):
- Video 1: Search "students learning technology classroom"
- Video 2: Search "modern classroom technology education"
- Video 3: Search "students coding computer programming"
- Image 1: Search "AI robot education technology"

### **AI for Schools Section** (3 videos, 1 image):
- Video 1: Search "elementary students computer learning"
- Video 2: Search "kids coding robotics classroom"
- Video 3: Search "young students technology education"
- Image 1: Search "classroom robot teaching students"

### **AI for Colleges Section** (2 videos, 1 image):
- Video 1: Search "college students laptop technology"
- Video 2: Search "university programming computer science"
- Image 1: Search "AI technology modern workspace"

---

## 📍 Where to Paste URLs

### File: `/components/WhyChooseUsSection.tsx`
Lines 7-40: Replace `PASTE_PEXELS_VIDEO_URL_HERE_X` with actual URLs

### File: `/components/AIForSchoolsSection.tsx`
**AI for Schools Section** (Lines 8-41): Replace placeholder URLs with Pexels media URLs
**AI for Colleges Section** (Lines 43-65): Replace placeholder URLs with Pexels media URLs

---

## ✅ Video Format Requirements

- **Format**: MP4 (Pexels provides this automatically)
- **Quality**: HD (1280x720) or Full HD (1920x1080)
- **Duration**: 10-30 seconds works best
- **Aspect Ratio**: 16:9 (widescreen) preferred

## ✅ Image Format Requirements

- **Format**: JPG or PNG
- **Size**: Large (1920px width) recommended
- **Aspect Ratio**: 16:9 or 4:3
- **Quality**: High resolution for crisp display

---

## 🔥 Pro Tips

1. **Choose looping-friendly videos**: Videos that start and end similarly look better when looping
2. **Consistent style**: Try to maintain similar visual style across all media
3. **Bright and clear**: Choose well-lit, high-quality media
4. **Relevant content**: Match the video/image to the section topic
5. **No watermarks**: Pexels content is watermark-free

---

## 📝 Example URLs (Format)

**Video URL Example:**
```
https://videos.pexels.com/video-files/3256547/3256547-hd_1920_1080_25fps.mp4
```

**Image URL Example:**
```
https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1920
```

---

## 🚀 After Pasting URLs

1. Save the files
2. Refresh your browser
3. Videos will auto-play, loop, and be muted
4. Images will display as before

---

## ⚡ Quick Links

- Modern Education Videos: https://www.pexels.com/search/videos/modern%20education/
- AI Learning Videos: https://www.pexels.com/search/videos/ai%20learning/
- Technology Education Photos: https://www.pexels.com/search/technology%20education/
- Students Coding Videos: https://www.pexels.com/search/videos/students%20coding/
