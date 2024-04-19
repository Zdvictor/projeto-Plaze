
let cpf = undefined
let confirmacao_senha = undefined


function avisoCadastro() {

	$('#exampleModal').modal('show')

}


function aceitei() {

	document.getElementById('aceitar_termos').value = 1

}

function irCadastro() {


	let verificarMaiorIdade = document.getElementById('aceitar_termos').value

	if (verificarMaiorIdade == 0) {

		let recusado = document.getElementById('recusado')

		recusado.style.transition = '0.4s'
		recusado.innerHTML = 'Oops! Parece que você ainda não concordou com os termos. Por favor, clique no botão acima para prosseguir.'
		recusado.className = 'bg-danger rounded-4 text-white'


	} else {

		$('#exampleModal').modal('hide')
		$('#exampleModalcadastrar').modal('show')

	}


}





 function pesquisarJogo()  {



		let pesquisar = document.getElementById('pesquisa-jogos').value


		if (pesquisar === 'tigre') {


			document.getElementById('fotos').src = 'img/foto6.jpg'
			document.getElementById('fotos').style.width = '350px'
			document.getElementById('fotos').style.height = '150px'
			document.getElementById('fotos').style.marginBottom = '30px'






		

		}


		if (pesquisar === 'coelho') {


			document.getElementById('fotos').src = 'img/foto7.jpg'
			document.getElementById('fotos').style.width = '350px'
			document.getElementById('fotos').style.height = '150px'
			document.getElementById('fotos').style.marginBottom = '30px'



		

		}

		if (pesquisar === 'touro') {


			document.getElementById('fotos').src = 'img/foto8.png'
			document.getElementById('fotos').style.width = '350px'
			document.getElementById('fotos').style.height = '150px'
			document.getElementById('fotos').style.marginBottom = '30px'



		

		}



}


function logar() {

		
		$('#exampleModallogar').modal('show')

	

}



	


//melhorias na estrutura de codigos usando let la em cima 


	class VerificacaoCadastro {
  constructor() {
    // Recupera os dados existentes do localStorage, se houver
    this.cadastrosAnteriores = JSON.parse(localStorage.getItem('cadastros')) || [] ;
    
  }

  ajustarCPF() {
    let ajuste_cpf = document.getElementById('registrar_cpf').value;

    if (ajuste_cpf.length == 3 || ajuste_cpf.length == 7) {
      document.getElementById('registrar_cpf').value += '.';
    } else if (ajuste_cpf.length == 11) {
      document.getElementById('registrar_cpf').value += '-';
    } else if (ajuste_cpf.length === 14) {
      cpf = true;
    } else if (ajuste_cpf.length >= 15) {
      document.getElementById('alerta3').innerHTML = '⚠️⚠️⚠️⚠️';
    }
  }


  ajustarCPFLogin() {

    let ajuste_cpf_login = document.getElementById('cpf').value;

    if (ajuste_cpf_login.length == 3 || ajuste_cpf_login.length == 7) {
      document.getElementById('cpf').value += '.';
    } else if (ajuste_cpf_login.length == 11) {
      document.getElementById('cpf').value += '-';
    } else if (ajuste_cpf_login.length === 14) {
      cpf = true;
    } else if (ajuste_cpf_login.length >= 15) {
      document.getElementById('alerta1').innerHTML = '⚠️⚠️⚠️⚠️';
    }
  }

  confirmarSenha() {
    let senha = document.getElementById('registrar_senha').value;
    let confirmar_senha = document.getElementById('confirmar_senha').value;

    if (senha === confirmar_senha) {
      document.getElementById('alerta_confirmarSenha').remove();
      confirmacao_senha = true;
    } else {
      document.getElementById('alerta_confirmarSenha').innerHTML = '⚠️⚠️⚠️⚠️';
    }
  }

  checar() {
    if (cpf && confirmacao_senha) {
      let cpf_banco_storage = document.getElementById('registrar_cpf').value;
      let senha_banco_storage = document.getElementById('confirmar_senha').value;

      // Adiciona os novos dados aos dados existentes
      this.cadastrosAnteriores.push({ cpf: cpf_banco_storage}, {senha: senha_banco_storage });
     

      // Salva todos os dados no localStorage
      localStorage.setItem('cadastros', JSON.stringify(this.cadastrosAnteriores));



      let dados_indivergentes = document.getElementById('dados_faltantes');
      dados_indivergentes.style.transition = '0.4s';
      dados_indivergentes.innerHTML = 'Sucesso! Cadastro Feito Com Sucesso.';
      dados_indivergentes.className = 'bg-success rounded-4 text-white text-center';

      setTimeout(function() {

        $('#exampleModalcadastrar').modal('hide');

      }, 5000)

        
      
    } else {
      let dados_indivergentes = document.getElementById('dados_faltantes');
      dados_indivergentes.style.transition = '0.4s';
      dados_indivergentes.innerHTML = 'Oops! Parece que há dados divergentes. Por favor, corrija.';
      dados_indivergentes.className = 'bg-danger rounded-4 text-white';
    }
  }


	receber() {
  let cpf = document.getElementById('cpf').value;
  let senha = document.getElementById('senha').value;

  


  // Recupera os cadastros do localStorage
  let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  

  // Verifica se existe um cadastro com o CPF e senha correspondentes
  let usuarioAutenticado = cadastros.find(cadastro => cadastro.cpf === cpf);
   
   
 

	 if (usuarioAutenticado) {
    // Usuário autenticado
    alert('Login bem-sucedido!');
    // Aqui você pode redirecionar o usuário para a página desejada ou realizar outras ações após o login
  } else {
    // Credenciais inválidas
    alert('CPF ou senha inválidos. Tente novamente.');
  }
}



}

let verificarCadastro = new VerificacaoCadastro();




