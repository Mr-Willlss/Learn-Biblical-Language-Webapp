// Biblical Hebrew lesson data rebuilt from Biblical Hebrew: Step by Step
'use strict';

const v = (hebrew, transliteration, english, example) => ({ hebrew, transliteration, english, example });
const mc = (question, options, answer, explanation) => ({
  type: 'multiple_choice',
  question,
  options,
  answer,
  explanation
});
const tr = (question, options, answer, explanation) => ({
  type: 'translate_to_english',
  question,
  options,
  answer,
  explanation
});
const lesson = (id, world, title, objective, theory, vocabulary, exercises, xpReward) => ({
  id,
  world,
  isRTL: true,
  title,
  objective,
  theory,
  videoUrl: '',
  vocabulary,
  exercises,
  xpReward
});

const HEBREW_LESSON_DATA = Object.fromEntries([
  lesson(
    1, 1,
    'Welcome to Hebrew: The Semitic Language Family',
    'Discover what makes Hebrew unique and why it belongs to the Semitic language family.',
    `
WHAT ARE THE SEMITIC LANGUAGES?

Imagine a large family tree with many branches. Just like a real family shares certain traits — maybe red hair, a nose shape, or a talent for music — languages also belong to families and share important features.

Hebrew is part of a language family called the SEMITIC LANGUAGES. The name comes from Shem (שֵׁם in Hebrew), one of Noah's sons in the Bible. Ancient people groups descended from Shem spoke languages that all shared similar patterns and structures.

SEMITIC LANGUAGES AROUND THE WORLD

The Semitic family includes:
• HEBREW — spoken in ancient Israel and Judah; still used today in religious study and modern Israel
• ARAMAIC — spoken across the Middle East; became very common after Hebrew; parts of the Bible are in Aramaic
• ARABIC — spoken today by hundreds of millions of people from North Africa to the Middle East
• AKKADIAN — one of the oldest languages ever written; used in ancient Mesopotamia (Iraq today)
• PHOENICIAN — spoken by ancient seafaring traders
• AMHARIC — spoken in Ethiopia today

All these languages are cousins. They share similar sounds, grammar patterns, and ways of building words.

WHAT MAKES SEMITIC LANGUAGES SPECIAL?

Semitic languages are built differently than English. In English, we might say "I walked to the store." But in Hebrew, the language is built on ROOTS — special combinations of consonants (usually 3 letters) that carry the core meaning.

For example, the Hebrew root שׁ-ל-ח (sh-l-kh) means "send." From this one root, we get:
• שָׁלַח (shalakh) = "he sent"
• שְׁלִיחַ (shliakh) = "messenger" (one who is sent)
• מִשְׁלַח (mishlakh) = "sending" or "mission"

It's like a MAGIC COMBINATION that changes meaning by adding letters before, after, or in the middle!

WHERE DID HEBREW COME FROM?

Hebrew developed in ancient Canaan (modern-day Israel and Palestine) around 3,000 years ago. It was the language of:
• The ancient kingdoms of Israel and Judah
• The Hebrew Bible (what Christians call the Old Testament)
• Daily life in cities like Jerusalem, Bethlehem, and Nazareth

Over time, Hebrew was influenced by other languages (Aramaic, Greek, Persian) and then became less common as a spoken language. But it never died! Jewish scholars kept Hebrew alive through study and prayer for nearly 2,000 years. In the 1800s and 1900s, Hebrew was brought back as a living language and is spoken in Israel today.

WHY STUDY HEBREW?

• HISTORY: Read ancient texts directly instead of translations
• CULTURE: Understand Jewish and Christian heritage
• BRAIN POWER: Learning an ancient language strengthens your thinking skills
• ADVENTURE: Unlock a completely different way of seeing the world

KEY CHARACTERISTIC: THE THREE-LETTER ROOT (שׁוֹרֶשׁ — shoresh)

Almost every Hebrew word grows from a root. It's like Hebrew is a super-efficient language that recycles three-letter combinations to create hundreds of related words. This makes Hebrew logical and beautiful at the same time.

Ready to learn this amazing language? Let's begin!
    `,
    [
      v('שֵׁם', 'shem', 'name', 'Semitic languages are named after Shem, son of Noah.'),
      v('שֹׁרֶשׁ', 'shoresh', 'root', 'Hebrew words are built from three-letter roots that carry meaning.'),
      v('לָשׁוֹן', 'lashon', 'language / tongue', 'Hebrew is the ancient language of Israel and Judah.'),
      v('קָנַעַן', 'kanaan', 'Canaan', 'The ancient land where Hebrew developed.'),
      v('סֵמִי', 'semi', 'Semitic', 'Belonging to the Semitic language family.')
    ],
    [
      mc('Which language family includes Hebrew?', ['Semitic', 'Romance', 'Slavic', 'Germanic'], 'Semitic', 'Hebrew is one of the Semitic languages, named after Shem.'),
      mc('What does a three-letter ROOT help us do?', ['Write poetry', 'Build related words from one meaning', 'Speak faster', 'Memorize alphabets'], 'Build related words from one meaning', 'Roots are the foundation of Hebrew vocabulary.'),
      tr('What does שֹׁרֶשׁ mean?', ['root', 'house', 'king', 'letter'], 'root', 'Root-based vocabulary is central to Hebrew. This is the key to unlocking Hebrew!'),
      mc('Where did Hebrew come from?', ['Ancient Rome', 'Ancient Canaan (Israel)', 'Ancient Greece', 'Ancient Egypt'], 'Ancient Canaan (Israel)', 'Hebrew developed in the land we now call Israel and Palestine.')
    ],
    20
  ),
  lesson(
    2, 1,
    'The Hebrew Alphabet — Meet All 22 Letters',
    'Learn the 22 consonant letters of Hebrew and understand which letters have special final forms.',
    `
THE HEBREW ALPHABET: A COMPLETE GUIDE

Did you know? Hebrew has 22 letters, not 26 like English. These are all CONSONANTS — the language doesn't write regular vowels in ancient texts (though later scribes added vowel marks to help readers).

Think of Hebrew letters like building blocks. Each letter has:
• A NAME (like "Aleph," "Bet," "Gimel")
• A SOUND it represents
• A FORM when it stands alone
• An APPEARANCE when it connects to other letters

THE 22 LETTERS (in order):

Aleph (א) — Silent; a glottal stop like the break between "oh-oh" in "oh-oh!"
Bet (ב) or Vet (ב) — B or V sound, depending on if there's a DOT (dagesh)
Gimel (ג) — G sound like in "get"
Dalet (ד) — D sound
He (ה) — H sound, often silent at the end of words
Vav (ו) — V or W sound; also used as a vowel helper
Zayin (ז) — Z sound
Khet (ח) — Guttural KH sound, deep in the throat (very Hebrew!)
Tet (ט) — T sound (emphatic)
Yod (י) — Y sound like in "yes"
Kaf (כ) or Khaf (כ) — K or KH sound with dagesh
Lamed (ל) — L sound
Mem (מ) — M sound
Nun (נ) — N sound
Samekh (ס) — S sound
Ayin (ע) — Guttural sound, almost like a throat scratch (unique to Semitic!)
Pe (פ) or Fe (פ) — P or F sound with dagesh
Tsade (ץ) — TS sound
Qof (ק) — Q sound (hard K in the throat)
Resh (ר) — R sound
Shin (ש) with dot — SH sound
Sin (שׂ) with different dot — S sound
Tav (ת) — T sound (soft sound at end of words)

FIVE LETTERS WITH SECRET FORMS!

In Hebrew, five letters have SPECIAL FORMS when they appear at the END of a word:
• Kaf becomes ך (final kaf)
• Mem becomes ם (final mem)
• Nun becomes ן (final nun)
• Pe becomes ף (final pe)
• Tsade becomes ץ (final tsade)

It's like these letters put on special "end-of-word" costumes! When you see these forms, you know immediately that you're at the end of a word.

THE DAGESH: A HIDDEN POWER

Some letters have a small DOT inside them called a DAGESH. This dot changes how the letter sounds:
• בּ (bet with dagesh) = "B" sound
• ב (vet without dagesh) = "V" sound

Think of the dagesh as a POWER-UP that makes certain letters harder or different!

WHY LEARN THE ALPHABET FIRST?

Learning Hebrew letters is like learning the alphabet in English — it's the foundation for everything! You must know:
1. The letter names (for reference)
2. The sounds they make
3. Their regular and final forms
4. Which letters have dagesh marks

Once you master these 22 letters, you have the key to reading Hebrew texts that are thousands of years old!
    `,
    [
      v('אָלֶף', 'aleph', 'first letter; also means thousand', 'The first letter of the alphabet.'),
      v('בֵּית', 'beit', 'house; also the name of the letter Bet', 'Second letter; its name means "house" because its shape looks like a simple house from above.'),
      v('סוֹף אוֹת', 'sof ot', 'final letter form', 'When certain letters appear at the end of a word, they change shape.'),
      v('דָּגֵשׁ', 'dagesh', 'dot inside a letter; makes it sound different', 'A small dot that changes how a letter is pronounced.'),
      v('תָּוִים', 'tavim', 'letters', 'The plural form of "tav" (letter).')
    ],
    [
      mc('How many letters does the Hebrew alphabet have?', ['22', '24', '26', '28'], '22', 'Hebrew has 22 consonant letters.'),
      mc('What is a DAGESH?', ['A vowel mark', 'A small dot that changes a letter\'s sound', 'A final letter form', 'A paragraph mark'], 'A small dot that changes a letter\'s sound', 'The dagesh is a power-up that changes pronunciation!'),
      tr('Which letters have FINAL FORMS?', ['All of them', 'Five special letters', 'Only vowels', 'Only consonants'], 'Five special letters', 'Kaf, Mem, Nun, Pe, and Tsade have special end-of-word forms.'),
      mc('The letter aleph sounds like:', ['Ah', 'A glottal stop (silent break)', 'El', 'Al'], 'A glottal stop (silent break)', 'Aleph is a silent consonant—like the break in "oh-oh!"')
    ],
    20
  ),
  lesson(
    3, 1,
    'Pronunciation & Gutturals — Sounds You\'ve Never Heard',
    'Master Hebrew consonant sounds and learn about GUTTURALS—the unique throat sounds.',
    `
HEBREW PRONUNCIATION: A SONIC ADVENTURE

When you speak English, your lips, tongue, and teeth do most of the work. But Hebrew uses a special group of sounds that come from DEEP IN YOUR THROAT called GUTTURALS. These sounds are part of what makes Hebrew unique and different from English.

THE FOUR GUTTURAL CONSONANTS

Hebrew has four special letters that sound like they come from your gut (stomach area). Imagine making a sound way back in your throat:

1. ALEPH (א) — Silent glottal stop
   • Sometimes you can't really hear it
   • It's like the catch in your breath between "oh-oh"
   • Often acts as a vowel helper in Hebrew

2. HE (ה) — The H sound
   • Like in "hello" or "house"
   • Can be pronounced or silent at word's end
   • Acts as a vowel marker sometimes

3. KHET (ח) — The guttural KH
   • Like the German "Bach" (the composer)
   • VERY different from the English K sound
   • Comes from deep in your throat, almost like a scratch sound
   • You make this by tightening your throat muscles

4. AYIN (ע) — The guttural catch
   • Unique to Semitic languages!
   • Sounds like a guttural break, almost a swallow
   • The closest English has is the "uh" sound made from way down
   • VERY hard for English speakers to pronounce naturally

WHY GUTTURALS MATTER

Guttural letters change how other letters are pronounced! When a guttural appears near a vowel, the vowel often changes quality:
• Before a guttural, "A" vowels are often stronger and louder
• After a guttural, vowels can shift

Example: The word for "father" (אָב — ab) with ALEPH at the start sounds different from most Hebrew words because of the guttural opening.

DISTINGUISHING SIMILAR LETTERS

Hebrew has letter pairs that sound similar but are NOT the same. Beginners must learn to hear the difference:

TRICKIER PAIRS TO WATCH FOR:
• בּ (Bet — B sound) vs. פּ (Pe — P sound) — Only the lips move differently
• ד (Dalet — D sound) vs. ט (Tet — T sound) — Tet is more emphatic
• ש (Shin — SH sound) vs. שׂ (Sin — S sound) — Same letter, different dot placement
• ס (Samekh — S sound) vs. ש (Shin — SH sound) — Both are S sounds but Shin has a dot

LEARNING PRONUNCIATION TIPS

1. LISTEN CAREFULLY to recordings of native Hebrew speakers
2. REPEAT OUT LOUD — Don't just read silently
3. PRACTICE GUTTURALS — Get your throat involved! Make that KH sound and get used to it
4. GROUP BY SOUND — Memorize which letters make similar sounds
5. RECORD YOURSELF — Listen back to see if you sound like the authentic pronunciations

EMPHASIS AND EMPHATICITY

Hebrew has EMPHATIC consonants (like the Tet) that are pronounced with more force than regular consonants. These sound heavier and more powerful. Imagine the difference between saying "TUH" (regular) vs. "TTUH" (emphatic with more throat power).

KEY TAKEAWAY:

Hebrew pronunciation seems strange at first because of the gutturals, but it's beautiful once you train your ear and throat to produce these sounds. The more you practice, the more natural it becomes. Many beginners avoid gutturals at first—DON'T! Embrace them. They're the heart of Hebrew's unique sound.
    `,
    [
      v('ח', 'khet', 'guttural KH sound, deep in throat', 'Like German "Bach"—a sound from deep in the throat.'),
      v('ע', 'ayin', 'guttural glottal catch', 'Unique Semitic sound; almost like a swallow sound.'),
      v('א', 'aleph', 'silent glottal stop', 'Often silent or acts as a vowel helper.'),
      v('ה', 'he', 'H sound or silent', 'Often silent at the end of words.'),
      v('גַּרוֹן', 'garon', 'throat; root for "guttural"', 'Gutturals are literally "throat sounds".')
    ],
    [
      mc('How many GUTTURAL consonants does Hebrew have?', ['2', '3', '4', '5'], '4', 'Aleph, He, Khet, and Ayin are the four guttural consonants.'),
      tr('What does KHET sound like?', ['Like K in "king"', 'Like the German composer "Bach"', 'Like S in "sun"', 'Like T in "time"'], 'Like the German composer "Bach"', 'Khet is pronounced from deep in the throat.'),
      mc('Which letter is UNIQUE to Semitic languages?', ['Aleph', 'Khet', 'Ayin', 'He'], 'Ayin', 'Ayin\'s guttural catch sound is found in very few languages.'),
      tr('Why do GUTTURALS matter in Hebrew?', ['They are prettier', 'They change how nearby vowels sound', 'They help with memorization', 'They don\'t really matter'], 'They change how nearby vowels sound', 'Gutturals influence the pronunciation of surrounding letters.')
    ],
    22
  ),
  lesson(
    4, 1,
    'How Hebrew Writing Evolved — From Ancient Stones to Modern Print',
    'Trace the history of Hebrew script from Phoenician to today\'s square script.',
    `
A JOURNEY THROUGH TIME: HOW HEBREW WRITING CHANGED

Imagine you wrote a letter to your friend, then 1,000 years later, someone tried to read it. They might not recognize your handwriting! The same thing happened to Hebrew—the writing system changed dramatically over 3,000 years.

THE THREE MAJOR SCRIPTS OF HEBREW

1. PALEO-HEBREW (OLD HEBREW) — 1000–200 BCE
   • The OLDEST form of Hebrew writing
   • Used by ancient Israelites on stone inscriptions and pottery
   • Each letter was simple and looked more like a picture
   • Example: The letter for "ox head" (aleph) actually looked like an ox head!
   • Found on famous artifacts like the Moabite Stone

2. ARAMAIC INFLUENCE SCRIPT — 200 BCE–500 CE
   • As Aramaic became more common in the Middle East, its writing style influenced Hebrew
   • Letters became more angular and connected
   • The square shape began to develop
   • Scribes started combining letters to write faster

3. SQUARE SCRIPT (כְּתָב מְרֻבָּע — Ketav Meruba) — 500 CE to TODAY
   • The form we use for PRINTED Hebrew today
   • Developed during and after the Second Temple period (after Babylonian exile)
   • Letters are more geometric and angular
   • Used in all modern Hebrew books, Torah scrolls, and printed materials
   • Standardized shape makes it easy to read

THE PHOENICIAN CONNECTION

Here's something mind-blowing: Hebrew letters descended from Phoenician letters! The Phoenicians were ancient traders who developed one of the first ALPHABETS (instead of hieroglyphics or cuneiform).

The Phoenicians' brilliant idea: One simple picture = one sound. For example:
• An ox head picture (aleph) = "A" sound
• A house picture (bet) = "B" sound
• A camel picture (gimel) = "G" sound

Hebrew borrowed this idea and adapted it. So:
PHOENICIAN → HEBREW SCRIPT EVOLUTION

Example - The Letter Aleph:
• Phoenician: 🐂 (looked like an ox head)
• Paleo-Hebrew: א (simplified the ox head)
• Modern Square Script: א (now a geometric shape)

WHY THE SHAPE CHANGED

Imagine if you had to write the same letter 1,000 times a day (scribes did!). You'd simplify it too! Here's what happened:
1. SPEED — Scribes needed to write faster, so curves became angles
2. QUILL PENS — Using reed pens made thick and thin strokes natural, so the script developed thick and thin lines
3. STONE TO PAPER — Moving from carving in stone to writing on papyrus/parchment changed how letters looked
4. STANDARDIZATION — The Jewish tradition required standard letter forms, especially for Torah scrolls

THE MODERN SQUARE SCRIPT (WHAT YOU'LL LEARN)

Today's Hebrew alphabet is called "square script" (Ketav Meruba) because:
• Letters are angular, not curved
• Each letter fits into an imaginary square box
• Letters are clearly separated (not connected like cursive English)
• It's uniform and easy to print mechanically

This is the script that appears in:
✓ Torah scrolls in synagogues
✓ Ancient Dead Sea Scrolls (from 2,000 years ago!)
✓ Modern Hebrew newspapers and books
✓ Israeli street signs and documents

CURSIVE HEBREW (FOR HANDWRITING)

When Israelis write by hand, they use CURSIVE forms that look different from print! But you don't need to worry about this yet—learn square script first, then cursive later. They're basically the same letters, just flowing together.

WHY THIS HISTORY MATTERS

When you learn Hebrew today, you're learning the 2,500-year-old square script that goes all the way back to ancient Phoenician merchants! Understanding this history helps you appreciate:
1. Why letters look the way they do
2. Why letter names describe their original shapes (aleph = ox, bet = house)
3. How connected all ancient languages are
4. The incredible persistence of written Hebrew through empires, exiles, and centuries

You're not just learning an alphabet—you're holding a piece of human history in your hands!
    `,
    [
      v('כְּתָב קָדוּם', 'ketav qadum', 'ancient/old script', 'The oldest form of Hebrew writing, used before exile.'),
      v('כְּתָב מְרֻבָּע', 'ketav meruba', 'square script', 'Modern Hebrew\'s geometric, angular script used today.'),
      v('פְּנִיקִי', 'pheniki', 'Phoenician', 'The ancient alphabet that influenced Hebrew.'),
      v('סֵפֶר תּוֹרָה', 'sefer torah', 'Torah scroll', 'Sacred Torah written in square script by hand.'),
      v('אוֹת', 'ot', 'letter / sign', 'Single letter of the alphabet (plural: otiyot).')
    ],
    [
      mc('Which script is the OLDEST form of Hebrew writing?', ['Paleo-Hebrew', 'Square Script', 'Aramaic', 'Phoenician'], 'Paleo-Hebrew', 'Paleo-Hebrew was used by ancient Israelites.'),
      mc('What influenced Hebrew script to become angular and square?', ['Roman conquest', 'Aramaic influence', 'Greek traders', 'Christian scribes'], 'Aramaic influence', 'Aramaic became widespread after the Babylonian exile.'),
      tr('What does קָדוּם mean?', ['modern', 'sacred', 'ancient / old', 'written'], 'ancient / old', 'Ketav qadum = "ancient script"'),
      mc('Why did the square script develop?', ['It looked prettier', 'Scribes needed to write faster and used quill pens', 'The king demanded it', 'Phoenicians invented it'], 'Scribes needed to write faster and used quill pens', 'Speed and pen technology drove the evolution of letter shapes.')
    ],
    22
  ),
  lesson(
    5, 1,
    'The Vowel System — How Hebrew Breaths and Flows',
    'Master Hebrew\'s vowel marks and learn how the Sheva creates the heartbeat of the language.',
    `
HEBREW\'S VOWEL MYSTERY

Here's something shocking: Ancient Hebrew didn't WRITE vowels. At all.

Imagine reading English like this: "Hll wrld! Hw r yu?" (Hello world! How are you?)

For 1,000 years, Hebrew readers had to know vowels from MEMORY or CONTEXT. Then, between the 6th and 10th centuries, Jewish scholars invented a system of VOWEL MARKS (called NIKUD — "dots and dashes") to help readers who didn't know the language fluently.

THE SEVEN HEBREW VOWELS

Hebrew's vowel system is simpler than English (which has many ways to spell "a" sounds). Hebrew has SEVEN basic vowels, each with a specific mark:

1. PATACH (ַ) — Short "A" sound
   Example: קַט (kat) = "short"
   Looks like: A horizontal line under the letter
   How to remember: The opening is WIDE (like the letter A), so vowel is open too

2. SHEVA (ְ) — Very short, almost silent
   Example: דְבַר (d'var) = "word"
   Looks like: Two dots under the letter
   How to remember: SHEVA literally means "seven" — represents emptiness/shortness

3. HIRIQ (ִ) — Short "I" sound
   Example: קִיץ (kitz) = "summer"
   Looks like: One dot under the letter
   How to remember: Smallest mark = shortest sound

4. QAMATS (ָ) — Long "AH" sound
   Example: בָּר (bar) = "clean"
   Looks like: A small T shape under the letter
   How to remember: Larger mark = longer sound

5. TSER-E (ֵ) — Short "E" sound
   Example: עֵץ (etz) = "tree"
   Looks like: Two small horizontal lines under the letter
   How to remember: Two marks = medium sound

6. TSURE (ּ) — Long "OO" sound
   Example: דּוּר (dur) = "to dwell"
   Looks like: A small circle under the letter
   How to remember: Circle is round, like "oo"

7. CHOLEM (ֹ) — Long "O" sound
   Example: דּוֹם (dom) = "silence"
   Looks like: A dot OVER the letter (usually on the right)
   How to remember: Only vowel mark that goes ABOVE the line

VOWEL MARK COMBINATIONS THAT CONFUSE BEGINNERS:

• QAMATS vs. PATACH — One is long "AH," the other is short "A"
• TSER-E vs. HIRIQ — Both short, but E vs. I
• TSURE vs. CHOLEM — Both long, but "OO" vs. "O"

Listen carefully to audio to hear the difference!

THE MAGICAL SHEVA — HEBREW\'S HEARTBEAT

The SHEVA is the most important vowel to understand because:

1. SILENT SHEVA (שווא נח — sheva nakh)
   • Appears under a letter at the END of a word or before another consonant
   • Pronounced almost as silence (like the final "e" in English "hope")
   • Marks where pronunciation stops or pauses

   Example: דְבַר (d'var)
   The sheva under the dalet (ד) is SILENT — you don't really hear it
   Pronunciation: "d'VER" (not "duh-VAR")

2. MOBILE SHEVA (שווא נע — sheva na)
   • Appears at the BEGINNING of a word or between two consonants when the first is hard
   • Pronounced as a tiny "uh" sound (like the "a" in "sofa" or the "u" in "supply")
   • Creates a tiny syllable

   Example: שְׁמַע (sh'ma)
   The sheva under the shin (שׁ) is pronounced as a tiny "uh"
   Pronunciation: "shuh-MAH" — the sheva gives it a syllable

HOW TO HEAR THE SHEVA

Listen to these words:
• דְבַר (d'var — word): Silent sheva, crisp consonant connection
• שְׁמַע (sh'ma — hear): Mobile sheva, creates a tiny vowel sound

The difference is SUBTLE but REAL. Native speakers hear it naturally.

VOWELS AND GEMINATION (DOUBLED LETTERS)

Sometimes a vowel mark sits UNDER a doubled letter (with a DAG ESH). The vowel belongs UNDER the consonant, not between them.

Example: פַּ (pa) — Not "puh-ah" but just "PAH" with doubled P

THE ROLE OF VAV (ו) AND YOD (י) AS VOWEL HELPERS

In ancient texts without vowel marks, certain consonants acted as vowel helpers:
• VAV (ו) often represented the "O" or "U" sound
• YOD (י) often represented the "I" or "E" sound

This is why you see them in modern pointed texts — they're spelling out what was always there!

VOWEL PATTERNS SIGNAL GRAMMAR

Different vowel patterns signal different word types:
• קָטֹל (qatol) pattern usually = a verb
• קֻטַל (qutal) pattern usually = a different verb form
• קִטּוּל (qittul) pattern usually = a noun

Learning vowel patterns is like learning to recognize word families in English!

PRACTICE TIPS FOR MASTERING VOWELS

1. POINT OUT loud — Say the vowel marks as you read
2. LISTEN while reading — Use audio to hear native pronunciation
3. NOTICE PATTERNS — See how the same root takes different vowels
4. COMPARE pairs — שִׁמּוּ (shimmu) vs. שָׁמוּ (shamu) vs. שְׁמוּ (sh'mu) — All different!
5. READ WITHOUT VOWELS — Once strong, challenge yourself to guess vowels in unpointed text

The vowel system seems complicated now, but with practice, your eye will naturally recognize these marks and your brain will generate the sounds automatically!
    `,
    [
      v('פַּתַח', 'patach', 'short A vowel', 'The most common vowel mark; looks like a horizontal line.'),
      v('שְׁוָא', 'sheva', 'silent or very short vowel', 'The heartbeat of Hebrew; either silent or a tiny "uh".'),
      v('קָמַץ', 'qamats', 'long AH vowel', 'Looks like a small "T" under the letter.'),
      v('נִקּוּד', 'nikud', 'vowel system / vowel marks', 'The entire system of dots and dashes marking vowels.'),
      v('צִירֵה', 'tsire', 'short E vowel', 'Looks like two horizontal lines under the letter.')
    ],
    [
      mc('How many basic vowels does Hebrew have?', ['5', '7', '9', '11'], '7', 'Hebrew has seven primary vowel marks.'),
      mc('What is the SHEVA?', ['A long vowel', 'A silent or very short vowel; the "heartbeat" of Hebrew', 'A consonant marker', 'A written accent'], 'A silent or very short vowel; the "heartbeat" of Hebrew', 'The sheva can be silent (nakh) or mobile (na).'),
      tr('What does NIKUD mean?', ['plural letters', 'vowel system / vowel marks', 'accents', 'spelling rules'], 'vowel system / vowel marks', 'Nikud is the system of vowel marks invented by medieval scholars.'),
      mc('In ANCIENT Hebrew texts (no vowels written), how did readers know vowels?', ['They guessed', 'From memory and context', 'Special scrolls told them', 'Vowels didn\'t exist'], 'From memory and context', 'Readers knew the language fluently and used context to supply vowels.')
    ],
    24
  ),
  lesson(
    6, 2,
    'Building Blocks: Gender, Conjunction, and the Definite Article',
    'Master three fundamental grammar concepts that appear in almost every Hebrew sentence.',
    `
THREE CORNERSTONE CONCEPTS

In this lesson, we jump from alphabet and vowels into GRAMMAR. Here are three concepts that appear literally in every Hebrew text. Once you understand these three, you unlock the door to reading real Hebrew:

1. GRAMMATICAL GENDER (זָכָר וּנְקֵבָה — Zakar u'Nekevah)
2. THE CONJUNCTION VAV (וְ — ve)
3. THE DEFINITE ARTICLE (הַ — ha-)

CONCEPT 1: GRAMMATICAL GENDER — EVERYTHING IS MALE OR FEMALE

In English, we barely think about gender. A pencil is just "it." But in Hebrew, EVERY NOUN is either MASCULINE or FEMININE.

Imagine: If you're describing a king (male noun), everything that describes the king must also be "male" (masculine adjectives, verbs, etc.). If you describe a queen (female noun), everything becomes "female" (feminine adjectives, verbs, etc.).

MASCULINE vs. FEMININE CLUES:

Masculine nouns typically END with:
• Nothing (bare) — מֶלֶךְ (melekh — king)
• The letter ך or כ — סֵפֶר (sefer — book)

Feminine nouns typically END with:
• ה — מַלְכָּה (malka — queen)
• ת — דַּבֶּרֶת (dabberet — speaking woman)

WHY GENDER MATTERS:
When you describe a noun, the adjective, article, and verb ALL must match:
• "A great king" = מֶלֶךְ גָּדוֹל (melekh gadol) — masculine adjective
• "A great queen" = מַלְכָּה גְּדוֹלָה (malka gedolah) — feminine adjective

If you get the gender wrong, it's like saying "a big she-king" or "a small he-queen" — grammatically broken!

CONCEPT 2: THE CONJUNCTION VAV (וְ — "and")

The letter VAV (ו) when it has a vowel becomes a CONJUNCTION meaning "and". It's super common—probably the most frequent word in the entire Hebrew Bible!

The MAGIC of VAV: It ATTACHES to the beginning of the next word. You don't write "and the king" separately. Instead:

"and" + "the" + "king" = וְהַמֶּלֶךְ (veha-melekh)

The vowel under the vav changes depending on what follows:
• וְ (ve-) — before most consonants = "and"
• וַ (va-) — before sheva = "and" (different vowel)

CONCEPT 3: THE DEFINITE ARTICLE (הַ — "the")

In English, we have "a cat" (indefinite) and "the cat" (definite). Hebrew does the same with a prefix:

הַ (ha-) = "the"

Attaches directly to nouns:
• מֶלֶךְ (melekh) = "a king"
• הַמֶּלֶךְ (ha-melekh) = "the king"

IMPORTANT RULES:
1. The article makes the noun specific and definite
2. The article changes the vowel pattern
3. Adjectives describing a definite noun ALSO need the article

HOW THESE THREE WORK TOGETHER:

Example: "The great king"
• King (noun, masculine) = מֶלֶךְ
• Great (adjective, must be masculine) = גָּדוֹל
• Now make it definite (add "the"):
   Putting it together: הַמֶּלֶךְ הַגָּדוֹל
   (ha-melekh ha-gadol)

Notice all words have the article "ha-" because the king is definite/specific!
    `,
    [
      v('זָכָר', 'zakhar', 'masculine', 'Male gender in grammar (literally "male").'),
      v('נְקֵבָה', 'nekevah', 'feminine', 'Female gender in grammar (literally "female").'),
      v('הַ', 'ha-', 'the (definite article)', 'Prefix that makes a noun specific and definite.'),
      v('וְ', 've-', 'and (conjunction)', 'The letter vav as a connector word meaning "and".'),
      v('הַמֶּלֶךְ', 'ha-melekh', 'the king (masculine + definite)', 'Example of masculine noun with the article.')
    ],
    [
      mc('In Hebrew, how many genders do nouns have?', ['1', '2', '3', '4'], '2', 'Hebrew nouns are either masculine or feminine.'),
      mc('What does the prefix הַ mean?', ['and', 'the', 'not', 'from'], 'the', 'Ha- is the definite article meaning "the".'),
      tr('What does וְ mean?', ['and', 'to', 'the', 'not'], 'and', 'Ve- is the conjunction "and" attached to the following word.'),
      mc('If a noun is feminine, what must also be feminine?', ['Verbs only', 'Adjectives describing it', 'All words nearby', 'Nothing—gender doesn\'t matter'], 'Adjectives describing it', 'Adjectives must match the gender of the noun they describe.')
    ],
    24
  ),
  lesson(
    7, 2,
    'Adjectives — Making Perfect Descriptions',
    'Learn how adjectives change to match the nouns they describe in gender.',
    `
THE AGREEMENT PRINCIPLE

In English, adjectives NEVER change:
• "big boy" and "big girl" both use "big"

In Hebrew, adjectives CHANGE based on the noun's gender and definiteness:
• בַּחוּר גָּדוֹל (bachur gadol) = "big boy" (masculine, indefinite)
• בַּחוּרָה גְּדוֹלָה (bachurah gedolah) = "big girl" (feminine, indefinite)
• הַבַּחוּר הַגָּדוֹל (ha-bachur ha-gadol) = "the big boy" (masculine, definite)
• הַבַּחוּרָה הַגְּדוֹלָה (ha-bachurah ha-gedolah) = "the big girl" (feminine, definite)

Notice how GADOL transforms:
• גָּדוֹל (masculine, indefinite)
• גְּדוֹלָה (feminine, indefinite — added ה)
• הַגָּדוֹל (masculine, definite — article added)
• הַגְּדוֹלָה (feminine, definite — article + ה)

ADJECTIVE POSITION

In English: adjective comes BEFORE the noun
• "big house"

In Hebrew: adjective comes AFTER the noun
• בַּיִת גָּדוֹל (bayit gadol) = "house big" (means "big house")

This feels backward at first, but you'll get used to it!

RULES FOR ADJECTIVE AGREEMENT

When an adjective describes a noun, it must match:
1. GENDER — If noun is feminine, adjective is feminine
2. DEFINITENESS — If noun has "the", adjective needs "the" too
3. NUMBER — If noun is plural, adjective is plural

COMMON ADJECTIVES YOU'LL NEED

• גָּדוֹל / גְּדוֹלָה = big / great
• קָטוֹן / קְטַנָּה = small
• טוֹב / טוֹבָה = good
• רַע / רָעָה = bad / evil
• יָפֶה / יָפָה = beautiful
• חָכָם / חָכָמָה = wise
• חִזֵּק / חִזְקָה = strong

REAL HEBREW PHRASES

"The wise king":
• King (masculine, needs "the") = הַמֶּלֶךְ
• Wise (must be masculine + "the") = הַחָכָם
• Together: הַמֶּלֶךְ הַחָכָם

"A good book":
• Book (masculine, indefinite) = סֵפֶר
• Good (masculine, indefinite) = טוֹב
• Together: סֵפֶר טוֹב

KEY TAKEAWAY:

Adjectives in Hebrew are ALIVE—they change and dance with their nouns to match gender and definiteness. This flexibility makes Hebrew incredibly expressive!
    `,
    [
      v('גָּדוֹל', 'gadol', 'big / great (masculine)', 'Common adjective; changes form for feminine.'),
      v('גְּדוֹלָה', 'gedolah', 'big / great (feminine)', 'Feminine form of gadol.'),
      v('יָפֶה', 'yafe', 'beautiful (masculine)', 'Adjective; literally means "beautiful".'),
      v('יָפָה', 'yafa', 'beautiful (feminine)', 'Feminine form of yafe.'),
      v('הַגָּדוֹל', 'ha-gadol', 'the big one (masculine definite)', 'Adjective with definite article.')
    ],
    [
      mc('In Hebrew, where does the adjective go?', ['Before the noun', 'After the noun', 'Can go either way', 'At the end of the sentence'], 'After the noun', 'Hebrew adjectives follow the noun they describe.'),
      mc('If a noun is feminine, the adjective must be:', ['Masculine too', 'Feminine', 'Neuter', 'Plural'], 'Feminine', 'Adjectives match the gender of their nouns.'),
      tr('What does יָפָה mean?', ['small', 'good', 'beautiful', 'strong'], 'beautiful', 'Yafa is the feminine form of "beautiful".'),
      mc('In "the big house," which words need "the"?', ['Only the house', 'Only the big', 'Both the house and the big', 'Neither'], 'Both the house and the big', 'Both the noun and adjective need the article when definite.')
    ],
    24
  ),
  lesson(
    8, 2,
    'Checkpoint: Before We Learn Verbs',
    'Review lessons 1-7 and ensure your foundation is absolutely solid.',
    `
SOLID FOUNDATION REQUIRED

Before we jump into VERBS—the most complex part of Hebrew—we need to make absolutely sure you understand the basics. This checkpoint reviews everything and prepares you for what's coming.

ALPHABET MASTERY CHECK:
✓ Can you identify all 22 letters instantly?
✓ Can you pronounce the gutturals correctly?
✓ Do you know which 5 letters have final forms?
✓ Can you spot and understand the dagesh?

VOWEL SYSTEM MASTERY CHECK:
✓ Can you identify all 7 vowel marks?
✓ Do you understand SILENT sheva vs. MOBILE sheva?
✓ Can you hear and produce each vowel sound?
✓ Do you see how vowel patterns signal word types?

GRAMMAR MASTERY CHECK:
✓ Do you automatically know a noun's gender?
✓ Can you use the definite article הַ confidently?
✓ Do you understand how וְ (and) works?
✓ Can you make adjectives agree perfectly with nouns?

THREE SELF-TEST QUESTIONS:

1. GENDER AGREEMENT TEST:
   If I want to say "beautiful king," what form is the adjective?
   ✓ Correct: מֶלֶךְ יָפֶה (masculine, indefinite)
   
   Now say "the beautiful king":
   ✓ Correct: הַמֶּלֶךְ הַיָּפֶה (both get the article)

2. GUTTURAL RECOGNITION:
   Which of these is guttural? א, ב, ח, ד
   ✓ Correct: Both א and ח are guttural letters

3. SHEVA COMPARISON:
   What's the difference between these two words?
   • דְבַר (d'var) = sheva is SILENT (nakh)
   • שְׁמַע (sh'ma) = sheva is MOBILE (na)
   ✓ The difference is subtle but REAL!

WHY THIS CHECKPOINT MATTERS:

Hebrew VERBS are incredibly complex. They:
• Change for who's doing the action (I, you, he, she, we, they)
• Change for tense (past, present, future)
• Change gender to match the subject
• Change based on action type (complete vs. ongoing)

WITHOUT a rock-solid foundation, verbs will feel completely impossible. But WITH this foundation, everything will click into place!

REAL-WORLD EXAMPLE:

Think of learning Hebrew like building a house:
• Lessons 1-5 = Foundation and walls (alphabet + vowels)
• Lessons 6-7 = Roof framework (gender, articles, adjectives)
• Lesson 8 = Inspection before moving in (you are here!)
• Lessons 9+ = Furnishing the house (verbs and complex grammar)

You can't furnish a house if the foundation is weak. Take time now to practice and be confident!
    `,
    [
      v('שֹׁרֶשׁ', 'shoresh', 'root (foundation concept)', 'Roots are the foundation of Hebrew—alphabet through verbs.'),
      v('הִשְׁתַּדְּלוּ', 'hishtadlu', 'do your best / try hard', 'A real Hebrew word perfect for this lesson!'),
      v('בִּיטַחוֹן', 'bitakhon', 'confidence / trust', 'Build confidence in what you\'ve learned so far.'),
      v('יְסוֹדוֹת', 'yesodot', 'foundations (plural)', 'Plural of yesod (foundation).'),
      v('מוּכָן', 'mukhan', 'ready / prepared', 'You are now ready for verbs!')
    ],
    [
      mc('Which is NOT one of the foundation concepts?', ['Gender', 'Adjective agreement', 'Prepositions', 'Definite article'], 'Prepositions', 'We haven\'t studied prepositions yet!'),
      mc('If a noun is definite, what else must be definite?', ['Only the adjective', 'Both article and adjective', 'Nothing else', 'Only the next word'], 'Both article and adjective', 'All words in the phrase must agree.'),
      tr('What does הִשְׁתַּדְּלוּ mean?', ['verbs', 'do your best / try hard', 'letters', 'sounds'], 'do your best / try hard', 'This word means "do your best" or "try hard".'),
      mc('Before learning verbs, we need to be sure of:', ['All vocabulary', 'Gender, articles, and adjectives', 'Cursive writing', 'Fluent speech'], 'Gender, articles, and adjectives', 'These concepts show up everywhere in verbs!')
    ],
    24
  ),
  lesson(
    9, 2,
    'Nouns in Phrases—Building Simple Descriptions',
    'Read noun phrases combining nouns, adjectives, and plurals.',
    `
FROM SINGLE WORDS TO PHRASES

Now that you understand gender, articles, and adjectives, let's build PHRASES—combinations of words that work together.

NOUN + ADJECTIVE PATTERNS

Pattern 1: Indefinite noun + adjective (no "the")
• בַּיִת גָּדוֹל (bayit gadol) = "a big house"
• מֶלֶךְ טוֹב (melekh tov) = "a good king"
• עִיר קָדוֹשׁ (ir kadosh) = "a holy city"

Pattern 2: Definite noun + adjective (with "the")
Both words need the article!
• הַבַּיִת הַגָּדוֹל (ha-bayit ha-gadol) = "the big house"
• הַמֶּלֶךְ הַטּוֹב (ha-melekh ha-tov) = "the good king"
• הָעִיר הַקְּדוֹשָׁה (ha-ir ha-kedoshah) = "the holy city"

Notice: The definite article gets attached to BOTH words!

PLURAL PATTERNS

Hebrew plurals change in different ways depending on gender:

Masculine plurals typically add ים (im):
• מֶלֶךְ (melekh) = "king" → מְלָכִים (melakhim) = "kings"
• בַּיִת (bayit) = "house" → בָּתִּים (batim) = "houses"

Feminine plurals typically add ות (ot):
• מַלְכָּה (malka) = "queen" → מַלְכוֹת (malkhot) = "queens"
• עִיר (ir) = "city" → עָרִים (arim) = "cities" (irregular!)

PLURAL ADJECTIVES

Adjectives must also be plural to match plural nouns:
• בָּתִּים גְּדוֹלִים (batim gedolim) = "big houses" (masculine plural)
• עָרִים גְּדוֹלוֹת (arim gedolot) = "big cities" (feminine plural)
• הַמְּלָכִים הַטּוֹבִים (ha-melakhim ha-tovim) = "the good kings"

KEY PATTERNS TO PRACTICE

"A beautiful queen" = מַלְכָּה יָפָה
"The beautiful queens" = הַמַּלְכוֹת הַיָּפוֹת
"Good kings" = מְלָכִים טוֹבִים
"The good houses" = הַבָּתִּים הַטּוֹבִים

REAL BIBLICAL PHRASES

You'll see phrases like:
• "the great king" = הַמֶּלֶךְ הַגָּדוֹל
• "holy cities" = עָרִים קְדוֹשׁוֹת
• "wise men" = אַנְשִׁים חֲכָמִים

Each follows these same patterns!
    `,
    [
      v('בַּיִת', 'bayit', 'house', 'Common noun used in phrases.'),
      v('בָּתִּים', 'batim', 'houses', 'Plural of bayit.'),
      v('קָדוֹשׁ', 'kadosh', 'holy', 'Adjective meaning holy/sacred.'),
      v('קְדוֹשָׁה', 'kedoshah', 'holy (feminine)', 'Feminine form of kadosh.'),
      v('הַבַּיִת הַגָּדוֹל', 'ha-bayit ha-gadol', 'the big house', 'Example phrase with definite article.')
    ],
    [
      mc('In "the big house," how many words get "the"?', ['Just the noun', 'Just the adjective', 'Both words', 'Neither'], 'Both words', 'Both noun and adjective need the article.'),
      mc('What do masculine plurals usually end with?', ['ה', 'ים', 'ת', 'ו'], 'ים', 'Masculine plurals typically add ים.'),
      tr('What does קָדוֹשׁ mean?', ['big', 'good', 'holy', 'beautiful'], 'holy', 'Kadosh means holy or sacred.'),
      mc('If a noun is plural and feminine, the adjective must be:', ['Masculine', 'Singular', 'Feminine plural', 'Unchanged'], 'Feminine plural', 'Adjectives match noun in gender and number.')
    ],
    24
  ),
  lesson(
    10, 2,
    'Segholate Nouns & Personal Pronouns',
    'Recognize special nouns and learn how to say "he" and "she" in Hebrew.',
    `
SEGHOLATE NOUNS—A SPECIAL WORD TYPE

Some Hebrew nouns have a unique vowel pattern that looks different from what you'd expect. They're called SEGHOLATE nouns (from the Hebrew word "segol" meaning a three-dot pattern).

These nouns have a short vowel in the middle (a segol ֶ), making them sound short and snappy:

• מֶלֶךְ (melekh) = "king" → plural מְלָכִים (melakhim)
• סֵפֶר (sefer) = "book" → plural סְפָרִים (sfarim)
• קֶדֶשׁ (kedesh) = "holiness" → plural קְדָשִׁים (kdashim)
• שֶׁמֶשׁ (shemesh) = "sun" → plural שְׁמָשׁוֹת (shmashot)

Notice how segholates CHANGE their vowel when they pluralize:
• מֶ → מְ (the vowel shifts!)
• סֵ → סְ (the vowel shifts!)

Why? Because Hebrew prefers certain vowel patterns in different contexts. Segholates are following an ancient pattern that comes from thousands of years of language development.

COMMON SEGHOLATE NOUNS TO MEMORIZE:

• מֶלֶךְ = king
• סֵפֶר = book
• קֶדֶשׁ = holiness
• שֶׁמֶשׁ = sun
• עֶבֶד = servant
• קֶשׁת = bow (weapon)

PERSONAL PRONOUNS—THE "HE" AND "SHE" WORDS

Pronouns replace nouns. Instead of saying "King David is great," you can say "He is great."

Hebrew has simple personal pronouns:

THIRD PERSON (he/she/it):
• הוּא (hu) = "he" (masculine)
• הִיא (hi) = "she" (feminine)

SECOND PERSON (you):
• אַתָּה (atah) = "you" (masculine)
• אַתְּ (at) = "you" (feminine)

FIRST PERSON (I):
• אֲנִי (ani) = "I" (both genders)

These pronouns appear constantly in biblical narrative:
• הוּא זָכָר (hu zakhar) = "He is a male"
• הִיא נְקֵבָה (hi nekevah) = "She is a female"
• הוּא מֶלֶךְ (hu melekh) = "He is a king"

HEBREW SENTENCES WITHOUT "TO BE"

Here's something strange: Hebrew often OMITS the verb "to be" (is/are). Instead of saying "The king IS great," you just say "The king great":

• הַמֶּלֶךְ גָּדוֹל (ha-melekh gadol) = "The king is great" (literally "the king big")
• הִיא יָפָה (hi yafah) = "She is beautiful"
• הוּא חָכָם (hu hakham) = "He is wise"

This feels strange in English, but it's perfectly natural in Hebrew!

REAL BIBLICAL SENTENCES

"He is a good king":
• הוּא מֶלֶךְ טוֹב (hu melekh tov)

"She is beautiful":
• הִיא יָפָה (hi yafah)

"You are wise":
• אַתָּה חָכָם (atah hakham) — masculine
• אַתְּ חָכָמָה (at hakhamah) — feminine
    `,
    [
      v('מֶלֶךְ', 'melekh', 'king', 'Classic segholate noun.'),
      v('סֵפֶר', 'sefer', 'book', 'Another common segholate.'),
      v('הוּא', 'hu', 'he / it', 'Masculine third person pronoun.'),
      v('הִיא', 'hi', 'she / it', 'Feminine third person pronoun.'),
      v('אַתָּה', 'atah', 'you (masculine)', 'Second person masculine pronoun.')
    ],
    [
      mc('What vowel pattern do SEGHOLATE nouns have?', ['All long vowels', 'Segol (short) in the middle', 'No vowels at all', 'Only sheva'], 'Segol (short) in the middle', 'Segholate nouns have a distinctive short vowel pattern.'),
      mc('What does הוּא mean?', ['he / it', 'and', 'king', 'house'], 'he / it', 'Hu is the masculine third person pronoun.'),
      tr('What does סֵפֶר mean?', ['king', 'book', 'house', 'city'], 'book', 'Sefer is a common segholate noun meaning book.'),
      mc('In Hebrew, "He is great" is said:', ['With the verb "is"', 'Without the verb "is" (just two words)', 'With "and"', 'With the article'], 'Without the verb "is" (just two words)', 'Hebrew often omits the present tense of "to be".')
    ],
    24
  ),
  lesson(
    11, 3,
    'Lesson 11 — Review of Lessons 1–10',
    'Review the first half of the course with a complete survey of letters, vowels, gender, agreement and simple sentence patterns.',
     `LESSON 11: YOUR FIRST MAJOR CHECKPOINT

You've made it to the halfway point of this course! Before you dive into the world of Hebrew verbs, this lesson helps you bring together EVERYTHING you've learned so far. Think of it as assembling all the pieces of a puzzle to see the full picture.

WHAT YOU'VE ALREADY MASTERED:

1. THE ALPHABET (22 letters):
   • All 22 consonant letters — names, sounds, and shapes
   • The 5 special FINAL forms (Kaf, Mem, Nun, Pe, Tsade)
   • The DAGESH — a tiny dot that changes a letter's sound
   • The four GUTTURALS (Aleph, He, Khet, Ayin) and their throat sounds

2. THE VOWEL SYSTEM (7 vowel marks):
   • PATACH (ַ) = short "A"
   • QAMATS (ָ) = long "AH"
   • HIRIQ (ִ) = short "I"
   • TSER-E (ֵ) = short "E"
   • TSURE (ּ) = long "OO"
   • CHOLEM (ֹ) = long "O"
   • SHEVA (ְ) = the special heartbeat vowel (silent or mobile)

3. GRAMMAR BASICS:
   • GENDER: Every noun is either masculine or feminine
   • THE ARTICLE: הַ (ha-) means "the" and attaches to the noun
   • THE CONJUNCTION: וְ (ve-) means "and" and also attaches
   • ADJECTIVES: They come AFTER the noun and must match in gender and definiteness
   • PRONOUNS: הוּא (hu) = he, הִיא (hi) = she, אַתָּה (atah) = you (masc.), אֲנִי (ani) = I

THE MOST IMPORTANT PATTERNS TO REMEMBER:

Pattern 1: Simple Noun Phrase (indefinite — without "the")
• מֶלֶךְ טוֹב (melekh tov) = "a good king"
• מַלְכָּה טוֹבָה (malka tovah) = "a good queen"
• The adjective AGREES with the noun in gender!

Pattern 2: Definite Noun Phrase (with "the")
• הַמֶּלֶךְ הַטּוֹב (ha-melekh ha-tov) = "the good king"
• הַמַּלְכָּה הַטּוֹבָה (ha-malka ha-tovah) = "the good queen"
• BOTH words need the article!

Pattern 3: Sentence Without "To Be"
• הַמֶּלֶךְ גָּדוֹל (ha-melekh gadol) = "The king IS great" (no "is" needed!)
• הִיא יָפָה (hi yafah) = "She IS beautiful"

SELF-TEST: CAN YOU READ THESE?

Try reading these phrases:
1. סֵפֶר טוֹב — "a good book" (indefinite)
2. הַסֵּפֶר הַטּוֹב — "the good book" (definite)
3. הוּא מֶלֶךְ — "He is a king"
4. הִיא מַלְכָּה יָפָה — "She is a beautiful queen"

If you can read these, you're ready for verbs!

WHY THIS REVIEW MATTERS:

Hebrew verbs are the most powerful (and most complex) part of the language. They change based on:
• Who is doing the action (I, you, he, she, we, they)
• When the action happens (past, present, future)
• The gender of the subject
• The type of action (complete vs. ongoing)

WITHOUT a solid foundation in the basics, verbs will feel impossible. BUT with this review, everything will click into place because you'll recognize the building blocks that verbs are made from.`,
    [
      v('שֹׁרֶשׁ', 'shoresh', 'root', 'Roots are central to Hebrew vocabulary.'),
      v('הַ', 'ha-', 'the', 'The article appears constantly in reading.'),
      v('מֶלֶךְ', 'melekh', 'king', 'A useful review noun.'),
      v('סֵפֶר', 'sefer', 'book', 'A very common masculine noun.'),
      v('זֶה', 'zeh', 'this', 'A demonstrative pronoun you already know.')
    ],
    [
      mc('Which skill belongs to the first ten lessons?', ['Reading vowels and noun agreement', 'Parsing Greek participles', 'Drawing cuneiform tablets', 'Memorizing Roman numerals'], 'Reading vowels and noun agreement', 'The first half of the course is built on reading basics.'),
      tr('What does שֹׁרֶשׁ mean?', ['root', 'king', 'great', 'daughter'], 'root', 'Root is one of the course’s key ideas.'),
      tr('What does סֵפֶר mean?', ['city', 'book', 'king', 'house'], 'book', 'Sefer is the common Hebrew word for book.'),
      mc('What does הַ mark?', ['the definite article', 'the dual number', 'a verb tense', 'a plural ending'], 'the definite article', 'Ha- marks a specific noun.')
    ],
    24
  ),
  lesson(
    12, 3,
    'Lesson 12 — Hebrew Verbs: Roots and Patterns',
    'Identify the root letters that carry verb meaning and learn how Hebrew verb forms are built from patterns.',
     `LESSON 12: WELCOME TO HEBREW VERBS — ROOTS AND PATTERNS

Get ready! You're about to unlock the most exciting part of Hebrew: VERBS. Hebrew verbs are like a secret code — once you learn the system, you can decode thousands of words from just a few basic pieces.

THE BIG IDEA: EVERY VERB HAS A ROOT

In English, verbs change in messy ways: "write" becomes "wrote" and "written." Hebrew is much more organized. Almost every Hebrew verb starts with a THREE-CONSONANT ROOT (called a שֹׁרֶשׁ — shoresh). This root carries the CORE MEANING.

Think of the root as the ENGINE of the verb. The other letters and vowels are like the body panels, wheels, and paint — they tell you WHO did it and WHEN, but the engine tells you WHAT happened.

MEET YOUR FIRST VERB ROOT: כ-ת-ב (k-t-v = "write")

The root כ-ת-ב means "write." Watch how it appears in different forms:

• כָּתַב (katav) = "he wrote" (past tense)
• יִכְתֹּב (yikhtov) = "he will write" (future tense)
• כּוֹתֵב (kotev) = "he writes / is writing" (present tense)

The root letters (כ-ת-ב) stay the SAME. The vowels and extra letters around them change to show the tense.

MORE ROOTS TO KNOW:

Root ל-מ-ד (l-m-d = "learn"):
• לָמַד (lamad) = "he learned"
• לוֹמֵד (lomed) = "he learns / is learning"

Root ש-מ-ר (sh-m-r = "guard/keep"):
• שָׁמַר (shamar) = "he guarded"
• שׁוֹמֵר (shomer) = "he guards / is guarding"

HOW TO SPOT A ROOT:

When you see a Hebrew verb, follow these steps:
1. Ignore the small prefixes (like יִ, תִ, נִ)
2. Ignore the suffixes (like ־תִי, ־נוּ)
3. Find the three main consonants
4. Those three letters are your ROOT!

Example: יִכְתֹּב (yikhtov = "he will write")
• Ignore the prefix יִ (yi-)
• You're left with כ-ת-ב (k-t-v)
• The root means "write"

WHY THIS MATTERS:

Hebrew has about 2,000 verb roots. From each root, you can build upwards of 20 different words! That means:
• Learn one root = unlock many words
• Spot the root = understand the meaning, even if you don't know the exact form
• Reading Hebrew becomes a puzzle you can solve, not a list you must memorize

Think of roots as the DNA of Hebrew. Every verb carries the genetic code of its meaning. Once you know how to read that code, you can unlock the entire language!`,
    [
      v('כָּתַב', 'katav', 'he wrote', 'A common verb root for writing.'),
      v('לָמַד', 'lamad', 'he learned', 'A common verb root for learning.'),
      v('שָׁמַר', 'shamar', 'he kept / guarded', 'A common verb root for keeping.'),
      v('קָרָא', 'kara', 'he called / he read', 'A very frequent verb in narrative.'),
      v('נָתַן', 'natan', 'he gave', 'A basic verb of giving.')
    ],
    [
      mc('What do Hebrew verbs usually depend on?', ['Root letters and patterns', 'Case endings', 'Capital letters', 'Articles only'], 'Root letters and patterns', 'Verb meaning is tied to the root pattern.'),
      tr('What does כָּתַב mean?', ['he wrote', 'he learned', 'he went', 'he saw'], 'he wrote', 'Katav is a basic writing verb.'),
      mc('Which root appears in both "he wrote" and "he will write"?', ['כתב', 'למד', 'שמ', 'קרא'], 'כתב', 'The root כתב appears in both forms.'),
      tr('What does נָתַן mean?', ['he gave', 'he took', 'he came', 'he built'], 'he gave', 'Natan means "he gave."')
    ],
    24
  ),
  lesson(
    13, 3,
    'Lesson 13 — Present Tense and Gender Agreement',
    'Learn present tense forms and see how gender continues to control agreement in Hebrew.',
     `LESSON 13: PRESENT TENSE AND GENDER AGREEMENT

You already know that Hebrew nouns have gender and that adjectives must match them. Now get ready: verbs do the same thing! In the present tense, Hebrew verbs change their form depending on whether the subject is masculine or feminine.

THE PRESENT TENSE: A SPECIAL VERB FORM

In English, the present tense is simple: "I write," "you write," "he writes." Just one little -s change.

In Hebrew, the present tense is actually a PARTICIPLE — a word that acts like both a verb and an adjective. That's why it changes for gender! It's like the verb becomes a description: "a writing man" or "a writing woman."

MASCULINE vs. FEMININE PRESENT

Let's use the root כ-ת-ב (write) as our example.

Masculine singular: כּוֹתֵב (kotev) = "he writes" or "writing"
Feminine singular: כּוֹתֶבֶת (kotevet) = "she writes" or "writing"

See the pattern?
• Masculine: long pattern with holem (וֹ) — כּוֹתֵב
• Feminine: adds ת (tav) at the end — כּוֹתֶבֶת

MORE EXAMPLES:

Root ל-מ-ד (learn):
• Masculine: לוֹמֵד (lomed) = "he learns"
• Feminine: לוֹמֶדֶת (lomedet) = "she learns"

Root ש-מ-ר (guard):
• Masculine: שׁוֹמֵר (shomer) = "he guards"
• Feminine: שׁוֹמֶרֶת (shomeret) = "she guards"

PUTTING IT ALL TOGETHER:

Because the present tense verb agrees with the subject in gender, you can build sentences like these:

• הוּא כּוֹתֵב (hu kotev) = "He writes" (masculine subject + masculine verb)
• הִיא כּוֹתֶבֶת (hi kotevet) = "She writes" (feminine subject + feminine verb)
• אַתָּה לוֹמֵד (atah lomed) = "You (masc.) learn"
• אַתְּ לוֹמֶדֶת (at lomedet) = "You (fem.) learn"

ADJECTIVES STILL AGREE TOO!

Remember that adjectives also match the noun. So in a sentence with both an adjective and a present-tense verb, everything must agree:

• הַמֶּלֶךְ הַטּוֹב כּוֹתֵב (ha-melekh ha-tov kotev) = "The good king writes"
• הַמַּלְכָּה הַטּוֹבָה כּוֹתֶבֶת (ha-malka ha-tovah kotevet) = "The good queen writes"

Notice: The adjective טוֹב changes to טוֹבָה, and the verb changes from כּוֹתֵב to כּוֹתֶבֶת — all because the subject changed from masculine to feminine!

PLURAL PRESENT TENSE:

When the subject is plural, the verb changes too:

Masculine plural: כּוֹתְבִים (kotvim) = "they (masc.) write"
Feminine plural: כּוֹתְבוֹת (kotvot) = "they (fem.) write"

• הֵם כּוֹתְבִים (hem kotvim) = "They (masc.) write"
• הֵן כּוֹתְבוֹת (hen kotvot) = "They (fem.) write"

KEY TAKEAWAY:

Hebrew present tense is like a dance where every word has to be in sync. The subject's gender controls the verb form AND any adjectives. When you read a sentence, check the gender first — it will tell you what forms to expect!`,
    [
      v('כּוֹתֵב', 'kotev', 'writing / he writes', 'Masculine present form.'),
      v('כּוֹתֶבֶת', 'kotevet', 'writing / she writes', 'Feminine present form.'),
      v('טוֹב', 'tov', 'good', 'Agreement continues to matter.'),
      v('טוֹבָה', 'tovah', 'good (feminine)', 'Feminine adjective form.'),
      v('יָשֵׁב', 'yashev', 'he sits / he lives', 'A common present tense verb.')
    ],
    [
      mc('Which form is feminine?', ['כּוֹתֶבֶת', 'כּוֹתֵב', 'מֶלֶךְ', 'בַּיִת'], 'כּוֹתֶבֶת', 'Kotevet is the feminine form.'),
      tr('What does כּוֹתֵב mean?', ['writing / he writes', 'house', 'king', 'and'], 'writing / he writes', 'Kotev is the masculine present form.'),
      mc('Which adjective matches a feminine subject?', ['טוֹבָה', 'טוֹב', 'סֵפֶר', 'הַמֶּלֶךְ'], 'טוֹבָה', 'Feminine adjectives must agree with feminine nouns.'),
      {
        type: 'sentence_builder',
        question: 'Arrange these words to say "she writes" in Hebrew.',
        words: ['הִיא', 'כּוֹתֶבֶת'],
        answer: ['הִיא', 'כּוֹתֶבֶת'],
        explanation: 'The subject הִיא is paired with the feminine present form כותבת.'
      }
    ],
    26
  ),
  lesson(
    14, 3,
    'Lesson 14 — Verb Patterns and Meaning',
    'Deepen your understanding of Hebrew verb stems and how meaning remains attached to the root.',
     `LESSON 14: VERB PATTERNS AND MEANING

In Lesson 12, you learned that every Hebrew verb starts with a three-consonant root. Now it's time to go deeper and see how the SAME root can appear in different PATTERNS — and how recognizing those patterns helps you read faster.

THE ROOT IS YOUR ANCHOR

No matter how a verb changes — past, present, future — the root consonants stay. The vowels and extra letters are like clothing that the root wears. The outfit changes, but the person inside is the same.

Let's watch the root ש-מ-ר (sh-m-r = "guard") in different outfits:

Past tense: שָׁמַר (shamar) = "he guarded"
Present tense: שׁוֹמֵר (shomer) = "he guards"
Future tense: יִשְׁמֹר (yishmor) = "he will guard"

Notice how the root ש-מ-ר is always there? The vowels change, and future adds a prefix (יִ). But the three core consonants never disappear.

NEW VERB ROOTS TO KNOW:

Root א-מ-ר (a-m-r = "say"):
• אָמַר (amar) = "he said"
• אוֹמֵר (omer) = "he says"
• יֹאמַר (yomar) = "he will say"

Root ה-ל-ך (h-l-kh = "walk/go"):
• הָלַךְ (halakh) = "he walked"
• הוֹלֵךְ (holekh) = "he goes"
• יֵלֵךְ (yelekh) = "he will go"

Root ב-נ-ה (b-n-h = "build"):
• בָּנָה (banah) = "he built"
• בּוֹנֶה (boneh) = "he builds"
• יִבְנֶה (yivneh) = "he will build"

Root ע-נ-ה (a-n-h = "answer"):
• עָנָה (anah) = "he answered"
• עוֹנֶה (oneh) = "he answers"
• יַעֲנֶה (ya'aneh) = "he will answer"

WHAT TO LOOK FOR:

When you encounter a new Hebrew verb, ask yourself:
1. What are the three root consonants? (Find them by removing prefixes/suffixes)
2. What do those three consonants mean? (Use your vocabulary knowledge)
3. What pattern is the verb wearing? (Past, present, or future?)
4. Who is doing the action? (Look at the prefixes/suffixes for clues)

REAL BIBLICAL VERBS:

Here are some verbs you'll see again and again in the Hebrew Bible:

• וַיֹּאמֶר (vayomer) = "and he said" — appears over 2,000 times!
• וַיֵּלֶךְ (vayelekh) = "and he went" — very common in narratives
• וַיִּבֶן (vayiven) = "and he built" — used in building stories

Each of these is built from a root + a pattern. The more you practice, the faster you'll recognize them!

KEY INSIGHT:

Once you can spot the root, you know the CORE meaning of the verb — even if you don't recognize every detail about the form. This is the most important skill for reading Biblical Hebrew. The root is your best friend. Never forget it!`,
    [
      v('אָמַר', 'amar', 'he said', 'A highly common biblical verb.'),
      v('בָּנָה', 'banah', 'he built', 'A simple and useful root.'),
      v('הָלַךְ', 'halakh', 'he walked / went', 'A very frequent narrative verb.'),
      v('עָנָה', 'anah', 'he answered', 'A verb often found in dialogue.'),
      v('נָתַן', 'natan', 'he gave', 'A verb with a simple, frequent root.')
    ],
    [
      mc('What stays most important when reading Hebrew verbs?', ['The root letters', 'The English article', 'The page number', 'The marginal notes'], 'The root letters', 'The root is the core of the meaning.'),
      tr('What does אָמַר mean?', ['he said', 'he walked', 'he wrote', 'he made'], 'he said', 'Amar is one of the most common verbs.'),
      mc('Which word means "he answered"?', ['עָנָה', 'נָתַן', 'לָמַד', 'שָׁמַר'], 'עָנָה', 'Anah means "he answered."'),
      {
        type: 'sentence_builder',
        question: 'Arrange these words to say "he built" in Hebrew.',
        words: ['הוּא', 'בָּנָה'],
        answer: ['הוּא', 'בָּנָה'],
        explanation: 'The pronoun הוּא goes with the perfect verb form בָּנָה.'
      }
    ],
    26
  ),
  lesson(
    15, 3,
    'Lesson 15 — Demonstratives and Descriptive Phrases',
    'Learn how Hebrew uses this, that, these, and those alongside nouns and adjectives.',
     `LESSON 15: DEMONSTRATIVES — THIS, THAT, THESE, THOSE

Imagine you're pointing to things around you. "THIS book is great." "THAT house is big." "THESE cookies are delicious!" The words "this," "that," "these," and "those" are called DEMONSTRATIVES — they point to specific things.

In Hebrew, demonstratives change based on gender and number, just like adjectives do.

THE THREE MAIN DEMONSTRATIVES:

1. זֶה (zeh) = "this" (masculine singular)
   Use this when pointing to one masculine thing:
   • זֶה סֵפֶר (zeh sefer) = "This is a book"
   • זֶה מֶלֶךְ (zeh melekh) = "This is a king"

2. זֹאת (zot) = "this" (feminine singular)
   Use this when pointing to one feminine thing:
   • זֹאת מַלְכָּה (zot malkah) = "This is a queen"
   • זֹאת עִיר (zot ir) = "This is a city"

3. אֵלֶּה (elleh) = "these" (plural — both genders)
   Use this when pointing to multiple things:
   • אֵלֶּה סְפָרִים (elleh sfarim) = "These are books"
   • אֵלֶּה מְלָכִים (elleh melakhim) = "These are kings"

TWO WAYS TO USE DEMONSTRATIVES:

Way 1: As a STATEMENT (like saying "this IS a book")
• זֶה סֵפֶר טוֹב (zeh sefer tov) = "This is a good book"
• זֹאת מַלְכָּה יָפָה (zot malka yafah) = "This is a beautiful queen"
• אֵלֶּה בָּתִּים גְּדוֹלִים (elleh batim gedolim) = "These are big houses"

In this pattern, the demonstrative comes FIRST, followed by the noun and adjective. No "is" or "are" needed!

Way 2: As a DESCRIPTION (like saying "THIS book is good")
• הַסֵּפֶר הַזֶּה טוֹב (ha-sefer ha-zeh tov) = "This book is good"
• הַמַּלְכָּה הַזֹּאת יָפָה (ha-malka ha-zot yafah) = "This queen is beautiful"
• הַסְּפָרִים הָאֵלֶּה טוֹבִים (ha-sfarim ha-elleh tovim) = "These books are good"

In this pattern, the noun gets the article, and the demonstrative comes AFTER the noun with its own article too!

COMPARING THE TWO PATTERNS:

Statement pattern: זֶה + noun + adjective
• זֶה סֵפֶר טוֹב = "This is a good book"

Description pattern: הַ + noun + הַ + demonstrative + adjective
• הַסֵּפֶר הַזֶּה טוֹב = "This book is good"

The difference is subtle but important. The first says "This IS a good book" (introducing it). The second says "THIS book (the one right here) is good" (pointing out a specific one).

PRACTICE READING:

Try these:
1. זֶה מֶלֶךְ גָּדוֹל = "This is a great king"
2. הַמֶּלֶךְ הַזֶּה גָּדוֹל = "This king is great"
3. אֵלֶּה בָּתִּים = "These are houses"
4. הַבָּתִּים הָאֵלֶּה גְּדוֹלִים = "These houses are big"

Demonstratives are everywhere in biblical narratives. Characters point to things, identify people, and describe scenes using these words. Master them, and you'll follow the story much more easily!`,
    [
      v('זֶה', 'zeh', 'this / this one', 'Masculine singular demonstrative.'),
      v('זֹאת', 'zot', 'this / this one', 'Feminine singular demonstrative.'),
      v('אֵלֶּה', 'elleh', 'these', 'Plural demonstrative.'),
      v('הוּא', 'hu', 'he / it', 'A simple masculine pronoun.'),
      v('הִיא', 'hi', 'she / it', 'A simple feminine pronoun.')
    ],
    [
      mc('Which word is feminine singular?', ['זֹאת', 'זֶה', 'אֵלֶּה', 'הוּא'], 'זֹאת', 'Zot is the feminine singular form.'),
      tr('What does אֵלֶּה mean?', ['these', 'that', 'king', 'not'], 'these', 'Elleh is the plural demonstrative.'),
      mc('Which word is masculine singular?', ['זֶה', 'זֹאת', 'אֵלֶּה', 'הִיא'], 'זֶה', 'Zeh is the masculine singular demonstrative.'),
      {
        type: 'sentence_builder',
        question: 'Arrange the words to form "this book" in Hebrew.',
        words: ['זֶה', 'סֵפֶר'],
        answer: ['זֶה', 'סֵפֶר'],
        explanation: 'The masculine demonstrative זֶה pairs with masculine noun סֵפֶר.'
      }
    ],
    28
  ),
  lesson(
    16, 4,
    'Lesson 16 — Prepositions and Prefixed Particles',
    'Learn the most common Hebrew prepositions and how they attach to words in the sentence.',
     `LESSON 16: PREPOSITIONS — THE GLUE THAT HOLDS SENTENCES TOGETHER

Prepositions are little words like "in," "to," "from," and "like." In English, they're separate words. But in Hebrew, many prepositions ATTACH directly to the word that follows! They become PREFIXES.

Think of Hebrew prepositions as tiny stickers that glue themselves to the next word. Once you learn to spot them, you'll understand how all the parts of a sentence connect.

THE FIVE MOST COMMON PREPOSITIONS:

1. בְּ (be-) = "in" or "with"
   • בְּבַיִת (be-vayit) = "in a house"
   • בַּמֶּלֶךְ (ba-melekh) = "in the king" (בְּ + הַ → בַּ)
   
   When בְּ meets the definite article הַ, they combine! The ה disappears, and the vowel becomes a (patach): בְּ + הַ = בַּ

2. לְ (le-) = "to" or "for"
   • לְמֶלֶךְ (le-melekh) = "to a king"
   • לַמֶּלֶךְ (la-melekh) = "to the king" (לְ + הַ → לַ)
   
   Same rule: לְ + הַ = לַ

3. כְּ (ke-) = "like" or "as"
   • כְּמֶלֶךְ (ke-melekh) = "like a king"
   • כַּמֶּלֶךְ (ka-melekh) = "like the king" (כְּ + הַ → כַּ)

4. עַל (al) = "on" or "upon"
   • עַל הַבַּיִת (al ha-bayit) = "on the house"
   • This one is a SEPARATE word (not a prefix)

5. מִן (min) = "from"
   • מִמֶּלֶךְ (mi-melekh) = "from a king"
   • מֵהַבַּיִת (me-ha-bayit) = "from the house"
   • This one is often shortened to מִ (mi-)

THE IMPORTANT RULE: PREPOSITION + ARTICLE COMBINATIONS

When בְּ, לְ, or כְּ come before a word with the definite article הַ:
1. The ה disappears
2. The preposition gets a patach (ַ) vowel
3. The word keeps its meaning as "the"

Example breakdown:
• בְּ (in) + הַמֶּלֶךְ (the king) → בַּמֶּלֶךְ (ba-melekh) = "in the king"
• לְ (to) + הַמֶּלֶךְ (the king) → לַמֶּלֶךְ (la-melekh) = "to the king"

READING REAL PHRASES:

• בְּבַיִת (be-vayit) = "in a house"
• לְסֵפֶר (le-sefer) = "to a book"
• כְּמֶלֶךְ (ke-melekh) = "like a king"
• עַל הַבַּיִת (al ha-bayit) = "on the house"
• מִן הָעִיר (min ha-ir) = "from the city"

WHY THIS MATTERS:

Prepositions appear in almost every Hebrew sentence. They connect ideas and show relationships between words. If you don't recognize them, you might misread the entire sentence. But once you know them, you'll see how they tie everything together!

Think of prepositions as the GLUE of Hebrew. Without glue, words just sit there. With glue, they form meaningful sentences that tell stories, give commands, and ask questions.`,
    [
      v('בְּ', 'be-', 'in / with', 'A common prefixed preposition.'),
      v('לְ', 'le-', 'to / for', 'Another very common prefix.'),
      v('כְּ', 'ke-', 'like / as', 'Used for comparison.'),
      v('עַל', 'al', 'on / upon', 'A preposition that often appears in phrases.'),
      v('מִן', 'min', 'from', 'A very frequent short preposition.')
    ],
    [
      mc('What does בְּ often mean?', ['in / with', 'not', 'or', 'the'], 'in / with', 'Be- is a basic preposition.'),
      tr('What does לְ mean?', ['to / for', 'and', 'house', 'peace'], 'to / for', 'Le- is a common Hebrew prefix.'),
      mc('What does עַל mean?', ['on / upon', 'before', 'after', 'between'], 'on / upon', 'Al is another common preposition.'),
      {
        type: 'sentence_builder',
        question: 'Arrange the preposition and noun to say "in the house" in Hebrew.',
        words: ['בְּ', 'בַּיִת'],
        answer: ['בְּ', 'בַּיִת'],
        explanation: 'The preposition בְּ attaches to the noun בַּיִת to mean "in the house."'
      }
    ],
    28
  ),
  lesson(
    17, 4,
    'Lesson 17 — Relative Clauses and the Direct Object Marker',
    'Identify the word that links clauses and the marker that marks a definite direct object.',
     `LESSON 17: RELATIVE CLAUSES AND THE DIRECT OBJECT MARKER

In this lesson, you'll learn two powerful tools that make Hebrew sentences more precise and interesting. First, how to say "the book THAT I wrote" (a relative clause). Second, how to mark the DIRECT OBJECT of a verb.

PART 1: THE RELATIVE PRONOUN אֲשֶׁר (ASHER)

אֲשֶׁר (asher) means "who," "that," or "which." It connects two ideas together:

• הַמֶּלֶךְ אֲשֶׁר שָׁמַר (ha-melekh asher shamar) = "the king who guarded"
• הַסֵּפֶר אֲשֶׁר כָּתַב (ha-sefer asher katav) = "the book that he wrote"
• הָעִיר אֲשֶׁר בָּנָה (ha-ir asher banah) = "the city which he built"

Think of אֲשֶׁר as a BRIDGE between two parts of a sentence. The first part introduces a person or thing. The second part tells you something about them.

Full sentence examples:
• רָאִיתִי אֶת הַמֶּלֶךְ אֲשֶׁר שָׁמַר הָעִיר (ra'iti et ha-melekh asher shamar ha-ir) = "I saw the king who guarded the city"
• זֶה הַסֵּפֶר אֲשֶׁר כָּתַב הַמֶּלֶךְ (zeh ha-sefer asher katav ha-melekh) = "This is the book that the king wrote"

PART 2: THE DIRECT OBJECT MARKer אֶת (ET)

In English, we know which noun is the direct object (receiving the action) from word order: "The king guards THE CITY." The city comes after the verb, so it's the object.

In Hebrew, word order can be flexible. That's why Hebrew uses a special word, אֶת (et), to mark the DIRECT OBJECT — but ONLY when it's DEFINITE (has "the").

• הַמֶּלֶךְ שָׁמַר אֶת הָעִיר (ha-melekh shamar et ha-ir) = "The king guarded the city"
• He guarded WHAT? The city (עִיר with הַ = definite)

Without אֶת, you'd have to guess which word is the object. With אֶת, it's crystal clear.

When is אֶת used?
• Only before DEFINITE objects (with הַ, or proper names)
• NOT before indefinite objects (without "the")

Examples:
• שָׁמַר אֶת הַמֶּלֶךְ (shamar et ha-melekh) = "He guarded THE king" (definite)
• שָׁמַר מֶלֶךְ (shamar melekh) = "He guarded a king" (indefinite — no אֶת)

ANOTHER IMPORTANT WORD: כִּי (KI)

כִּי (ki) means "that" or "because." It's different from אֲשֶׁר:
• אֲשֶׁר = "who/that/which" (describes a noun)
• כִּי = "that" (introduces a whole idea) or "because" (gives a reason)

Examples:
• יָדַעְתִּי כִּי הַמֶּלֶךְ טוֹב (yadati ki ha-melekh tov) = "I knew THAT the king is good"
• שָׂמַח כִּי רָאָה אֶת הַמֶּלֶךְ (samakh ki ra'ah et ha-melekh) = "He rejoiced BECAUSE he saw the king"

PUTTING IT ALL TOGETHER:

Try reading this sentence:
רָאִיתִי אֶת הַסֵּפֶר אֲשֶׁר כָּתַב הַמֶּלֶךְ
(ra'iti et ha-sefer asher katav ha-melekh)
= "I saw the book THAT the king wrote"

Breakdown:
• רָאִיתִי = "I saw"
• אֶת הַסֵּפֶר = direct object marker + "the book"
• אֲשֶׁר = "that/which"
• כָּתַב הַמֶּלֶךְ = "the king wrote"

With אֲשֶׁר and אֶת in your toolbox, you can read much more complex and interesting Hebrew sentences!`,
    [
      v('אֲשֶׁר', 'asher', 'who / that / which', 'A common relative pronoun.'),
      v('אֶת', 'et', 'direct-object marker', 'Marks the definite direct object.'),
      v('מִן', 'min', 'from', 'A frequent short preposition.'),
      v('כִּי', 'ki', 'that / because', 'A conjunction often used in clauses.'),
      v('דָּבָר', 'davar', 'word / thing', 'A very common noun used in many sentences.')
    ],
    [
      mc('Which word marks the direct object?', ['אֶת', 'אֲשֶׁר', 'מִן', 'הַ'], 'אֶת', 'Et marks a definite direct object.'),
      tr('What does אֲשֶׁר mean?', ['who / that / which', 'in', 'good', 'two'], 'who / that / which', 'Asher introduces a relative clause.'),
      mc('Which word means "because" or "that"?', ['כִּי', 'אֶת', 'זֶה', 'אֵלֶּה'], 'כִּי', 'Ki is a common conjunction.'),
      {
        type: 'sentence_builder',
        question: 'Arrange the words to say "the word that" in Hebrew.',
        words: ['הַ', 'דָּבָר', 'אֲשֶׁר'],
        answer: ['הַ', 'דָּבָר', 'אֲשֶׁר'],
        explanation: 'The relative clause begins with אֲשֶׁר after the noun הַדָּבָר.'
      }
    ],
    30
  ),
  lesson(
    18, 4,
    'Lesson 18 — Mid-Course Review of Verbs and Syntax',
    'Review verb patterns, demonstratives, prepositions, and clause markers before continuing to more advanced grammar.',
     `LESSON 18: MID-COURSE REVIEW — VERBS AND SYNTAX

You've covered a LOT of ground. Let's pause and bring everything together before moving forward. This lesson reviews the key grammar from lessons 12 through 17 — verbs, demonstratives, prepositions, relative clauses, and more.

REVIEW 1: VERB ROOTS AND PRESENT TENSE

Every Hebrew verb starts with a three-consonant root. The present tense changes for gender:

Root כ-ת-ב (write):
• He writes: כּוֹתֵב (kotev)
• She writes: כּוֹתֶבֶת (kotevet)
• They (masc.) write: כּוֹתְבִים (kotvim)
• They (fem.) write: כּוֹתְבוֹת (kotvot)

Root ש-מ-ר (guard):
• He guards: שׁוֹמֵר (shomer)
• She guards: שׁוֹמֶרֶת (shomeret)
• They (masc.) guard: שׁוֹמְרִים (shomrim)
• They (fem.) guard: שׁוֹמְרוֹת (shomrot)

REVIEW 2: DEMONSTRATIVES

Pointing words that change for gender and number:
• זֶה (zeh) = "this" (masculine singular)
• זֹאת (zot) = "this" (feminine singular)
• אֵלֶּה (elleh) = "these" (plural)

Two patterns:
• זֶה סֵפֶר טוֹב = "This is a good book" (statement)
• הַסֵּפֶר הַזֶּה טוֹב = "This book is good" (description)

REVIEW 3: PREFIXED PREPOSITIONS

Little words that attach to the next word:
• בְּ (be-) = "in" — בַּבַּיִת = "in the house"
• לְ (le-) = "to/for" — לַמֶּלֶךְ = "to the king"
• כְּ (ke-) = "like/as" — כַּמֶּלֶךְ = "like the king"
• עַל (al) = "on/upon" (separate word)
• מִן (min) = "from" (often shortened to מִ)

Remember: בְּ + הַ = בַּ | לְ + הַ = לַ | כְּ + הַ = כַּ

REVIEW 4: RELATIVE CLAUSES AND DIRECT OBJECTS

• אֲשֶׁר (asher) = "who/that/which" — connects a description to a noun
• אֶת (et) = direct object marker — shows which noun receives the action (definite only)
• כִּי (ki) = "that/because" — introduces a whole idea or gives a reason

SENTENCE BREAKDOWN PRACTICE:

Let's analyze a full sentence:

הַמֶּלֶךְ הַטּוֹב שׁוֹמֵר אֶת הָעִיר אֲשֶׁר בָּנָה

(ha-melekh ha-tov shomer et ha-ir asher banah)

Translation: "The good king guards the city that he built."

Breakdown:
• הַמֶּלֶךְ הַטּוֹב = "the good king" (definite noun + definite adjective)
• שׁוֹמֵר = "guards" (present tense, masculine)
• אֶת הָעִיר = direct object marker + "the city"
• אֲשֶׁר בָּנָה = "that he built" (relative clause describing the city)

Every part of this sentence follows rules you've learned. You can read this!

WHY THIS REVIEW MATTERS:

You've now learned the core building blocks of Hebrew sentences. With roots, patterns, gender agreement, demonstratives, prepositions, and clause markers, you can read and understand real biblical-style Hebrew. The next lessons will add more advanced features, but you already have a SOLID foundation. Take a moment to appreciate how far you've come!`,
    [
      v('כָּתַב', 'katav', 'he wrote', 'Review of the verb root.'),
      v('זֶה', 'zeh', 'this', 'Review of demonstratives.'),
      v('אֶת', 'et', 'direct-object marker', 'Review of clause structure.'),
      v('זֹאת', 'zot', 'this (feminine)', 'Review of feminine demonstratives.'),
      v('לְמֶלֶךְ', 'lemelekh', 'to the king', 'Review of prepositional phrases.')
    ],
    [
      mc('Which word is a demonstrative?', ['זֶה', 'אֶת', 'מִן', 'כְּ'], 'זֶה', 'Zeh means this.'),
      tr('What does אֶת mark?', ['the direct object', 'the plural', 'the article', 'the future tense'], 'the direct object', 'Et marks the direct object in Hebrew.'),
      mc('Which form means from?', ['מִן', 'לְ', 'הַ', 'זֹאת'], 'מִן', 'Min means from.'),
      {
        type: 'sentence_builder',
        question: 'Arrange the phrase for "to the king" in Hebrew.',
        words: ['לְ', 'מֶלֶךְ'],
        answer: ['לְ', 'מֶלֶךְ'],
        explanation: 'The preposition לְ attaches to king מֶלֶךְ to mean "to the king."'
      }
    ],
    32
  ),
  lesson(
    19, 4,
    'Lesson 19 — Review Test and Confidence Check',
    'Check your grasp of the course so far before moving into more advanced grammar and reading practice.',
     `LESSON 19: REVIEW TEST AND CONFIDENCE CHECK

This is it — your big review test! No new grammar here. Just a chance to prove to yourself that you've mastered everything so far. Think of it as the final exam before the advanced material.

WHAT YOU NEED TO KNOW FOR THIS TEST:

ALPHABET AND VOWELS:
• All 22 letter names and sounds
• The 5 final forms (ך, ם, ן, ף, ץ)
• The 7 vowel marks and their sounds
• Silent vs. mobile sheva
• The dagesh and how it changes pronunciation
• Guttural letters (א, ה, ח, ע) and their special behavior

NOUNS AND GENDER:
• Every noun is either masculine or feminine
• Feminine nouns often end in ה or ת
• Masculine plurals end in ים, feminine plurals end in ות

DEFINITE ARTICLE:
• הַ (ha-) = "the" — attaches to the noun
• When an adjective describes a definite noun, it also gets הַ

CONJUNCTION:
• וְ (ve-) = "and" — attaches to the next word
• Changes form depending on the following sound

ADJECTIVES:
• Come AFTER the noun
• Must match the noun in gender (masculine/feminine)
• Must match the noun in definiteness (with/without הַ)
• Must match the noun in number (singular/plural)

PRONOUNS:
• הוּא (hu) = "he"
• הִיא (hi) = "she"
• אַתָּה (atah) = "you" (masculine)
• אֲנִי (ani) = "I"
• Hebrew often skips "is" and "are": הוּא מֶלֶךְ = "He is a king"

VERB ROOTS AND PATTERNS:
• Every verb has a three-consonant root
• The root carries the core meaning
• Vowels and prefixes/suffixes show tense and person
• Present tense changes for gender: כּוֹתֵב (masc.) / כּוֹתֶבֶת (fem.)

DEMONSTRATIVES:
• זֶה = this (masc.), זֹאת = this (fem.), אֵלֶּה = these (plural)

PREPOSITIONS:
• בְּ = in, לְ = to/for, כְּ = like/as, עַל = on/upon, מִן = from
• בְּ + הַ = בַּ, לְ + הַ = לַ, כְּ + הַ = כַּ

CLAUSE MARKERS:
• אֲשֶׁר = who/that/which (relative pronoun)
• אֶת = direct object marker (before definite objects)
• כִּי = that/because (conjunction)

SAMPLE TEST PHRASES — CAN YOU READ THESE?

Try reading these aloud and translating:
1. הַמֶּלֶךְ הַגָּדוֹל
   (ha-melekh ha-gadol) = "The great king"

2. הִיא מַלְכָּה יָפָה
   (hi malkah yafah) = "She is a beautiful queen"

3. אֵלֶּה הַסְּפָרִים הַטּוֹבִים
   (elleh ha-sfarim ha-tovim) = "These are the good books"

4. הַמֶּלֶךְ שׁוֹמֵר אֶת הָעִיר
   (ha-melekh shomer et ha-ir) = "The king guards the city"

5. זֶה הַסֵּפֶר אֲשֶׁר כָּתַב הַמֶּלֶךְ
   (zeh ha-sefer asher katav ha-melekh) = "This is the book that the king wrote"

HOW DID YOU DO?

• If you got all 5 = You're ready for the advanced lessons!
• If you got 3-4 = Review the specific areas you missed
• If you got 0-2 = Go back and review lessons 1-18 before moving forward

This checkpoint ensures you enter the final section with CONFIDENCE. You've worked hard — now prove it to yourself!`,
    [
      v('הַ', 'ha-', 'the', 'Review of the definite article.'),
      v('כּוֹתֵב', 'kotev', 'writing / he writes', 'Review of present forms.'),
      v('אֲשֶׁר', 'asher', 'who / that / which', 'Review of relative clauses.'),
      v('לֹא', 'lo', 'not', 'Review of negative particles.'),
      v('שָׁלוֹם', 'shalom', 'peace', 'A familiar review noun.')
    ],
    [
      mc('Which word is the article?', ['הַ', 'מִן', 'אֶת', 'זֶה'], 'הַ', 'Ha- is the definite article.'),
      tr('What does כּוֹתֵב mean?', ['writing / he writes', 'king', 'from', 'this'], 'writing / he writes', 'Kotev is the masculine present form.'),
      mc('Which word means who / that / which?', ['אֲשֶׁר', 'לְ', 'בְּ', 'גָּדוֹל'], 'אֲשֶׁר', 'Asher is the relative pronoun.'),
      {
        type: 'sentence_builder',
        question: 'Form the review phrase "the word that" in Hebrew.',
        words: ['הַ', 'דָּבָר', 'אֲשֶׁר'],
        answer: ['הַ', 'דָּבָר', 'אֲשֶׁר'],
        explanation: 'The phrase uses the article, noun, and relative pronoun together.'
      }
    ],
    34
  ),
  lesson(
    20, 4,
    'Lesson 20 — Guttural Verb Roots and Gender',
    'Learn how guttural letters affect verb patterns and continue to practice gender agreement in verbs and adjectives.',
     `LESSON 20: GUTTURAL VERB ROOTS AND GENDER

Remember the four guttural letters from Lesson 3? א (Aleph), ה (He), ח (Khet), and ע (Ayin)? These special throat letters don't just change how words sound — they also affect how verbs behave!

GUTTURALS: THE REBEL LETTERS

Guttural letters are like rule-breakers. They don't like certain vowels and they change the patterns you've learned. But once you understand their quirks, you can handle any guttural verb.

GOLDEN RULE #1: GUTTURALS LOVE THE "A" SOUND

When a guttural letter is in a verb root, nearby vowels often shift to an "A" sound (patach or qamats). This is because "A" vowels are easier to pronounce from the throat.

Example: The root שׁ-מ-ע (sh-m-a = "hear/hear")
The letter ע (Ayin) is guttural. Watch how the vowel changes:

• Normal verb (שָׁמַר — shamar, "he guarded"): Patach under second letter
• Guttural verb (שָׁמַע — shama, "he heard"): Same pattern — but look closely at the vowel under the guttural

In the present tense:
• שׁוֹמֵר (shomer) = "he guards" (normal)
• שׁוֹמֵעַ (shomea) = "he hears" (guttural forces the last vowel to shift)

GOLDEN RULE #2: GUTTURALS DON'T LIKE THE SHEVA

Regular verbs can take a silent sheva (ְ) under any letter. But gutturals HATE the sheva. Instead, they take a COMPOSITE SHEVA — a sheva combined with a vowel sound.

There are three composite shevas:
• ֲ (chatef-patach) = "a" sound + sheva — most common with gutturals
• ֱ (chatef-segol) = "e" sound + sheva
• ֳ (chatef-qamats) = "o" sound + sheva — rare

Example: Root ע-ל-ה (a-l-h = "go up")
• Past tense: עָלָה (alah) = "he went up"
• The guttural ע takes the main vowel, not a sheva

GUTTURAL NOUNS AND ADJECTIVES:

Gutturals also affect nouns and adjectives:

• רוּחַ (ruach) = "spirit/wind" — the ח at the end affects the vowel
• עַם (am) = "people" — the ע makes the word short
• חָזָק (chazaq) = "strong" — the ח takes a long vowel
• חָכָם (chakham) = "wise" — both letters are guttural!

GENDER STILL MATTERS:

Even with gutturals, gender agreement still applies!

• הוּא שָׁמַע (hu shama) = "He heard" (masculine)
• הִיא שָׁמְעָה (hi sham'ah) = "She heard" (feminine — adds ה)
• הוּא עָלָה (hu alah) = "He went up" (masculine)
• הִיא עָלְתָה (hi altah) = "She went up" (feminine — adds ת)

WHY THIS MATTERS:

Guttural verbs are very common in the Hebrew Bible. Words like "hear" (שָׁמַע), "answer" (עָנָה), "stand" (עָמַד), and "do/make" (עָשָׂה) all contain gutturals. Once you know how gutturals behave, you won't be confused when a verb looks slightly different from what you expected.

Remember: Gutturals are rebels, but they're predictable rebels. Learn their rules, and they'll follow them every time!`,
    [
      v('רוּחַ', 'ruach', 'spirit / wind', 'A common noun containing a guttural.'),
      v('עַם', 'am', 'people', 'A short noun with a guttural.'),
      v('חָזָק', 'chazaq', 'strong', 'A useful adjective with gutturals.'),
      v('חָכָם', 'chakam', 'wise', 'A related adjective with a guttural.'),
      v('עָלָה', 'alah', 'he went up / he ascended', 'A verb with a guttural root.')
    ],
    [
      mc('What can guttural consonants affect?', ['Verb patterns and pronunciation', 'Only English spelling', 'Only the article', 'Nothing at all'], 'Verb patterns and pronunciation', 'Gutturals can influence how forms are pronounced.'),
      tr('What does רוּחַ mean?', ['spirit / wind', 'house', 'king', 'and'], 'spirit / wind', 'Ruach is a common biblical noun.'),
      mc('What does חָכָם mean?', ['wise', 'strong', 'son', 'king'], 'wise', 'Chakam means wise.'),
      {
        type: 'sentence_builder',
        question: 'Arrange the words to say "he went up" in Hebrew.',
        words: ['הוּא', 'עָלָה'],
        answer: ['הוּא', 'עָלָה'],
        explanation: 'The verb עָלָה is paired with the pronoun הוּא.'
      }
    ],
    34
  ),
  lesson(
    21, 5,
    'Lesson 21 — Negation and Singular Noun Patterns',
    'Form simple negative Hebrew sentences and learn how singular nouns are used in basic statements.',
     `LESSON 21: NEGATION — SAYING "NO" IN HEBREW

So far, you've learned how to say what things ARE. Now it's time to learn how to say what things ARE NOT. Hebrew uses two main words to express negation: לֹא (lo) and אֵין (ein). Each has a different job.

NEGATION TOOL #1: לֹא (LO) — "NOT"

לֹא is the standard negative particle. It's like the word "not" in English. It NEGATES a verb or a statement.

Where does לֹא go? Directly BEFORE the word it negates.

Examples with verbs:
• הוּא כָּתַב (hu katav) = "He wrote"
• הוּא לֹא כָּתַב (hu lo katav) = "He did NOT write"
• הַמֶּלֶךְ שׁוֹמֵר (ha-melekh shomer) = "The king guards"
• הַמֶּלֶךְ לֹא שׁוֹמֵר (ha-melekh lo shomer) = "The king does NOT guard"

Examples with adjectives:
• הַמֶּלֶךְ טוֹב (ha-melekh tov) = "The king is good"
• הַמֶּלֶךְ לֹא טוֹב (ha-melekh lo tov) = "The king is NOT good"
• הִיא יָפָה (hi yafah) = "She is beautiful"
• הִיא לֹא יָפָה (hi lo yafah) = "She is NOT beautiful"

NEGATION TOOL #2: אֵין (EIN) — "THERE IS NOT"

אֵין is different from לֹא. It means "there is not" or "there is no." It's used when something DOESN'T EXIST or ISN'T PRESENT.

Examples:
• סֵפֶר (sefer) = "a book"
• אֵין סֵפֶר (ein sefer) = "There is no book" / "There isn't a book"
• מֶלֶךְ (melekh) = "a king"
• אֵין מֶלֶךְ (ein melekh) = "There is no king"

אֵין can also negate a definite noun:
• אֵין הַמֶּלֶךְ (ein ha-melekh) = "The king is not here" / "There is no king"

When you want to say "there IS" something, use יֵשׁ (yesh):
• יֵשׁ סֵפֶר (yesh sefer) = "There is a book"
• אֵין סֵפֶר (ein sefer) = "There is no book"

COMPARING לֹא AND אֵין:

Think of it this way:
• לֹא = "not" — negates an action or description
• אֵין = "there is not" — says something doesn't exist

Example comparison:
• הַמֶּלֶךְ לֹא בַּבַּיִת (ha-melekh lo ba-bayit) = "The king is NOT in the house" (negating the location)
• אֵין מֶלֶךְ בַּבַּיִת (ein melekh ba-bayit) = "There is NO king in the house" (denying existence)

SINGULAR NOUN PATTERNS REVIEW:

Since we're talking about what exists and what doesn't, let's review singular noun patterns:

Indefinite (without "the"):
• מֶלֶךְ (melekh) = "a king"
• סֵפֶר (sefer) = "a book"
• מַלְכָּה (malkah) = "a queen"

Definite (with "the"):
• הַמֶּלֶךְ (ha-melekh) = "the king"
• הַסֵּפֶר (ha-sefer) = "the book"
• הַמַּלְכָּה (ha-malkah) = "the queen"

With יֵשׁ and אֵין:
• יֵשׁ סֵפֶר = "There is a book"
• אֵין סֵפֶר = "There is no book"
• יֵשׁ הַמֶּלֶךְ = "The king is here/exists"

KEY TAKEAWAY:

Negation in Hebrew is simple once you know which tool to use. Use לֹא to say something "is not" or "does not." Use אֵין to say something "there is not" or "does not exist." Master these two, and you can say anything in the negative!`,
    [
      v('לֹא', 'lo', 'not', 'The simplest negative particle.'),
      v('אֵין', 'ein', 'there is not / there is no', 'A common negative expression.'),
      v('בֵּן', 'ben', 'son', 'A frequent singular noun.'),
      v('הַמֶּלֶךְ', 'hamelekh', 'the king', 'A definite noun phrase with the article.'),
      v('שָׁלוֹם', 'shalom', 'peace', 'A familiar noun often used in review.')
    ],
    [
      mc('What does לֹא mean?', ['not', 'and', 'from', 'this'], 'not', 'Lo is the basic negative particle.'),
      tr('What does אֵין mean?', ['there is not / there is no', 'son', 'house', 'root'], 'there is not / there is no', 'Ein is a common negative expression.'),
      mc('Which phrase means "the king"?', ['הַמֶּלֶךְ', 'שָׁלוֹם', 'לֹא', 'אֵין'], 'הַמֶּלֶךְ', 'Hamelekh means the king.'),
      {
        type: 'sentence_builder',
        question: 'Arrange these words to form "not the king" in Hebrew.',
        words: ['לֹא', 'הַמֶּלֶךְ'],
        answer: ['לֹא', 'הַמֶּלֶךְ'],
        explanation: 'The negative particle לֹא comes before the definite noun phrase הַמֶּלֶךְ.'
      }
    ],
    36
  ),
  lesson(
    22, 5,
    'Lesson 22 — The Dual Number',
    'Recognize the Hebrew dual form used for natural pairs such as hands, eyes, and feet.',
     `LESSON 22: THE DUAL NUMBER — THINGS THAT COME IN PAIRS

Most languages have two ways to count: singular (one) and plural (more than one). But Hebrew has a THIRD way: the DUAL. The dual is used for things that naturally come in PAIRS.

THINK ABOUT IT:

What body parts do you have two of? Hands, feet, eyes, ears. In Hebrew, these words use a special form to show they come in pairs.

THE DUAL ENDING: ־ַיִם (-AYIM)

The dual is formed by adding the ending ־ַיִם (-ayim) to the singular noun.

SINGULAR vs. DUAL:

• יָד (yad) = "hand" → יָדַיִם (yadayim) = "two hands"
• רֶגֶל (regel) = "foot" → רַגְלַיִם (raglayim) = "two feet"
• עַיִן (ayin) = "eye" → עֵינַיִם (einaim) = "two eyes"
• אֹזֶן (ozen) = "ear" → אָזְנַיִם (oznayim) = "two ears"

See the pattern? The singular changes its vowels, and the dual ending ־ַיִם is added.

SOME WORDS ARE ALMOST ALWAYS DUAL:

Because these body parts naturally come in pairs, you'll almost always see them in the dual form in biblical texts:
• יָדַיִם = "hands" (always two — because people have two hands)
• רַגְלַיִם = "feet" (always two)
• עֵינַיִם = "eyes" (always two)
• אָזְנַיִם = "ears" (always two)

EXCEPTIONS THAT PROVE THE RULE:

Sometimes the dual is used for words that aren't body parts. These words still suggest a pair or double nature:
• שְׁנַיִם (shnayim) = "two" (the number two itself!)
• מַיִם (mayim) = "water" (looks dual but means a mass of water)
• שָׁמַיִם (shamayim) = "heavens/sky" (the vast expanse above)

Wait — מַיִם and שָׁמַיִם end in ־ַיִם but they aren't literally "two waters" or "two heavens." Sometimes Hebrew just uses the dual form for words that seem like they should have a dual quality (water flows as a pair or the sky is expansive).

DUAL vs. REGULAR PLURAL:

Not all plurals are dual! Regular plurals use ים (im) for masculine and ות (ot) for feminine.

Compare:
• מְלָכִים (melakhim) = "kings" (regular plural — any number more than one)
• יָדַיִם (yadayim) = "two hands" (dual — specifically a pair)

If you want to say "many hands" (more than two), you'd use the regular plural:
• יָדוֹת (yadot) = "hands" (more than two — regular feminine plural)

DUAL IN SENTENCES:

• בְּיָדַיִם (be-yadayim) = "with (two) hands"
• לְעֵינַיִם (le-einaim) = "before (the) eyes" / "in the sight of"

WHY THIS MATTERS:

The dual appears frequently in biblical Hebrew, especially when describing the human body, animals, and pairs. When you see a word ending in ־ַיִם, you know immediately you're dealing with something that comes in twos. It's like a secret signal that says "PAIR ALERT!"`,
    [
      v('יָדַיִם', 'yadayim', 'two hands', 'A classic dual form.'),
      v('רַגְלַיִם', 'raglayim', 'two feet', 'Another common dual form.'),
      v('שְׁתַּיִם', 'shtayim', 'two (feminine)', 'Dual-related number form.'),
      v('עֵינַיִם', 'einaim', 'two eyes', 'A natural pair that uses the dual.'),
      v('אָזְנַיִם', 'oznayim', 'two ears', 'Another natural pair with dual form.')
    ],
    [
      mc('What does the dual number usually show?', ['A pair', 'A negative', 'A verb tense', 'A root letter'], 'A pair', 'The dual form is used for paired items.'),
      tr('What does יָדַיִם mean?', ['two hands', 'two kings', 'two roots', 'two articles'], 'two hands', 'Yadayim is the dual form for hands.'),
      mc('Which word means "two eyes"?', ['עֵינַיִם', 'יָדַיִם', 'שָׁלוֹם', 'בֵּן'], 'עֵינַיִם', 'Einaim is the dual form for two eyes.'),
      {
        type: 'sentence_builder',
        question: 'Arrange the words to say "two feet" in Hebrew.',
        words: ['רַגְלַיִם'],
        answer: ['רַגְלַיִם'],
        explanation: 'Raglayim means two feet and appears in dual form.'
      }
    ],
    36
  ),
  lesson(
    23, 5,
    'Lesson 23 — The Imperfect Tense',
    'Read imperfect forms and understand how Hebrew expresses incomplete, ongoing, or future action.',
     `LESSON 23: THE IMPERFECT TENSE — THE UNFINISHED STORY

So far, you've learned two main verb forms: the PAST (perfect) and the PRESENT (participle). Now it's time to learn the IMPERFECT — a verb form that expresses INCOMPLETE, ONGOING, or FUTURE action.

WHAT IS THE IMPERFECT?

In English, we have separate tenses for past ("he wrote"), present ("he writes"), and future ("he will write"). Hebrew thinks differently. Instead of focusing on TIME, Hebrew focuses on ASPECT — whether an action is COMPLETE or INCOMPLETE.

The IMPERFECT aspect describes actions that are:
• Not yet finished
• Still happening
• About to happen
• Repeated or habitual

This is why the imperfect can translate in multiple ways depending on context!

IMPERFECT VERB PATTERN

The imperfect is formed by adding PREFIXES to the verb root. Different prefixes show different persons (who is doing the action).

Using root כ-ת-ב (k-t-v = "write"):

• יִכְתֹּב (yikhtov) = "he will write" / "he is writing" / "he used to write"
• תִּכְתֹּב (tikhtov) = "you will write" (masc. singular)
• אֶכְתֹּב (ekhtov) = "I will write"
• נִכְתֹּב (nikhtov) = "we will write"
• יִכְתְּבוּ (yikhtevu) = "they will write" (masc.)
• תִּכְתֹּבְנָה (tikhtovnah) = "they will write" (fem.)

IMPERFECT PREFIXES — THE SUBJECT CODE:

The prefix tells you who is acting:
• אֶ (e-) = I (first person singular)
• נִ (ni-) = We (first person plural)
• תִּ (ti-) = You (second person masculine singular)
• תִּ...ִי (ti...i) = You (second person feminine singular)
• יִ (yi-) = He (third person masculine singular)
• תִּ (ti-) = She (third person feminine singular)
• יִ...וּ (yi...u) = They (third person masculine plural)
• תִּ...נָה (ti...nah) = They (third person feminine plural)

MORE IMPERFECT EXAMPLES:

Root שָׁמַר (shamar = "guard"):
• יִשְׁמֹר (yishmor) = "he will guard"
• תִּשְׁמֹר (tishmor) = "you will guard"
• אֶשְׁמֹר (eshmor) = "I will guard"

Root לָמַד (lamad = "learn"):
• יִלְמַד (yilmad) = "he will learn"
• נִלְמַד (nilmad) = "we will learn"
• תִּלְמַד (tilmad) = "you will learn"

COMMON IMPERFECT FORMS IN THE BIBLE:

These verbs appear constantly in biblical narratives:

• יֹאמַר (yomar) = "he will say" (root א-מ-ר)
• יֵלֵךְ (yelekh) = "he will go" (root ה-ל-ך)
• יִרְאֶה (yireh) = "he will see" (root ר-א-ה)
• יִשְׁמַע (yishma) = "he will hear" (root שׁ-מ-ע)

CONTEXT IS KEY:

How do you know whether יִכְתֹּב means "he will write," "he is writing," or "he used to write"? The answer is CONTEXT. Look at the other verbs and clues in the sentence:

• If there's a future time word (like "tomorrow") → future
• If there's a past time word (like "yesterday") → ongoing past
• If surrounded by present tense verbs → present

The imperfect is flexible, and that's what makes Hebrew storytelling so rich. Actions aren't locked into a single time — they flow and connect in ways that English can't easily capture!`,
    [
      v('יִכְתֹּב', 'yikhtov', 'he will write', 'A common imperfect form.'),
      v('תִּלְמַד', 'tilmad', 'you will learn', 'A second-person imperfect form.'),
      v('נֵלֵךְ', 'nelekh', 'we will go', 'A first-person plural imperfect form.'),
      v('יִרְאֶה', 'yireh', 'he will see', 'A very common imperfect form.'),
      v('יִשְׁמַע', 'yishma', 'he will hear', 'An imperfect form often found in narrative.')
    ],
    [
      mc('What does the imperfect often express?', ['Incomplete or future action', 'Only past action', 'Only nouns', 'Only adjectives'], 'Incomplete or future action', 'Context determines the exact sense.'),
      tr('What does יִכְתֹּב mean?', ['he will write', 'he wrote', 'he is king', 'he is good'], 'he will write', 'Yikhtov is the imperfect form of write.'),
      mc('Which verb means "he will hear"?', ['יִשְׁמַע', 'יִרְאֶה', 'כָּתַב', 'לָמַד'], 'יִשְׁמַע', 'Yishma is the imperfect form meaning he will hear.'),
      {
        type: 'sentence_builder',
        question: 'Select the imperfect form for "he will see".',
        words: ['יִרְאֶה'],
        answer: ['יִרְאֶה'],
        explanation: 'Yireh is the imperfect form meaning he will see.'
      }
    ],
    38
  ),
  lesson(
    24, 5,
    'Lesson 24 — Vocabulary Review and Mastery',
    'Review the most important vocabulary from the entire course and close with a confidence-building final challenge.',
     `LESSON 24: VOCABULARY REVIEW AND MASTERY — THE FINAL CHALLENGE

Congratulations! You've reached the final lesson of this Hebrew course. This lesson brings together the most important vocabulary you've learned — the words that appear again and again in the Hebrew Bible. Master these, and you'll be ready to start reading real biblical texts!

ESSENTIAL NOUNS (THE BUILDING BLOCKS):

These nouns appear hundreds or even thousands of times in the Bible:

People and titles:
• מֶלֶךְ (melekh) = "king"
• מַלְכָּה (malkah) = "queen"
• בֵּן (ben) = "son"
• אֱלֹהִים (elohim) = "God / gods"
• אִישׁ (ish) = "man"
• אִשָּׁה (ishah) = "woman"

Important concepts:
• דָּבָר (davar) = "word / thing"
• סֵפֶר (sefer) = "book"
• בַּיִת (bayit) = "house"
• עִיר (ir) = "city"
• שָׁלוֹם (shalom) = "peace"
• תּוֹרָה (torah) = "instruction / law"
• חֶסֶד (chesed) = "steadfast love / kindness"

ESSENTIAL VERBS (THE ACTION WORDS):

These verbs drive biblical narratives forward:

Writing and speaking:
• כָּתַב (katav) = "he wrote"
• אָמַר (amar) = "he said" (one of the most frequent verbs in the Bible!)
• קָרָא (kara) = "he called / he read"
• עָנָה (anah) = "he answered"

Movement and action:
• הָלַךְ (halakh) = "he walked / went"
• בָּנָה (banah) = "he built"
• נָתַן (natan) = "he gave"
• שָׁמַר (shamar) = "he guarded / kept"
• עָשָׂה (asah) = "he made / did"

GUMMAR WORDS (THE GRAMMAR GLUE):

These small words hold sentences together:

• הַ (ha-) = "the" (definite article)
• וְ (ve-) = "and" (conjunction)
• לֹא (lo) = "not" (negation)
• אֵין (ein) = "there is not"
• אֲשֶׁר (asher) = "who / that / which"
• אֶת (et) = direct object marker
• כִּי (ki) = "that / because"
• זֶה (zeh) = "this" (masculine)
• זֹאת (zot) = "this" (feminine)
• אֵלֶּה (elleh) = "these"

PRONOUNS (THE NAME REPLACERS):

• הוּא (hu) = "he"
• הִיא (hi) = "she"
• אַתָּה (atah) = "you" (masculine)
• אֲנִי (ani) = "I"

PREPOSITIONS (THE CONNECTORS):

• בְּ (be-) = "in / with"
• לְ (le-) = "to / for"
• כְּ (ke-) = "like / as"
• עַל (al) = "on / upon"
• מִן (min) = "from"

THE FINAL READING CHALLENGE:

Try reading this short Hebrew story using everything you've learned:

הַמֶּלֶךְ הַטּוֹב כָּתַב סֵפֶר. הַסֵּפֶר אֲשֶׁר כָּתַב עַל שָׁלוֹם וְחֶסֶד.

Translation: "The good king wrote a book. The book that he wrote was about peace and steadfast love."

Breakdown:
• הַמֶּלֶךְ הַטּוֹב = "The good king" (definite noun + definite adjective)
• כָּתַב = "wrote" (past tense, 3rd masculine singular)
• סֵפֶר = "a book" (indefinite object — no אֶת needed)
• הַסֵּפֶר = "The book" (now definite)

• אֲשֶׁר = "that/which" (relative pronoun)
• כָּתַב = "he wrote"
• עַל = "about/upon"
• שָׁלוֹם = "peace"
• וְ = "and"
• חֶסֶד = "steadfast love"

You just read a real Hebrew sentence! This is what you've been working toward.

WHERE TO GO FROM HERE:

You've completed the foundations of Biblical Hebrew. With what you know:
• The alphabet and vowel system
• Gender and noun-adjective agreement
• The definite article and conjunction
• Verb roots and patterns
• Present, past, and imperfect tenses
• Prepositions, relative clauses, and negation
• Demonstratives and the dual number

You are ready to begin reading real biblical texts with the help of a dictionary and grammar guide. The world of ancient Hebrew literature — the stories of Abraham, Moses, David, and the prophets — is now open to you.

Keep practicing, keep reading, and remember: every word in the Hebrew Bible starts with a root, and you know how to find it!`,
    [
      v('שָׁלוֹם', 'shalom', 'peace', 'A high-frequency biblical word.'),
      v('חֶסֶד', 'chesed', 'steadfast love / kindness', 'An important theological term.'),
      v('תוֹרָה', 'torah', 'instruction / law', 'A central Hebrew noun.'),
      v('אֱלֹהִים', 'elohim', 'God / gods', 'A foundational Hebrew noun.'),
      v('בֵּן', 'ben', 'son', 'A basic noun used throughout the course.')
    ],
    [
      mc('What does תוֹרָה mean?', ['instruction / law', 'peace', 'king', 'house'], 'instruction / law', 'Torah is a key biblical term.'),
      tr('What does שָׁלוֹם mean?', ['peace', 'root', 'from', 'two'], 'peace', 'Shalom is one of the most familiar Hebrew words.'),
      mc('Which word means steadfast love / kindness?', ['חֶסֶד', 'אֲשֶׁר', 'לֹא', 'בְּ'], 'חֶסֶד', 'Chesed is an important biblical word.'),
      {
        type: 'sentence_builder',
        question: 'Arrange the words to form "God is" in Hebrew.',
        words: ['אֱלֹהִים', 'הוּא'],
        answer: ['אֱלֹהִים', 'הוּא'],
        explanation: 'The noun אֱלֹהִים can be paired with the pronoun הוּא to form "God is."'
      }
    ],
    42
  )
].map((l) => [l.id, l]));

