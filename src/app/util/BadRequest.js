export default (res, mensagem) => res.status(400).json({ error: mensagem });
