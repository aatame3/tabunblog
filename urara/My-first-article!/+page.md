---
title: 'My first article!'
image: '/My-first-article!/mainpic.webp'
alt: 'りんご飴を食べる僕'
created: 2023-11-19
updated: 2023-11-19
tags:
  - 'Hello World'
---
Uraraとかいうやつ、使ったことなかったけどデザイン綺麗でいいね！<br>
軽い備忘録とかによさそう！<br>
Markdownポン置きで記事になるのすごい<br>
ところでiframeは使えるのかな？<br>
<style>
.div-round {
	overflow: hidden;
	position: relative;
	z-index: 10;
	-webkit-border-radius: 20px;
	border-radius: 20px;
}

.div-round::before {
	display: block;
	content: "";
}

.iframe-round {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	border: 0;
	-webkit-border-radius: 20px;
	border-radius: 20px;
}
</style>

<div class="div-round" style="width: 640px; height: 360px;">
    <iframe class="iframe-round" allow="autoplay; encrypted-media; fullscreen" src="https://www.youtube.com/embed/s0NME1GfbIc?si=onim_53PZJy0RcYc"></iframe>
</div>
使えたしなんならstyleも使えた〜！！！！！！マークダウンわかんね〜〜〜