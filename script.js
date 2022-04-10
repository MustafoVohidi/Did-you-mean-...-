
function distance (s, t) {
  const m = s.length + 1
  const n = t.length + 1
  const d = Array(m).fill(0).map(() => Array(n).fill(0))
  for (let i = 1; i < m; i++) { d[i][0] = i }
  for (let j = 1; j < n; j++) { d[0][j] = j }
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      )
    }
  }
  return d[m - 1][n - 1]
}

function Dictionary (words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  let minValue = Infinity
  let minWord
  this.words.forEach(cur => {
    const d = distance(cur, term)
    if (d < minValue) {
      minValue = d
      minWord = cur
    }
  })
  return minWord
}
