# DOMINANCE — COORDINATOR OPERATIONS MANUAL
### Ebulliance Tech Fest | Reboot Club × CSI × NCC
### INTERNAL USE ONLY — Do not distribute to participants

---

## EVENT AT A GLANCE

| Item | Detail |
|------|--------|
| Total Duration | ~5.5 hours |
| Max Participants | 200 (40–50 teams of 3–5) |
| Phases | 3 (Gauntlet → Campus Conquest → Final Build) |
| Tech Required | 1 Admin laptop, 6+ Zone laptops, participant phones |
| Admin Token | `dominance2024` |
| URLs | See Section 6 |

---

## VOLUNTEER ROLES

| Role | Count | Responsibility |
|------|-------|---------------|
| **Tech Lead (you)** | 1 | Run admin panel, monitor everything |
| **Zone Operators** | 1 per zone (6 total) | Man zone laptops, verify captures |
| **Stage Crew** | 2–3 | Phase 1 crowd management, rules briefing |
| **Floaters** | 2 | Handle technical issues, assist teams |
| **Announcer** | 1 | Results reveal, hype, prizes |

---

## SECTION 1: PRE-EVENT SETUP (Day before / 1 hour before)

### Technical Setup
1. Deploy the app (see Section 7 — Railway deployment)
2. Note the live URL (e.g., `https://dominance-xxx.railway.app`)
3. Test admin panel login — token: `dominance2024`
4. Open `/spectator` on projector browser — full screen

### Team Registration (Admin → Setup tab)
1. For each team: enter Name + Year + Members → Click "Register"
2. Note the auto-generated passcode shown next to each team
3. Prepare a printed/digital list:
   ```
   Team Alpha — 2nd year — Passcode: 3847
   Team Beta  — 1st year — Passcode: 6291
   ...
   ```
4. Distribute passcodes to team leaders ONLY (not on projector)

### Zone Setup (Admin → Setup tab)
1. Add all 6 zones with name + location description
2. Note each Zone ID (e.g., `zone_a1b2c3`)
3. Send each Zone Operator their Zone URL: `https://[APP_URL]/zone/[ZONE_ID]`
4. Zone Operators open their URL and enter admin token `dominance2024`
5. Verify each zone laptop shows "READY FOR TEAMS"

### Checklist Before Starting
- [ ] All teams registered, passcodes distributed
- [ ] All zones set up, zone laptops connected
- [ ] Spectator screen on projector
- [ ] Admin panel open on admin laptop
- [ ] Wi-Fi / hotspot confirmed working
- [ ] Backup plan ready (see Section 8)

---

## SECTION 2: PHASE 1 — THE GAUNTLET (50 min)

### Admin Actions
1. **Control tab** → click **"Advance to Phase 1"**
2. Before each round, set **"# to eliminate"** field (typically eliminate ~30–40% per round)
   - Round 1 suggestion: eliminate bottom 5–8 teams
   - Round 2: eliminate 4–6 more
   - Round 3–4: eliminate 3–4 more
   - Round 5: leave top ~4–5 teams for Phase 2
3. Click **"Start Round X"** → question appears on all team screens
4. Watch the admin panel — it shows the correct answer
5. When time is up (or you want to cut short): click **"End + Eliminate [N]"**
6. System auto-eliminates bottom N teams, sends them an elimination screen
7. Repeat for rounds 2–5

### Stage Crew Actions
- Keep crowd quiet during rounds
- Watch for phones being used to search answers — warn teams
- Announce eliminations dramatically between rounds

### What Teams See
- Question appears on their phone/laptop
- They submit their answer before the timer runs out
- If correct + fast → high score; wrong → 0 points
- On elimination: full-screen "ELIMINATED" overlay

### Scoring
`Score = Base Points + (Time Limit − Time Taken in seconds)`
- Round 1–2: MCQ, 20–30s, 10–18 base points
- Round 3–4: MCQ/Text, 30–35s, 18–20 base points
- Round 5: Text input, 45s, 30 base points

---

## SECTION 3: PHASE 2 — CAMPUS CONQUEST (90 min)

### Admin Actions
1. **Control tab** → **"Advance to Phase 2"** — battery drain starts AUTOMATICALLY
2. Monitor from **Zones tab** and **Teams tab**
3. Battery overrides: go to Teams tab → set battery value → click Set
4. Zone resets if technical issue: Zones tab → Reset button

### Zone Operator Actions (one per zone)
Their laptop shows a zone operator screen. Flow:

**Neutral zone (first capture):**
1. Team arrives → operator enters their 4-digit passcode
... (truncated)
