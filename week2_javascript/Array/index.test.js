
const {
  deepArray,
  searchId,
  findTitle,
  addOtherObj,
  editIdObj,
  delIdObj,
  sortIdObj,
} = require('./index');

const fetch = require('node-fetch');

const resultObj = fetch('https://raw.githubusercontent.com/ReactMaker/api_server/master/db/album.json');

const initData = async () => {
  const response = await resultObj;
  return response;
};

const result2 = {
  id: 14,
  img: 'https://unsplash.it/300/300?image=662',
  title: '地下樂團',
  desc: '快點來加入台灣獨立樂團的無底坑吧！有著各式各樣不同的曲風、創作模式，但共同點就是這些獨立樂團們可是有著大把大把的好歌等著你來聽',
  price: 300,
  discount: true,
};

const result3 = [{
  id: 1,
  img: 'https://unsplash.it/300/300?image=946',
  title: '美好時光1',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 200,
  discount: true
},
{
  id: 2,
  img: 'https://unsplash.it/300/300?image=944',
  title: '美好時光2',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 300
},
{
  id: 3,
  img: 'https://unsplash.it/300/300?image=882',
  title: '美好時光3',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 400
}];

const result4 = [{
  id: 1,
  img: 'https://unsplash.it/300/300?image=946',
  title: '美好時光1',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 200,
  discount: true
},
{ id: 2,
  img: 'https://unsplash.it/300/300?image=944',
  title: '美好時光2',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 300
},
{ id: 3,
  img: 'https://unsplash.it/300/300?image=882',
  title: '美好時光3',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 400
},
{ id: 4,
  img: 'https://unsplash.it/300/300?image=874',
  title: '城市幻影1',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 250,
  discount: true
},
{ id: 5,
  img: 'https://unsplash.it/300/300?image=868',
  title: '城市幻影2',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 300
},
{ id: 6,
  img: 'https://unsplash.it/300/300?image=953',
  title: '城市幻影3',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 350
},
{ id: 7,
  img: 'https://unsplash.it/300/300?image=1053',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 200,
  discount: true
},
{ id: 8,
  img: 'https://unsplash.it/300/300?image=940',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 400
},
{ id: 9,
  img: 'https://unsplash.it/300/300?image=798',
  title: '香草生活2',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 600
},
{ id: 10,
  img: 'https://unsplash.it/300/300?image=1056',
  title: '香草生活3',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 800 },
{ id: 99, img: ' ', title: ' ', desc: ' ', price: 100 },
{ id: 11,
  img: 'https://unsplash.it/300/300?image=785',
  title: 'Spa Life',
  desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
  price: 2659 },
{ id: 12,
  img: 'https://unsplash.it/300/300?image=786',
  title: 'long travel 長途旅遊',
  desc: '抓緊夏天的尾巴，各大音樂祭也隨著天氣陸續登場。精心挑選 10 首適合長途旅行聆聽的歌曲，不管你開車、坐車、騎腳踏車，就是要讓好音樂陪伴你的好心情。',
  price: 500 },
{ id: 13,
  img: 'https://unsplash.it/300/300?image=773',
  title: 'BACK TO THE EARTH',
  desc: '整首歌用烏克麗麗作為基調，讓歌曲蔓延著南洋視覺，讓整顆心都沉澱了下來，若搭配前方的海景，適合一個人的海邊午後下午茶或是夫妻情侶在岸邊泡著腳時聆聽。',
  price: 450
},
{
  id: 14,
  img: 'https://unsplash.it/300/300?image=662',
  title: '地下樂團',
  desc: '快點來加入台灣獨立樂團的無底坑吧！有著各式各樣不同的曲風、創作模式，但共同點就是這些獨立樂團們可是有著大把大把的好歌等著你來聽',
  price: 300,
  discount: true
}];

