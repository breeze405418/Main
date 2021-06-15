let data = {
    input:{
      type:null,
      title:null,
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
       typeList(){
         let obj = {
           sort:[],
           map:{}
         }
         this.menu.forEach(({type,title,link}, index)=>{
           if(!obj.map[type]){
             obj.sort.push(type)
             obj.map[type]={
              sort:[],
              map:{}

             }
             obj.map[type].sort.push(title)
             obj.map[type].map[title]={index,link}
           }
         })
         return obj
       },
       titleList(){
         this.input.title=null
         if(this.input.type){
           return this.typeList.map[this.input.type]
         }else{
           return []
         }
       },
       content(){
         if(this.input.title){
           return this.titleList.map[this.input.title]
         }else{
           return null
         }
       }
    },

  });