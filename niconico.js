// ==UserScript==
// @name         ニコニコ動画
// @namespace    
// @version      0.1
// @description  ニコニコ動画をカスタマイズしていく
// @include      https://www.nicovideo.jp/*
// @include      http://seiga.nicovideo.jp/*
// @include      https://live.nicovideo.jp/*
// @include      https://live2.nicovideo.jp/*
// @include      https://ch.nicovideo.jp/*
// ==/UserScript==

(function() {
    'use strict';
/* 動画 */
    // プレミアム会員バナーの非表示
    const pHeaderV1 = document.querySelector('.PremiumHeader');
    const pHeaderV2 = document.querySelector('#premiumHeader');
    if(pHeaderV1){
      pHeaderV1.style.display = 'none';
    }
    if(pHeaderV2){
      pHeaderV2.style.display = 'none';
    }

    // 検索ボックスにフォーカス
    const videoFocus = document.querySelector('input[placeholder="動画を検索"]');
    if(videoFocus){
      videoFocus.focus();
    }

/* 静画 */
    // 検索ボックスにフォーカス
    const illustMangaFocus = document.querySelector('input[placeholder="イラスト・マンガを検索"]');
    if(illustMangaFocus){
      illustMangaFocus.focus();
    }
    const illustFocus = document.querySelector('input[placeholder="イラストを検索"]');
    if(illustFocus){
      illustFocus.focus();
    }
    const MangaFocus = document.querySelector('input[placeholder="マンガを検索"]');
    if(MangaFocus){
      MangaFocus.focus();
    }

/* 生放送 */
    // プレミアム会員バナーの非表示
    const pHeaderLive = document.querySelector('div[class^="___Nico-premiumBanner___"]');
    if(pHeaderLive){
      pHeaderLive.style.display = 'none';
    }

    // 検索ボックスにフォーカス
    const liveFocus = document.querySelector('input[placeholder="番組を探す"]');
    if(liveFocus){
      liveFocus.focus();
    }

/* チャンネル */
    // プレミアム会員バナーの非表示
    const pHeaderCh = document.querySelector('.Nico-premiumBanner');
    if(pHeaderCh){
      pHeaderCh.style.display = 'none';
    }

    const chFocus = document.querySelector('input[placeholder="チャンネルを検索"]');
    if(chFocus){
      chFocus.focus();
    }
    // Your code here...
})();