const result5 = [{
  id: 1,
  img: 'https://unsplash.it/300/300?image=946',
  title: '美好時光1',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 200,
  discount: true
},
{ id: 2,
  img: 'https://unsplash.it/300/300?image=944',
  title: '美好時光2',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 300
},
{ id: 3,
  img: 'https://unsplash.it/300/300?image=882',
  title: '美好時光3',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 400
},
{ id: 4,
  img: 'https://unsplash.it/300/300?image=874',
  title: '城市幻影1',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 250,
  discount: true
},
{ id: 5,
  img: 'https://unsplash.it/300/300?image=868',
  title: '城市幻影2',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 300
},
{ id: 6,
  img: 'https://unsplash.it/300/300?image=953',
  title: '城市幻影3',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 350
},
{ id: 7,
  img: 'https://unsplash.it/300/300?image=1053',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 200,
  discount: true
},
{ id: 8,
  img: 'https://unsplash.it/300/300?image=940',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 400
},
{ id: 9,
  img: 'https://unsplash.it/300/300?image=798',
  title: '香草生活2',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 600
},
{ id: 10,
  img: 'https://unsplash.it/300/300?image=1056',
  title: '香草生活3',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 800
},
{ id: 11,
  img: 'https://unsplash.it/300/300?image=785',
  title: 'Spa Life',
  desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
  price: 2659
},
{ id: 12,
  img: 'https://unsplash.it/300/300?image=786',
  title: '修改title',
  desc: '修改desc',
  price: 500
},
{ id: 13,
  img: 'https://unsplash.it/300/300?image=773',
  title: 'BACK TO THE EARTH',
  desc: '整首歌用烏克麗麗作為基調，讓歌曲蔓延著南洋視覺，讓整顆心都沉澱了下來，若搭配前方的海景，適合一個人的海邊午後下午茶或是夫妻情侶在岸邊泡著腳時聆聽。',
  price: 450
},
{ id: 14,
  img: 'https://unsplash.it/300/300?image=662',
  title: '地下樂團',
  desc: '快點來加入台灣獨立樂團的無底坑吧！有著各式各樣不同的曲風、創作模式，但共同點就是這些獨立樂團們可是有著大把大把的好歌等著你來聽',
  price: 300,
  discount: true
}];

const result6 = [{
  id: 1,
  img: 'https://unsplash.it/300/300?image=946',
  title: '美好時光1',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 200,
  discount: true
},
{
  id: 2,
  img: 'https://unsplash.it/300/300?image=944',
  title: '美好時光2',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 300
},
{
  id: 3,
  img: 'https://unsplash.it/300/300?image=882',
  title: '美好時光3',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 400
},
{
  id: 4,
  img: 'https://unsplash.it/300/300?image=874',
  title: '城市幻影1',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 250,
  discount: true },
{ id: 6,
  img: 'https://unsplash.it/300/300?image=953',
  title: '城市幻影3',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 350 },
{ id: 7,
  img: 'https://unsplash.it/300/300?image=1053',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 200,
  discount: true
},
{ id: 8,
  img: 'https://unsplash.it/300/300?image=940',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 400
},
{ id: 9,
  img: 'https://unsplash.it/300/300?image=798',
  title: '香草生活2',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 600
},
{ id: 10,
  img: 'https://unsplash.it/300/300?image=1056',
  title: '香草生活3',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 800
},
{ id: 11,
  img: 'https://unsplash.it/300/300?image=785',
  title: 'Spa Life',
  desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
  price: 2659
},
{ id: 12,
  img: 'https://unsplash.it/300/300?image=786',
  title: 'long travel 長途旅遊',
  desc: '抓緊夏天的尾巴，各大音樂祭也隨著天氣陸續登場。精心挑選 10 首適合長途旅行聆聽的歌曲，不管你開車、坐車、騎腳踏車，就是要讓好音樂陪伴你的好心情。',
  price: 500
},
{ id: 13,
  img: 'https://unsplash.it/300/300?image=773',
  title: 'BACK TO THE EARTH',
  desc: '整首歌用烏克麗麗作為基調，讓歌曲蔓延著南洋視覺，讓整顆心都沉澱了下來，若搭配前方的海景，適合一個人的海邊午後下午茶或是夫妻情侶在岸邊泡著腳時聆聽。',
  price: 450
},
{ id: 14,
  img: 'https://unsplash.it/300/300?image=662',
  title: '地下樂團',
  desc: '快點來加入台灣獨立樂團的無底坑吧！有著各式各樣不同的曲風、創作模式，但共同點就是這些獨立樂團們可是有著大把大把的好歌等著你來聽',
  price: 300,
  discount: true
}];

const result7_desc = [{
  id: 1,
  img: 'https://unsplash.it/300/300?image=946',
  title: '美好時光1',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 200,
  discount: true
},
{ id: 7,
  img: 'https://unsplash.it/300/300?image=1053',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 200,
  discount: true
},
{ id: 4,
  img: 'https://unsplash.it/300/300?image=874',
  title: '城市幻影1',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 250,
  discount: true
},
{ id: 14,
  img: 'https://unsplash.it/300/300?image=662',
  title: '地下樂團',
  desc: '快點來加入台灣獨立樂團的無底坑吧！有著各式各樣不同的曲風、創作模式，但共同點就是這些獨立樂團們可是有著大把大把的好歌等著你來聽',
  price: 300,
  discount: true
},
{ id: 5,
  img: 'https://unsplash.it/300/300?image=868',
  title: '城市幻影2',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 300
},
{ id: 2,
  img: 'https://unsplash.it/300/300?image=944',
  title: '美好時光2',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 300
},
{ id: 6,
  img: 'https://unsplash.it/300/300?image=953',
  title: '城市幻影3',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 350
},
{ id: 3,
  img: 'https://unsplash.it/300/300?image=882',
  title: '美好時光3',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 400
},
{ id: 8,
  img: 'https://unsplash.it/300/300?image=940',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 400
},
{ id: 13,
  img: 'https://unsplash.it/300/300?image=773',
  title: 'BACK TO THE EARTH',
  desc: '整首歌用烏克麗麗作為基調，讓歌曲蔓延著南洋視覺，讓整顆心都沉澱了下來，若搭配前方的海景，適合一個人的海邊午後下午茶或是夫妻情侶在岸邊泡著腳時聆聽。',
  price: 450
},
{ id: 12,
  img: 'https://unsplash.it/300/300?image=786',
  title: 'long travel 長途旅遊',
  desc: '抓緊夏天的尾巴，各大音樂祭也隨著天氣陸續登場。精心挑選 10 首適合長途旅行聆聽的歌曲，不管你開車、坐車、騎腳踏車，就是要讓好音樂陪伴你的好心情。',
  price: 500
},
{ id: 9,
  img: 'https://unsplash.it/300/300?image=798',
  title: '香草生活2',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 600
},
{ id: 10,
  img: 'https://unsplash.it/300/300?image=1056',
  title: '香草生活3',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 800
},
{ id: 11,
  img: 'https://unsplash.it/300/300?image=785',
  title: 'Spa Life',
  desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
  price: 2659
}];

const result7_esc = [{
  id: 11,
  img: 'https://unsplash.it/300/300?image=785',
  title: 'Spa Life',
  desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
  price: 2659
},
{ id: 10,
  img: 'https://unsplash.it/300/300?image=1056',
  title: '香草生活3',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 800
},
{ id: 9,
  img: 'https://unsplash.it/300/300?image=798',
  title: '香草生活2',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 600
},
{ id: 12,
  img: 'https://unsplash.it/300/300?image=786',
  title: 'long travel 長途旅遊',
  desc: '抓緊夏天的尾巴，各大音樂祭也隨著天氣陸續登場。精心挑選 10 首適合長途旅行聆聽的歌曲，不管你開車、坐車、騎腳踏車，就是要讓好音樂陪伴你的好心情。',
  price: 500
},
{ id: 13,
  img: 'https://unsplash.it/300/300?image=773',
  title: 'BACK TO THE EARTH',
  desc: '整首歌用烏克麗麗作為基調，讓歌曲蔓延著南洋視覺，讓整顆心都沉澱了下來，若搭配前方的海景，適合一個人的海邊午後下午茶或是夫妻情侶在岸邊泡著腳時聆聽。',
  price: 450
},
{ id: 8,
  img: 'https://unsplash.it/300/300?image=940',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 400
},
{ id: 3,
  img: 'https://unsplash.it/300/300?image=882',
  title: '美好時光3',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 400
},
{ id: 6,
  img: 'https://unsplash.it/300/300?image=953',
  title: '城市幻影3',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 350
},
{ id: 14,
  img: 'https://unsplash.it/300/300?image=662',
  title: '地下樂團',
  desc: '快點來加入台灣獨立樂團的無底坑吧！有著各式各樣不同的曲風、創作模式，但共同點就是這些獨立樂團們可是有著大把大把的好歌等著你來聽',
  price: 300,
  discount: true
},
{ id: 5,
  img: 'https://unsplash.it/300/300?image=868',
  title: '城市幻影2',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 300
},
{ id: 2,
  img: 'https://unsplash.it/300/300?image=944',
  title: '美好時光2',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 300
},
{ id: 4,
  img: 'https://unsplash.it/300/300?image=874',
  title: '城市幻影1',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 250,
  discount: true
},
{ id: 7,
  img: 'https://unsplash.it/300/300?image=1053',
  title: '香草生活1',
  desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
  price: 200,
  discount: true
},
{ id: 1,
  img: 'https://unsplash.it/300/300?image=946',
  title: '美好時光1',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 200,
  discount: true
}];

describe('1. deep clone array 輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣', () => {
  it('若輸入為數字，結果得複製陣列並將新數字寫入陣列', () => {
    const parameter = 4;
    expect(deepArray(parameter)).toEqual([1, 2, 3, 4]);
  });
  it('若輸入不為數字，結果會回錯誤訊息', () => {
    const parameter = '4';
    expect(deepArray(parameter)).toBe('data error');
  });
  it('若輸入為空，結果會回錯誤訊息', () => {
    const parameter = '';
    expect(deepArray(parameter)).toBe('data error');
  });
});

