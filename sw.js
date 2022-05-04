self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("static").then(cache=>{
      return cache.addALL(["./",".cadastramento.html",".cadastro.html",".criarPerfil1.html",
".criarPerfil2.html",".esqueceu.html",".filiais.html",".grafico.html",".matriz.html",".outrosPerfis.html",".paginaInicial.html",".perfilAdministrativo.html",".perfilUsuario.html",".style.css","style2.css",".termos.html","./imagem/background c.jpg","./imagem/barras grafico.png","./imagem/casa.png","./imagem/geração.png","./imagem/ham.png","./imagem/liga.png","./imagem/Logo Girassol PNG.png","./imagem/perfil circulo.png","./imagem/perfil pessoa.png", "./imagem/icone192.png", "./imagem/icone512.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response=> {return response || 
        fetch(e.request);
     })
      
    );
  
});