// All practice content, keyed by chapter id (see chapters.js).
//
// Each chapter can define three question tiers — all use the exact same
// shape (an array of "sections", each with a name and a list of questions):
//   - keyConceptQuestions      → Category 2: quick, one-fact-at-a-time checks
//   - completeConceptQuestions → Category 3: deeper, multi-step questions
//   - realJeeQuestions         → Category 4: full exam-style JEE questions
//
// To add a new chapter: add its id to chapters.js, then add a matching
// entry here with the questions you provide. A chapter with no entry (or an
// empty tier) automatically shows the "content coming soon" state.

export const questionBanks = {
  unit1: {
    keyConceptQuestions: [
      {
        name: "Section 1: Units & Systems",
        questions: [
          {
            id: "kc-q1",
            topic: "Base & Derived Quantities",
            question: "Which of the following is a fundamental (base) physical quantity in the SI system?",
            options: [
              { id: "a", text: "Mass", isCorrect: true, explanation: "Correct — mass is one of the 7 SI base quantities." },
              { id: "b", text: "Speed", isCorrect: false, explanation: "Speed is a derived quantity (length ÷ time), not a base quantity." },
              { id: "c", text: "Force", isCorrect: false, explanation: "Force is a derived quantity (mass × acceleration), not a base quantity." },
              { id: "d", text: "Density", isCorrect: false, explanation: "Density is a derived quantity (mass ÷ volume), not a base quantity." },
            ],
          },
          {
            id: "kc-q2",
            topic: "SI System",
            question: "How many fundamental units are there in the SI system, excluding the two supplementary units (radian and steradian)?",
            options: [
              { id: "a", text: "5", isCorrect: false, explanation: "5 undercounts the base units — SI has 7, not 5." },
              { id: "b", text: "7", isCorrect: true, explanation: "Correct — mass, length, time, current, temperature, amount, luminous intensity." },
              { id: "c", text: "9", isCorrect: false, explanation: "9 overcounts — only 7 quantities are base units." },
              { id: "d", text: "11", isCorrect: false, explanation: "11 is too high — the supplementary units are separate and should not be added to the count of 7." },
            ],
          },
          {
            id: "kc-q3",
            topic: "Derived Units",
            question: "What is the SI unit of the coefficient of viscosity?",
            options: [
              { id: "a", text: "N·s", isCorrect: false, explanation: "N·s is the unit of impulse, not viscosity." },
              { id: "b", text: "N/m²", isCorrect: false, explanation: "N/m² is the unit of pressure, not viscosity." },
              { id: "c", text: "N·s/m²", isCorrect: true, explanation: "Correct — force × time ÷ area is the unit of viscosity." },
              { id: "d", text: "N/m", isCorrect: false, explanation: "N/m is the unit of surface tension, not viscosity." },
            ],
          },
          {
            id: "kc-q4",
            topic: "Least Count — Vernier Callipers",
            question: "In a vernier callipers, 1 main scale division (MSD) = 1 mm, and 10 vernier scale divisions (VSD) coincide with 9 MSD. What is the least count?",
            options: [
              { id: "a", text: "1 mm", isCorrect: false, explanation: "1 mm is the value of one main scale division, not the least count." },
              { id: "b", text: "0.9 mm", isCorrect: false, explanation: "0.9 mm is the value of one vernier scale division, not the least count." },
              { id: "c", text: "0.5 mm", isCorrect: false, explanation: "0.5 mm does not correspond to any quantity calculated in this problem." },
              { id: "d", text: "0.1 mm", isCorrect: true, explanation: "Correct — LC = 1 MSD − 1 VSD = 1 − 0.9 = 0.1 mm." },
            ],
          },
          {
            id: "kc-q5",
            topic: "Least Count — Screw Gauge",
            question: "A screw gauge has a pitch of 1 mm and 100 divisions on its circular scale. What is its least count?",
            options: [
              { id: "a", text: "0.01 mm", isCorrect: true, explanation: "Correct — LC = Pitch ÷ Circular divisions = 1 mm ÷ 100." },
              { id: "b", text: "0.1 mm", isCorrect: false, explanation: "0.1 mm would be the least count only if the circular scale had 10 divisions, not 100." },
              { id: "c", text: "1 mm", isCorrect: false, explanation: "1 mm is the pitch itself, not the least count." },
              { id: "d", text: "0.001 mm", isCorrect: false, explanation: "0.001 mm would require 1000 circular divisions, not 100." },
            ],
          },
        ],
      },
      {
        name: "Section 2: Significant Figures & Errors",
        questions: [
          {
            id: "kc-q6",
            topic: "Significant Figures — Counting",
            question: "How many significant figures are there in the number 0.00304?",
            options: [
              { id: "a", text: "5", isCorrect: false, explanation: "5 wrongly counts the leading zeros as significant." },
              { id: "b", text: "3", isCorrect: true, explanation: "Correct — leading zeros don't count, but the middle zero does: 3, 0, 4." },
              { id: "c", text: "6", isCorrect: false, explanation: "6 wrongly counts every digit including the leading zeros." },
              { id: "d", text: "2", isCorrect: false, explanation: "2 wrongly ignores the zero between 3 and 4, which is significant." },
            ],
          },
          {
            id: "kc-q7",
            topic: "Significant Figures — Addition",
            question: "Add the measured values 12.34 m, 3.1 m and 0.256 m, expressing the result with the correct number of significant figures.",
            options: [
              { id: "a", text: "15.696 m", isCorrect: false, explanation: "15.696 m keeps too many decimal places — it ignores that 3.1 m has only 1 decimal place." },
              { id: "b", text: "15.70 m", isCorrect: false, explanation: "15.70 m still keeps one decimal place too many for the least precise term." },
              { id: "c", text: "15.7 m", isCorrect: true, explanation: "Correct — 3.1 m has only 1 decimal place, so the sum rounds to 1 decimal place." },
              { id: "d", text: "16 m", isCorrect: false, explanation: "16 m over-rounds and drops a decimal place that the rule actually allows." },
            ],
          },
          {
            id: "kc-q8",
            topic: "Significant Figures — Multiplication",
            question: "Multiply 4.52 (3 significant figures) by 2.4 (2 significant figures). Express the result with the correct number of significant figures.",
            options: [
              { id: "a", text: "10.848", isCorrect: false, explanation: "10.848 keeps far more significant figures than either original number." },
              { id: "b", text: "10.85", isCorrect: false, explanation: "10.85 still has 4 significant figures, more than allowed." },
              { id: "c", text: "10.8", isCorrect: false, explanation: "10.8 still has 3 significant figures, one more than the least precise term allows." },
              { id: "d", text: "11", isCorrect: true, explanation: "Correct — rounded to 2 significant figures, matching the least precise input." },
            ],
          },
          {
            id: "kc-q9",
            topic: "Rounding Off",
            question: "Round off 2.735 to three significant figures using the round-to-even rule.",
            options: [
              { id: "a", text: "2.74", isCorrect: true, explanation: "Correct — 3 (before the dropped 5) is odd, so it rounds up to the even digit 4." },
              { id: "b", text: "2.73", isCorrect: false, explanation: "2.73 rounds down, but the digit before 5 (3, odd) must round up to make it even." },
              { id: "c", text: "2.7", isCorrect: false, explanation: "2.7 has only two significant figures, one fewer than required." },
              { id: "d", text: "2.8", isCorrect: false, explanation: "2.8 has only two significant figures and rounds in the wrong direction." },
            ],
          },
          {
            id: "kc-q10",
            topic: "Types of Errors",
            question: "A student always misreads a scale because of a fixed calibration fault built into the instrument. What type of error is this?",
            options: [
              { id: "a", text: "Random error", isCorrect: false, explanation: "Random error causes irregular, unpredictable variation, not a fixed one-directional shift." },
              { id: "b", text: "Systematic error", isCorrect: true, explanation: "Correct — a fixed, one-directional instrument fault is a systematic error." },
              { id: "c", text: "Gross error", isCorrect: false, explanation: "Gross error results from human carelessness, such as misreading or wrong recording, not a built-in instrument fault." },
              { id: "d", text: "Least count error", isCorrect: false, explanation: "Least count error relates to the instrument's smallest measurable division, not a calibration fault." },
            ],
          },
          {
            id: "kc-q11",
            topic: "Mean Absolute Error",
            question: "Five readings of a time period are 2.63 s, 2.56 s, 2.42 s, 2.71 s and 2.80 s, with mean 2.62 s. What is the mean absolute error?",
            options: [
              { id: "a", text: "0.54 s", isCorrect: false, explanation: "0.54 s is the sum of all five absolute errors, before dividing by the number of readings." },
              { id: "b", text: "0.20 s", isCorrect: false, explanation: "0.20 s is only the largest individual absolute error, not the mean of all five." },
              { id: "c", text: "0.11 s", isCorrect: true, explanation: "Correct — the sum of absolute errors (0.54 s) divided by 5 readings." },
              { id: "d", text: "0.04 s", isCorrect: false, explanation: "0.04 s is the relative error, not the mean absolute error." },
            ],
          },
          {
            id: "kc-q12",
            topic: "Combination of Errors — Division",
            question: "If R = V/I, where V = (100 ± 2) V and I = (10 ± 0.2) A, what is the percentage error in R?",
            options: [
              { id: "a", text: "1%", isCorrect: false, explanation: "1% is too low — it does not account for either individual percentage error." },
              { id: "b", text: "2%", isCorrect: false, explanation: "2% only includes the error from V or I alone, not both combined." },
              { id: "c", text: "3%", isCorrect: false, explanation: "3% does not match the rule that percentage errors add directly in division." },
              { id: "d", text: "4%", isCorrect: true, explanation: "Correct — percentage errors add directly in division: 2% + 2%." },
            ],
          },
          {
            id: "kc-q13",
            topic: "Combination of Errors — Powers",
            question: "If Z = A²B, and the percentage errors in A and B are 2% and 3% respectively, what is the percentage error in Z?",
            options: [
              { id: "a", text: "7%", isCorrect: true, explanation: "Correct — 2×(2%) + 1×(3%) = 7%, since A is squared." },
              { id: "b", text: "5%", isCorrect: false, explanation: "5% only adds the errors in A and B once each, ignoring that A is squared." },
              { id: "c", text: "6%", isCorrect: false, explanation: "6% doubles the error in B instead of the error in A." },
              { id: "d", text: "1%", isCorrect: false, explanation: "1% incorrectly subtracts the errors instead of adding them." },
            ],
          },
        ],
      },
      {
        name: "Section 3: Dimensions & Applications",
        questions: [
          {
            id: "kc-q14",
            topic: "Dimensional Formula",
            question: "What is the dimensional formula of torque?",
            options: [
              { id: "a", text: "[M¹L¹T⁻²]", isCorrect: false, explanation: "[M¹L¹T⁻²] is the dimensional formula of force, not torque." },
              { id: "b", text: "[M¹L²T⁻²]", isCorrect: true, explanation: "Correct — torque is force × distance, same as energy's dimensions." },
              { id: "c", text: "[M¹L²T⁻¹]", isCorrect: false, explanation: "[M¹L²T⁻¹] is the dimensional formula of angular momentum / Planck's constant, not torque." },
              { id: "d", text: "[M¹L⁰T⁻²]", isCorrect: false, explanation: "[M¹L⁰T⁻²] is the dimensional formula of surface tension, not torque." },
            ],
          },
          {
            id: "kc-q15",
            topic: "Dimensionless Quantities",
            question: "Which of the following is a dimensionless physical quantity?",
            options: [
              { id: "a", text: "Velocity", isCorrect: false, explanation: "Velocity has dimensions [M⁰L¹T⁻¹], so it is not dimensionless." },
              { id: "b", text: "Force", isCorrect: false, explanation: "Force has dimensions [M¹L¹T⁻²], so it is not dimensionless." },
              { id: "c", text: "Refractive index", isCorrect: true, explanation: "Correct — refractive index is a pure ratio with dimensions [M⁰L⁰T⁰]." },
              { id: "d", text: "Pressure", isCorrect: false, explanation: "Pressure has dimensions [M¹L⁻¹T⁻²], so it is not dimensionless." },
            ],
          },
          {
            id: "kc-q16",
            topic: "Homogeneity Principle",
            question: "Which of the following equations is dimensionally consistent, given v is velocity, u is velocity, a is acceleration and t is time?",
            options: [
              { id: "a", text: "v = u + a/t", isCorrect: false, explanation: "v = u + a/t has [a/t] = [L¹T⁻³], which does not match [v] = [L¹T⁻¹]." },
              { id: "b", text: "v = u·a·t", isCorrect: false, explanation: "v = u·a·t multiplies the terms instead of adding them, giving the wrong overall dimensions." },
              { id: "c", text: "v = u + a²t", isCorrect: false, explanation: "v = u + a²t has [a²t] = [L²T⁻³], which does not match [v] = [L¹T⁻¹]." },
              { id: "d", text: "v = u + at", isCorrect: true, explanation: "Correct — [at] = [L¹T⁻¹], matching [v] and [u]." },
            ],
          },
          {
            id: "kc-q17",
            topic: "Deriving Relations",
            question: "Using dimensional analysis, the time period T of a simple pendulum of length l in gravity g is found to be proportional to:",
            options: [
              { id: "a", text: "√(l/g)", isCorrect: true, explanation: "Correct — this is the only combination that reduces to the dimensions of time." },
              { id: "b", text: "√(g/l)", isCorrect: false, explanation: "√(g/l) has the length and gravity terms inverted compared to the dimensionally correct form." },
              { id: "c", text: "l/g", isCorrect: false, explanation: "l/g does not have the dimensions of time on its own; it must be enclosed in a square root." },
              { id: "d", text: "l²/g", isCorrect: false, explanation: "l²/g also fails to reduce to the correct dimensions of time." },
            ],
          },
          {
            id: "kc-q18",
            topic: "Limitations of Dimensional Analysis",
            question: "Dimensional analysis cannot be used to derive which part of the equation s = ut + ½at²?",
            options: [
              { id: "a", text: "The dimensional correctness of the term ut", isCorrect: false, explanation: "The dimensional correctness of ut can be checked and confirmed using dimensional analysis." },
              { id: "b", text: "The numerical constant ½", isCorrect: true, explanation: "Correct — dimensional analysis verifies consistency but never finds pure numbers like ½." },
              { id: "c", text: "The dimensional correctness of the term at²", isCorrect: false, explanation: "The dimensional correctness of at² can also be checked and confirmed using dimensional analysis." },
              { id: "d", text: "The overall dimensional homogeneity of the equation", isCorrect: false, explanation: "Checking overall homogeneity is exactly what dimensional analysis is designed to do." },
            ],
          },
          {
            id: "kc-q19",
            topic: "Unit Conversion via Dimensions",
            question: "1 joule of energy is equal to how many ergs, using dimensional analysis to convert between the SI and CGS systems?",
            options: [
              { id: "a", text: "10³ erg", isCorrect: false, explanation: "10³ erg undercounts the conversion factor arising from the mass, length and time scale changes." },
              { id: "b", text: "10⁵ erg", isCorrect: false, explanation: "10⁵ erg also undercounts; it misses part of the combined effect of the length term being squared." },
              { id: "c", text: "10⁷ erg", isCorrect: true, explanation: "Correct — comparing [M¹L²T⁻²] across SI and CGS scales gives 10⁷." },
              { id: "d", text: "10⁹ erg", isCorrect: false, explanation: "10⁹ erg overcounts the conversion factor beyond what the mass and length scale changes actually give." },
            ],
          },
          {
            id: "kc-q20",
            topic: "Practical Units",
            question: "Which of the following distances is approximately equal to 1 light year?",
            options: [
              { id: "a", text: "3.08 × 10¹⁶ m", isCorrect: false, explanation: "3.08 × 10¹⁶ m is the approximate value of 1 parsec, not 1 light year." },
              { id: "b", text: "1.496 × 10¹¹ m", isCorrect: false, explanation: "1.496 × 10¹¹ m is the approximate value of 1 astronomical unit, not 1 light year." },
              { id: "c", text: "1.66 × 10⁻²⁷ m", isCorrect: false, explanation: "1.66 × 10⁻²⁷ m is actually the value (in kg) of 1 atomic mass unit — it is not even a distance." },
              { id: "d", text: "9.46 × 10¹⁵ m", isCorrect: true, explanation: "Correct — this is the approximate value of 1 light year." },
            ],
          },
        ],
      },
    ],

    completeConceptQuestions: [
      {
        name: "Section 1: Physical Quantities & Units",
        questions: [
          {
            id: "cc-q1",
            topic: "The Q = n×u Relation",
            question: "The relation Q = n × u describes a measurement. If the same physical quantity is expressed using a larger unit, what happens to the numerical value n?",
            options: [
              { id: "a", text: "n decreases", isCorrect: true },
              { id: "b", text: "n increases", isCorrect: false, explanation: "n increases only when a smaller unit is used, not a larger one." },
              { id: "c", text: "n stays exactly the same", isCorrect: false, explanation: "n changes unless the new unit is identical in size to the old one." },
              { id: "d", text: "n becomes zero", isCorrect: false, explanation: "n becomes zero only if the quantity itself is zero, unrelated to the unit chosen." },
            ],
          },
          {
            id: "cc-q2",
            topic: "Derived Quantities",
            question: "Which of the following best explains why derived quantities are called \"derived\"?",
            options: [
              { id: "a", text: "They cannot be measured directly with any instrument", isCorrect: false, explanation: "Many derived quantities, such as area or speed, are calculated directly from measured base quantities." },
              { id: "b", text: "They are obtained by combining base quantities through mathematical relations", isCorrect: true },
              { id: "c", text: "They were discovered after the SI system was adopted in 1971", isCorrect: false, explanation: "The classification of a quantity as derived depends on its definition, not on when it was discovered." },
              { id: "d", text: "They apply only to electrical and magnetic measurements", isCorrect: false, explanation: "Derived quantities appear across every branch of physics, not only electricity and magnetism." },
            ],
          },
        ],
      },
      {
        name: "Section 2: Systems of Units & SI",
        questions: [
          {
            id: "cc-q3",
            topic: "Systems of Units",
            question: "Which system of units uses the centimetre, gram and second as its base units?",
            options: [
              { id: "a", text: "MKS", isCorrect: false, explanation: "MKS uses the metre, kilogram and second." },
              { id: "b", text: "SI", isCorrect: false, explanation: "SI uses the metre, kilogram and second, the same as MKS." },
              { id: "c", text: "CGS", isCorrect: true },
              { id: "d", text: "FPS", isCorrect: false, explanation: "FPS uses the foot, pound and second." },
            ],
          },
          {
            id: "cc-q4",
            topic: "SI Base Unit Definitions",
            question: "The modern definition of the kilogram is based on fixing the value of which constant?",
            options: [
              { id: "a", text: "The speed of light", isCorrect: false, explanation: "The speed of light is used to define the metre, not the kilogram." },
              { id: "b", text: "The elementary charge", isCorrect: false, explanation: "The elementary charge is used to define the ampere, not the kilogram." },
              { id: "c", text: "The Boltzmann constant", isCorrect: false, explanation: "The Boltzmann constant is used to define the kelvin, not the kilogram." },
              { id: "d", text: "Planck's constant", isCorrect: true },
            ],
          },
          {
            id: "cc-q5",
            topic: "Supplementary Units",
            question: "Which of the following is a supplementary unit in the SI system, rather than one of the 7 base units?",
            options: [
              { id: "a", text: "Radian", isCorrect: true },
              { id: "b", text: "Mole", isCorrect: false, explanation: "Mole is one of the 7 SI base units (amount of substance)." },
              { id: "c", text: "Candela", isCorrect: false, explanation: "Candela is one of the 7 SI base units (luminous intensity)." },
              { id: "d", text: "Kelvin", isCorrect: false, explanation: "Kelvin is one of the 7 SI base units (temperature)." },
            ],
          },
          {
            id: "cc-q6",
            topic: "Derived Units",
            question: "Which of these is an example of a derived SI unit, formed by combining base units?",
            options: [
              { id: "a", text: "Metre", isCorrect: false, explanation: "Metre is itself a base unit, not a derived one." },
              { id: "b", text: "Newton", isCorrect: true },
              { id: "c", text: "Kelvin", isCorrect: false, explanation: "Kelvin is a base unit, not a derived one." },
              { id: "d", text: "Ampere", isCorrect: false, explanation: "Ampere is a base unit, not a derived one." },
            ],
          },
          {
            id: "cc-q7",
            topic: "Practical Units",
            question: "Which of the following is the smallest length among the options?",
            options: [
              { id: "a", text: "1 angstrom", isCorrect: false, explanation: "1 angstrom (10⁻¹⁰ m) is larger than 1 fermi (10⁻¹⁵ m)." },
              { id: "b", text: "1 astronomical unit", isCorrect: false, explanation: "1 astronomical unit (≈1.5 × 10¹¹ m) is vastly larger than 1 fermi." },
              { id: "c", text: "1 fermi", isCorrect: true },
              { id: "d", text: "1 parsec", isCorrect: false, explanation: "1 parsec (≈3 × 10¹⁶ m) is the largest of all four options." },
            ],
          },
          {
            id: "cc-q8",
            topic: "SI Base Unit Definitions",
            question: "The SI second is currently defined based on which phenomenon?",
            options: [
              { id: "a", text: "Oscillations of a quartz crystal", isCorrect: false, explanation: "Quartz oscillations are used in everyday clocks but are not the official SI definition." },
              { id: "b", text: "Rotation of the Earth on its axis", isCorrect: false, explanation: "Earth's rotation was an older, less precise way of defining time, since replaced." },
              { id: "c", text: "Vibrations of a hydrogen atom", isCorrect: false, explanation: "Hydrogen atom vibrations are not the basis for the SI second; caesium-133 is." },
              { id: "d", text: "Radiation emitted by caesium-133 atoms", isCorrect: true },
            ],
          },
          {
            id: "cc-q9",
            topic: "SI Base Unit Definitions",
            question: "The mole and the candela are defined by fixing which pair of constants respectively?",
            options: [
              { id: "a", text: "Avogadro's constant and the luminous efficacy of a specified radiation frequency", isCorrect: true },
              { id: "b", text: "Planck's constant and the elementary charge", isCorrect: false, explanation: "These constants define the kilogram and the ampere, not the mole and candela." },
              { id: "c", text: "The Boltzmann constant and the speed of light", isCorrect: false, explanation: "These constants define the kelvin and the metre, not the mole and candela." },
              { id: "d", text: "The speed of light and the elementary charge", isCorrect: false, explanation: "These constants define the metre and the ampere, not the mole and candela." },
            ],
          },
        ],
      },
      {
        name: "Section 3: Least Count",
        questions: [
          {
            id: "cc-q10",
            topic: "Zero Error",
            question: "In a vernier callipers with a known zero error, what must be done before recording a final reading?",
            options: [
              { id: "a", text: "The zero error should be ignored since it only affects very large measurements", isCorrect: false, explanation: "Zero error affects every reading taken with the instrument, not just large ones." },
              { id: "b", text: "The zero error must be added to or subtracted from the observed reading", isCorrect: true },
              { id: "c", text: "The instrument must be discarded and replaced with a new one", isCorrect: false, explanation: "A zero error can be corrected mathematically; it does not make the instrument unusable." },
              { id: "d", text: "Only the main scale reading should be used, ignoring the vernier scale entirely", isCorrect: false, explanation: "Ignoring the vernier scale defeats the purpose of using the instrument for precise readings." },
            ],
          },
          {
            id: "cc-q11",
            topic: "Least Count of a Metre Scale",
            question: "What is the least count of an ordinary metre scale?",
            options: [
              { id: "a", text: "1 cm", isCorrect: false, explanation: "1 cm is too coarse; a metre scale can read more precisely than this." },
              { id: "b", text: "0.1 mm", isCorrect: false, explanation: "0.1 mm requires an instrument like a vernier callipers, not a plain metre scale." },
              { id: "c", text: "1 mm", isCorrect: true },
              { id: "d", text: "0.01 mm", isCorrect: false, explanation: "0.01 mm is the typical least count of a screw gauge, not a metre scale." },
            ],
          },
        ],
      },
      {
        name: "Section 4: Significant Figures",
        questions: [
          {
            id: "cc-q12",
            topic: "Trailing Zeros After a Decimal",
            question: "How many significant figures are in the number 1.500?",
            options: [
              { id: "a", text: "2", isCorrect: false, explanation: "2 undercounts — trailing zeros after a decimal point are significant." },
              { id: "b", text: "3", isCorrect: false, explanation: "3 misses one of the trailing zeros after the decimal point." },
              { id: "c", text: "5", isCorrect: false, explanation: "5 overcounts; there are only 4 digits total in 1.500." },
              { id: "d", text: "4", isCorrect: true },
            ],
          },
          {
            id: "cc-q13",
            topic: "Ambiguous Trailing Zeros",
            question: "The number 1500, written with no decimal point, is considered ambiguous for significant figures because:",
            options: [
              { id: "a", text: "It could represent 2, 3, or 4 significant figures depending on measurement precision", isCorrect: true },
              { id: "b", text: "It contains a zero, and zeros are never significant", isCorrect: false, explanation: "Zeros can be significant or not depending on their position; this isn't a blanket rule." },
              { id: "c", text: "It is too large a number to have significant figures at all", isCorrect: false, explanation: "The size of a number has no bearing on how many significant figures it carries." },
              { id: "d", text: "It must always be treated as having exactly 4 significant figures", isCorrect: false, explanation: "Without a decimal point or scientific notation, the count is genuinely unclear, not fixed at 4." },
            ],
          },
          {
            id: "cc-q14",
            topic: "Scientific Notation",
            question: "Written in scientific notation as 6.020 × 10²³, how many significant figures does this number have?",
            options: [
              { id: "a", text: "2", isCorrect: false, explanation: "2 undercounts the digits in the coefficient 6.020." },
              { id: "b", text: "4", isCorrect: true },
              { id: "c", text: "23", isCorrect: false, explanation: "23 is the exponent, not a count of significant figures." },
              { id: "d", text: "5", isCorrect: false, explanation: "5 overcounts; the coefficient 6.020 has exactly 4 digits." },
            ],
          },
          {
            id: "cc-q15",
            topic: "Comparing Significant Figures",
            question: "Which pair of measurements has the same number of significant figures?",
            options: [
              { id: "a", text: "0.0450 and 45", isCorrect: false, explanation: "0.0450 has 3 significant figures while 45 has only 2." },
              { id: "b", text: "100.0 and 1.0 × 10²", isCorrect: false, explanation: "100.0 has 4 significant figures while 1.0 × 10² has only 2." },
              { id: "c", text: "0.0450 and 4.50 × 10⁻²", isCorrect: true },
              { id: "d", text: "2.30 and 0.0023", isCorrect: false, explanation: "2.30 has 3 significant figures while 0.0023 has only 2." },
            ],
          },
          {
            id: "cc-q16",
            topic: "Standard Rounding Rule",
            question: "Which of the following correctly rounds 3.847 to 3 significant figures using the standard (not round-to-even) rule?",
            options: [
              { id: "a", text: "3.84", isCorrect: false, explanation: "This rounds down, but the dropped digit (7) is greater than 5, so it should round up." },
              { id: "b", text: "3.8", isCorrect: false, explanation: "This keeps only 2 significant figures, one fewer than required." },
              { id: "c", text: "3.9", isCorrect: false, explanation: "This changes the wrong digit position instead of the third significant figure." },
              { id: "d", text: "3.85", isCorrect: true },
            ],
          },
        ],
      },
      {
        name: "Section 5: Errors in Measurement",
        questions: [
          {
            id: "cc-q17",
            topic: "Absolute Error Formula",
            question: "If a₁, a₂ and a₃ are measured values with mean a_mean, how is the absolute error in the first reading (Δa₁) calculated?",
            options: [
              { id: "a", text: "Δa₁ = \\|a_mean − a₁\\|", isCorrect: true },
              { id: "b", text: "Δa₁ = a₁ + a_mean", isCorrect: false, explanation: "Adding the values together does not represent a difference or an error." },
              { id: "c", text: "Δa₁ = a₁ ÷ a_mean", isCorrect: false, explanation: "Dividing the values produces a ratio, not an absolute error." },
              { id: "d", text: "Δa₁ = a_mean² − a₁²", isCorrect: false, explanation: "Squaring and subtracting is not how absolute error is defined." },
            ],
          },
          {
            id: "cc-q18",
            topic: "Combination of Errors — Addition",
            question: "If Z = A + B, where A = (10 ± 0.5) and B = (20 ± 0.3), what is the absolute error in Z?",
            options: [
              { id: "a", text: "0.15", isCorrect: false, explanation: "0.15 comes from multiplying the two errors, which is not how addition errors combine." },
              { id: "b", text: "0.8", isCorrect: true },
              { id: "c", text: "0.2", isCorrect: false, explanation: "0.2 accounts for only one of the two errors, not both." },
              { id: "d", text: "1.5", isCorrect: false, explanation: "1.5 incorrectly multiplies rather than adds the two absolute errors." },
            ],
          },
          {
            id: "cc-q19",
            topic: "Reporting a Result",
            question: "What does reporting a result as \"a = a_mean ± Δa_mean\" communicate to the reader?",
            options: [
              { id: "a", text: "The measurement was repeated exactly a_mean times", isCorrect: false, explanation: "a_mean is a calculated average value, not a count of repetitions." },
              { id: "b", text: "The instrument's least count is equal to Δa_mean", isCorrect: false, explanation: "The least count is a fixed property of the instrument, unrelated to this statistical result." },
              { id: "c", text: "The true value most likely lies within Δa_mean of the mean value", isCorrect: true },
              { id: "d", text: "The percentage error is always numerically equal to Δa_mean", isCorrect: false, explanation: "Percentage error is a separate calculation (Δa_mean ÷ a_mean × 100), not equal to Δa_mean itself." },
            ],
          },
          {
            id: "cc-q20",
            topic: "Gross Error",
            question: "A student intends to record a temperature of 23°C but accidentally writes down 32°C. This is an example of:",
            options: [
              { id: "a", text: "Systematic error", isCorrect: false, explanation: "Systematic error is a consistent, one-directional bias, not a one-off recording mistake." },
              { id: "b", text: "Random error", isCorrect: false, explanation: "Random error refers to natural, unpredictable variation, not a careless transcription mistake." },
              { id: "c", text: "Zero error", isCorrect: false, explanation: "Zero error is a specific instrumental offset, unrelated to a recording mistake." },
              { id: "d", text: "Gross error", isCorrect: true },
            ],
          },
          {
            id: "cc-q21",
            topic: "Random Error",
            question: "A student measures the diameter of a wire five times and gets slightly different values each time, with no consistent pattern of being too high or too low. This variation is best described as:",
            options: [
              { id: "a", text: "Random error", isCorrect: true },
              { id: "b", text: "Systematic error", isCorrect: false, explanation: "Systematic error causes a consistent bias in one direction, not irregular variation." },
              { id: "c", text: "Gross error", isCorrect: false, explanation: "Gross error results from a clear mistake, not natural small variation across careful readings." },
              { id: "d", text: "Zero error", isCorrect: false, explanation: "Zero error is a fixed instrumental offset, unrelated to variation across repeated readings." },
            ],
          },
        ],
      },
      {
        name: "Section 6: Dimensions of Physical Quantities",
        questions: [
          {
            id: "cc-q22",
            topic: "Dimensional Formula — Power",
            question: "What is the dimensional formula of power?",
            options: [
              { id: "a", text: "\\[M¹L²T⁻²\\]", isCorrect: false, explanation: "This is the dimensional formula of work/energy, not power." },
              { id: "b", text: "\\[M¹L²T⁻³\\]", isCorrect: true },
              { id: "c", text: "\\[M¹L¹T⁻²\\]", isCorrect: false, explanation: "This is the dimensional formula of force, not power." },
              { id: "d", text: "\\[M¹L⁻¹T⁻²\\]", isCorrect: false, explanation: "This is the dimensional formula of pressure, not power." },
            ],
          },
          {
            id: "cc-q23",
            topic: "Dimensional Formula — Momentum",
            question: "What is the dimensional formula of linear momentum?",
            options: [
              { id: "a", text: "\\[M¹L¹T⁻²\\]", isCorrect: false, explanation: "This is the dimensional formula of force, not momentum." },
              { id: "b", text: "\\[M¹L²T⁻¹\\]", isCorrect: false, explanation: "This is the dimensional formula of angular momentum, not linear momentum." },
              { id: "c", text: "\\[M¹L¹T⁻¹\\]", isCorrect: true },
              { id: "d", text: "\\[M⁰L¹T⁻¹\\]", isCorrect: false, explanation: "This omits the mass dimension entirely, which momentum requires." },
            ],
          },
          {
            id: "cc-q24",
            topic: "Dimensional Formula — Gravitational Constant",
            question: "What is the dimensional formula of the universal gravitational constant G?",
            options: [
              { id: "a", text: "\\[M¹L³T⁻²\\]", isCorrect: false, explanation: "This is missing the negative sign on the mass exponent that arises from G relating force to the product of two masses." },
              { id: "b", text: "\\[M¹L⁻³T⁻²\\]", isCorrect: false, explanation: "This inverts the sign of the length exponent compared to the correct formula." },
              { id: "c", text: "\\[M⁻¹L⁻³T²\\]", isCorrect: false, explanation: "This inverts both the length and time exponents incorrectly." },
              { id: "d", text: "\\[M⁻¹L³T⁻²\\]", isCorrect: true },
            ],
          },
          {
            id: "cc-q25",
            topic: "Dimensional Formula — Viscosity",
            question: "Which of the following physical quantities has the dimensional formula \\[M¹L⁻¹T⁻¹\\]?",
            options: [
              { id: "a", text: "Coefficient of viscosity", isCorrect: true },
              { id: "b", text: "Pressure", isCorrect: false, explanation: "Pressure has the dimensional formula \\[M¹L⁻¹T⁻²\\], with a different time exponent." },
              { id: "c", text: "Surface tension", isCorrect: false, explanation: "Surface tension has the dimensional formula \\[M¹L⁰T⁻²\\]." },
              { id: "d", text: "Density", isCorrect: false, explanation: "Density has the dimensional formula \\[M¹L⁻³T⁰\\]." },
            ],
          },
          {
            id: "cc-q26",
            topic: "Dimensionless Quantities",
            question: "Which of the following is NOT a dimensionless quantity?",
            options: [
              { id: "a", text: "Strain", isCorrect: false, explanation: "Strain is a ratio of two lengths, so it is dimensionless." },
              { id: "b", text: "Angular velocity", isCorrect: true },
              { id: "c", text: "Poisson's ratio", isCorrect: false, explanation: "Poisson's ratio is a ratio of two strains, so it is dimensionless." },
              { id: "d", text: "Relative density", isCorrect: false, explanation: "Relative density is a ratio of two densities, so it is dimensionless." },
            ],
          },
          {
            id: "cc-q27",
            topic: "Dimensional Formula — Resistance",
            question: "What is the dimensional formula of electrical resistance?",
            options: [
              { id: "a", text: "\\[M¹L²T⁻³A⁻¹\\]", isCorrect: false, explanation: "This is the dimensional formula of electric potential, not resistance." },
              { id: "b", text: "\\[M⁰L⁰T¹A¹\\]", isCorrect: false, explanation: "This is the dimensional formula of electric charge, not resistance." },
              { id: "c", text: "\\[M¹L²T⁻³A⁻²\\]", isCorrect: true },
              { id: "d", text: "\\[M¹L²T⁻²A⁻¹\\]", isCorrect: false, explanation: "This does not correctly represent resistance's actual dependence on current." },
            ],
          },
        ],
      },
      {
        name: "Section 7: Dimensional Analysis & Applications",
        questions: [
          {
            id: "cc-q28",
            topic: "Limitation — Same-Dimension Quantities",
            question: "Dimensional analysis cannot be used to distinguish between torque and energy because:",
            options: [
              { id: "a", text: "Torque and energy are actually the same physical quantity in every respect", isCorrect: false, explanation: "Torque and energy are conceptually different — a turning effect versus a capacity to do work — even though their formulas share the same dimensions." },
              { id: "b", text: "Energy has no dimensions at all", isCorrect: false, explanation: "Energy has the dimensional formula \\[M¹L²T⁻²\\], so it is not dimensionless." },
              { id: "c", text: "Torque only exists in rotational systems, making comparison meaningless", isCorrect: false, explanation: "Torque appears in rotational contexts, but that doesn't prevent comparing its dimensions to energy's." },
              { id: "d", text: "Both have identical dimensional formulas despite being conceptually different quantities", isCorrect: true },
            ],
          },
          {
            id: "cc-q29",
            topic: "Limitation — Trigonometric/Logarithmic Functions",
            question: "Why can't dimensional analysis be used to verify an equation involving sin(θ) or log(x)?",
            options: [
              { id: "a", text: "Their arguments and outputs must be dimensionless, which dimensional analysis cannot confirm or derive on its own", isCorrect: true },
              { id: "b", text: "Trigonometric and logarithmic functions never actually appear in physics equations", isCorrect: false, explanation: "These functions appear frequently in physics, including in oscillations and wave equations." },
              { id: "c", text: "These functions only apply to angles, which are never used in physics", isCorrect: false, explanation: "Angles are common physical quantities, especially in rotational and wave motion." },
              { id: "d", text: "Dimensional analysis cannot check any term at all in such equations", isCorrect: false, explanation: "Dimensional analysis can still check any purely algebraic terms in the same equation; the limitation is specific to functions like sine and log." },
            ],
          },
          {
            id: "cc-q30",
            topic: "Limitation — More Than 3 Unknowns",
            question: "A physical quantity is believed to depend on 4 independent physical quantities. Why might dimensional analysis fail to derive the relation here?",
            options: [
              { id: "a", text: "Four quantities can never be combined into a single physical equation", isCorrect: false, explanation: "Physical equations regularly combine many quantities; the issue here is solvability, not possibility." },
              { id: "b", text: "Dimensional analysis provides only 3 independent equations (from M, L, T), which isn't enough to solve for 4 unknown exponents", isCorrect: true },
              { id: "c", text: "Dimensional analysis cannot handle any equation with more than one variable", isCorrect: false, explanation: "Dimensional analysis routinely handles multiple variables — this case simply has too many unknowns relative to the equations available." },
              { id: "d", text: "The equation would automatically become dimensionally inconsistent", isCorrect: false, explanation: "Having more variables doesn't make an equation dimensionally inconsistent; it just makes it harder to solve using dimensions alone." },
            ],
          },
          {
            id: "cc-q31",
            topic: "Unit Conversion via Dimensions",
            question: "When converting a physical quantity from the SI system to the CGS system using dimensional analysis, why must the quantity's dimensional formula be known first?",
            options: [
              { id: "a", text: "It isn't needed — any two systems can be converted using density alone", isCorrect: false, explanation: "Density is unrelated to unit conversion between systems in general." },
              { id: "b", text: "Only dimensionless quantities can be converted between systems", isCorrect: false, explanation: "Dimensionless quantities don't need a conversion factor at all, so this claim is backwards." },
              { id: "c", text: "The formula's powers of M, L and T are exactly what scale between the differing unit sizes of the two systems", isCorrect: true },
              { id: "d", text: "The dimensional formula determines a colour-coding convention used in the CGS system", isCorrect: false, explanation: "There is no such \"colour-coding convention\" in unit systems; this option is not a real concept." },
            ],
          },
          {
            id: "cc-q32",
            topic: "Limitation — Sum vs. Single Term",
            question: "Dimensional analysis cannot tell whether a physical relation is the sum of two terms or a single combined term, because:",
            options: [
              { id: "a", text: "Addition and multiplication have identical dimensional effects, making them indistinguishable in general", isCorrect: false, explanation: "Addition and multiplication behave very differently dimensionally — addition requires matching dimensions on every term, while multiplication combines them — so this claim misstates the actual reason." },
              { id: "b", text: "All physical equations are actually multiplicative, so addition never truly occurs", isCorrect: false, explanation: "Physical equations frequently involve genuine addition (e.g., s = ut + ½at²), so this claim is false." },
              { id: "c", text: "This limitation does not actually exist — dimensional analysis fully validates equation structure", isCorrect: false, explanation: "This limitation is real — dimensional analysis is a necessary but not sufficient check on an equation's correctness." },
              { id: "d", text: "It can only verify that overall dimensions match, not the internal structure of how quantities are combined", isCorrect: true },
            ],
          },
        ],
      },
    ],

    realJeeQuestions: [
      {
        name: "Section 1: SI Units & Systems",
        questions: [
          {
            id: "jee-q1",
            topic: "Astronomical Units",
            question: "Statement I: The astronomical unit (AU), parsec, and light year are all units used to measure large astronomical distances. Statement II: Among these three, the light year represents the largest distance. Which option correctly evaluates both statements?",
            options: [
              { id: "a", text: "Statement I is true, Statement II is false", isCorrect: true },
              { id: "b", text: "Both statements are true", isCorrect: false, explanation: "Statement II is false because a light year (≈9.46×10¹⁵ m) is smaller than a parsec (≈3.09×10¹⁶ m), so the light year isn't the largest of the three." },
              { id: "c", text: "Both statements are false", isCorrect: false, explanation: "Statement I is actually true — AU, parsec, and light year are indeed all valid units for measuring astronomical distances." },
              { id: "d", text: "Statement I is false, Statement II is true", isCorrect: false, explanation: "Statement I is true, not false — all three really are astronomical distance units; it's Statement II that's incorrect." },
            ],
          },
          {
            id: "jee-q2",
            topic: "SI Base Quantities",
            question: "Which of the following correctly lists all seven SI base quantities together with their standard units?",
            options: [
              { id: "a", text: "Length–metre, Mass–gram, Time–second, Current–ampere, Temperature–celsius, Luminous intensity–candela, Amount of substance–mole", isCorrect: false, explanation: "This uses the gram instead of the kilogram, and the celsius scale instead of the kelvin — neither is the SI base unit." },
              { id: "b", text: "Length–metre, Mass–kilogram, Time–second, Current–ampere, Temperature–kelvin, Luminous intensity–candela, Amount of substance–mole", isCorrect: true },
              { id: "c", text: "Length–metre, Mass–kilogram, Time–minute, Current–ampere, Temperature–kelvin, Luminous intensity–lumen, Amount of substance–mole", isCorrect: false, explanation: "This uses the minute instead of the second, and lumen (a derived unit) instead of candela." },
              { id: "d", text: "Length–centimetre, Mass–kilogram, Time–second, Current–ampere, Temperature–kelvin, Luminous intensity–candela, Amount of substance–mole", isCorrect: false, explanation: "This uses the centimetre, a CGS unit, instead of the SI base unit, the metre." },
            ],
          },
          {
            id: "jee-q3",
            topic: "Comparing Astronomical Units",
            question: "A physics textbook lists the parsec, the light year, and the astronomical unit as common units for measuring interstellar distances. Arranged from smallest to largest, what is the correct order?",
            options: [
              { id: "a", text: "Parsec \\< Light year \\< Astronomical unit", isCorrect: false, explanation: "This reverses the entire order — the parsec is actually the largest of the three, not the smallest." },
              { id: "b", text: "Light year \\< Astronomical unit \\< Parsec", isCorrect: false, explanation: "This places the astronomical unit, the smallest of the three, in the middle instead of first." },
              { id: "c", text: "Astronomical unit \\< Light year \\< Parsec", isCorrect: true },
              { id: "d", text: "Astronomical unit \\< Parsec \\< Light year", isCorrect: false, explanation: "This places the parsec before the light year, but the light year (≈9.46×10¹⁵ m) is smaller than the parsec (≈3.09×10¹⁶ m)." },
            ],
          },
          {
            id: "jee-q4",
            topic: "SI Base Unit Definitions",
            question: "Which pair correctly matches an SI base quantity with the fixed physical constant used to define its unit?",
            options: [
              { id: "a", text: "Time — the speed of light in vacuum", isCorrect: false, explanation: "Time (the second) is defined using the radiation from caesium-133 atoms, not the speed of light." },
              { id: "b", text: "Length — the elementary charge", isCorrect: false, explanation: "Length (the metre) is defined using the speed of light in vacuum, not the elementary charge." },
              { id: "c", text: "Electric current — Avogadro's constant", isCorrect: false, explanation: "Electric current (the ampere) is defined using the elementary charge, not Avogadro's constant." },
              { id: "d", text: "Mass — Planck's constant", isCorrect: true },
            ],
          },
        ],
      },
      {
        name: "Section 2: Least Count — Vernier Callipers",
        questions: [
          {
            id: "jee-q5",
            topic: "Least Count of an Angle-Measuring Vernier Instrument",
            question: "An instrument for measuring angles has a main scale whose smallest division is half a degree. On its vernier scale, 30 divisions exactly match 29 divisions of the main scale. What is the least count of this instrument?",
            options: [
              { id: "a", text: "One minute", isCorrect: true },
              { id: "b", text: "One degree", isCorrect: false, explanation: "One degree is far too coarse — a whole main scale division is only half a degree, so the least count must be smaller than that." },
              { id: "c", text: "Half a degree", isCorrect: false, explanation: "Half a degree is the size of one full main scale division, not the least count, which is always smaller." },
              { id: "d", text: "Half a minute", isCorrect: false, explanation: "The calculation gives exactly one minute, not half of it — this undershoots the correct value." },
            ],
          },
          {
            id: "jee-q6",
            topic: "Least Count in Terms of a General Main Scale Division",
            question: "On a vernier callipers, one main scale division measures 'a' cm. The nth division of the vernier scale coincides with the (n−1)th division of the main scale. What is the least count of this callipers, in mm?",
            options: [
              { id: "a", text: "a/n mm", isCorrect: false, explanation: "This gives the least count in centimetres, not millimetres — the conversion factor of 10 is missing." },
              { id: "b", text: "10a/n mm", isCorrect: true },
              { id: "c", text: "10a mm", isCorrect: false, explanation: "This ignores the division by n entirely, treating the whole main scale division as the least count." },
              { id: "d", text: "a/(10n) mm", isCorrect: false, explanation: "This divides by 10n instead of just n, and places the conversion factor incorrectly." },
            ],
          },
          {
            id: "jee-q7",
            topic: "Least Count with Main Scale Subdivided into 5 Parts",
            question: "On a vernier callipers, each centimetre on the main scale is divided into 5 equal parts. It is found that n divisions of the main scale coincide with (n+1) divisions of the vernier scale. What is the least count of this instrument?",
            options: [
              { id: "a", text: "1/(5n) cm", isCorrect: false, explanation: "This omits the (n+1) term entirely, using only n in the denominator." },
              { id: "b", text: "n/5 cm", isCorrect: false, explanation: "This inverts the relationship, growing with n instead of shrinking, which contradicts how the least count behaves as more vernier divisions are used." },
              { id: "c", text: "1/(5(n+1)) cm", isCorrect: true },
              { id: "d", text: "5/(n+1) cm", isCorrect: false, explanation: "This places the 5 in the numerator instead of first dividing the main scale division by 5." },
            ],
          },
          {
            id: "jee-q8",
            topic: "Interpreting Zero Error",
            question: "In a vernier callipers, when both jaws touch each other, the zero of the vernier scale lies exactly 3 divisions to the right of the zero of the main scale, and the least count is 0.01 cm. What does this describe?",
            options: [
              { id: "a", text: "A negative zero error of −0.03 cm", isCorrect: false, explanation: "A negative zero error would correspond to the vernier zero lying to the left of the main scale zero, not the right." },
              { id: "b", text: "No zero error at all", isCorrect: false, explanation: "A zero error clearly exists here, since the two zeros do not align when the jaws are closed." },
              { id: "c", text: "An instrument that cannot be used until repaired", isCorrect: false, explanation: "A zero error is simply corrected mathematically in every reading; it does not make the instrument unusable." },
              { id: "d", text: "A positive zero error of +0.03 cm", isCorrect: true },
            ],
          },
          {
            id: "jee-q9",
            topic: "Finding Main Scale Division Size",
            question: "A vernier callipers has 20 divisions on its vernier scale, coinciding exactly with 19 divisions of the main scale. If the least count of this instrument is 0.1 mm, what is the size of one main scale division?",
            options: [
              { id: "a", text: "2 mm", isCorrect: true },
              { id: "b", text: "0.5 mm", isCorrect: false, explanation: "0.5 mm is too small; solving for the main scale division here requires it to be 2 mm." },
              { id: "c", text: "1 mm", isCorrect: false, explanation: "1 mm would only be correct if the vernier had 10 divisions coinciding with 9 main scale divisions, a different setup than this one." },
              { id: "d", text: "1.9 mm", isCorrect: false, explanation: "This confuses the main scale division size with the total span of the 19 coinciding main scale divisions." },
            ],
          },
          {
            id: "jee-q10",
            topic: "Reading a Vernier Measurement",
            question: "A vernier callipers has 1 main scale division equal to 1 mm, with 10 vernier scale divisions coinciding with 9 main scale divisions. While measuring an object, the main scale reads 3.5 cm and the 7th vernier division coincides with a main scale line. What is the measured length?",
            options: [
              { id: "a", text: "3.56 cm", isCorrect: false, explanation: "This undercounts the vernier contribution by one division." },
              { id: "b", text: "3.57 cm", isCorrect: true },
              { id: "c", text: "3.63 cm", isCorrect: false, explanation: "This overcounts the vernier contribution, effectively using 13 divisions instead of 7." },
              { id: "d", text: "3.43 cm", isCorrect: false, explanation: "This incorrectly subtracts the vernier reading instead of adding it to the main scale reading." },
            ],
          },
        ],
      },
      {
        name: "Section 3: Least Count — Screw Gauge",
        questions: [
          {
            id: "jee-q11",
            topic: "Curved Surface Area to Correct Significant Figures",
            question: "A screw gauge with 50 divisions on its circular scale is used to measure the diameter of a wire of length 6.8 cm. The pitch is 0.5 mm, the main scale reads 1.5 mm, and the circular scale reading is 7. What is the curved surface area of the wire, to the correct number of significant figures?",
            options: [
              { id: "a", text: "6.8 cm²", isCorrect: false, explanation: "This simply repeats the given length value and doesn't reflect an actual surface-area calculation." },
              { id: "b", text: "3.9 cm²", isCorrect: false, explanation: "This results from using an incorrect diameter value in the surface area formula." },
              { id: "c", text: "3.4 cm²", isCorrect: true },
              { id: "d", text: "2.4 cm²", isCorrect: false, explanation: "This results from omitting a factor of π or otherwise miscalculating the product." },
            ],
          },
          {
            id: "jee-q12",
            topic: "Interpreting a Screw Gauge's Zero Error",
            question: "A screw gauge has a pitch of 1 mm and 100 divisions on its circular scale. With nothing between the jaws, the zero of the circular scale lies 5 divisions below the reference line. What type and magnitude of zero error is this?",
            options: [
              { id: "a", text: "Positive zero error of +0.05 mm", isCorrect: false, explanation: "The direction is reversed — the circular scale lying below the reference line corresponds to a negative zero error, not positive." },
              { id: "b", text: "No zero error, since the scale still shows zero", isCorrect: false, explanation: "A zero error is present here, since the circular scale's zero does not align with the reference line when the jaws are closed." },
              { id: "c", text: "Positive zero error of +0.5 mm", isCorrect: false, explanation: "This inflates the magnitude tenfold; with LC = 1mm/100 = 0.01 mm, 5 divisions correspond to 0.05 mm, not 0.5 mm." },
              { id: "d", text: "Negative zero error of −0.05 mm", isCorrect: true },
            ],
          },
          {
            id: "jee-q13",
            topic: "Finding Least Count from Rotations",
            question: "On a screw gauge, giving the circular scale exactly 5 complete rotations causes it to advance linearly by 2.5 mm. If the circular scale has 100 divisions, what is the least count of this screw gauge?",
            options: [
              { id: "a", text: "0.005 mm", isCorrect: true },
              { id: "b", text: "0.05 mm", isCorrect: false, explanation: "This is ten times too large; it would only be correct if the circular scale had just 10 divisions." },
              { id: "c", text: "0.01 mm", isCorrect: false, explanation: "This would be correct only if the pitch were 1 mm, but here the pitch works out to 0.5 mm." },
              { id: "d", text: "0.5 mm", isCorrect: false, explanation: "This is simply the pitch itself, not the least count, which requires dividing further by the number of circular divisions." },
            ],
          },
          {
            id: "jee-q14",
            topic: "Comparing Precision Across Instruments",
            question: "Four instruments are available: (i) an ordinary metre scale, (ii) a vernier callipers with 10 vernier divisions matching 9 main scale divisions (1 MSD = 1 mm), (iii) a screw gauge with 100 circular divisions and a pitch of 1 mm, and (iv) a screw gauge with 50 circular divisions and a pitch of 1 mm. Which instrument has the smallest least count?",
            options: [
              { id: "a", text: "Instrument (i)", isCorrect: false, explanation: "The metre scale has the largest least count (1 mm) of the four, making it the least precise, not the most." },
              { id: "b", text: "Instrument (iii)", isCorrect: true },
              { id: "c", text: "Instrument (ii)", isCorrect: false, explanation: "This vernier callipers has a least count of 0.1 mm, ten times coarser than instrument (iii)." },
              { id: "d", text: "Instrument (iv)", isCorrect: false, explanation: "This screw gauge has a least count of 0.02 mm, twice as coarse as instrument (iii) because it has fewer circular divisions." },
            ],
          },
          {
            id: "jee-q15",
            topic: "Correcting for Zero Error",
            question: "A screw gauge has a positive zero error of +0.03 mm. While measuring a wire's diameter, the observed reading (main scale plus circular scale contribution) is 2.50 mm. What is the corrected diameter?",
            options: [
              { id: "a", text: "2.53 mm", isCorrect: false, explanation: "This adds the zero error instead of subtracting it, which is the correct procedure only for a negative zero error." },
              { id: "b", text: "2.50 mm", isCorrect: false, explanation: "This ignores the zero error completely, leaving the observed reading uncorrected." },
              { id: "c", text: "2.47 mm", isCorrect: true },
              { id: "d", text: "2.03 mm", isCorrect: false, explanation: "This incorrectly combines the numbers as though the zero error were a much larger quantity than 0.03 mm." },
            ],
          },
        ],
      },
      {
        name: "Section 4: Significant Figures",
        questions: [
          {
            id: "jee-q16",
            topic: "Comparing Significant Figures Across Notations",
            question: "A student records a mass in four different ways: 12.6 g, 0.126 kg, 1260 mg, and 1.260 × 10⁴ mg. Which of these has 4 significant figures, unambiguously?",
            options: [
              { id: "a", text: "12.6 g", isCorrect: false, explanation: "This has only 3 significant figures." },
              { id: "b", text: "0.126 kg", isCorrect: false, explanation: "This also has only 3 significant figures — the leading zero is not significant, matching the same 3 digits as 12.6 g in different units." },
              { id: "c", text: "1260 mg", isCorrect: false, explanation: "Written without a decimal point, this is ambiguous and conventionally read as 3 significant figures, not unambiguously 4." },
              { id: "d", text: "1.260 × 10⁴ mg", isCorrect: true },
            ],
          },
          {
            id: "jee-q17",
            topic: "Multiplication Rule with Three Factors",
            question: "Multiply 2.11 (3 significant figures) by 4.6 (2 significant figures) by 0.05620 (4 significant figures). To how many significant figures should the final product be rounded?",
            options: [
              { id: "a", text: "2", isCorrect: true },
              { id: "b", text: "3", isCorrect: false, explanation: "This matches the significant figures of 2.11, but the rule requires using the least precise of all three factors, which is 4.6 with 2 sig figs." },
              { id: "c", text: "4", isCorrect: false, explanation: "This matches the most precise factor (0.05620), which is the opposite of the correct rule." },
              { id: "d", text: "9", isCorrect: false, explanation: "This simply adds up all the significant figures from the three numbers, which is not how the multiplication rule works." },
            ],
          },
          {
            id: "jee-q18",
            topic: "Subtraction Rule with Decimal Places",
            question: "Subtract 12.63 g from 15.2 g. To how many decimal places should the result be reported?",
            options: [
              { id: "a", text: "2 decimal places", isCorrect: false, explanation: "This matches the more precise of the two numbers (12.63), but the rule requires using the less precise one (15.2)." },
              { id: "b", text: "1 decimal place", isCorrect: true },
              { id: "c", text: "0 decimal places", isCorrect: false, explanation: "This drops more precision than the rule allows, since 15.2 does have one decimal place." },
              { id: "d", text: "4 decimal places", isCorrect: false, explanation: "This is far more precision than either original measurement actually has." },
            ],
          },
          {
            id: "jee-q19",
            topic: "Counting Significant Figures with a Leading Zero",
            question: "A measured length is written as 0.070 m. How many significant figures does this measurement have?",
            options: [
              { id: "a", text: "1", isCorrect: false, explanation: "This undercounts — the trailing zero after the 7 (and after the decimal point) is significant." },
              { id: "b", text: "3", isCorrect: false, explanation: "This overcounts by including one of the leading zeros before the 7, which should not be counted." },
              { id: "c", text: "2", isCorrect: true },
              { id: "d", text: "4", isCorrect: false, explanation: "This overcounts even further, treating every digit in \"0.070\" as significant, which is incorrect." },
            ],
          },
          {
            id: "jee-q20",
            topic: "Precision of an Average",
            question: "Three experimental readings, 4.702, 4.71, and 4.7, are averaged. To how many significant figures should the final average be reported?",
            options: [
              { id: "a", text: "4, matching the most precise reading", isCorrect: false, explanation: "This uses the precision of the most detailed reading, but the least precise reading actually limits the final precision." },
              { id: "b", text: "1, matching the least precise reading's single digit", isCorrect: false, explanation: "This undercounts — 4.7 itself has 2 significant figures, not 1." },
              { id: "c", text: "3, an arbitrary compromise between the readings", isCorrect: false, explanation: "3 significant figures doesn't correspond to the precision of any of the three original readings." },
              { id: "d", text: "2, matching the least precise reading, 4.7", isCorrect: true },
            ],
          },
        ],
      },
      {
        name: "Section 5: Errors — Combination & Propagation",
        questions: [
          {
            id: "jee-q21",
            topic: "Percentage Error in Dissipated Heat",
            question: "In an experiment, the maximum errors in measuring resistance, current, and the time for which current flows are 1%, 2%, and 3% respectively. Using H = I²Rt, what is the maximum percentage error in the calculated heat dissipated?",
            options: [
              { id: "a", text: "8%", isCorrect: true },
              { id: "b", text: "6%", isCorrect: false, explanation: "This omits one of the three contributing percentage errors from the total." },
              { id: "c", text: "5%", isCorrect: false, explanation: "This adds the errors once each without doubling the contribution from current, which is squared in the formula." },
              { id: "d", text: "3%", isCorrect: false, explanation: "This only accounts for the error in time, ignoring the contributions from resistance and current entirely." },
            ],
          },
          {
            id: "jee-q22",
            topic: "Dimensional Formula of Viscosity in Non-Standard Base Quantities",
            question: "If momentum (P), area (A), and time (T) are treated as fundamental quantities instead of mass, length, and time, what is the dimensional formula of the coefficient of viscosity in terms of P, A, and T?",
            options: [
              { id: "a", text: "P¹A^(-3/2)T¹", isCorrect: false, explanation: "This introduces an incorrect fractional area exponent and a nonzero time exponent, neither of which appears when the algebra is worked through correctly." },
              { id: "b", text: "P¹A⁻¹T⁰", isCorrect: true },
              { id: "c", text: "P¹A⁻¹T⁻¹", isCorrect: false, explanation: "This wrongly attaches a T⁻¹ dependence; substituting M, L and T in terms of P, A and T shows the time exponent actually cancels to zero." },
              { id: "d", text: "P¹A^(1/2)T⁻¹", isCorrect: false, explanation: "This uses a positive area exponent, but viscosity's dependence on length is inverse, which becomes a negative exponent on A after substitution." },
            ],
          },
          {
            id: "jee-q23",
            topic: "Combined Error with a Square Root Term",
            question: "A physical quantity Z is calculated using Z = A³B²/√C. The percentage errors in measuring A, B, and C are 1%, 2%, and 4% respectively. What is the percentage error in Z?",
            options: [
              { id: "a", text: "7%", isCorrect: false, explanation: "This omits the contribution from C, forgetting that the square root still contributes half of C's percentage error." },
              { id: "b", text: "11%", isCorrect: false, explanation: "This overcounts by treating C's contribution as a full 4% instead of half, since C appears to the power 1/2." },
              { id: "c", text: "9%", isCorrect: true },
              { id: "d", text: "6%", isCorrect: false, explanation: "This halves the exponents on A and B as well, which is incorrect since neither is under any root in this formula." },
            ],
          },
          {
            id: "jee-q24",
            topic: "Error Propagation in Young's Modulus",
            question: "In an experiment to determine Young's modulus using Y = 4MgL/(πD²l), the percentage errors in measuring the original length L, diameter D, and extension l are 1%, 2%, and 3% respectively (M and g are treated as error-free). What is the percentage error in Y?",
            options: [
              { id: "a", text: "6%", isCorrect: false, explanation: "This misses one of the required contributions, undercounting the total error." },
              { id: "b", text: "10%", isCorrect: false, explanation: "This overcounts, effectively treating one of the terms as though it had a higher power than it actually does in the formula." },
              { id: "c", text: "4%", isCorrect: false, explanation: "This only accounts for a couple of the three measured quantities, leaving one term's contribution out entirely." },
              { id: "d", text: "8%", isCorrect: true },
            ],
          },
          {
            id: "jee-q25",
            topic: "Absolute Error in a Series Combination",
            question: "Two resistors, R₁ = (100 ± 3) Ω and R₂ = (200 ± 4) Ω, are connected in series. What is the absolute error in the equivalent resistance?",
            options: [
              { id: "a", text: "7 Ω", isCorrect: true },
              { id: "b", text: "1 Ω", isCorrect: false, explanation: "This incorrectly subtracts the two absolute errors instead of adding them." },
              { id: "c", text: "12 Ω", isCorrect: false, explanation: "This comes from multiplying rather than adding the two absolute error values." },
              { id: "d", text: "3.5 Ω", isCorrect: false, explanation: "This is the average of the two errors, which is not how absolute errors combine in a sum." },
            ],
          },
          {
            id: "jee-q26",
            topic: "Percentage Error in Resistance from Ohm's Law",
            question: "In an experiment to find resistance using Ohm's law, a voltmeter reads 10 V with a least count of 500 mV, and an ammeter reads 5 A with a least count of 200 mA. What is the estimated percentage error in the calculated resistance?",
            options: [
              { id: "a", text: "1%", isCorrect: false, explanation: "This comes from subtracting the two percentage errors instead of adding them, which is not how division errors combine." },
              { id: "b", text: "9%", isCorrect: true },
              { id: "c", text: "20%", isCorrect: false, explanation: "This overstates the result, as if the least counts themselves (rather than their percentage contributions) were added directly." },
              { id: "d", text: "4.5%", isCorrect: false, explanation: "This is roughly half the correct value, as if only an average of the two contributions were taken instead of their sum." },
            ],
          },
          {
            id: "jee-q27",
            topic: "Mean Absolute Error Across Multiple Instruments",
            question: "The time period of a simple pendulum is measured using four different stopwatches, giving readings of 2.63 s, 2.56 s, 2.42 s, and 2.71 s. What is the mean absolute error in this set of measurements?",
            options: [
              { id: "a", text: "0.36 s", isCorrect: false, explanation: "This is the sum of all four absolute errors before dividing by the number of readings." },
              { id: "b", text: "0.02 s", isCorrect: false, explanation: "This is only the smallest individual absolute error in the set, not the mean of all four." },
              { id: "c", text: "0.09 s", isCorrect: true },
              { id: "d", text: "2.58 s", isCorrect: false, explanation: "This is the mean time period itself, not the mean absolute error." },
            ],
          },
          {
            id: "jee-q28",
            topic: "Combining Errors in a Mixed Expression",
            question: "A quantity P is calculated from P = (2X² − 3Y)/(4Z), where X, Y, and Z are measured independently. Which statement correctly describes how to estimate the error in P?",
            options: [
              { id: "a", text: "All three percentage errors can simply be added together directly, without regard to the exponents on X or the operation between X² and Y", isCorrect: false, explanation: "This ignores that X is squared, which doubles its fractional contribution to the numerator's error, and it also skips the subtraction step needed for combining X² and Y's errors." },
              { id: "b", text: "Because Z appears in the denominator, its error should be subtracted from the total rather than added", isCorrect: false, explanation: "Errors from a quantity in the denominator still add to the total fractional error — they are never subtracted, regardless of where the quantity appears in the formula." },
              { id: "c", text: "Errors only need to be calculated for X, since it has an exponent, and Y and Z can be ignored", isCorrect: false, explanation: "Every measured quantity in a formula contributes to the overall error; Y and Z cannot be ignored just because they appear without an explicit exponent shown." },
              { id: "d", text: "Since X and Y are combined by subtraction inside the formula, their absolute errors add directly, and the whole numerator's fractional error then combines with Z's fractional error by addition", isCorrect: true },
            ],
          },
          {
            id: "jee-q29",
            topic: "Percentage Error in a Squared Quantity",
            question: "The diameter of a wire, corrected for zero error, is measured as (2.00 ± 0.02) mm using a screw gauge. What is the percentage error in the cross-sectional area (A = πD²/4) calculated from this measurement?",
            options: [
              { id: "a", text: "2%", isCorrect: true },
              { id: "b", text: "1%", isCorrect: false, explanation: "This is just the percentage error in the diameter itself, without accounting for the diameter being squared in the area formula." },
              { id: "c", text: "4%", isCorrect: false, explanation: "This would be correct only if the diameter's own error were 2%, not 1%." },
              { id: "d", text: "0.5%", isCorrect: false, explanation: "This incorrectly halves the diameter's error instead of doubling it, the opposite of the correct rule for a squared quantity." },
            ],
          },
          {
            id: "jee-q30",
            topic: "Accuracy vs. Precision",
            question: "Two students measure the same known standard mass of exactly 50.00 g. Student A reports 49.98 g, 50.03 g, and 50.01 g. Student B reports 45.10 g, 45.12 g, and 45.11 g. Which statement correctly compares their measurements?",
            options: [
              { id: "a", text: "Student A's readings are more accurate but less precise than Student B's", isCorrect: false, explanation: "Student A's readings are also tightly clustered (within 0.05 g of each other), so their precision is not lower — both students show good precision, but only A is accurate." },
              { id: "b", text: "Student A's readings are both more accurate and more precise than Student B's", isCorrect: true },
              { id: "c", text: "Student B's readings are more precise but less accurate than Student A's", isCorrect: false, explanation: "Student B's precision is comparable to Student A's; the readings cluster about as tightly, so precision isn't really what differs — accuracy is." },
              { id: "d", text: "Both students' readings are equally accurate", isCorrect: false, explanation: "Student B's readings cluster tightly around 45.11 g, nearly 5 g away from the true value of 50.00 g, so their accuracy is clearly much worse than Student A's." },
            ],
          },
        ],
      },
      {
        name: "Section 6: Dimensional Formula Derivation",
        questions: [
          {
            id: "jee-q31",
            topic: "Density in Terms of Force, Velocity, and Time",
            question: "If force (F), velocity (V), and time (T) are chosen as the fundamental quantities instead of mass, length, and time, what is the dimensional formula of density in terms of F, V, and T?",
            options: [
              { id: "a", text: "F¹V⁻³T⁻¹", isCorrect: false, explanation: "This uses incorrect exponents for both V and T; solving the three simultaneous equations for M, L and T gives −4 and −2 respectively, not −3 and −1." },
              { id: "b", text: "F⁻¹V⁴T²", isCorrect: false, explanation: "This inverts the sign of every exponent, which would only be correct if density were being expressed as the reciprocal of this combination." },
              { id: "c", text: "F¹V⁻⁴T⁻²", isCorrect: true },
              { id: "d", text: "F¹V⁻⁴T²", isCorrect: false, explanation: "This has the correct exponents for F and V but the wrong sign on the T exponent." },
            ],
          },
          {
            id: "jee-q32",
            topic: "Dimensional Formula of Specific Latent Heat",
            question: "What is the dimensional formula of specific latent heat (heat energy absorbed per unit mass)?",
            options: [
              { id: "a", text: "\\[M¹L²T⁻²\\]", isCorrect: false, explanation: "This retains a mass dimension, but latent heat is defined per unit mass, so the mass dimensions of energy and mass cancel out completely." },
              { id: "b", text: "\\[M⁰L²T⁻¹\\]", isCorrect: false, explanation: "This uses an incorrect time exponent; specific latent heat has the same time dependence as energy per unit mass, which is T⁻², not T⁻¹." },
              { id: "c", text: "\\[M¹L⁰T⁻²\\]", isCorrect: false, explanation: "This is actually the dimensional formula of acceleration (\\[LT⁻²\\]) with an extra mass dimension, not latent heat." },
              { id: "d", text: "\\[M⁰L²T⁻²\\]", isCorrect: true },
            ],
          },
          {
            id: "jee-q33",
            topic: "Mass in Terms of Velocity, Time, and Force",
            question: "If velocity (V), time (T), and force (F) are chosen as the fundamental quantities, what is the dimensional formula of mass in terms of these three?",
            options: [
              { id: "a", text: "F¹T¹V⁻¹", isCorrect: true },
              { id: "b", text: "F¹T⁻¹V¹", isCorrect: false, explanation: "This inverts the exponent on time; since force relates to mass, velocity and time as F = MV/T, rearranging for mass requires multiplying by T, not dividing by it." },
              { id: "c", text: "F⁻¹T¹V¹", isCorrect: false, explanation: "This inverts the exponent on force itself, but mass should scale directly, not inversely, with force in this relation." },
              { id: "d", text: "F¹T¹V¹", isCorrect: false, explanation: "This omits the required inverse relationship between mass and velocity entirely." },
            ],
          },
          {
            id: "jee-q34",
            topic: "Expressing Young's Modulus via Fundamental Constants",
            question: "Young's modulus Y is expressed in terms of the speed of light c, Planck's constant h, and the gravitational constant G, as Y = cᵅhᵝGᵞ. What are the correct values of α, β, and γ?",
            options: [
              { id: "a", text: "α = −7, β = −1, γ = −2", isCorrect: false, explanation: "This has the sign of α reversed; solving the three simultaneous equations for M, L and T gives α = +7, not −7." },
              { id: "b", text: "α = 7, β = −1, γ = −2", isCorrect: true },
              { id: "c", text: "α = 7, β = −1, γ = 2", isCorrect: false, explanation: "This has the sign of γ reversed; the correct value from the system of equations is γ = −2, not +2." },
              { id: "d", text: "α = −7, β = 1, γ = −2", isCorrect: false, explanation: "This reverses the signs of both α and β compared to the correct solution." },
            ],
          },
          {
            id: "jee-q35",
            topic: "Identifying a Dimensionally Incorrect Equation",
            question: "Which of the following proposed formulas for capillary rise height h is dimensionally INCORRECT? (s = surface tension, ρ = density, r = radius, g = acceleration due to gravity, θ = angle of contact)",
            options: [
              { id: "a", text: "h = 2s / (ρgr)", isCorrect: false, explanation: "This expression is dimensionally consistent — it reduces correctly to a length, so it is not the incorrect equation being sought." },
              { id: "b", text: "h = 2s cos θ / (ρgr)", isCorrect: false, explanation: "This differs from the correct form only by a dimensionless factor of cos θ, so it remains dimensionally consistent." },
              { id: "c", text: "h = ρgr / (2s)", isCorrect: true },
              { id: "d", text: "h = s / (2ρgr)", isCorrect: false, explanation: "This differs from the correct capillary-rise relation only by a constant numerical factor, which doesn't affect dimensions." },
            ],
          },
          {
            id: "jee-q36",
            topic: "A Dimensionless Combination of Fundamental Constants",
            question: "A dimensionless quantity is built from the electronic charge e, the permittivity of free space ε₀, Planck's constant h, and the speed of light c, written as eᵅε₀ᵝhᵞcᵟ. Which set of exponents makes this combination dimensionless? (This is, in fact, the basis of the fine-structure constant.)",
            options: [
              { id: "a", text: "α = 1, β = 1, γ = 1, δ = 1", isCorrect: false, explanation: "Substituting these values does not satisfy all four dimensional balance equations simultaneously — the current-dimension equation alone gives α+2β = 3, not zero." },
              { id: "b", text: "α = 2, β = 1, γ = −1, δ = 1", isCorrect: false, explanation: "This fails the current-dimension balance: α+2β = 4, which is not zero, so this combination is not actually dimensionless." },
              { id: "c", text: "α = −2, β = 1, γ = 1, δ = −1", isCorrect: false, explanation: "This satisfies the mass and current conditions but fails both the length and time conditions simultaneously." },
              { id: "d", text: "α = 2, β = −1, γ = −1, δ = −1", isCorrect: true },
            ],
          },
        ],
      },
      {
        name: "Section 7: Dimensional Analysis — Consistency & Applications",
        questions: [
          {
            id: "jee-q37",
            topic: "Assertion–Reason: Droplet Oscillation",
            question: "Assertion (A): The time period of oscillation of a liquid drop can depend on its surface tension (S), given the liquid's density (ρ) and the drop's radius (r). Reason (R): Dimensional analysis can form a combination of S, ρ, and r with the dimensions of time. Choose the correct option.",
            options: [
              { id: "a", text: "Both A and R are true, and R is the correct explanation of A", isCorrect: true },
              { id: "b", text: "Both A and R are true, but R is NOT the correct explanation of A", isCorrect: false, explanation: "R does directly explain A here — dimensional analysis genuinely produces a valid time-dimensioned combination of S, ρ and r, which is exactly the justification needed for A." },
              { id: "c", text: "A is true, but R is false", isCorrect: false, explanation: "R is actually true, since a combination of S, ρ, and r can indeed be constructed with the dimensions of time." },
              { id: "d", text: "A is false, but R is true", isCorrect: false, explanation: "A is also true — a liquid drop's oscillation period does genuinely depend on surface tension in this way, not just the dimensional reasoning behind it." },
            ],
          },
          {
            id: "jee-q38",
            topic: "Mass-Independence of a Simple Pendulum",
            question: "Using dimensional analysis, it is proposed that the time period T of a simple pendulum depends on its length l, the bob's mass m, and the acceleration due to gravity g. What does working out this dependence dimensionally reveal?",
            options: [
              { id: "a", text: "T is directly proportional to m", isCorrect: false, explanation: "A direct proportionality to mass would require mass to appear with a positive exponent, but solving the dimensional equations forces the mass exponent to zero." },
              { id: "b", text: "T is independent of the mass m", isCorrect: true },
              { id: "c", text: "T is inversely proportional to m", isCorrect: false, explanation: "No inverse relationship with mass survives the dimensional analysis either — the mass exponent comes out to exactly zero." },
              { id: "d", text: "T depends on the square root of m", isCorrect: false, explanation: "A square-root dependence on mass is also ruled out for the same reason: balancing M, L, and T forces the exponent on mass to vanish entirely." },
            ],
          },
          {
            id: "jee-q39",
            topic: "The Limitation Behind an Unknown Constant",
            question: "A student uses dimensional analysis to check T = 2π√(l/g) for a simple pendulum. Which limitation of dimensional analysis explains why this method alone cannot confirm the exact numerical factor of 2π?",
            options: [
              { id: "a", text: "Dimensional analysis cannot be applied to periodic motion", isCorrect: false, explanation: "Dimensional analysis is applied to periodic motion regularly, including this exact pendulum example — it is a completely valid technique here." },
              { id: "b", text: "Dimensional analysis only works for electrical quantities", isCorrect: false, explanation: "Dimensional analysis applies to any physical quantity with dimensions, mechanical or electrical, not exclusively electrical ones." },
              { id: "c", text: "Dimensional analysis cannot determine dimensionless constants", isCorrect: true },
              { id: "d", text: "The formula is dimensionally inconsistent, which is why the constant is unknown", isCorrect: false, explanation: "The formula is, in fact, dimensionally consistent (both sides reduce to units of time); the constant's value simply cannot be found by dimensional reasoning alone." },
            ],
          },
          {
            id: "jee-q40",
            topic: "Exponential Terms and Dimensionless Requirements",
            question: "A proposed gas equation includes a term written as e^(V/T) (an exponential function of volume divided by temperature). Why is this term problematic unless V and T are combined in a specific way?",
            options: [
              { id: "a", text: "Exponential functions can never appear in any valid physical equation", isCorrect: false, explanation: "Exponential functions appear frequently in valid physical equations, such as radioactive decay and barometric pressure formulas — the issue is specifically what goes inside the exponent, not whether exponentials are allowed at all." },
              { id: "b", text: "Volume and temperature can never appear together in the same equation", isCorrect: false, explanation: "Volume and temperature commonly appear together in physical equations, such as the ideal gas law; there's no general prohibition against combining them." },
              { id: "c", text: "The equation is automatically correct as written, since exponential functions have no dimensional requirements", isCorrect: false, explanation: "Exponential functions do have a dimensional requirement — their exponent must be a pure, dimensionless number, which is exactly the issue raised by this term." },
              { id: "d", text: "The exponent of an exponential function must be dimensionless, so V/T must itself be dimensionless for the expression to make physical sense", isCorrect: true },
            ],
          },
        ],
      },
    ],
  },

  // unit2, unit3, unit4: no entry yet — their categories will automatically
  // show the "content coming soon" state until you provide questions.
};
