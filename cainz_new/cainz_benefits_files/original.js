// HTMLの読み込み完了後にスクリプトを実行
document.addEventListener('DOMContentLoaded', function() {
  
  // --- フローティングボックスの処理 ---
  const floatingBox = document.getElementById('floating-box');
  const closeButton = document.getElementById('close-button');
  const targetHeading = document.getElementById('h2-cainz-frame');

  if (floatingBox && closeButton && targetHeading) { // 要素が存在する場合のみ実行
    // スクロールイベントでフローティングボックスをフェードアウトさせる処理
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY; // 現在のスクロール位置を取得
      const headingPosition = targetHeading.getBoundingClientRect().top + window.scrollY; // 見出しの位置を取得
      const screenHeight = window.innerHeight; // 画面の高さ

      // 見出しに近づくにつれてフローティングボックスの透明度を調整
      if (scrollPosition < headingPosition - screenHeight / 2) {
        floatingBox.style.opacity = '1'; // 通常表示
      } else if (scrollPosition < headingPosition) {
        // 見出しに近づくにつれて透明度を変化させる
        const opacity = (headingPosition - scrollPosition) / (screenHeight / 0.2); // 透明度の調整
        floatingBox.style.opacity = opacity.toString();
      } else {
        floatingBox.style.opacity = '0'; // 完全に見えなくする
      }
    });

    // バツボタンでフローティングボックスを閉じる処理
    closeButton.addEventListener('click', function() {
      floatingBox.style.display = 'none'; // ボックスを非表示にする
    });
  }

  // --- 入力フィールドとチェックボックスの処理を追加 ---
  const cardNumberInput = document.getElementById('cardNumber');
  const nameInput = document.getElementById('name');
  const checkbox = document.getElementById('checkbox');
  const submitButton = document.getElementById('submitButton');

  // 入力フィールドとチェックボックスの状態を監視する関数
  function checkFormValidity() {
    const isCardNumberFilled = cardNumberInput.value.trim() !== ''; // カード番号が入力されているか
    const isNameFilled = nameInput.value.trim() !== ''; // 名前が入力されているか
    const isCheckboxChecked = checkbox.checked; // チェックボックスがチェックされているか

    // 全てが満たされている場合にボタンを有効化
    if (isCardNumberFilled && isNameFilled && isCheckboxChecked) {
      submitButton.disabled = false;  // ボタンを有効にする
    } else {
      submitButton.disabled = true;   // ボタンを無効にする
    }
  }

  // 各入力フィールドとチェックボックスにイベントリスナーを追加
  cardNumberInput.addEventListener('input', checkFormValidity);
  nameInput.addEventListener('input', checkFormValidity);
  checkbox.addEventListener('change', checkFormValidity);





  // --- タブ切り替えの処理 ---
  const tabLabels = document.querySelectorAll('.benefits_tabs label');
  const tabContents = document.querySelectorAll('.benefits_contents_step3 > div');

  // 初期状態: 最初のタブをアクティブに設定
  showContent('benefits_tab_04');

  // 各タブクリック時の処理
  tabLabels.forEach(function(label) {
      label.addEventListener('click', function() {
          const targetTabId = this.getAttribute('for');
          showContent(targetTabId);
      });
  });

  // タブに対応するコンテンツを表示する関数
  function showContent(tabId) {
      // 全てのコンテンツを非表示にする
      tabContents.forEach(function(content) {
          content.style.display = 'none';  // 全てのコンテンツを非表示
      });

      // すべてのタブのアクティブスタイルを削除
      tabLabels.forEach(function(label) {
          label.classList.remove('active-tab');  // 全てのタブのアクティブスタイルを削除
      });

      // 対象のタブのコンテンツを表示
      const contentClass = tabId.replace('benefits_tab', 'benefits_content');
      const targetContent = document.querySelector(`.${contentClass}`);

      // コンテンツが存在する場合のみ表示
      if (targetContent) {
          targetContent.style.display = 'block';  // 対象のコンテンツのみ表示
      }

      // 対象のタブにアクティブスタイルを追加
      const targetLabel = document.querySelector(`label[for=${tabId}]`);
      if (targetLabel) {
          targetLabel.classList.add('active-tab');  // 対象のタブにアクティブスタイルを追加
      }
  }

});