import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RepositoriosService {
  async pegaRepositoriosCSharp() {
    try {
      const url = 'https://api.github.com/orgs/takenet/repos?per_page=6&sort=created&direction=asc';
      const headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'NestJS-App',
      };

      const response = await axios.get(url, { headers });
      console.log("RESPONSE.DATA> ", response.data);

      const repositoriosEmCSharp = response.data.filter(r => r.language === 'C#');

      const responseParaChatBot = repositoriosEmCSharp.map(r => ({
        imagem: r.owner.avatar_url,
        titulo: r.full_name,
        subtitulo: r.description || 'Sem descrição',
      }));

      return { status: 200, data: responseParaChatBot };

    } catch (e) {
      console.error("ERROR> ", e.message);
      return {
        status: 500,
        message: 'Desculpe! 😞 Algo inesperado ocorreu e não consigo te atender no momento.Por favor, tente novamente mais tarde.',
        message_alert: e.message,
      };
    }
  }
}
