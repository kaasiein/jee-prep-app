# Unit 1: Units and Measurements

*JEE Physics — Training Material*

## 1. Physical Quantities and Units

A physical quantity is anything that can be measured. Every measurement equals a numerical value multiplied by a unit:

*Q = n × u (n and u vary inversely — a larger unit gives a smaller numerical value)*

Two types of physical quantities:

- Fundamental (Base) quantities — independent, not derived from others (e.g., mass, length, time)

- Derived quantities — obtained by combining base quantities (e.g., speed = length ÷ time)

**Example**

> *Q: A boy's height is measured as 1.5 m. Identify n and u, and re-express it in feet.*
>
> Here n = 1.5 and u = metre. Since 1 m ≈ 3.28 ft (a smaller unit than the metre), the numerical value must increase proportionally:
>
> 1.5 m = 1.5 × 3.28 ft ≈ 4.92 ft. Notice: unit became smaller (m → ft), so n became larger (1.5 → 4.92) — confirming n and u vary inversely.

## 2. Systems of Units

| **System**        | **Length** | **Mass** | **Time** |
|-------------------|------------|----------|----------|
| CGS               | centimetre | gram     | second   |
| FPS               | foot       | pound    | second   |
| MKS               | metre      | kilogram | second   |
| SI (adopted 1971) | metre      | kilogram | second   |

**SI is the internationally accepted system, built on 7 base units + 2 supplementary units.**

### The 7 SI Base Units

| **Quantity**        | **Unit** | **Symbol** | **Current Definition (fixed constants)**     |
|---------------------|----------|------------|----------------------------------------------|
| Length              | metre    | m          | Distance light travels in 1/299,792,458 s    |
| Mass                | kilogram | kg         | Fixed value of Planck's constant h           |
| Time                | second   | s          | 9,192,631,770 periods of Cs-133 radiation    |
| Electric current    | ampere   | A          | Fixed value of elementary charge e           |
| Temperature         | kelvin   | K          | Fixed value of Boltzmann constant k          |
| Amount of substance | mole     | mol        | Fixed value of Avogadro constant Nₐ          |
| Luminous intensity  | candela  | cd         | Fixed luminous efficacy of 540 THz radiation |

Supplementary units: Plane angle → radian (rad) \| Solid angle → steradian (sr)

Derived units are combinations of base units, e.g. force → newton (N) = kg·m·s⁻²; energy → joule (J) = kg·m²·s⁻²; pressure → pascal (Pa) = kg·m⁻¹·s⁻².

### Practical / Common Units Worth Remembering

- 1 fermi = 10⁻¹⁵ m; 1 angstrom = 10⁻¹⁰ m; 1 light year ≈ 9.46 × 10¹⁵ m

- 1 astronomical unit (AU) ≈ 1.496 × 10¹¹ m; 1 parsec ≈ 3.08 × 10¹⁶ m

- 1 atomic mass unit (amu) ≈ 1.66 × 10⁻²⁷ kg

**Example**

> *Q: How many metres are there in 2 light years?*
>
> 1 light year ≈ 9.46 × 10¹⁵ m, so 2 light years = 2 × 9.46 × 10¹⁵ = 1.892 × 10¹⁶ m.

## 3. Least Count

The least count (LC) of an instrument is the smallest measurement it can accurately read.

| **Instrument**            | **Least Count**                                 |
|---------------------------|-------------------------------------------------|
| Metre scale               | 1 mm = 0.1 cm                                   |
| Vernier callipers         | LC = 1 MSD − 1 VSD (typically 0.01 cm)          |
| Screw gauge / Spherometer | LC = Pitch ÷ Number of circular-scale divisions |

*Vernier LC = (Value of 1 main scale division) ÷ (Total divisions on vernier scale)*

*Pitch = (Distance moved on main scale) ÷ (Number of full rotations); LC = Pitch ÷ Circular scale divisions*

Always check for zero error (positive or negative) and correct the reading accordingly.

**Example**

