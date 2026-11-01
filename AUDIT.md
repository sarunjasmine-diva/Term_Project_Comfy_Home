AUDIT.md – **IKEA Singapore cart page • the decision: "how much will this order really cost me, and do I check out?"**

**Group Members:** [CC = Carolina Cataldi], [NS = Niharika Singavajhala], [SAJ = Sherin Arun Jasmine], [VP = Valeria Pontrelli] 

**Product audited:** ikea.com/sg/en/cart/ (IKEA Singapore, operated by Ikano Pte Ltd), plus the two policy pages the cart relies on: ikea.com/sg/en/customer-service/services/delivery/ and …/services/assembly/ Screenshots taken: 2026-11-01, desktop, Chrome, in /screenshots: (1) cart with one small item (HÖGVIND lamp): "Delivery price From $10", Subtotal $59.90; (2) cart with ISTAD bags + BILLY bookcase + BRUKSVARA bed frame: "Delivery price From $35", Subtotal $226.90. Prototype: "Comfy Home", the "SEALO" resealable bags ($3.90), the "ARLO" bookcase ($59) and the "NOVA" bed frame ($129) are fictional; no IKEA name, logo, colours or product names appear. Variant A reproduces the IKEA cart's layout, wording and pricing logic. **Repository:** https://github.com/sarunjasmine-diva/Term_Project_Comfy_Home • **Live URL:** https://term-project-comfy-home.vercel.app/

**Decision sentence:** When a Singapore shopper decides whether to check out a furniture order, the cart steers them to believe the order costs less than it will. Its bold "Subtotal" includes a delivery price shown only as a minimum ("From $10", rising to "From $35" once furniture is added), and it leaves out charges that are paid later to the delivery or assembly crew. It does this through a low anchor and the framing of extra costs as something outside the total (Nodder, "Greed"; Kahneman ch. 26 and 34). For tall furniture, it also misses the moment to prompt the safety step that IKEA itself recommends: anchoring the furniture to the wall.

**Severity:** each member rated alone first, then we compared and agreed a number; both are kept (course briefing).

**Finding 1 – Delivery shown only as "From $X", after a site-wide "from $10" promise**
**Where:** Order summary: "Delivery price … From $10" with small items only. It changes to "From $35" once a bookcase and bed frame are added, and the bold Subtotal changes with it ($226.90 for our 3-item cart). Every page also carries the banner "Get your items delivered from $10".
**What the user sees and does:** Our check partly refuted our first draft. We expected the cart to keep saying "From $10" for furniture. It doesn't: it updates to $35, so the main delivery cost is visible. Two things remain. (a) The shopper's reference point was set at $10 by the banner and the cart before furniture was added, so the jump to $35 lands as a $25 loss. (b) "From" marks the price as a minimum, yet it sits inside a bold total that looks final.
**Principle (week, reading):** W2 – Nodder, Evil by Design, "Greed", "Own the anchor": a firm can "deliberately create a low-end anchor and make upward comparisons from it". W3 – Ariely, Predictably Irrational, ch. 9 "The Effect of Expectations": expectations shape how the next number is experienced. W5 – Alter, Drunk Tank Pink, ch. 2 "Labels": "Subtotal" and "From" make a minimum read as a near-final figure.
**Mechanism, whose goal wins:** The $10 promise draws shoppers in, and the real fee appears only once they have committed by filling the cart, still labelled as a minimum. The shopper is misled about the delivery cost at the moment they decide to start shopping. The platform wins at the user's cost. SLUDGE. Our check showed the fee is updated, so we considered GREY, but we keep SLUDGE because the $10 figure is what every page advertises and what most furniture buyers will never pay.
**Severity 0–4:** CC [3] • NS [3] • SAJ [3] • VP [3] • agreed [3] • driver: how often (every furniture order); trust
**Repair:** Show delivery as a fixed amount for the cart ("Home delivery: $35") instead of "From $35". Rename the line "Estimated total".
**Prediction:** See the primary metric under the test plan.

