// problems.js
// 集合と二次関数の問題バンク
// 好きなだけ問題をコピペで増やしてOK

// ========= 集合の問題 =========
// U = {1,2,3,4,5,6,7,8,9,10} を前提にした問題
// answer は「正しい要素の配列」になっている

const SET_PROBLEMS = [
  {
    type: "intersection",
    label: "共通部分（積集合）",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {1,2,3,6},  B = {2,4,6,8} のとき、
A ∩ B を求めよ。`,
    answer: [2,6],
    explain:
`A ∩ B は「AにもBにも入っている要素」の集合。

A = {1,2,3,6}
B = {2,4,6,8}

共通している要素は {2,6} なので、
答え：{2,6}`
  },
  {
    type: "intersection",
    label: "共通部分（積集合）",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {1,3,5,7},  B = {3,4,5,6} のとき、
A ∩ B を求めよ。`,
    answer: [3,5],
    explain:
`A ∩ B は「両方に入っている要素」。

A = {1,3,5,7}
B = {3,4,5,6}

共通しているのは {3,5} なので、
答え：{3,5}`
  },
  {
    type: "intersection",
    label: "共通部分（積集合）",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {2,4,6,8},  B = {1,3,5,7,9} のとき、
A ∩ B を求めよ。`,
    answer: [],
    explain:
`A ∩ B は「両方に入っている要素」だが、

A = {2,4,6,8}（偶数）
B = {1,3,5,7,9}（奇数）

偶数と奇数は同時に成り立たないので共通要素はない。
よって A ∩ B = {}（空集合）。`
  },
  {
    type: "union",
    label: "和集合",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {1,3,5},  B = {2,4,6} のとき、
A ∪ B を求めよ。`,
    answer: [1,2,3,4,5,6],
    explain:
`A ∪ B は「A または B に入っている要素」全体。

A = {1,3,5}
B = {2,4,6}

両方の要素を重複なく集めると {1,2,3,4,5,6} になるので、
答え：{1,2,3,4,5,6}`
  },
  {
    type: "union",
    label: "和集合",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {2,4,6,8},  B = {6,7,8,9,10} のとき、
A ∪ B を求めよ。`,
    answer: [2,4,6,7,8,9,10],
    explain:
`A ∪ B は「A または B に入っている要素」全体。

A = {2,4,6,8}
B = {6,7,8,9,10}

これらを重複なくまとめると {2,4,6,7,8,9,10}。
答え：{2,4,6,7,8,9,10}`
  },
  {
    type: "union",
    label: "和集合",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {1,2,3,4},  B = {3,4,5,6} のとき、
A ∪ B を求めよ。`,
    answer: [1,2,3,4,5,6],
    explain:
`和集合 A ∪ B は「どちらか一方でも含まれていればOK」。

A = {1,2,3,4}
B = {3,4,5,6}

全部まとめると {1,2,3,4,5,6} になるので、
答え：{1,2,3,4,5,6}`
  },
  {
    type: "complement",
    label: "補集合",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {2,4,6,8,10} のとき、
A の補集合 A^c を U の中で求めよ。`,
    answer: [1,3,5,7,9],
    explain:
`補集合 A^c は「U に属しているが A には属さない要素」の集合。

U = {1,2,3,4,5,6,7,8,9,10}
A = {2,4,6,8,10}

偶数を除いた残り（奇数部分）は {1,3,5,7,9} なので、
答え：{1,3,5,7,9}`
  },
  {
    type: "complement",
    label: "補集合",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {1,2,3,4,5} のとき、
A の補集合 A^c を U の中で求めよ。`,
    answer: [6,7,8,9,10],
    explain:
`U から A の要素をすべて取り除くと補集合になる。

U = {1,2,3,4,5,6,7,8,9,10}
A = {1,2,3,4,5}

残りは {6,7,8,9,10} なので、
答え：{6,7,8,9,10}`
  },
  {
    type: "complement",
    label: "補集合",
    question:
`全体集合 U = {1,2,3,4,5,6,7,8,9,10} とする。
A = {}（空集合）のとき、
A の補集合 A^c を U の中で求めよ。`,
    answer: [1,2,3,4,5,6,7,8,9,10],
    explain:
`A が空集合ということは「まだ何も選んでいない」状態。

補集合 A^c は「U に属していて A には属さない要素」なので、
U のすべての要素が入る。

答え：{1,2,3,4,5,6,7,8,9,10}`
  }
];