> *Q: In a vernier callipers, 1 MSD = 1 mm and 10 VSD = 9 MSD. Find the least count. If the main scale reads 2.3 cm and the 4th vernier division coincides with a main scale line, find the true reading.*
>
> 1 VSD = 9/10 MSD = 0.9 mm, so LC = 1 MSD − 1 VSD = 1 − 0.9 = 0.1 mm = 0.01 cm.
>
> True reading = Main scale reading + (Vernier division × LC) = 2.3 cm + (4 × 0.01 cm) = 2.34 cm.

**Example**

> *Q: A screw gauge has a pitch of 1 mm and 100 divisions on its circular scale. Find the least count. If the main scale reads 3 mm and the 45th circular division lies on the reference line, find the diameter.*
>
> LC = Pitch ÷ Circular divisions = 1 mm ÷ 100 = 0.01 mm.
>
> Diameter = Main scale reading + (Circular scale reading × LC) = 3 mm + (45 × 0.01 mm) = 3.45 mm.

## 4. Significant Figures

Significant figures indicate the precision of a measurement — all certain digits plus one estimated digit.

### Rules for Counting

1.  All non-zero digits are significant. Example: 1234 → 4 significant figures.

2.  Zeros between non-zero digits are significant. Example: 1002 → 4 significant figures.

3.  Leading zeros (before the first non-zero digit) are not significant. Example: 0.0025 → 2 significant figures.

4.  Trailing zeros after a decimal point are significant. Example: 1.500 → 4 significant figures.

5.  Trailing zeros in a number without a decimal point are ambiguous — use scientific notation to remove ambiguity. Example: 1500 could mean 2, 3, or 4 sig. figs.; write 1.5 × 10³ to mean exactly 2.

6.  In scientific notation a × 10ⁿ, only the digits in 'a' are significant. Example: 6.020 × 10²³ → 4 significant figures.

### Rules for Arithmetic Operations

- Addition / Subtraction: result has as many decimal places as the term with the fewest decimal places.

- Multiplication / Division: result has as many significant figures as the term with the fewest significant figures.

**Example**

> *Q: Add 12.34, 3.1 and 0.256.*
>
> Raw sum = 15.696. The least precise term (3.1) has only 1 decimal place, so the answer is rounded to 1 decimal place → 15.7.

**Example**

> *Q: Multiply 4.52 (3 sig. figs.) by 2.4 (2 sig. figs.).*
>
> Raw product = 10.848. The least precise term has 2 significant figures, so the answer is rounded to 2 sig. figs. → 11.

### Rounding Off

- If the digit to be dropped is \> 5, round up. If \< 5, round down.

- If it is exactly 5, round to make the preceding digit even (this avoids bias over many roundings).

**Example**

> *Q: Round off 2.745 and 2.735 to 3 significant figures.*
>
> 2.745 → the digit before 5 is 4 (even) → stays 2.74.
>
> 2.735 → the digit before 5 is 3 (odd) → rounds up to 2.74 (making it even).

## 5. Errors in Measurement

Error is the difference between the measured value and the true value.

### Types of Errors

- Systematic Errors — one-directional, correctable: instrumental (zero/calibration error), imperfect technique, personal/observer bias.

- Random Errors — irregular, no fixed pattern; minimized by taking many readings and averaging.

- Gross Errors — due to human carelessness (misreading, wrong recording).

### Quantifying Errors

For measurements a₁, a₂, …, aₙ with mean value:

*a_mean = (a₁ + a₂ + … + aₙ) / n*

- Absolute error in each reading: Δaᵢ = \|a_mean − aᵢ\|

- Mean absolute error: Δa_mean = (Σ\|Δaᵢ\|) / n

- Relative (fractional) error: Δa_mean / a_mean

- Percentage error: (Δa_mean / a_mean) × 100%

**Final reported result: a = a_mean ± Δa_mean**

**Example**

> *Q: Five readings of the time period of a pendulum (in s) are: 2.63, 2.56, 2.42, 2.71, 2.80. Find the mean value, mean absolute error, relative error and percentage error.*
>
> Mean = (2.63+2.56+2.42+2.71+2.80)/5 = 13.12/5 = 2.624 s ≈ 2.62 s.
>
> Absolute errors: \|2.62−2.63\|=0.01, \|2.62−2.56\|=0.06, \|2.62−2.42\|=0.20, \|2.62−2.71\|=0.09, \|2.62−2.80\|=0.18.
>
> Mean absolute error = (0.01+0.06+0.20+0.09+0.18)/5 = 0.54/5 ≈ 0.11 s.
>
> Relative error = 0.11/2.62 ≈ 0.04. Percentage error = 0.04 × 100 ≈ 4%.
>
> Result: T = (2.62 ± 0.11) s.

