import Button from "./Button";
import "../styles/contatoForm.css";
import { useState } from "react";

const ContatoForm = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] =useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: email,
      message: message,
    };

    try {
      const response = await fetch("api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2NDc1MjQ1NDI4MjAxMTY0NjEyIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJ2aHVwZWRyb3R0aUBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJUWkM4TkFHc2w3dDVGS1o0QTN3UF93IiwibmJmIjoxNzMxODc0MTgxLCJpYXQiOjE3MzE4NzQ0ODEsImV4cCI6MTczMTg3ODA4MSwianRpIjoiOGRhZGNmYzdlNGZhNjFmYzUwMWVkOGZlOTZiODQwN2U5OGFhNzI4OSJ9.IU5QWQ7FpRNaNgN9tQTCXAzgUMxuMUswZYm5EJuzvHI7HiVRFmW1RHzAWXLGsBvwUAXQ9cuDWH6WTYHqZ_vOedLRyPJX5UJSnWIxO9uoAq_-AtOctCpXMWVKALnNkD3l-Q-akXH-oqtVylFs85lM8siNLFEB_tO6TGQJpYupSla48db23sR7EH49085pbPQsMz3yNKVmyXb9PvzGKtzcen2xOmvgL7UcujOfVCwXrQAvKYkNqUGAH8Vw33Pm8-s3u-grb_uqkhmWfHYhNsB5FpRBXAtJl7imFaO717V1tg6Xnw2DfQjFkk7QFGfonkIWjeiGhCTlp0pFL532ITV0vw"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.success || "E-mail enviado com sucesso!");
        setEmail(""); 
        setMessage("");
      } else {
        alert("Erro ao enviar o e-mail. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Erro ao enviar e-mail. Tente novamente.");
    }
  };
  
  return (
    <section className="py-xl">
      <div className="container flex justify-center">
        <div className="text-center gap-1">
          <header>
            <h4 style={{ color: "var(--primary-color)" }}>Envie sua dúvida</h4>
            <h2>Entre em contato</h2>
            <p className="second-text-color">
              Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento,
              uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder. 😎
            </p>
          </header>
          <form className="form flex flex-col gap-1 py-lg" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Seu melhor Email"
              className="input-field"
              required
              value={email} // Controlando o valor
              onChange={(e) => setEmail(e.target.value)} // Atualizando o estado
            />
            <input
              type="text"
              placeholder="Motivo do contato"
              className="input-field"
              required
              value={message} // Controlando o valor
              onChange={(e) => setMessage(e.target.value)} // Atualizando o estado
            />
            <Button text="Enviar" key="btn-submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContatoForm;