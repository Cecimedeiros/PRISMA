import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import "./login.css"; // importa o CSS específico da página

const Login = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Matrícula: ${matricula}\nSenha: ${senha}`);
    // Aqui você pode implementar a lógica real de autenticação futuramente
  };

  return (
    <div className="pagina-login">
      <Header />

      <main className="container-login">
        <div className="card-login">
          <div className="header-login">
            <img
              src="/assets/prima.png"
              alt="Assistente Prisma"
              className="imagem-prisma"
            />
            <div className="mensagem-prisma">
              <p>
                Olá Policial! 👮‍♀️ <strong>Sou a Prisma</strong>, sua assistente
                da Polícia Civil de Pernambuco. Para ter acesso à área
                institucional informe suas credenciais.
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="form-login">
            <input
              type="text"
              placeholder="Matrícula"
              className="input-login"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="input-login"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <div className="links-login">
              <button
                type="button"
                onClick={() => alert("Cadastro de usuário em breve.")}
              >
                Cadastrar usuário
              </button>
              <button
                type="button"
                onClick={() => alert("Recuperação de senha em breve.")}
              >
                Esqueci a senha
              </button>
            </div>

            <button type="submit" className="botao-login">
              ENTRAR
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