### Combination of Errors (important for JEE numericals)

| **Operation**             | **Error Propagation Rule**         |
|---------------------------|------------------------------------|
| Sum/Difference: Z = A ± B | ΔZ = ΔA + ΔB                       |
| Product: Z = AB           | ΔZ/Z = ΔA/A + ΔB/B                 |
| Division: Z = A/B         | ΔZ/Z = ΔA/A + ΔB/B                 |
| Power: Z = Aⁿ             | ΔZ/Z = n (ΔA/A)                    |
| General: Z = ApBq/Cr      | ΔZ/Z = p(ΔA/A) + q(ΔB/B) + r(ΔC/C) |

*Key idea: in multiplication/division/powers, fractional errors add (with the power as a multiplying factor); in addition/subtraction, absolute errors add.*

**Example**

> *Q: The resistance R = V/I, where V = (100 ± 2) V and I = (10 ± 0.2) A. Find the percentage error in R.*
>
> % error in V = (2/100)×100 = 2%. % error in I = (0.2/10)×100 = 2%.
>
> Since R = V/I, % error in R = % error in V + % error in I = 2% + 2% = 4%.
>
> R = 100/10 = 10 Ω, so the result is R = (10 ± 0.4) Ω.

## 6. Dimensions of Physical Quantities

Dimensions show how a derived quantity relates to the base quantities, expressed as powers of M (mass), L (length), T (time), A (current), K (temperature), mol (amount), cd (luminous intensity).

Dimensional formula: expresses a quantity as \[MᵃLᵇTᶜ …\]

### Common Dimensional Formulas (memorize these)

| **Quantity**                         | **Formula**         | **Dimensions**      |
|--------------------------------------|---------------------|---------------------|
| Area                                 | L × L               | \[M⁰L²T⁰\]          |
| Volume                               | L × L × L           | \[M⁰L³T⁰\]          |
| Velocity                             | L/T                 | \[M⁰L¹T⁻¹\]         |
| Acceleration                         | L/T²                | \[M⁰L¹T⁻²\]         |
| Force                                | mass × acceleration | \[M¹L¹T⁻²\]         |
| Work/Energy                          | Force × distance    | \[M¹L²T⁻²\]         |
| Power                                | Work/time           | \[M¹L²T⁻³\]         |
| Momentum                             | mass × velocity     | \[M¹L¹T⁻¹\]         |
| Pressure/Stress                      | Force/area          | \[M¹L⁻¹T⁻²\]        |
| Density                              | mass/volume         | \[M¹L⁻³T⁰\]         |
| Frequency                            | 1/time              | \[M⁰L⁰T⁻¹\]         |
| Angular velocity                     | angle/time          | \[M⁰L⁰T⁻¹\]         |
| Torque                               | Force × distance    | \[M¹L²T⁻²\]         |
| Surface tension                      | Force/length        | \[M¹L⁰T⁻²\]         |
| Coefficient of viscosity             | Force×time/area     | \[M¹L⁻¹T⁻¹\]        |
| Universal gravitational constant (G) | —                   | \[M⁻¹L³T⁻²\]        |
| Planck's constant (h)                | Energy × time       | \[M¹L²T⁻¹\]         |
| Gas constant (R)                     | —                   | \[M¹L²T⁻²K⁻¹mol⁻¹\] |
| Electric charge                      | current × time      | \[M⁰L⁰T¹A¹\]        |
| Electric potential                   | Work/charge         | \[M¹L²T⁻³A⁻¹\]      |
| Resistance                           | Potential/current   | \[M¹L²T⁻³A⁻²\]      |
| Permittivity (ε₀)                    | —                   | \[M⁻¹L⁻³T⁴A²\]      |
| Permeability (μ₀)                    | —                   | \[M¹L¹T⁻²A⁻²\]      |

