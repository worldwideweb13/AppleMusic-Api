//---------------------------
// クリックしたときの動き
//---------------------------


let playNum;

//パラメーター
$('.btn').on('click', function(){
  $('.modal').fadeOut(2000);

  const params = {
    lang:'ja_JP',
    entry:'music',
    media:'music',
    entity:'musicTrack',
    country:'JP',
    term:$('#artist-name').val(),
    limit:10
  }; 

  $.getJSON("https://itunes.apple.com/search", params, function (data) {
    
    let listNum = 4;

    for(let i=0 ;i < listNum; i++){
      const trackName = data.results[i].trackName;
      const artWork = data.results[i].artworkUrl100;           
      $('.song-card__name').eq(i).html(trackName);
      $('.song-card__image').eq(i).attr('src',artWork);
    }

    // 乱数生成
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    //AudioSourceに曲を設定。 
    playNum = getRandomInt(1, listNum - 1);
    const song = data.results[playNum].previewUrl;
    $('#audio').attr('src',song);
    $('#audio')[0].play();
  });

})

$('.song-card__item').on("click",function(){
  const index = $(this).index();
  if(index === playNum){
    alert("正解!");
  }else{
    alert("不正解!");
  }
})


    //モーダルを非表示する

    //曲の画像と曲名を設定


    //正解を設定して音を鳴らす