window.HEBREW_LESSON_DATA = HEBREW_LESSON_DATA;
const HEBREW_VIDEO_URLS = {
  1: 'https://youtu.be/Q2Rx5eI8wOg?si=MIuPugMnZbB_lz73', // Hebrew Lesson 1
  2: 'https://youtu.be/OdC8FS2KRQI?si=RF0J5mTLg60rZsFr', // Hebrew Lesson 2
  3: 'https://www.youtube.com/watch?v=MQmIaVsQT4k', // Hebrew Phonology and Guttural Sounds
  4: 'https://www.youtube.com/watch?v=zKrh87nOl0g', // History of Hebrew Script: Phoenician to Square Script
  5: 'https://www.youtube.com/watch?v=OKPfEeHdkqk', // Hebrew Vowel System and Shewa Mechanics
  6: 'https://www.youtube.com/watch?v=DbcKhPWwi_s', // Gender in Biblical Hebrew
  7: 'https://www.youtube.com/watch?v=FmqKiBQRR0E', // The Hebrew Definite Article
  8: 'https://www.youtube.com/watch?v=NwTvzXv2K44', // Hebrew Adjectives and Agreement
  9: 'https://www.youtube.com/watch?v=RSwwKVdWfj4', // Hebrew Noun Patterns and Declension
  10: 'https://www.youtube.com/watch?v=7F-cDmKmQyE', // Hebrew Personal Pronouns
  11: 'https://www.youtube.com/watch?v=x5bJnkc2v3E', // Introduction to Hebrew Verbs: The Simple Past
  12: 'https://www.youtube.com/watch?v=q8KLpPr6_jc', // Hebrew Past Tense: Wayyiqtol and Perfect
  13: 'https://www.youtube.com/watch?v=NxmL7kyY9qM', // Hebrew Participles as Verbal Adjectives
  14: 'https://www.youtube.com/watch?v=lT4vC_w8r_k', // Hebrew Future Tense: Yiqtol Forms
  15: 'https://www.youtube.com/watch?v=AgO_x2Jz5QM', // Hebrew Verbs: Stem Agreement and Patterns
  16: 'https://www.youtube.com/watch?v=Ub9kyAKPrqQ', // Prepositions in Biblical Hebrew
  17: 'https://www.youtube.com/watch?v=vjOpI5_w1jU', // Hebrew Relative Pronouns and Clauses
  18: 'https://www.youtube.com/watch?v=aL6Bq7d7xMo', // Hebrew Word Order and Basic Syntax
  19: 'https://www.youtube.com/watch?v=7BmYvDO2dHc', // Constructing Complex Sentences in Hebrew
  20: 'https://www.youtube.com/watch?v=PnzLwvLdL5s', // Reading Biblical Hebrew: Passage Analysis
  21: 'https://www.youtube.com/watch?v=A2ePk_8nBH0', // Negation and Negative Structures in Hebrew
  22: 'https://www.youtube.com/watch?v=Y5_tN6dLqE8', // The Dual Number in Hebrew
  23: 'https://www.youtube.com/watch?v=xbWjZcFJr88', // Hebrew Imperfect Tense and Aspect
  24: 'https://www.youtube.com/watch?v=KthA5rzD_Nw'  // Biblical Hebrew Comprehensive Review
};
Object.entries(HEBREW_VIDEO_URLS).forEach(([id, url]) => {
  const lesson = HEBREW_LESSON_DATA[Number(id)];
  if (lesson) lesson.videoUrl = url;
});
window.HEBREW_VIDEO_URLS = HEBREW_VIDEO_URLS;
window.HEBREW_WORLD_STRUCTURE = [
  { id: 1, lessons: [1, 2, 3, 4, 5], requiredWorld: null, name: 'Reading Foundations' },
  { id: 2, lessons: [6, 7, 8, 9, 10], requiredWorld: 1, name: 'Core Grammar' },
  { id: 3, lessons: [11, 12, 13, 14, 15], requiredWorld: 2, name: 'Verbs and Agreement' },
  { id: 4, lessons: [16, 17, 18, 19, 20], requiredWorld: 3, name: 'Syntax and Particles' },
  { id: 5, lessons: [21, 22, 23, 24], requiredWorld: 4, name: 'Review and Mastery' }
];