Dimensionless quantities: angle, strain, refractive index, relative density, Poisson's ratio, all trigonometric ratios — dimensional formula \[M⁰L⁰T⁰\].

**Example**

> *Q: The force on a body is given by F = a√v + bt², where v is velocity and t is time. Find the dimensions of a and b.*
>
> Since every term added to F must have the same dimensions as F, \[a√v\] = \[F\] = \[M¹L¹T⁻²\].
>
> \[√v\] = \[L¹T⁻¹\]^(1/2) = \[L^(1/2)T^(-1/2)\], so \[a\] = \[M¹L¹T⁻²\] / \[L^(1/2)T^(-1/2)\] = \[M¹L^(1/2)T^(-3/2)\].
>
> Similarly \[bt²\] = \[F\], and \[t²\] = \[T²\], so \[b\] = \[M¹L¹T⁻²\]/\[T²\] = \[M¹L¹T⁻⁴\].

## 7. Dimensional Analysis and Applications

### (a) Principle of Homogeneity of Dimensions

A physical equation is dimensionally correct only if the dimensions on both sides — and of every term being added or subtracted — are identical.

**Example**

> *Q: Check whether v = u + at is dimensionally correct.*
>
> \[v\] = \[L¹T⁻¹\], \[u\] = \[L¹T⁻¹\], \[at\] = \[L¹T⁻²\]\[T¹\] = \[L¹T⁻¹\].
>
> All three terms have the same dimensions → the equation is dimensionally correct.

### (b) Deriving Relations Between Physical Quantities

Example: the time period of a simple pendulum depends on length (l), mass (m) and acceleration due to gravity (g).

*Assume T = k · lᵃ · mᵇ · gᶜ*

Comparing dimensions on both sides gives a = 1/2, b = 0, c = −1/2, so:

*T = k √(l/g)*

(The dimensionless constant k cannot be found by dimensional analysis — it is found experimentally to be 2π.)

### (c) Converting Units from One System to Another

*n₁u₁ = n₂u₂, where u = \[MᵃLᵇTᶜ\] ⟹ n₂ = n₁ \[M₁/M₂\]ᵃ \[L₁/L₂\]ᵇ \[T₁/T₂\]ᶜ*

**Example**

> *Q: Convert 1 joule into erg using dimensional analysis.*
>
> Energy has dimensions \[M¹L²T⁻²\]. In SI: M₁=1 kg, L₁=1 m, T₁=1 s. In CGS: M₂=1 g, L₂=1 cm, T₂=1 s.
>
> n₂ = 1 × (1000)¹ × (100)² × (1)⁻² = 1000 × 10000 = 10⁷.
>
> So 1 joule = 10⁷ erg.

### (d) Limitations of Dimensional Analysis

- Cannot determine dimensionless constants (like k, 2π, etc.).

- Fails for equations involving trigonometric, exponential, or logarithmic functions — these must be dimensionless, but the method cannot derive them.

- Cannot be used if a quantity depends on more than 3 unknown physical quantities (only 3 equations available from M, L, T).

- Cannot distinguish between quantities having the same dimensions (e.g., torque and energy are both \[M¹L²T⁻²\]).

- Cannot tell whether a relation is a sum of terms or a single term — it only checks overall dimensional consistency.

**Example**

> *Q: Why can't dimensional analysis be used to derive s = ut + ½at²?*
>
> Dimensional analysis can confirm that ut and at² both have the correct dimensions \[L¹\], but it cannot determine the numerical constant ½ — that comes only from calculus/experiment, illustrating the first limitation above.

## Quick Revision Checklist

- 7 SI base units + 2 supplementary units, with symbols

- Least count formulas for vernier callipers and screw gauge, with reading calculation

- All 6 significant figure rules + rounding-off (round-to-even on exactly 5)

- Error combination table (add errors for +/−, add fractional errors for ×/÷, multiply by power)

- Dimensional formulas of at least 20 common quantities (table above)

- 3 applications of dimensional analysis + 5 limitations, each with a worked example

**JEE Tip:** *This unit contributes 1–2 direct questions almost every year (often on significant figures, error combination, or deriving a formula via dimensional analysis) — quick, low-effort marks if the tables and worked examples above are practiced thoroughly.*
