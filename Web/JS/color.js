function CopyTextToClipboard(box1) {
    var TextRange = document.createRange();
    TextRange.selectNode(document.getElementById(box1));
    sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(TextRange);
    document.execCommand("copy");
    alert("複製完成！") //此行可加可不加
  }