// ========= 二次関数の問題 =========
// answer.kind によってチェック方法を変えている
//   kind: "axis"         => answer.p（軸 x=p）
//   kind: "vertex"       => answer.p, answer.q（頂点 (p,q)）
//   kind: "open_extreme" => answer.opens（開き方）, answer.extremeValue

// ========= 二次関数の問題 =========
// answer.kind によってチェック方法を変えている
//   kind: "axis"         => answer.p（軸 x=p）
//   kind: "vertex"       => answer.p, answer.q（頂点 (p,q)）
//   kind: "open_extreme" => answer.opens（開き方）, answer.extremeValue

const QUAD_PROBLEMS = [
  // ==== すでにあった問題（元の9問） ====
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = x² + 4x + 3 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: -2 },
    hint: "軸 x = p の p の値だけ入力してください。",
    ansFormat: "例：x = -2 のとき →  -2",
    explain:
`y = x² + 4x + 3 について、頂点の x 座標は
  p = -b/(2a) = -4 / (2×1) = -2

よって軸は x = -2。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = -x² + 6x - 5 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: 3 },
    hint: "軸 x = p の p だけ入力。",
    ansFormat: "例：x = 3 のとき →  3",
    explain:
`y = -x² + 6x - 5 で a = -1, b = 6 より

p = -b/(2a) = -6 / (2×-1) = 3

したがって軸は x = 3。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = 2x² - 8x + 1 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: 2 },
    hint: "p = -b/(2a) を使う。",
    ansFormat: "例：x = 2 のとき →  2",
    explain:
`y = 2x² - 8x + 1 で a = 2, b = -8 より

p = -b/(2a) = -(-8) / (2×2) = 8/4 = 2

軸は x = 2。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = x² + 4x + 3 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: -2, q: -1 },
    hint: "頂点 (p, q) の形で入力してください。",
    ansFormat: "例：頂点が (-2, -1) →  -2,-1",
    explain:
`y = x² + 4x + 3 を平方完成すると

y = (x + 2)² - 1

よって頂点は ( -2, -1 )。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = -x² + 6x - 5 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: 3, q: 4 },
    hint: "p = -b/(2a),  q = f(p) で求めよう。",
    ansFormat: "例：頂点が (3, 4) →  3,4",
    explain:
`y = -x² + 6x - 5 で
p = -b/(2a) = -6/(2×-1) = 3

x = 3 を代入して
y = -(3)² + 6×3 - 5 = -9 + 18 - 5 = 4

したがって頂点は (3, 4)。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = 2x² - 4x + 1 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: 1, q: -1 },
    hint: "平方完成で形をそろえると考えやすい。",
    ansFormat: "例：頂点が (1, -1) →  1,-1",
    explain:
`y = 2x² - 4x + 1
= 2(x² - 2x) + 1
= 2[(x - 1)² - 1] + 1
= 2(x - 1)² - 2 + 1
= 2(x - 1)² - 1

よって頂点は (1, -1)。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = x² + 4x + 3 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: { 
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: -1
    },
    hint: "a の符号で開き方、頂点の y 座標が最大値/最小値になる。",
    ansFormat: "例：上に開いて最小値が -1 →  上に開く,-1",
    explain:
