import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RepositoriosService {
  async pegaRepositoriosCSharp() {
    try {
      const url = 'https://api.github.com/users/takenet/repos?sort=created&direction=asc';
      const response = await axios.get(url);
      console.log("RESPONSE.DATA> ", response.data);

      const repositoriosEmCSharp = response.data.filter(r => r.language === "C#");

      const responseParaChatBot = repositoriosEmCSharp.map(r => ({
        imagem: r.owner.avatar_url,
        titulo: r.full_name,
        subtitulo: r.description,
      }))

      return {status: 200, data: responseParaChatBot};

    } catch (e) {
      console.log("ERROR> ", e);
      return {status: 500, message: "Erro ao buscar repositórios"};
    }
  }
}
