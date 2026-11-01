PROMPTS.md – Comfy Home (audit of IKEA Singapore cart 
Members: [CC = Carolina Cataldi], [NS = Niharika Singavajhala], [SAJ = Sherin Arun Jasmine], [VP = Valeria Pontrelli] Repositories: Variant A + AUDIT.md: https://github.com/sarunjasmine-diva/Term_Project_Comfy_Home • Variant B: https://github.com/sarunjasmine-diva/Term_Project_Comfy_Home_V2 Live links: A: https://term-project-comfy-home.vercel.app/ • B: https://term-project-comfy-home-v2.vercel.app/ • Side-by-side: /screenshots Roles: driver SAJ • prompter SAJ • logger NS Other AI used: we used Claude (Claude Code) to help write and refine the AI Studio prompts below.

Times are taken from the GitHub commit that followed each prompt (shown in SGT). Prompts are copied as sent. 

Entry 1 – Variant A screen • 2026-11-01, before 17:58 • sent by SAJ • Google Stitch
Input: our screenshot of ikea.com/sg/en/cart/ (2026-11-01), plus:

replicate the UI for https://www.ikea.com/sg/en/cart/ and change the brand name to comfy home
What came back: A cart screen in IKEA's layout branded "COMFY HOME", exported to AI Studio. Our judgement, and what we changed next: no changes made in this step. Principle check: none: production only.

Entry 2 – First build • 2026-11-01, pushed 17:58 (5bd7c32) • sent by SAJ • AI Studio
build me an app with screens that look like this. You can hotlink images from the html.
What came back: A whole shop: home page, mega-menu, carousel, login, wishlist, delivery tracker and cart. Checked against our screenshot, the cart was not IKEA's: it had an invented "FREE delivery above $100, otherwise $15" rule, an added "GST 9%" line (IKEA prices already include GST), a promo-code box, "Total" instead of "Subtotal (excl. assembly fees)", no privacy line and no payment badges. It also used real IKEA product names (SPRUTTIG, ISTAD, LACK…) and the text "Recreating the exact IKEA Singapore style", plus a login form asking for email and password, a fake "Order placed" message, and Gemini/Express with a GEMINI_API_KEY. Our judgement, and what we changed next: Our prompt never said "reproduce as-is, add nothing", so the AI filled the gaps with common shop patterns. A free-delivery threshold is itself a nudge (W2 goal gradient), so this "A" would have tested the wrong page. We overruled it and rebuilt (Entry 3). Principle check: W1: if A is not the real page, the A/B comparison doesn't measure our redesign.

Entry 3 – Exact replica • 2026-11-01, pushed 18:45 (7d5370b) • sent by SAJ • AI Studio (screenshot attached)
We are SMU students building "variant A" of a class experiment for a university term paper. Rebuild this app as an exact replica of the attached screenshot of IKEA Singapore's cart page – same layout, wording, labels and pricing logic – but under the fictional brand "COMFY HOME". Do not improve or add anything that isn't in the screenshot.
- Keep only the cart page. Remove all other screens and anything not in the screenshot (GST line, free-delivery rule, promo code, login, extra buttons, IKEA product names and any mention of IKEA).
- One fictional item: "ARLO Bookcase, white, 80x28x202 cm", $59.00. The order summary shows "Delivery price: From $10" and "Subtotal (excl. assembly fees)", just like the screenshot.
- Add a consent screen first ("Class prototype – no real order, no payment, no personal data"), a short task at the top, and make "Check out" open a short questionnaire and then a debrief screen instead of a real checkout.
- Read ?v= from the URL; for now everyone sees variant A. Do not build variant B.
Guardrails: front end only (static Vite + React). No server, no Gemini or API keys, no network calls, no login, no payment, no fields for personal data, no real brand names, logos or hotlinked images.
What came back: A single cart page with consent, a task bar, a questionnaire and a debrief. Our judgement, and what we changed next: It worked, but the task bar and questionnaire made it feel like a survey rather than a shop. The prof did not require us to run the experiment, so we kept only the consent and debrief screens the brief asks for (Entry 4). Principle check: none: production only.

Entry 4 – Simplify the flow • 2026-11-01, pushed 19:02 (654a368) • sent by SAJ • AI Studio
Remove the task bar and the questionnaire. Keep a one-line consent screen first ("Class prototype – no real order, no payment, no personal data" + Continue), the cart page exactly as it is, and make "Check out" go straight to a short debrief ("Nothing was ordered or paid. Comfy Home is fictional. You saw variant A."). Change nothing else.
What came back: Consent → cart → debrief. Our judgement, and what we changed next: Side by side with our IKEA screenshot, the cart still differed: "Shopping cart" instead of "Your cart", a quantity dropdown, a grey summary box, "Delivery price: From $10 … $10.00", and no privacy line, payment badges or header. Fixed in Entry 5. Principle check: none: production only.

Entry 5 – Match the screenshot • 2026-11-01, pushed 19:12 (e47b24e) • sent by SAJ • AI Studio (screenshot attached)
Make the cart match the attached IKEA screenshot exactly (brand stays "COMFY HOME"). Fix only these differences: [header strip, menu, search, icons; blue banner; "Your cart" + "1 item in total"; article chip; – 1 + stepper; "Move to favourites"; plain white summary; "Products (1)"; "Delivery price … From $10"; thick line + superscript subtotal; privacy line; payment badges; "365 days to change your mind"; yellow smiley button]. Keep the consent and debrief screens and the ?v= switch. No real logos or images from other sites. Change nothing else.
[Paste the full prompt as sent.] What came back: All the elements our findings rely on now match, word for word. Still off: the blue banner sat above the header as a thin strip, and Gemini/Express were still in package.json. Our judgement, and what we changed next: We accepted the banner difference as cosmetic (it isn't part of any finding). [Gemini removal: state when it was done.] Principle check: All six findings are now visible in A as on IKEA's cart.

Entry 6 – Show the delivery jump • 2026-11-01, pushed 19:51 (0c6ca3f) • sent by SAJ • AI Studio (screenshot of IKEA cart with bags + BILLY + BRUKSVARA attached)
Update variant A so the cart behaves like the attached IKEA screenshot when furniture is added. Change nothing else.
1) The cart starts with ONE item: "SEALO – Resealable bag…", $3.90 … Summary: "Products (1) $3.90", "Delivery price From $10", Subtotal $13.90.
2) Below the cart items, add a "You may also like" row … ARLO bookcase $59, NOVA bed frame $129, each with "Add to cart".
3) … If any furniture item is in the cart, "Delivery price" changes to "From $35"; otherwise it stays "From $10". Subtotal = products + delivery …
4) Update the debrief to: "…you would also pay a $20 no-lift charge to the driver and 10% for assembly … – costs this cart did not show. You saw variant A."
[Paste the full prompt as sent.] What came back: Bags-only cart at "From $10"; adding the furniture switches to "From $35", Subtotal $226.90, as on IKEA. Our judgement, and what we changed next: This came from our own check of IKEA's cart, which showed the fee does update for furniture. It made us downgrade, then re-argue, Finding 1 (see REFLECTION A3). Variant A was final; we then committed AUDIT.md. Principle check: Finding 1 (low anchor, then the jump).

