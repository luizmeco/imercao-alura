import fs from 'fs'
import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts (req, res){
    // Chama a função para buscar os posts do banco de dados.
    const posts = await getTodosPosts();
    // Responde à requisição com os dados dos posts em formato JSON e um status HTTP 200 (OK).
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res){
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado)
    }
    catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro:":"falha na requisição"})
    }
}

export async function uploadImagem(req, res){
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost)
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado)
    }
    catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro:":"falha na requisição"})
    }
}