**Finding 2 – Charges paid later, to the crew, appear nowhere in the cart**
**Where:** Not in the cart. They appear only on the policy pages: "an additional flat rate of $20 will apply if there is no lift access … from the 3rd floor onwards … Please pay the fee directly to the service provider". Also "A $5 charge per drilled hole … To be paid directly to the service provider."
**What the user sees and does:** A total that leaves out costs many shoppers will pay on delivery day. The two policy pages also disagree: the assembly page charges $5 a hole "where assembly service has not been booked", while the delivery page says "drilling services are only available with assembly purchases".
**Principle (week, reading):** W4 – Kahneman, Thinking, Fast and Slow, ch. 26 "Prospect Theory": outcomes are judged as gains or losses against a reference point. The cart total becomes that reference point, so the delivery-day charges feel like losses. W4 – Kahneman, ch. 34 "Frames and Reality": in the credit-card example, the same price gap reads differently as a "cash discount" or a "surcharge". Charges kept outside the total are a framing choice too. W4 – Kahneman, ch. 27 "The Endowment Effect": on delivery day the furniture already feels like "mine", so few will refuse it over $20. Regulation: CCCS Guidelines on Price Transparency (2020), cited in the course briefing: headline prices should include mandatory charges.
**Mechanism, whose goal wins:** The checkout total understates what the decision costs. The extra cost arrives when cancelling is hardest. The platform wins. SLUDGE
**Severity 0–4:** CC [4] • NS [4] • SAJ [3] • VP [3] • agreed [4] • driver: cost (money); trust (a surprise at the door); legal exposure
**Repair:** Two short questions in the cart, "Lift access?" and "Wall-mount needed?". Their answers add visible lines to the total: "+$20 paid to driver (no lift, floors 3–5)" and "Drilling: $5 per hole, paid to crew".
**Prediction:** See the primary metric under the test plan.

**Finding 3 – Nothing about safety at the moment of choice (a missed nudge)**
**Where**: Order summary: "Subtotal (excl. assembly fees)" is the only mention of assembly. The assembly page says its fee of 10% of the price "includes the installation of a tip-over restraint". IKEA's "Secure it or Return it!" page says free-standing drawers and cabinets must be anchored to the wall to prevent tip-over accidents involving children.
**What the user sees and does:** For a tall bookcase, the cart says nothing about anchoring, nothing about what assembly costs and nothing about what it includes. Assembly reads as a fee to avoid.
**Principle (week, reading):** W7 – Lee & Aaker (2004), "Bringing the Frame into Focus": "a message about safety, responsibility, or avoiding a negative outcome should generally fit a loss frame", so the prompt should be prevention-framed ("avoid a tip-over"). W7 – Petrova, Schwarz & Song (2012), "Fluency and Social Influence", "fluency and expected effort": people read hard-to-process information as a sign the task itself is hard; their example is 8.2 vs 15.1 minutes estimated for the same exercise. W6 – Beshears & Gino (2015): planning prompts and reminders are tools for engaging slow thinking.
**Mechanism, whose goal wins:** Nobody wins. The user's safety goal goes unserved, and so does the store's interest in fewer accidents and more assembly bookings. MISSED NUDGE
**Severity 0–4:** CC [2] • NS [2] • SAJ [2] • VP [3] • agreed [2] • driver: cost (health); how often (every tall item)
**Repair:** One line under any item that must be anchored: "This item must be anchored to the wall to prevent tip-over." Below it, two unticked options: "Add assembly incl. anchoring (+$5.90)" and "I'll anchor it myself (kit included)".
**Prediction:** The share who plan to anchor the bookcase moves from about 20% in A to 40% in B (exploratory; see sample size).

**Finding 4 – Agreeing to the Privacy Policy by clicking "Check out"**
**Where**: The line above the button: "By clicking 'check out', you're agreeing to our Privacy Policy".
**What the user sees and does:** Consent is bundled into the purchase click; there is no separate choice.
**Principle (week, reading):** W5 – Thaler & Sunstein, Nudge, ch. 2 "Resisting Temptation", "mindless choosing": people follow the routine path without deciding. W4 – Kahneman, ch. 34: what goes unseen in the frame goes unconsidered.
**Mechanism, whose goal wins:** A common legal practice with little cost to the user, but not a real choice. GREY: argue it.
**Severity 0–4:** CC [2] • NS [1] • SAJ [1] • VP [1] • agreed [1] • driver: trust
**Repair:** None in B. We keep the test focused on cost and safety.

**Finding 5 – "365 days to change your mind" (a good nudge to keep)**
**Where**: The black top strip, and again under the payment badges.
**What the user sees and does**: A long return window, stated plainly at the moment of choice.
**Principle (week, reading)**: W4 – Kahneman, ch. 26: losses loom larger than gains, so buying something big feels like risking a loss; an easy return makes that loss smaller.
**Mechanism, whose goal wins:** Lower regret risk for the user, more trust and sales for the store. Both goals are served. NUDGE
**Severity 0–4**: agreed 0 • keep it
**Repair:** Keep it, unchanged, in B.