**AUDIT.md committed: 2026-11-01 20:26 SGT (aa5ba6b), in the variant A repo, before any prompt for B.**

Entry 7 – Variant B • 2026-11-01, pushed 20:47 (969bbc2, V2 repo) • sent by SAJ • AI Studio (same chat, pushed to a new repo)
This is variant B, our redesign of the Comfy Home cart. Keep everything exactly as it is (layout, fonts, colours, products, "You may also like", consent and debrief) and change only these elements, as our AUDIT.md predicts:
1) Delivery (Finding 1): show a fixed amount instead of "From $X": "Parcel delivery: $10" with only small items, "Home delivery (items over 15 kg): $35" once the bookcase or bed frame is in the cart.
2) Delivery-day charges (Finding 2): in the order summary add a question "Lift access?" (Lift / No lift, floor 1–2 / No lift, floor 3–5). "No lift, floor 3–5" adds a line "No-lift charge, paid to driver: +$20" to the total.
3) Safety and assembly (Finding 3): under the bookcase add one line: "This item must be anchored to the wall to prevent tip-over." with two unticked options: "Add assembly incl. anchoring (+$5.90)" and "I'll anchor it myself (kit included)". Under the bed frame add an unticked option "Add assembly (+$12.90)". Ticked assembly appears as an "Assembly" line in the summary.
4) Rename "Subtotal (excl. assembly fees)" to "Estimated total (incl. delivery-day charges)" and update it live.
5) The button reads "Check out – $[estimated total]" in the same blue (Finding 6).
6) The debrief says "You saw variant B".
Keep "By clicking check out…", the payment badges and "365 days to change your mind" unchanged. Change nothing else.
What came back: All five repairs, with totals correct. But "Lift access?" came back with "Lift" pre-selected. Our judgement, and what we changed next: A pre-selected "Lift" is a default that hides the $20 no-lift charge, which is the very sludge B was meant to remove. Our own B would have turned into sludge (rubric: "where your own B would turn into sludge"). We also found the page clear but flat. Fixed in Entry 8. Principle check: W4 defaults; Finding 2.

Entry 8 – Clearer, more engaging repairs • 2026-11-01, pushed 20:56 (87308ab) • sent by SAJ • AI Studio
Make variant B's repaired elements clearer and more engaging. Change ONLY the order-summary additions and the bookcase/bed frame options – the header, layout, fonts, colours, item rows and everything else must stay identical to variant A.
1) "Lift access?": show the three options as pill-shaped segmented buttons. Nothing selected by default; until the user chooses, show a small hint under the total: "Choose lift access to complete your total."
2) Split the order summary into two small groups with a subtle icon each: "Pay now" (products, delivery, assembly) and "Pay on delivery day" (no-lift charge, paid to driver). The Estimated total includes both.
3) Assembly options under the bookcase and bed frame: toggle switches, OFF by default.
4) The bookcase safety line: a calm info card with a small wall-anchor icon, soft neutral or light amber background (not red): "Keep it standing: this bookcase must be anchored to the wall to prevent tip-over."
5) When the Estimated total changes, animate the number briefly (a quick count-up or highlight).
Keep the totals logic exactly as it is. Change nothing else.
What came back: Nothing pre-selected; toggles off; "Pay now / Pay on delivery day"; calm safety card. Full path total = $265.70, matching AUDIT.md. Our judgement, and what we changed next: We limited the visual changes to the repaired elements, because the briefing warns against "a prettier B": if B looked nicer overall, any effect could come from the polish. Principle check: W7 Lee & Aaker (prevention-framed safety copy); W8 calm colour, not alarm red.

Entry 9 – Side-by-side viewer • 2026-11-01 and 21:30 • sent by SAJ • AI Studio (new chat)
show comparison of the two websites next to each other
left (version A – as-is): https://term-project-comfy-home.vercel.app/
right (version B – redesign): https://term-project-comfy-home-v2.vercel.app/
Label each side ("Variant A – as-is" / "Variant B – redesign"), give both the same width and height, and add a "Reload both" button. Front end only: no server, no Gemini or API keys, no network calls other than loading the two pages.
What came back: side by side comparison of both the URLs. Our judgement, and what we changed next: no changes made. Principle check: none: presentation only.