`y = x² + 4x + 3 は a = 1 > 0 なので「上に開く」。

平方完成すると y = (x + 2)² - 1
頂点は (-2, -1) で、上に開くので y = -1 が最小値。

答え：
(1) 上に開く
(2) 最小値 -1`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = -x² + 6x - 5 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最大値を求めよ。`,
    answer: { 
      kind: "open_extreme",
      opens: "下に開く",
      extremeType: "最大値",
      extremeValue: 4
    },
    hint: "a < 0 なら下に開き、頂点の y 座標が最大値。",
    ansFormat: "例：下に開いて最大値が 4 →  下に開く,4",
    explain:
`y = -x² + 6x - 5 は a = -1 < 0 なので「下に開く」。

さきほど求めた通り頂点は (3, 4) なので、
下に開く放物線の頂点の y 座標 4 が最大値。

答え：
(1) 下に開く
(2) 最大値 4`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = 2x² - 4x + 1 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: { 
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: -1
    },
    hint: "a > 0 なら上に開いて、頂点の y 座標が最小値。",
    ansFormat: "例：上に開いて最小値が -1 →  上に開く,-1",
    explain:
`y = 2(x - 1)² - 1 より a = 2 > 0 なので「上に開く」。

頂点は (1, -1) なので、最小値は y = -1。

答え：
(1) 上に開く
(2) 最小値 -1`
  },

  // ==== ここから新しく大量追加した問題たち ====

  // --- 軸を求める系 追加 ---
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = x² - 2x + 5 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: 1 },
    hint: "p = -b/(2a) を使って求めよう。",
    ansFormat: "例：x = 1 のとき →  1",
    explain:
`y = x² - 2x + 5 で a = 1, b = -2 より

p = -b/(2a) = -(-2)/(2×1) = 2/2 = 1

したがって軸は x = 1。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = 3x² + 6x + 1 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: -1 },
    hint: "p = -b/(2a) の公式に a = 3, b = 6 を代入する。",
    ansFormat: "例：x = -1 のとき →  -1",
    explain:
`y = 3x² + 6x + 1 で a = 3, b = 6 より

p = -b/(2a) = -6 / (2×3) = -6/6 = -1

したがって軸は x = -1。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = -2x² + 8x - 1 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: 2 },
    hint: "a < 0 でも公式は同じ。p = -b/(2a)。",
    ansFormat: "例：x = 2 のとき →  2",
    explain:
`y = -2x² + 8x - 1 で a = -2, b = 8 より

p = -b/(2a) = -8 / (2×-2) = -8 / -4 = 2

したがって軸は x = 2。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = 2x² + 8x - 3 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: -2 },
    hint: "p = -b/(2a) をそのまま使おう。",
    ansFormat: "例：x = -2 のとき →  -2",
    explain:
`y = 2x² + 8x - 3 で a = 2, b = 8 より

p = -b/(2a) = -8 / (2×2) = -8/4 = -2

よって軸は x = -2。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = -3x² + 12x + 7 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: 2 },
    hint: "b/(2a) の符号に注意。",
    ansFormat: "例：x = 2 のとき →  2",
    explain:
`y = -3x² + 12x + 7 で a = -3, b = 12 より

p = -b/(2a) = -12 / (2×-3) = -12 / -6 = 2

したがって軸は x = 2。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = x² - 4 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: 0 },
    hint: "b = 0 の場合、軸は x = 0 になる。",
    ansFormat: "例：x = 0 のとき →  0",
    explain:
`y = x² - 4 は a = 1, b = 0 なので

p = -b/(2a) = 0 / (2×1) = 0

よって軸は x = 0。`
  },
  {
    type: "axis",
    label: "軸を求める問題",
    question:
`二次関数 y = -x² + 3 のグラフの「軸」の方程式を求めよ。`,
    answer: { kind: "axis", p: 0 },
    hint: "b = 0 の場合は左右対称で軸は x = 0。",
    ansFormat: "例：x = 0 のとき →  0",
    explain:
`y = -x² + 3 は a = -1, b = 0 なので

p = -b/(2a) = 0 / (2×-1) = 0

したがって軸は x = 0。`
  },

  // --- 頂点を求める系 追加 ---
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = x² - 6x + 5 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: 3, q: -4 },
    hint: "p = -b/(2a), q = f(p) を使うか、平方完成してもよい。",
    ansFormat: "例：頂点が (3, -4) →  3,-4",
    explain:
