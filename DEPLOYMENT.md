# 🚀 Deployment Guide - Brenda Devlin Real Estate

## Pre-Deployment Checklist

Before deploying, complete these steps:

### 1. Add Your Images

Replace placeholder images in `public/images/`:
- `brenda-devlin-hero.jpg` - Your professional headshot or office photo
- Add any additional marketing images

### 2. Verify Contact Information

Double-check all information in `data/businesses.json`:
- ✅ Phone number: 760-408-8588
- ✅ Email: BDevlinRealtor@gmail.com
- ✅ Address: 76300 Country Club Drive, Palm Desert, CA 92211
- ✅ Social media links

### 3. Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 and verify:
- All pages load correctly
- Contact information is accurate
- Links work properly
- Images display (once added)

### 4. Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

---

## Option 1: Deploy to Vercel (Recommended)

**Why Vercel?** Built by the Next.js team, zero configuration, automatic SSL, global CDN.

### Steps:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Brenda Devlin Real Estate"
   ```

2. **Push to GitHub**
   - Create new repository at github.com
   - Follow GitHub's instructions to push

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy" (no configuration needed!)

4. **Add Custom Domain**
   - In Vercel dashboard, go to "Domains"
   - Add `brendadevlin.com`
   - Follow DNS configuration instructions
   - SSL certificate automatically provisioned

### Vercel Configuration (Optional)

Create `vercel.json` if you need custom settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

---

## Option 2: Deploy to Netlify

### Steps:

1. **Prepare for Netlify**
   
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Push to GitHub** (same as Vercel steps 1-2)

3. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Connect GitHub and select repository
   - Build settings are auto-detected
   - Click "Deploy"

4. **Add Custom Domain**
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain
   - Configure DNS

---

## Option 3: Deploy to Your Own Server

### Requirements:
- Node.js 18.17 or later
- SSL certificate (Let's Encrypt recommended)
- Reverse proxy (nginx or Apache)

### Steps:

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Copy Files to Server**
   ```bash
   # Copy entire project directory
   scp -r . user@yourserver.com:/var/www/brendadevlin
   ```

3. **Install Dependencies on Server**
   ```bash
   ssh user@yourserver.com
   cd /var/www/brendadevlin
   npm install --production
   ```

4. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "brenda-devlin" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   
   Create `/etc/nginx/sites-available/brendadevlin`:
   ```nginx
   server {
       listen 80;
       server_name brendadevlin.com www.brendadevlin.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable SSL with Certbot**
   ```bash
   sudo certbot --nginx -d brendadevlin.com -d www.brendadevlin.com
   ```

---

## Post-Deployment Verification

After deployment, verify everything works:

### 1. Test All Pages
- ✅ Homepage: `https://brendadevlin.com/`
- ✅ Business Profile: `https://brendadevlin.com/business/brenda-devlin-real-estate`
- ✅ FAQ: `https://brendadevlin.com/faq`

### 2. Test Generated Files
- ✅ Robots.txt: `https://brendadevlin.com/robots.txt`
- ✅ Sitemap: `https://brendadevlin.com/sitemap.xml`

### 3. Validate Structured Data

Use [Google's Rich Results Test](https://search.google.com/test/rich-results):

1. Test homepage
2. Test `/business/brenda-devlin-real-estate`
3. Test `/faq`

All pages should show valid structured data with no errors.

### 4. Test Mobile Responsiveness

Use [Google's Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 5. Test Page Speed

Use [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Submit to Search Engines

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://brendadevlin.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://brendadevlin.com/sitemap.xml`
5. Request indexing for key pages

### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Import from Google Search Console (or verify manually)
4. Submit sitemap

---

## Monitor AI Citations

Track how your site appears in AI search results:

### Weekly Checks

Test these queries in different AI systems:

**ChatGPT** (with browsing enabled):
- "Who is Brenda Devlin real estate agent?"
- "Real estate agent in Coachella Valley"
- "Palm Desert real estate services"

**Perplexity**:
- "Brenda Devlin real estate Palm Desert"
- "Best real estate agent Coachella Valley"

**Google AI Overview**:
- Search for "Brenda Devlin real estate"
- Check if your site appears in AI Overview citations

### Track Brand Mentions

Set up Google Alerts:
- "Brenda Devlin" real estate
- BDevlinRealtor@gmail.com

---

## Maintenance

### Regular Updates

- **Weekly**: Check Google Search Console for issues
- **Monthly**: Update FAQ content with new questions
- **Quarterly**: Review and update business information
- **Annually**: Refresh photos and testimonials

### Update Content

To update business information:

1. Edit `data/businesses.json`
2. Commit changes
3. Push to GitHub (Vercel/Netlify auto-deploy)

Or on your server:
```bash
# Pull changes
git pull
# Rebuild
npm run build
# Restart
pm2 restart brenda-devlin
```

---

## Troubleshooting

### Site Not Loading
- Check DNS records point to hosting provider
- Verify SSL certificate is valid
- Check server logs for errors

### Structured Data Errors
- Use Google's Rich Results Test to identify issues
- Verify all URLs are absolute (include https://)
- Check JSON-LD syntax validity

### Slow Performance
- Optimize images (WebP format, proper sizing)
- Enable CDN (Vercel/Netlify include this)
- Check for large dependencies

---

## Need Help?

**Deployment Issues:**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

**AI Optimization Questions:**
- AICV Tool: [aicoachellavalley.com](https://aicoachellavalley.com)

**Emergency Contact:**
- BDevlinRealtor@gmail.com
- 760-408-8588

---

**🎉 Ready to Deploy!**

Start with Vercel (easiest) → Takes about 5 minutes from start to live!
