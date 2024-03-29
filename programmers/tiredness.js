//피로도
//level : 2
//categorry : Brute-Force Search
function solution(k, dungeons) {
  var answer = -1;
  let visited = Array.from({ length: dungeons.length }, () => false);

  function DFS(L, tiredness, visit) {
    if (L < dungeons.length && tiredness > 0) {
      for (let i = 0; i < dungeons.length; i++) {
        if (dungeons[i][0] <= tiredness && !visited[i]) {
          visited[i] = true;
          DFS(L + 1, tiredness - dungeons[i][1], visit + 1);
          answer = Math.max(answer, visit + 1);
          visited[i] = false;
        }
      }
    }
  }
  DFS(0, k, 0);
  return answer;
}
