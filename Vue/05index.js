let data = {
    input:{
      type:'全部',
      title:''
    },
    menu: [
      {
        type: '主廚的話',
        title: '餐點簡介與相關說明',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '餐具擺盤',
        title: '萬用白瓷',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '開胃餐點',
        title: '中式資料',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '開胃餐點',
        title: '古早味',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '開胃餐點',
        title: '清爽表單',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '風味沙拉',
        title: '沙拉啦好吃',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '風味沙拉',
        title: '沙拉啦好吃',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '風味沙拉',
        title: '沙拉啦好吃',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '風味沙拉',
        title: '沙拉啦好吃',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
      {
        type: '風味沙拉',
        title: '沙拉啦好吃',
        link: 'javascript:;',
        pic: 'https://picsum.photos/id/680/600/400',
      },
    ],
  };

  let vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        // 依照類型分類的資料
      typeMenu() {
        if(this.input.type=='全部') {
            return this.menu
        }else{
            return this.menu.filter(item=>{
                return item.type == this.input.type
            })
        }
      },
      // 依照關鍵字分類的資料
      titleMenu() {
        if(this.input.title){
            return this.typeMenu.filter(item=>{
                let content = item.title.toLowerCase()
                let keyword = this.input.title.toLowerCase()
                return content.indexOf
                ( keyword) !==-1
            })
        }else{
            return this.typeMenu
        }
    },
    },
    methods: {
      inputHandler(){
        if(this.input.title){
          let{type,title}=this.input
          this.menu.push({
            type,
            title,
            link:'javascript:;'
          })
          this.input.title = ''
        }
      }
    }
  });