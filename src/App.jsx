import { useState, useEffect, useRef } from 'react';
import {
  RangerHelmet,
  DukeIcon,
  OpalIcon,
  RangerDogIcon,
  PandaIcon,
  StageIcon,
  PawPrint,
  SignalWaves
} from './components/Icons';

export default function App() {
  const [openStage, setOpenStage] = useState(null);
  const [completedStages, setCompletedStages] = useState(new Set());
  const [pandaIdx, setPandaIdx] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [transmitting, setTransmitting] = useState(true);
  const rewardRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setTransmitting(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (completedStages.size === 5 && !unlocked) {
      setUnlocked(true);
      setTimeout(() => {
        rewardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
    }
  }, [completedStages, unlocked]);

  const pandaLines = [
    "PayID. Yeah. Sure. Whatever. Hey. Have you seen my collar? It was here. I'm also hungry. Did I mention the collar? Set it up. I'm still hungry. Where is my collar.",
    "Still no collar. Still hungry. Did you do the PayID yet. Asking for me.",
    "New theory. The collar went where the lost BSBs go. I am still hungry.",
    "I do not endorse. I do not protest. I observe. Also where is my collar.",
    "If anyone finds a collar in Cloverdale, please return. Reward: nothing. I have no money. That is the point of PayID."
  ];

  const pets = [
    {
      name: 'DUKE',
      tag: 'Golden / Manipulative',
      color: '#FFC700',
      Icon: DukeIcon,
      lines: [
        "Alex. Hi. It's me. Duke.",
        "I know you take care of everyone. That's actually why this hurts.",
        "Every day Tim can't pay you back, a little piece of me... well. I won't finish that sentence.",
        "Just set up PayID. For me. I love you the most out of all of them.",
        "(Don't tell Opal.)"
      ]
    },
    {
      name: 'OPAL',
      tag: 'Bossy / Non-negotiable',
      color: '#FF1B6B',
      Icon: OpalIcon,
      lines: [
        "SIT. LISTEN.",
        "You are setting up PayID. Today. Not tomorrow.",
        "I have already decided this on your behalf.",
        "I do not need your input.",
        "MOVE."
      ]
    },
    {
      name: 'RANGER',
      tag: 'Tiny / Believes He Is In Charge',
      color: '#00E5C7',
      Icon: RangerDogIcon,
      lines: [
        "AHEM. As Acting Chairman of the Pet Council (a position I have appointed myself to, thank you very much), I hereby DECREE that PayID setup is mandatory.",
        "I am extremely serious.",
        "I am also 38cm tall but that is completely irrelevant.",
        "MOTION CARRIED. MOTION PASSED.",
        "(I move that we have snacks.)"
      ]
    },
    {
      name: 'PANDA',
      tag: 'Cat / Missing Collar (Again)',
      color: '#C77BFF',
      Icon: PandaIcon,
      lines: ['__PANDA__']
    }
  ];

  const stages = [
    { n: '01', title: "IT'S MORPHIN' TIME", body: "Open the Bankwest App. Log in like a regular Tuesday." },
    { n: '02', title: 'LOCATE THE COMMAND CENTRE', body: 'Menu → Settings (or Payments) → tap "Create PayID".' },
    { n: '03', title: 'CHOOSE YOUR WEAPON', body: 'Pick the account to link. Then pick your identifier: mobile or email. Mobile is easier. Pick mobile.' },
    { n: '04', title: 'VERIFY', body: "Bankwest sends a one-time code. Type it in. Never share it with anyone, ever. Bankwest will never ask for it over the phone." },
    { n: '05', title: 'MORPH COMPLETE', body: "Confirm. You're live. The Pet Council bows. Tim immediately sends an undisclosed amount for the toilet paper." }
  ];

  const toggleStage = (n) => {
    setOpenStage(openStage === n ? null : n);
    setCompletedStages(prev => new Set(prev).add(n));
  };

  const callTim = () => {
    window.location.href = 'tel:0414265050';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <div className="scanlines" />
      <div className="grain" />
      <div className="moving-scan" />

      <div className="fixed top-32 left-4 drift pointer-events-none z-0"><PawPrint size={40} color="#FF1B6B" opacity={0.08} rotate={-15} /></div>
      <div className="fixed top-1/2 right-8 drift pointer-events-none z-0" style={{ animationDelay: '2s' }}><PawPrint size={50} color="#FFC700" opacity={0.06} rotate={25} /></div>
      <div className="fixed bottom-40 left-12 drift pointer-events-none z-0" style={{ animationDelay: '4s' }}><PawPrint size={35} color="#00E5C7" opacity={0.07} rotate={-30} /></div>

      <div className="relative z-10 bg-[#FFC700] text-black font-mono text-[10px] sm:text-xs font-bold tracking-widest py-1.5 px-3 flex items-center justify-between overflow-hidden whitespace-nowrap shadow-[0_0_15px_rgba(255,199,0,0.3)]">
        <span className="flicker">⚠ EYES ONLY</span>
        <span className="hidden sm:inline">CLOVERDALE PET COUNCIL / TRANSMISSION 4051</span>
        <span>CLASSIFIED ⚠</span>
      </div>

      <section className="relative z-10 px-5 pt-10 pb-12 sm:pt-16 sm:pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-[#FF1B6B] mb-6 drop-shadow-[0_0_8px_rgba(255,27,107,0.5)]">
              <SignalWaves />
              <span className="tracking-[0.3em]">
                {transmitting ? <span>TRANSMISSION INCOMING<span className="dotty"></span></span> : 'TRANSMISSION DECODED'}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2rem,12vw,9rem)] leading-[0.85] text-white text-glow-pink glitch-in break-words">
              ALEX.<br />
              <span className="text-[#FF1B6B]">CLOVERDALE.</span><br />
              WE NEED YOU.
            </h1>

            <p className="mt-8 max-w-xl text-sm sm:text-base text-zinc-300 leading-relaxed">
              A mission briefing from the <span className="text-[#FF1B6B] font-semibold">Pet Council of Cloverdale</span>. Authorised by Tim. Endorsed by four very serious animals.
            </p>

            <div className="mt-8 font-mono text-[10px] sm:text-xs text-zinc-500 flex flex-wrap gap-x-6 gap-y-1">
              <span>FILE: 4051-PAYID</span>
              <span>PRIORITY: PINK</span>
              <span>STATUS: AWAITING RANGER</span>
            </div>
          </div>

          <div className="hidden md:flex justify-center float-pulse">
            <RangerHelmet size={160} />
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-10 float-pulse">
          <RangerHelmet size={120} />
        </div>
      </section>

      <section className="relative z-10 px-5 py-12 sm:py-16 max-w-3xl mx-auto">
        <div className="relative border border-zinc-700 bg-black/60 p-6 sm:p-10 text-[#FFC700] corner-tl corner-tr corner-bl corner-br backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-[10px] tracking-widest text-zinc-500">// MISSION BRIEFING</div>
            <div className="flex gap-1">
              <PawPrint size={12} color="#FFC700" opacity={0.6} />
              <PawPrint size={12} color="#FFC700" opacity={0.6} rotate={15} />
            </div>
          </div>
          <p className="font-stamp text-base sm:text-lg leading-relaxed text-zinc-100 mb-4">
            At 0700 hours, an emergency was declared.
          </p>
          <p className="font-stamp text-base sm:text-lg leading-relaxed text-zinc-100 mb-4">
            Tim owes Alex <span className="text-[#FFC700] text-glow-yellow font-bold">an undisclosed amount</span> for a 6-pack of toilet paper. She was too nice to say the price. He has been too disorganised to ask.
          </p>
          <p className="font-stamp text-base sm:text-lg leading-relaxed text-zinc-100 mb-6">
            The debt floats between them. Unspoken. Unpaid. Deeply Australian.
          </p>
          <p className="font-stamp text-base sm:text-lg leading-relaxed text-zinc-100 mb-2">
            Cloverdale has had enough. The pets have had enough.
          </p>
          <p className="font-stamp text-xl sm:text-2xl leading-relaxed text-[#FF1B6B] font-bold">
            I have had enough.
          </p>
          <p className="mt-6 font-mono text-xs text-zinc-500">// MISSION CONTROL</p>
        </div>
      </section>

      <section className="relative z-10 px-5 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 mb-2">// SECTION 02</div>
          <h2 className="font-display text-5xl sm:text-7xl text-white leading-none">
            THE <span className="text-[#FF1B6B] text-glow-pink">PET COUNCIL</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-lg">Sworn statements. Signed by paw. Recorded for the public record.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pets.map((pet, i) => {
            const Icon = pet.Icon;
            return (
              <div
                key={pet.name}
                onClick={() => pet.name === 'PANDA' && setPandaIdx((pandaIdx + 1) % pandaLines.length)}
                className={`relative border-2 p-5 sm:p-6 bg-black/40 backdrop-blur-sm transition-all duration-300 ${pet.name === 'PANDA' ? 'cursor-pointer hover:bg-black/70 hover:shadow-[0_0_40px_-10px_rgba(199,123,255,0.6)] active:scale-[0.98]' : 'hover:bg-black/50 hover:shadow-[0_0_40px_-15px_var(--tw-shadow-color)]'}`}
                style={{ borderColor: pet.color, boxShadow: `0 0 30px -15px ${pet.color}`, '--tw-shadow-color': pet.color }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                    <Icon color={pet.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-3xl sm:text-4xl leading-none" style={{ color: pet.color, textShadow: `0 0 10px ${pet.color}80` }}>{pet.name}</h3>
                      <span className="font-mono text-[10px] text-zinc-500">#0{i + 1}</span>
                    </div>
                    <div className="font-mono text-[10px] tracking-widest text-zinc-500 mt-1 uppercase">{pet.tag}</div>
                  </div>
                </div>

                {pet.name === 'PANDA' ? (
                  <div>
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">"{pandaLines[pandaIdx]}"</p>
                    <p className="mt-4 font-mono text-[10px] text-[#C77BFF]/70">↑ tap Panda. He has more to say.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {pet.lines.map((line, j) => (
                      <p key={j} className="text-sm sm:text-base text-zinc-200 leading-relaxed">{line}</p>
                    ))}
                  </div>
                )}

                <div className="mt-5 pt-4 border-t border-zinc-800 font-mono text-[10px] text-zinc-600 flex justify-between items-center">
                  <span className="flex items-center gap-1">SIGNED: <PawPrint size={12} color={pet.color} opacity={0.8} /></span>
                  <span>VERIFIED ✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 px-5 py-12 sm:py-16 max-w-3xl mx-auto">
        <div className="relative border-2 border-[#00A0A0] bg-[#00A0A0]/5 backdrop-blur-md p-6 sm:p-10" style={{ boxShadow: '0 0 40px -15px rgba(0, 160, 160, 0.5)' }}>
          <div className="flex items-center gap-3 mb-3">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_#00A0A0]">
              <path d="M 12 2 L 4 6 L 4 12 C 4 17 8 21 12 22 C 16 21 20 17 20 12 L 20 6 Z"/>
              <path d="M 9 12 L 11 14 L 15 10"/>
            </svg>
            <div className="font-mono text-[10px] tracking-widest text-[#00A0A0]">// CLASSIFIED CONCERN, ADDRESSED</div>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[#00A0A0] mb-5 leading-none drop-shadow-[0_0_10px_rgba(0,160,160,0.6)]">
            YOUR GUT IS ASKING<br />GOOD QUESTIONS.
          </h2>

          <div className="space-y-4 text-zinc-200 text-sm sm:text-base leading-relaxed">
            <p>PayID isn't your card on your phone. It's a name tag for your bank account. Your number or email, linked once, used forever.</p>
            <p>No BSBs floating in group chats. No <span className="font-mono text-[#00E5C7] drop-shadow-[0_0_5px_rgba(0,229,199,0.5)]">"wait, was it 062 or 026?"</span></p>
            <p>Bankwest uses <span className="font-semibold text-white">NameCheck</span>, so you see exactly who you're sending money to before anything leaves your account. One single-use code to set it up. That's the whole show.</p>
            <p className="pt-2 text-[#00E5C7] font-semibold drop-shadow-[0_0_5px_rgba(0,229,199,0.3)]">Your instincts are correct to ask. The answer is: yeah, it's actually fine.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-12 sm:py-16 max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 mb-2">// SECTION 04</div>
          <h2 className="font-display text-5xl sm:text-7xl text-white leading-none">
            THE <span className="text-[#FF1B6B] text-glow-pink">MORPH</span><br />SEQUENCE
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-lg">Five stages. Tap each one. The Council is watching.</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="font-mono text-xs text-[#FFC700]">
              PROGRESS: {completedStages.size} / 5
            </div>
            <div className="flex-1 max-w-xs h-1.5 bg-zinc-900 overflow-hidden rounded-full shadow-inner">
              <div className="h-full bg-gradient-to-r from-[#FFC700] to-[#FF1B6B] transition-all duration-500 shadow-[0_0_10px_rgba(255,27,107,0.8)]" style={{ width: `${(completedStages.size / 5) * 100}%` }}/>
            </div>
            {completedStages.size === 5 && <span className="text-lg drop-shadow-[0_0_5px_rgba(255,199,0,0.8)]">🏅</span>}
          </div>
        </div>

        <div className="space-y-3">
          {stages.map((s) => {
            const isOpen = openStage === s.n;
            const isDone = completedStages.has(s.n);
            return (
              <button
                key={s.n}
                onClick={() => toggleStage(s.n)}
                className={`w-full text-left border-2 transition-all duration-300 ${isOpen ? 'border-[#FF1B6B] glow-pink bg-black/80 shadow-[0_0_20px_rgba(255,27,107,0.3)]' : isDone ? 'border-[#FFC700]/40 bg-black/50' : 'border-zinc-700 hover:border-zinc-500 bg-black/40'} backdrop-blur-sm p-4 sm:p-6 rounded-sm`}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className={`font-display text-4xl sm:text-5xl transition-colors duration-300 ${isOpen ? 'text-[#FF1B6B] drop-shadow-[0_0_8px_rgba(255,27,107,0.8)]' : isDone ? 'text-[#FFC700] drop-shadow-[0_0_5px_rgba(255,199,0,0.5)]' : 'text-zinc-600'}`}>
                    {s.n}
                  </div>
                  <div className={`${isOpen ? 'text-[#FF1B6B]' : isDone ? 'text-[#FFC700]' : 'text-zinc-500'} flex-shrink-0 transition-colors duration-300`}>
                    <StageIcon stage={s.n} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-xl sm:text-2xl text-white leading-tight">{s.title}</div>
                    {!isOpen && <div className="font-mono text-[10px] text-zinc-500 mt-1">{isDone ? '✓ STAGE LOGGED' : 'TAP TO MORPH'}</div>}
                  </div>
                  <div className={`text-2xl text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#FF1B6B]' : ''}`}>+</div>
                </div>
                {isOpen && (
                  <div className="mt-4 pl-0 sm:pl-[5rem] text-zinc-200 text-sm sm:text-base leading-relaxed glitch-in">
                    {s.body}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      <section ref={rewardRef} className="relative z-10 px-5 py-12 sm:py-20 max-w-3xl mx-auto">
        <div className={`relative ${unlocked ? '' : 'opacity-30 grayscale pointer-events-none'} transition-all duration-700`}>
          <div className="absolute -top-4 -right-4 z-20 hidden sm:block">
            {unlocked && (
              <div className="font-stamp text-2xl text-[#FF1B6B] border-4 border-[#FF1B6B] px-3 py-1 stamp bg-black/80 drop-shadow-[0_0_15px_rgba(255,27,107,0.6)]" style={{ transform: 'rotate(-12deg)' }}>
                VERIFIED ✓
              </div>
            )}
          </div>

          <div className="border-4 border-[#FF1B6B] bg-gradient-to-br from-[#FF1B6B]/20 via-black to-[#FFC700]/10 p-6 sm:p-10 relative corner-tl corner-tr corner-bl corner-br text-[#FF1B6B] shadow-[0_0_40px_rgba(255,27,107,0.3)] backdrop-blur-md">
            <div className="font-mono text-[10px] tracking-widest text-[#FFC700] mb-3 flex justify-between drop-shadow-[0_0_5px_rgba(255,199,0,0.5)]">
              <span>CERT. NO. 4051-A</span>
              <span>ISSUED: {new Date().toLocaleDateString('en-AU')}</span>
            </div>

            <div className="text-center py-4">
              <div className="flex justify-center mb-5 bob drop-shadow-[0_10px_20px_rgba(255,27,107,0.5)]">
                <RangerHelmet size={100} />
              </div>
              <div className="font-mono text-xs tracking-[0.3em] text-zinc-400 mb-3">CERTIFIED</div>
              <h2 className="font-display text-5xl sm:text-7xl text-white text-glow-pink leading-none">
                ALEX
              </h2>
              <div className="font-display text-xl sm:text-3xl text-[#FF1B6B] mt-2 drop-shadow-[0_0_8px_rgba(255,27,107,0.6)]">
                PINK RANGER OF CLOVERDALE
              </div>
              <p className="mt-6 text-sm sm:text-base text-zinc-300 italic max-w-md mx-auto">
                Now legally entitled to be paid back at the speed of light. And for the toilet paper.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between font-mono text-[10px] text-zinc-500">
              <span>AUTH: PET COUNCIL ✓</span>
              <span className="flex gap-1">
                <PawPrint size={14} color="#FF1B6B" opacity={0.8} />
                <PawPrint size={14} color="#FFC700" opacity={0.8} rotate={10} />
                <PawPrint size={14} color="#00E5C7" opacity={0.8} rotate={-10} />
                <PawPrint size={14} color="#C77BFF" opacity={0.8} rotate={20} />
              </span>
            </div>
          </div>

          {!unlocked && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-black/90 border border-zinc-700 px-4 py-2 font-mono text-xs text-zinc-400 tracking-widest shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                🔒 COMPLETE ALL 5 STAGES TO UNLOCK
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="relative z-10 px-5 py-12 sm:py-16 max-w-2xl mx-auto text-center">
        <div className="font-mono text-[10px] tracking-widest text-zinc-500 mb-3">// EMERGENCY PROTOCOL</div>
        <h3 className="font-display text-3xl sm:text-4xl text-white mb-4">STUCK MID-MORPH?</h3>
        <button
          onClick={callTim}
          className="inline-flex items-center gap-3 bg-[#FF1B6B] hover:bg-[#FF3D87] active:scale-95 transition-all duration-300 text-white font-display text-2xl sm:text-3xl px-8 py-4 tracking-wider glow-pink shadow-[0_0_30px_rgba(255,27,107,0.5)] hover:shadow-[0_0_40px_rgba(255,27,107,0.8)]"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M 6.5 2 C 5 2 4 3 4 4.5 C 4 13 11 20 19.5 20 C 21 20 22 19 22 17.5 L 22 14 L 17 13 L 15 16 C 12 14 10 12 8 9 L 11 7 L 10 2 Z"/></svg>
          CALL TIM
        </button>
        <p className="mt-4 text-zinc-400 text-sm">He's literally on standby.</p>
        <p className="mt-1 text-zinc-600 text-xs italic">(Panda is also on standby but is currently looking for his collar.)</p>
      </section>

      <footer className="relative z-10 px-5 py-8 border-t border-zinc-900 mt-12">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-zinc-600">
          <span>CLOVERDALE PET COUNCIL · EST. THIS WEEK</span>
          <span className="flex items-center gap-2">
            BUILT BY TIM
            <PawPrint size={10} color="#FF1B6B" opacity={0.6} />
            WITH LOVE
            <PawPrint size={10} color="#FFC700" opacity={0.6} />
            AND TOILET PAPER
          </span>
          <span className="text-[#FF1B6B]">END OF TRANSMISSION</span>
        </div>
      </footer>

      <div className="h-12" />
    </div>
  );
}
