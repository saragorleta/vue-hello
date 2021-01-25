var saluto=new Vue ({
  el: "#root",
  data: {
    messaggio: 'Buongiorno mondo',
    salutoVue: 'Hello world!!'
  }
});

var salutoColorato=new Vue ({
  el: "#root2",
  data: {
    color:'red'
  }
});

var salutoImmagine=new Vue ({
  el: "#root3",
  data: {
    colore:'green',
    immagine:'https://www.immaginigratis.biz/wp-content/uploads/2018/11/Buongiorno-201-800x670.jpg'
  }
});
