# Quick Start Guide - Brenda Devlin Real Estate

Get your AI-optimized site up and running in 5 minutes!

## ⚡ Fastest Path to Live Site

### 1️⃣ Install Dependencies (30 seconds)
```bash
npm install
```

### 2️⃣ Test Locally (30 seconds)
```bash
npm run dev
```

Visit: http://localhost:3000

You should see:
- ✅ Homepage with hero and stats
- ✅ Business profile page
- ✅ FAQ page
- ✅ All styled with brand colors

### 3️⃣ Deploy to Vercel (60 seconds)
```bash
# Install Vercel CLI (one time only)
npm install -g vercel

# Deploy (follow prompts)
vercel
```

That's it! Your site is live! 🎉

## 🔍 Quick Tests

### Test 1: View in Browser
```bash
npm run dev
```

Open browser and check:
- http://localhost:3000 (Homepage)
- http://localhost:3000/business/brenda-devlin-real-estate-palm-desert (Profile)
- http://localhost:3000/faq (FAQs)

### Test 2: Check robots.txt
```bash
# After starting dev server
curl http://localhost:3000/robots.txt
```

Should see strategic AI crawler policy.

### Test 3: Check Sitemap
```bash
curl http://localhost:3000/sitemap.xml
```

Should see all 3 pages listed.

### Test 4: Validate Structured Data
1. Go to https://search.google.com/test/rich-results
2. Enter: http://localhost:3000/business/brenda-devlin-real-estate-palm-desert
3. Should show valid RealEstateAgent schema

## 📝 Quick Customizations

### Change Business Info
Edit: `data/businesses.json`

All pages automatically update!

### Change Colors
Edit: `app/globals.css` (lines 8-20, the `:root` variables)

### Add More FAQs
Edit: `data/businesses.json` → faqs array

They appear on both profile page AND FAQ page automatically.

## 🚀 Production Deployment

### Option 1: Vercel (Recommended - Easiest)
```bash
vercel --prod
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Option 3: Your Own Server
```bash
npm run build
npm start
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## ✅ Post-Deployment Checklist

After deploying to production:

1. [ ] Test all pages load correctly
2. [ ] Verify robots.txt: `https://yourdomain.com/robots.txt`
3. [ ] Verify sitemap: `https://yourdomain.com/sitemap.xml`
4. [ ] Submit sitemap to Google Search Console
5. [ ] Test structured data with Google Rich Results Test
6. [ ] Check page speed with PageSpeed Insights

## 🤖 AI Crawler Policy

Your site uses the **Strategic Approach**:

✅ **ALLOWED** (for search & citations):
- Googlebot
- OAI-SearchBot (ChatGPT search)
- ChatGPT-User
- PerplexityBot

⛔ **BLOCKED** (training data protection):
- GPTBot (OpenAI training)
- ClaudeBot (Anthropic training)
- Meta-ExternalAgent
- Bytespider
- Amazonbot

This maximizes AI visibility while protecting your content.

## 📊 What This Site Has

### Pages
1. **Homepage** (`/`)
   - Hero with desert imagery
   - Stats grid (600+ properties, $400M+, etc.)
   - Service areas (all 6 Coachella Valley cities)
   - Value propositions
   - CTAs

2. **Business Profile** (`/business/brenda-devlin-real-estate-palm-desert`)
   - Full business info with JSON-LD
   - NAP (Name, Address, Phone) block
   - FAQs preview
   - Contact sidebar
   - Social links

3. **FAQ Page** (`/faq`)
   - 3 AI-optimized Q&A pairs
   - FAQPage schema
   - Contact CTAs
   - Partner links (BNI)

### Technical Features
- ✅ Server-side rendering (all content in initial HTML)
- ✅ RealEstateAgent schema with full NAP
- ✅ FAQPage schema for AI extraction
- ✅ Strategic robots.txt for AI crawlers
- ✅ Dynamic sitemap generation
- ✅ Semantic HTML5 structure
- ✅ Mobile responsive
- ✅ Fast load times
- ✅ No JavaScript dependencies for core content

## 🎨 Brand Assets

### Colors (from brendadevlin.com)
- **Primary Gold**: `#C8A882`
- **Orange Accent**: `#D97941`
- **Pink CTA**: `#EC4899`

### Images
Located in `public/images/`:
- `hero-desert.jpg` - Hero background

To add your own images:
1. Place in `public/images/`
2. Update `data/businesses.json` or component props

## 📚 Key Files to Know

```
app/
├── layout.tsx          # Header/footer, site-wide metadata
├── page.tsx            # Homepage
├── globals.css         # All styles (colors, layout, components)
├── robots.ts           # AI crawler policy
├── sitemap.ts          # Sitemap generation
├── business/[slug]/    # Business profile page
└── faq/                # FAQ page

data/
└── businesses.json     # Single source of truth for business data

components/
├── Hero.tsx            # Hero section
├── JsonLd.tsx          # Structured data helper
└── NapBlock.tsx        # Name/Address/Phone component
```

## 🆘 Common Issues

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Styling looks wrong
- Check `globals.css` is imported in `layout.tsx`
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 🎯 Next Steps

1. ✅ Test locally (`npm run dev`)
2. ✅ Deploy to Vercel (`vercel`)
3. ✅ Validate structured data
4. ✅ Submit to Google Search Console
5. ✅ Monitor for AI crawler traffic

## 📞 Additional Resources

- **Full Details**: See [PROJECT-SUMMARY.md](./PROJECT-SUMMARY.md)
- **Deployment Help**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Next.js Docs**: https://nextjs.org/docs

---

**Total Setup Time**: ~2 minutes
**Total Deploy Time**: ~1 minute

Let's get you found by AI! 🚀