**Finding 6 – A calm blue "Check out" button (a good nudge to keep)**
**Where**: The primary button: full width, rounded, in blue.
**What the user sees and does**: A calm primary action, unlike the red, urgent "PAY NOW" in the course's Makan-to-Door sample.
**Principle (week, reading)**: W8 – Labrecque & Milne (2011), "Exciting Red and Competent Blue": hue carries brand personality; blue is associated with competence, red with excitement. W8 – Alter, Drunk Tank Pink, ch. 7 "Colours".
**Mechanism, whose goal wins**: No pressure to buy. Both goals are served. NUDGE
**Severity 0–4**: agreed 0 • keep it
**Repair**: Keep the colour. In B the label shows the corrected estimate, e.g. "Check out – $265.70 est."

**Test plan (pre-registered here)**

**Status**: Designed but not run, because of time (paper section 5, "Pilot results", is optional). Paper section 4 and REFLECTION.md Part B use these predictions as a prediction check.
**Question**: Does B help shoppers know what a furniture order will really cost, and plan to anchor tall furniture, without putting them off checking out?
**Procedure (if run)**: Moderated. A group member reads the task aloud, the tester uses the page (A or B), and states the answer aloud. We record the answer and the variant shown on the debrief screen in a sheet.
Task: The cart starts with SEALO bags ($3.90). "Add the ARLO bookcase and the NOVA bed frame from 'You may also like'. You live in a 3rd-floor walk-up flat with no lift, and you want both items assembled (the bookcase anchored to the wall). What will you pay in total, including anything paid on delivery day?"
**Correct answer**: $191.90 products + $35 home delivery + $20 no-lift charge + $18.80 assembly (10% of $59 + 10% of $129; includes anchoring) = $265.70, using IKEA SG's published rules. Variant A's Subtotal shows $226.90, so the gap is $38.80.
**Primary metric**: The share who state the total within ±$5. A ≈ 10% → B ≈ 60%. We drop the Finding 1–2 repairs if B is not at least 20 points above A.
**Secondary (exploratory)**: The share who choose to anchor it: 20% → 40%. We drop the Finding 3 repair if B is not above A.
**Guardrail (the store's legitimate goal)**: The share who would still place the order in B is no more than 5 points below A. If it falls further, we report it and drop the cart questions (Finding 2 repair) first.
**Assignment**: Random at page load, kept in localStorage. ?v=A / ?v=B override it.
**Sample**: For 10% → 60% at α = .05 and power = .80, we need 14 per arm (28 total). The anchoring metric (20% → 40%) would need 82 per arm, so it can only be a pilot.
**Analysis**: Two-proportion test, reporting the 95% CI, not only p.
**Ethics**: Consent screen first; no real order, payment or personal data; fictional brand and product. The debrief says nothing was ordered and explains the costs the cart did not show.

**Readings cited (course list)**

Nodder, C. (2013). Evil by Design, "Greed" (W2)
Ariely, D. Predictably Irrational, ch. 9 "The Effect of Expectations" (W3)
Kahneman, D. (2011). Thinking, Fast and Slow, ch. 26, 27, 34 (W4)
Alter, A. (2014). Drunk Tank Pink, ch. 2 "Labels" (W5) and ch. 7 "Colours" (W8)
Thaler, R. & Sunstein, C. Nudge, ch. 2 "Resisting Temptation" (W5)
Beshears, J. & Gino, F. (2015). Leaders as decision architects. HBR, 93(5), 51–62 (W6)
Lee, A. Y. & Aaker, J. L. (2004). Bringing the frame into focus (W7)
Petrova, P., Schwarz, N. & Song, H. (2012). Fluency and social influence (W7)
Labrecque, L. I. & Milne, G. R. (2011). Exciting red and competent blue (W8)

**Added after building**
2026-11-01 – B's own default (found while building B). Our first B build pre-selected "Lift" under "Lift access?". That default hides the $20 no-lift charge, which is the very sludge B was meant to remove. We changed it to nothing selected, with the hint "Choose lift access to complete your total" (PROMPTS.md, Entries 7–8). Lesson: a repair can bring the sludge back through a default.
----------------------------------------------------------------------------------------------------------------------------------
2026-11-01 – Kept B's visual changes to the repaired elements only. To avoid "a prettier B", the "Pay now / Pay on delivery day" split, the toggles and the safety card change only the elements behind Findings 1–3 and 6. Header, layout and colours are identical to A.