`y = x² - 6x + 5 で

p = -b/(2a) = -(-6)/(2×1) = 6/2 = 3

x = 3 を代入すると
y = 3² - 6×3 + 5 = 9 - 18 + 5 = -4

したがって頂点は (3, -4)。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = x² + 2x - 3 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: -1, q: -4 },
    hint: "p = -b/(2a) で x 座標、そのあと代入して y を求める。",
    ansFormat: "例：頂点が (-1, -4) →  -1,-4",
    explain:
`y = x² + 2x - 3 で

p = -b/(2a) = -2 / (2×1) = -1

x = -1 を代入すると
y = (-1)² + 2×(-1) - 3 = 1 - 2 - 3 = -4

したがって頂点は (-1, -4)。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = -x² - 4x + 1 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: -2, q: 5 },
    hint: "a < 0 でも頂点の求め方は同じ。",
    ansFormat: "例：頂点が (-2, 5) →  -2,5",
    explain:
`y = -x² - 4x + 1 で

p = -b/(2a) = -(-4) / (2×-1) = 4 / -2 = -2

x = -2 を代入すると
y = -(-2)² - 4×(-2) + 1
  = -4 + 8 + 1 = 5

したがって頂点は (-2, 5)。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = -2x² + 4x - 1 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: 1, q: 1 },
    hint: "平方完成でも良いし、p,q の公式でも良い。",
    ansFormat: "例：頂点が (1, 1) →  1,1",
    explain:
`y = -2x² + 4x - 1 を平方完成すると

y = -2(x² - 2x) - 1
  = -2[(x - 1)² - 1] - 1
  = -2(x - 1)² + 2 - 1
  = -2(x - 1)² + 1

よって頂点は (1, 1)。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = 3x² - 9 のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: 0, q: -9 },
    hint: "b = 0 のとき、頂点の x 座標は 0 になる。",
    ansFormat: "例：頂点が (0, -9) →  0,-9",
    explain:
`y = 3x² - 9 は
y = 3(x² - 3) = 3[(x - 0)² - 3]

頂点は x = 0 のときで、y = -9 なので
頂点は (0, -9)。`
  },
  {
    type: "vertex",
    label: "頂点を求める問題",
    question:
`二次関数 y = -3x² のグラフの頂点の座標を求めよ。`,
    answer: { kind: "vertex", p: 0, q: 0 },
    hint: "y = -3x² は原点を通り、そこが頂点になる。",
    ansFormat: "例：頂点が (0, 0) →  0,0",
    explain:
`y = -3x² は x = 0 のとき y = 0 で、左右対称な下に開く放物線。

一番高い点は原点 (0, 0) なので、頂点は (0, 0)。`
  },

  // --- 開き方と最大・最小 追加 ---
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = x² - 2x + 5 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: 4
    },
    hint: "a > 0 なら上に開き、頂点の y 座標が最小値になる。",
    ansFormat: "例：上に開いて最小値が 4 →  上に開く,4",
    explain:
`y = x² - 2x + 5 は a = 1 > 0 なので「上に開く」。

頂点の y 座標は計算すると 4 になるので、
最小値は 4。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = 3x² + 6x + 1 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: -2
    },
    hint: "a = 3 > 0 なので上に開き、頂点の y 座標が最小値。",
    ansFormat: "例：上に開いて最小値が -2 →  上に開く,-2",
    explain:
`y = 3x² + 6x + 1 は a = 3 > 0 なので「上に開く」。

