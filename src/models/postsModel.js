// Importa uma função para conectar ao banco de dados.
import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Realiza a conexão ao banco de dados usando a string de conexão fornecida em uma variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para buscar todos os posts na coleção "posts" do banco de dados "imersao-alura".
export async function getTodosPosts() {
    // Obtém uma referência ao banco de dados.
    const db = conexao.db("imersao-alura");
    // Obtém uma referência à coleção "posts".
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array.
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
  // Obtém uma referência ao banco de dados.
  const db = conexao.db("imersao-alura");
  // Obtém uma referência à coleção "posts".
  const colecao = db.collection("posts");
  // Retorna todos os documentos da coleção como um array.
  return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost){
  
  const db = conexao.db("imersao-alura");
  
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}

export async function deletarPost(id){
  
  const db = conexao.db("imersao-alura");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id)
  return colecao.deleteOne({_id: new ObjectId(objID)})
}
