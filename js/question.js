// 質問とボタンのテキスト
const questions = [
    { question: "映画は好きですか？", button1: "はい", button2: "いいえ" },
    { question: "ミュージカルは好きですか？", button1: "YES", button2: "NO" },
    { question: "エンドロールまで座れる自信は？", button1: "ある", button2: "ない" },
    { question: "突然歌い出していいですか？", button1: "はい", button2: "いいえ" },
    { question: "馬が出てきても良いですか？", button1: "YES", button2: "NO" },
    { question: "空中ブランコは好きですか？", button1: "はい", button2: "いいえ" },
    { question: "赤いハットに思い出は？", button1: "ある", button2: "ない" },
    { question: "個性を大事にしたい？", button1: "したい", button2: "してほしい" },
    { question: "”This Is Me”？", button1: "YES", button2: "NO" },
    { question: "人生最高のショーにしませんか？", button1: "YES", button2: "NO" },
];

// 人物画像のクラス名配列
const peopleClasses = [
    'primary-people',
    'secondary-people',
    'tertiary-people',
    'quaternary-people',
    'quinary-people',
    'senary-people',
    'septenary-people',
    'octonary-people',
    'nonary-people',
    'denary-people'
];

let currentQuestionIndex = 0;

// 質問とボタンのテキストを更新する関数
function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").textContent = currentQuestion.question;
        document.getElementById("button1").textContent = currentQuestion.button1;
        document.getElementById("button2").textContent = currentQuestion.button2;
    } else {
        endGame();
    }
}

// 人物画像を表示する関数
function showPeopleImage() {
    if (currentQuestionIndex < peopleClasses.length) {
        const peopleElement = document.querySelector(`.${peopleClasses[currentQuestionIndex]} .people_image`);
        if (peopleElement) {
            peopleElement.style.display = 'block';
        }
    }
}

// ボタンクリック時の処理
function handleButtonClick() {
    showPeopleImage();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        updateQuestion();
    } else {
        endGame();
    }
}

// ゲーム終了時の処理
function endGame() {
    const mainContent = document.querySelector('.main_content');
    mainContent.innerHTML = '<p class="end-message">あなたにオススメの映画は<br>「<a href="https://www.20thcenturystudios.jp/movies/greatest-showman" target="_blank">グレイテスト・ショーマン</a>」<br>です！！！</p><p class="end-note">※ 何回やっても必ず同じ結果になりますので、<br>ご了承ください。</p><button type="button" onclick="window.location.reload();" class="reload-button">もういちど試す</button>';
    const endMessage = document.querySelector('.end-message');
    const endNote = document.querySelector('.end-note');
    setTimeout(() => {
        endMessage.classList.add('fade-in');
        endNote.classList.add('fade-in');
    }, 100);
}

// イベントリスナーの設定
document.getElementById("button1").addEventListener("click", handleButtonClick);
document.getElementById("button2").addEventListener("click", handleButtonClick);

// 初期質問の表示
updateQuestion();