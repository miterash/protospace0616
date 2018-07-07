$(document).on("turbolinks:load", function() {
//リロードせずに読み込める
$(function (){
  $('#main_image_uploader').on('change',function(e) {
//ファイルが選択されたとき
  $('#chosen').remove();
//ファイルの中身を削除(何度もプレビューできるように)
    var preview = $("#chosen")
//選んだファイルの中身を変数previewに代入
    var file    = e.target.files[0];
//選んだファイルの情報を取得
    var reader  = new FileReader();
//fileReaderを用いると、ユーザのコンピュータ内にあるファイル（もしくはバッファ上の生データ）を
//Web アプリケーションから非同期的に読み込むことが出来ます。らしい

    reader.onloadend = function () {
//FileReader.onloadend - 読み込みが終了した時に発火するイベント
    preview.src = reader.result;
//srcでURLを操作、reader.resultで読み込んだファイルの内容を返します。
//このプロパティは読み込みが終了した後に有効になり、プロパティのデータ型は読込処理を行うメソッドによって変わります。
    $("#result").attr("src", preview.src);
//#resultに対して、attr()の引数1で指定したsrcに、引数2で指定したpreview.srcの値を設定します。
//
  }

  if (file) {
//もしファイルの中身があれば
    reader.readAsDataURL(file);
//readAsDataURL メソッドは、指定されたBlobないしFileオブジェクトを読み込むために使用します。
//読込処理が終了するとreadyStateはDONEに変わり、loadendイベントが生じます。
//それと同時にresultプロパティにはファイルのデータを表す、
//base64エンコーディングされたdata:URLの文字列が格納されます。らしい
  } else {
    preview.src = "";
//srcのURLを空にする
  }
  });
});
});
