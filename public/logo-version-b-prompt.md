# Version B — Full Ornate Mark · Image Generation Prompt

Paste the prompt block below into Midjourney, ChatGPT image (DALL·E 3),
Ideogram, or any modern image generator. Run it once per color
variation, then pick the best output and (optionally) vectorize.

---

## Master prompt (Variation 1 — Original Green)

```
A refined, elegant logo emblem for a Thai wellness studio called "Kao Thai
Wellness" in Cupertino, California. Vector-style illustration with hand-drawn
sensibility, centered composition on a warm cream paper background (#F5F0EB)
with subtle paper texture.

Central figure: a graceful, slim Asian elephant silhouette in deep sage green
(#4A6741), facing right (auspicious orientation, walking direction right).
The elephant has a delicate tree growing inside its body — fine branches with
small leaves in lighter moss green (#6B8B5E). The elephant's trunk is raised
and curves upward, gently holding a small lotus flower at its tip. The lotus
is in muted gold (#B8A882). The elephant's silhouette is refined and elegant,
not cartoonish — think botanical illustration meets Thai temple art.

Framing: the elephant is surrounded by a symmetrical decorative botanical
arch — graceful curving leaves and slender branches in deep sage green
(#4A6741) with lighter moss accents, growing up the left and right sides of
the composition and arching toward the top, but leaving the upper-center
open.

Above the elephant, centered between the botanical arches: a stylized sun
(small radiating rays, muted gold #B8A882) on the left, and a small crescent
moon (muted gold #B8A882) on the right. Sun and moon are minimal and refined.

Below the elephant, set on the cream background: the wordmark "Kao Thai
Wellness" in an elegant serif (Cormorant Garamond or similar high-contrast
display serif), dark charcoal (#2C2C2C), centered, balanced.

Style: refined, premium, calm, nature-inspired, boutique, Thai-influenced
sacred geometry, hand-drawn linework, no harsh edges, soft organic curves,
no people, no text other than the wordmark, no logos other than the mark
itself, no shadows, no gradients, flat illustration with subtle paper
texture. The overall feel: a quiet temple, a botanical garden, a sanctuary.

Composition: square 1:1 aspect ratio, generous negative space, centered,
symmetrical, balanced. Transparent or cream background.

Negative prompts: photorealistic, 3D render, cartoon, harsh shadows, neon,
gradient, glow effects, watermark, signature, busy detail, additional text,
people, faces, logos, brand marks, low contrast, sloppy linework.
```

---

## Variation 2 — Charcoal + Gold

Same as above, but swap colors:
- Elephant + botanicals + tree branches: deep charcoal **#2C2C2C**
- Lighter tree leaves / accents: **#3D3D3A**
- Sun, moon, lotus: muted gold **#B8A882**
- Wordmark: **#2C2C2C**
- Background: warm cream **#F5F0EB**

Add to the prompt:
> Color palette: deep charcoal and muted gold on cream — high-end, museum
> aesthetic, refined and architectural.

---

## Variation 3 — Deep Teal / Forest

Same as above, but swap colors:
- Elephant + botanicals: deep teal-forest **#2D4A3E**
- Lighter leaves: **#4A7A6A**
- Sun, moon, lotus: warm gold **#C4A96B**
- Wordmark: **#2D4A3E**
- Background: warm cream **#F5F0EB**

Add to the prompt:
> Color palette: deep teal-forest with warm gold accents on cream —
> grounded, healing, oceanic-meets-forest feel.

---

## Midjourney-specific parameters

Append to the end of the prompt block (after a `--` newline if your client
supports it):

```
--ar 1:1 --style raw --stylize 250 --v 6.1 --no text gradient shadow
```

> The `--no text` filter excludes accidental gibberish letters; the
> "Kao Thai Wellness" wordmark will still appear because it is explicitly
> included in the body of the prompt.

## ChatGPT / DALL·E 3 tips

- Request "transparent background" explicitly if you want PNG with alpha.
- Add: "Render only the logo composition. Do not include any framing,
  borders, photographs, mockups, or product context."
- Request "high resolution, 2048×2048 or larger" for print use.
- Ask for the wordmark to be rendered in a specific serif by name —
  "Cormorant Garamond" or "Playfair Display" — which DALL·E will
  approximate.

## Post-processing for print

1. Generate at the highest resolution available.
2. Upscale with a vector-aware tool (Topaz Gigapixel AI or similar) if
   you need >2048px.
3. Convert to SVG with Vectorizer.AI, Adobe Illustrator Image Trace, or
   Inkscape's Trace Bitmap. For best fidelity:
   - Trace each color separately
   - Use a low color count (3–4 colors max — matches the palette)
   - Clean up paths in Illustrator/Inkscape afterward
4. Keep both the raster (PNG @ 300 DPI for print) and the vector (SVG)
   versions for different use cases.
