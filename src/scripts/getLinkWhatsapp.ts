export function gerarLinkWhatsApp(
  categoriaCarro?: string,
  localRetirada?: string,
  horaRetirada?: string,
  localDevolucao?: string,
  horaDevolucao?: string
): string {
  const baseURL = "https://api.whatsapp.com/send"; // Base URL do WhatsApp
  const numeroTelefone = "5544991038369"; // Substitua pelo número de telefone com código do país

  // Cria a mensagem com os parâmetros fornecidos
  const mensagem = [
    "*Contato para reserva de carro*",
    "",
    categoriaCarro ? `*Categoria*: ${categoriaCarro}` : null,
    "",
    localRetirada
      ? `📌 *Local de retirada*: ${localRetirada} - 🕔 ${horaRetirada || ""}`
      : null,
    "",
    localDevolucao
      ? `📌 *Local de devolução*: ${localDevolucao} - 🕔 ${horaDevolucao || ""}`
      : null,
  ]
    .filter(Boolean) // Remove valores nulos ou indefinidos
    .join("\n"); // Junta as mensagens com uma quebra de linha

  // Codifica a mensagem para ser usada na URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Retorna o link completo
  return `${baseURL}?phone=${numeroTelefone}&text=${mensagemCodificada}`;
}