describe('2. 搜尋資料中id為特定的資料', () => {
  it('若輸入為數字，結果得到回覆資料', async () => {
    const id = 14;
    const initResult = await initData();
    expect(await searchId(initResult, id)).toEqual(result2);
  });
  it('若輸入為空，結果得到無資料', async () => {
    const id = '';
    const initResult = await initData();
    expect(await searchId(initResult, id)).toBe('no data');
  });
  it('若輸入值條件無結果，結果得到無資料', async () => {
    const id = 20;
    const initResult = await initData();
    expect(await searchId(initResult, id)).toBe('no data');
  });
  it('若輸入值為字串，結果得到無資料', async () => {
    const id = '14';
    const initResult = await initData();
    expect(await searchId(initResult, id)).toBe('no data');
  });
});

describe('3. 模糊搜尋title包含特定文字的資料', () => {
  it('若輸入正確字串，結果得到回覆資料', async () => {
    const parameter = '美好';
    const initResult = await initData();
    expect(await findTitle(initResult, parameter)).toEqual(result3);
  });
  it('若輸入不為字串，結果得到錯誤訊息', async () => {
    const parameter = 0;
    const initResult = await initData();
    expect(await findTitle(initResult, parameter)).toBe('data error');
  });
  it('若輸入字串搜尋不到，結果得到空陣列', async () => {
    const parameter = '找不到';
    const initResult = await initData();
    expect(await findTitle(initResult, parameter)).toBe('no data');
  });
});

describe('4. 新增一筆id=99的資料(內容隨意)，於id=10和id=11中間', () => {
  it('若輸入正確物件，結果新增後的新陣列資料', async () => {
    const parameter = { id: 99, img: ' ', title: ' ', desc: ' ', price: 100 };
    const initResult = await initData();
    expect(await addOtherObj(initResult, parameter)).toEqual(result4);
  });
  it('若輸入為數字，結果會回錯誤訊息', async () => {
    const parameter = 123;
    const initResult = await initData();
    expect(await addOtherObj(initResult, parameter)).toBe('data error');
  });
  it('若輸入若為陣列，結果會回錯誤訊息', async () => {
    const parameter = [1, 2, 3];
    const initResult = await initData();
    expect(await addOtherObj(initResult, parameter)).toBe('data error');
  });
  it('若輸入為字串，結果會回錯誤訊息', async () => {
    const parameter = '123';
    const initResult = await initData();
    expect(await addOtherObj(initResult, parameter)).toBe('data error');
  });
});

describe('5. 修改id為特定的資料', () => {
  it('若輸入正確id，結果會修改該id資料', async () => {
    const id = 12;
    const parameter = { title: '修改title', desc: '修改desc' };
    const initResult = await initData();
    expect(await editIdObj(initResult, id, parameter)).toEqual(result5);
  });

  it('若輸入為字串，結果會回錯誤訊息', async () => {
    const id = '12';
    const parameter = { title: '修改title', desc: '修改desc' };
    const initResult = await initData();
    expect(await editIdObj(initResult, id, parameter)).toBe('id is error');
  });

  it('若輸入修改資訊為空物件，結果會回錯誤訊息', async () => {
    const id = 12;
    const parameter = {};
    const initResult = await initData();
    expect(await editIdObj(initResult, id, parameter)).toBe('data error');
  });

  it('若輸入不存在id，結果會回錯誤訊息', async () => {
    const id = 20;
    const parameter = { title: '修改title', desc: '修改desc' };
    const initResult = await initData();
    expect(await editIdObj(initResult, id, parameter)).toBe('no data');
  });
});

describe('6. 刪除特定id的資料', () => {
  it('若輸入正確id，結果會修改該id資料', async () => {
    const id = 5;
    const initResult = await initData();
    expect(await delIdObj(initResult, id)).toEqual(result6);
  });

  it('若輸入id為字串，結果會回錯誤訊息', async () => {
    const id = '5';
    const initResult = await initData();
    expect(await delIdObj(initResult, id)).toBe('id is error');
  });

  it('若輸入id查無結果，結果會回錯誤訊息', async () => {
    const id = 25;
    const initResult = await initData();
    expect(await delIdObj(initResult, id)).toBe('no data');
  });
});

describe('7. 依照價格排序', () => {
  it('若輸入為desc，結果則針對價格做降序', async () => {
    const sort = 'desc';
    const initResult = await initData();
    expect(await sortIdObj(initResult, sort)).toEqual(result7_desc);
  });

  it('若輸入為esc，結果則針對價格做升序', async () => {
    const sort = 'esc';
    const initResult = await initData();
    expect(await sortIdObj(initResult, sort)).toEqual(result7_esc);
  });

  it('若輸入為空字串，預設結果價格做降序', async () => {
    const sort = '';
    const initResult = await initData();
    expect(await sortIdObj(initResult, sort)).toEqual(result7_desc);
  });

  it('若輸入不為字串，則會回錯誤訊息', async () => {
    const sort = 0;
    const initResult = await initData();
    expect(await sortIdObj(initResult, sort)).toBe('data error');
  });
});