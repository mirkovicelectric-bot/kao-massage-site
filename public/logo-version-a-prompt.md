# Version A — Digital / Web Mark · Image Generation Prompt

Paste the prompt block below into Midjourney, ChatGPT image (DALL·E 3),
or Ideogram. Run once per color variation, pick the cleanest result,
then vectorize via Vectorizer.AI / Illustrator Image Trace for the
final SVG.

This is the **simplified** mark — elephant + lotus + wordmark only.
No botanical framing, no sun, no moon. That ornate composition lives
in the Version B prompt (`logo-version-b-prompt.md`).

---

## Master prompt (Variation 1 — Original Green)

```
Minimalist boutique wellness logo for "Kao Thai Wellness," a Thai massage
and wellness studio in Cupertino, California. Single elegant emblem on a
transparent background, centered, generous negative space, square 1:1.

Central figure: an Asian elephant silhouette in deep sage green (#4A6741),
facing right (auspicious orientation, walking right). Refined, graceful,
slim proportions — botanical illustration aesthetic, not cartoon. Smooth
flowing curves, gentle shoulder hump, clearly distinct head with a soft
forehead bulge, one visible ear rendered as an elegant rounded flap, four
slim columnar legs with subtle foot detail, a small thin tail at the rear.

The elephant's trunk is raised in a graceful upward arc, tapered (thick at
the base, slim at the tip), curling at the very top where it gently holds
a small stylized lotus flower in muted gold (#B8A882). The lotus has four
to six petals, simple and refined.

Inside the elephant's body — visible as if cut out or growing within —
a delicate slim tree with fine branches and small leaves in lighter moss
green (#6B8B5E). The tree rises from the lower body upward, organic and
asymmetrical, about a dozen small almond-shaped leaves. The tree is
contained entirely within the elephant's body silhouette.

A thin horizontal ground line in the same sage green sits just beneath
the elephant's feet.

Below the elephant, centered on the transparent background: the wordmark
"Kao Thai Wellness" in an elegant high-contrast display serif (Cormorant
Garamond, Playfair Display, or similar), dark charcoal #2C2C2C, balanced
letter-spacing, medium weight. Beneath that wordmark, in small spaced
sans-serif caps: "CUPERTINO · CA" — also #2C2C2C, very subtle, wide
letter-spacing.

Style: flat vector illustration, hand-drawn sensibility, premium and calm,
boutique spa / Thai temple art crossover. No shadows, no gradients, no 3D,
no glow effects, no photography, no people, no faces beyond a minimal eye
dot on the elephant. Pure flat color blocks with clean edges.

Composition: square 1:1, transparent background, mark occupies upper 60%,
wordmark occupies lower 40%, comfortable margins all around.

Avoid: harsh shadows, neon, gradients, glow, watermark, signature, extra
text, additional logos or marks, busy backgrounds, photorealism, cartoon
faces, exaggerated proportions, sloppy linework, asymmetry in the wordmark
placement.
```

---

## Variation 2 — Charcoal + Gold

Same prompt, swap colors:
- Elephant body, tree branches, ground line, wordmark text: deep charcoal **#2C2C2C**
- Tree leaves: warm grey **#3D3D3A**
- Lotus: muted gold **#B8A882**
- Background: transparent (will sit on warm cream #F5F0EB on the site)

Add to the prompt:
> Color palette: deep charcoal silhouette with a single warm gold lotus
> accent. Museum-grade, architectural, monochromatic premium feel.

---

## Variation 3 — Deep Teal / Forest

Same prompt, swap colors:
- Elephant body, ground line, wordmark text: deep teal-forest **#2D4A3E**
- Tree leaves and lighter accents: **#4A7A6A**
- Lotus: warm gold **#C4A96B**
- Background: transparent

Add to the prompt:
> Color palette: deep teal-forest silhouette with warm gold lotus —
> grounded, healing, oceanic-meets-forest feel.

---

## Favicon variant (square crop, head + raised trunk + lotus only)

Run this as a separate generation **after** picking your winning variation.
Use the same color from your chosen variation.

```
Square 1:1 minimalist favicon. Asian elephant HEAD ONLY in [COLOR],
facing right, with one rounded ear flap visible, a small dark eye dot,
and the trunk raised gracefully holding a stylized lotus in muted gold
at the tip. No body, no legs, no tree, no wordmark, no background.
Transparent background. Tight square crop with comfortable margin.
Same flat vector style as the main mark. Iconic, recognizable at 16×16
pixels.
```

Replace `[COLOR]` with the chosen variant's elephant color hex.

---

## Midjourney parameters

Append to the end of the prompt block:

```
--ar 1:1 --style raw --stylize 200 --v 6.1 --no shadow gradient glow
```

For DALL·E 3 / ChatGPT: explicitly request "transparent background,
PNG with alpha channel" in the message.

## After generating

1. **Pick the cleanest output** of the three variations — the elephant
   should read instantly, the trunk should taper naturally, the ear
   should be visible, the tree should be contained in the body, the
   lotus should sit at the trunk tip.
2. **Vectorize** the chosen PNG:
   - Vectorizer.AI (https://vectorizer.ai) — paid but fastest
   - Adobe Illustrator → Object → Image Trace → "Logo" preset
   - Inkscape → Path → Trace Bitmap (free)
3. **Clean up** the resulting SVG in Illustrator/Inkscape: simplify
   paths, ensure each color is a single fill, remove stray artifacts.
4. **Save** as `public/logo.svg` (main mark) and `public/favicon.svg`
   (square crop). Drop them in `public/` and I'll wire them into the
   header, footer, favicon, and OG image.
