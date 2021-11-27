/* [Problem] 
Bir hastanede, hastalarının telefonon numarasının son iki hanesi sisteme kaydedilmiştir.
Son hanesi randevuya gelecekleri gün ile aynıdır. Buna göre sisteme girilen 7 kişiden kaçı 
perşembe günü yani haftanın 4.günü muayene gelecektir?
not: gün 0 olamaz.. ancak numarasının sonu 0 olanları 1'e aktarmalısınız..
*/
// ▣ Girdi Örneği 1
// 3
// 25 23 11 47 53 17 33

// ▣ Çıktı Örneği 1
// 3

// ▣ Girdi Örneği 2
// 1
// 01 20 54 30 87 91 30

// ▣ Çıktı Örneği 2
// 5


function solution(day, arr) {
  let answer = 0;

  for (let x of arr) {
    if (x % 10 === 0) { // numarasının sonu 0 olanları 1 arttırıyoruz.. ve pazartesine(1)yönlendiriyoruz.
      answer++;
    }
    else if ((x % 10 === day) && (day > 0)) { // gün 0 olamaz.. x sayısını 10 a bölüyoruz kalan değeri gün ile eşitliyoruz. 
      answer++;
    }
  }
  return answer;
}

day = 1;
arr = [12, 20, 01, 30, 87, 91, 30]
//arr = [24, 23, 11, 47, 53, 17, 33];
console.log(solution(day, arr));