頂点は x = -1, y = -2 なので、
最小値は -2。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = -2x² + 8x - 1 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最大値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "下に開く",
      extremeType: "最大値",
      extremeValue: 7
    },
    hint: "a < 0 なので下に開き、頂点の y 座標が最大値。",
    ansFormat: "例：下に開いて最大値が 7 →  下に開く,7",
    explain:
`y = -2x² + 8x - 1 は a = -2 < 0 なので「下に開く」。

頂点は (2, 7) なので、
最大値は 7。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = x² - 4 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: -4
    },
    hint: "y = x² - 4 は上に開く放物線。",
    ansFormat: "例：上に開いて最小値が -4 →  上に開く,-4",
    explain:
`y = x² - 4 は a = 1 > 0 なので「上に開く」。

頂点は (0, -4) なので、
最小値は -4。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = -x² + 3 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最大値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "下に開く",
      extremeType: "最大値",
      extremeValue: 3
    },
    hint: "a < 0 なので下に開き、頂点の y 座標が最大値。",
    ansFormat: "例：下に開いて最大値が 3 →  下に開く,3",
    explain:
`y = -x² + 3 は a = -1 < 0 なので「下に開く」。

頂点は (0, 3) なので、
最大値は 3。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = x² - 6x + 5 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: -4
    },
    hint: "頂点が (3, -4) になるので、その y 座標が最小値。",
    ansFormat: "例：上に開いて最小値が -4 →  上に開く,-4",
    explain:
`y = x² - 6x + 5 は a = 1 > 0 なので「上に開く」。

頂点は (3, -4) なので、
最小値は -4。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = x² + 2x - 3 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: -4
    },
    hint: "a > 0 なので上に開き、頂点の y 座標が最小値。",
    ansFormat: "例：上に開いて最小値が -4 →  上に開く,-4",
    explain:
`y = x² + 2x - 3 は a = 1 > 0 なので「上に開く」。

頂点は (-1, -4) なので、
最小値は -4。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = -x² - 4x + 1 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最大値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "下に開く",
      extremeType: "最大値",
      extremeValue: 5
    },
    hint: "a < 0 なので下に開き、頂点の y 座標が最大値。",
    ansFormat: "例：下に開いて最大値が 5 →  下に開く,5",
    explain:
`y = -x² - 4x + 1 は a = -1 < 0 なので「下に開く」。

頂点は (-2, 5) なので、
最大値は 5。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = -2x² + 4x - 1 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最大値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "下に開く",
      extremeType: "最大値",
      extremeValue: 1
    },
    hint: "頂点の y 座標が 1 になることを確認しよう。",
    ansFormat: "例：下に開いて最大値が 1 →  下に開く,1",
    explain:
`y = -2(x - 1)² + 1 と書けるので、
a = -2 < 0 で下に開く。

頂点は (1, 1) なので、
最大値は 1。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = 3x² - 9 のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最小値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "上に開く",
      extremeType: "最小値",
      extremeValue: -9
    },
    hint: "y = 3x² - 9 は上に開き、原点の上下どちらに頂点があるか確認。",
    ansFormat: "例：上に開いて最小値が -9 →  上に開く,-9",
    explain:
`y = 3x² - 9 は a = 3 > 0 なので「上に開く」。

頂点は (0, -9) なので、
最小値は -9。`
  },
  {
    type: "open_extreme",
    label: "開き方と最大・最小",
    question:
`二次関数 y = -3x² のグラフについて、次の問いに答えよ。
(1) グラフは「上に開く」か「下に開く」か。
(2) その最大値を求めよ。`,
    answer: {
      kind: "open_extreme",
      opens: "下に開く",
      extremeType: "最大値",
      extremeValue: 0
    },
    hint: "y = -3x² は原点が一番高い点になる。",
    ansFormat: "例：下に開いて最大値が 0 →  下に開く,0",
    explain:
`y = -3x² は a = -3 < 0 なので「下に開く」。

頂点は (0, 0) なので、
最大値は 0。`
  }
];