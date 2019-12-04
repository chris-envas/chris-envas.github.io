const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "请回答1988(悲伤姻缘)",
        artist: '晚霞',
        url: 'http://antiserver.kuwo.cn/anti.s?format=mp3|aac&rid=75731359&type=convert_url&response=res',
        cover: 'http://p4.music.126.net/0GuMykiQNW_r6uQ_6wv7XQ==/109951163949085548.jpg?param=200y200',
      },
    ]
});