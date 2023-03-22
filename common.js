let quiz = [ //問題を表示する
  {
    quiz: 'カメラのF値を小さくするとどうなる？',
    answer: [
      { answer: '明るくなり、ピントが合う範囲が広くなる', correct: false },
      { answer: '暗くなり、ピントが合う範囲が広くなる', correct: false },
      { answer: '暗くなり、ピントが合う範囲が狭くなる', correct: false },
      { answer: '明るくなり、ピントが合う範囲が狭くなる', correct: true },
    ]
  },
  {
    quiz: 'ISOを上げたらどうなる？',
    answer: [
      { answer: '明るくなり、画質も良くなる', correct: false },
      { answer: '暗くなり、画質も悪くなる', correct: false },
      { answer: '明るくなるが、画質は悪くなる', correct: true },
      { answer: '暗くなるが、画質は良くなる', correct: false },
    ]
  },
  {
    quiz: '水が糸のように繋がった滝の写真を撮るにはカメラの設定をどうしたらいいか',
    answer: [
      { answer: 'シャッタースピードを遅くする', correct: true },
      { answer: 'ISOを上げる', correct: false },
      { answer: 'シャッタースピードを早くする', correct: false },
      { answer: 'F値を上げる', correct: false },
    ]
  },
  {
    quiz: 'スノークロスフィルターは光源を何本にすることができるか',
    answer: [
      { answer: '4本', correct: false },
      { answer: '6本', correct: true },
      { answer: '8本', correct: false },
      { answer: '16本', correct: false },
    ]
  },
  {
    quiz: 'デジタルカメラに分類されないものはどれか',
    answer: [
      { answer: '一眼レフカメラ', correct: false },
      { answer: 'ミラーレス一眼カメラ', correct: false },
      { answer: 'フィルムカメラ', correct: true },
      { answer: 'コンパクトデジタルカメラ', correct: false },
    ]
  },
  {
    quiz: 'この中で一番大きいイメージセンサーはどれか',
    answer: [
      { answer: 'APS-C', correct: false },
      { answer: '中判', correct: true },
      { answer: 'フルサイズ', correct: false },
      { answer: 'マイクロフォーサーズ', correct: false },
    ]
  },
  {
    quiz: 'ヒストグラムが右側に集中している写真はどんな写真か',
    answer: [
      { answer: 'ピントがあっていない', correct: false },
      { answer: '暗すぎる', correct: false },
      { answer: 'ぶれている', correct: false },
      { answer: '明るすぎる', correct: true },
    ]
  },
  {
    quiz: '被写体を下から写したアングルを何というか',
    answer: [
      { answer: 'ローアングル', correct: true },
      { answer: 'アイレベル', correct: false },
      { answer: 'ハイアングル', correct: false },
      { answer: 'アンダーアングル', correct: false },
    ]
  },
  {
    quiz: 'カメラで写真を撮るときのAモード(Avモード)とは何の略か',
    answer: [
      { answer: 'オートモード', correct: false },
      { answer: '絞り優先モード', correct: true },
      { answer: 'プログラムオートモード', correct: false },
      { answer: 'シャッタースピード優先モード', correct: false },
    ]
  },
  {
    quiz: 'この中で現在デジタルカメラを製造していない企業はどれか',
    answer: [
      { answer: 'Panasonic', correct: false },
      { answer: 'SONY', correct: false },
      { answer: 'Nikon', correct: false },
      { answer: 'SHARP', correct: true },
    ]
  },

]


let quizNum = 0; // スタート位置
let correctnamber = 0; // 正解数


$(document).ready(function () {
  quiz = arrayShuffle(quiz) // 問題シャッフル

  let quizLength = quiz.length - 1



  quizShow(quizNum);


  //答えがクリックされた時の処理
  $('.quiz-answer').click(function () {
    let correct = $(this).attr('data-correct')

    if (correct === 'true') {
      //正解をクリックしたとき
      $('#correct').addClass('correct-true')

      setTimeout(function () {
        $('#correct').removeClass('correct-true')
        $(this).blur();
      }, 2000);
      correctnamber = correctnamber + 1;


    } else {
      //不正解をクリックしたとき
      $('#correct').addClass('correct-false')
      setTimeout(function () {
        $('#correct').removeClass('correct-false')
      }, 2000);
    }

    if (quizLength === quizNum) {
      setTimeout(function () {
        window.location.href = '../result/result.html?result=' + correctnamber;
      }, 2000);
    } else {

      //次のクイズの番号にする
      quizNum = quizNum + 1;

      //次の問題を表示する
      setTimeout(function () {
        quizShow(quizNum);
      }, 1500);
    }
  })
});

//クイズを表示する
function quizShow(num) {
  $('#quiz-num').html(`${num + 1}問目 /${quiz.length}問`);
  $('#quiz-str').html(quiz[num].quiz);

  $('#button01').html(quiz[num].answer[0].answer).attr('data-correct', quiz[num].answer[0].correct);
  $('#button02').html(quiz[num].answer[1].answer).attr('data-correct', quiz[num].answer[1].correct);
  $('#button03').html(quiz[num].answer[2].answer).attr('data-correct', quiz[num].answer[2].correct);
  $('#button04').html(quiz[num].answer[3].answer).attr('data-correct', quiz[num].answer[3].correct);

}

function arrayShuffle(array) {
  for (let i = (array.length - 1); 0 < i; i--) {

    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}
