const btnVerMais = document.getElementById('ver-mais');
      const conteudoAdicional = document.getElementById('conteudo-adicional');

      btnVerMais.addEventListener('click', function() {
          if (conteudoAdicional.style.display === 'none') {
              conteudoAdicional.style.display = 'block';
              btnVerMais.textContent = 'Ver menos';
          } else {
              conteudoAdicional.style.display = 'none';
              btnVerMais.textContent = 'Ver mais';
          }
      });