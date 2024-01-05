'use client'
import Image from "next/image";
import { Like } from "./like";

interface FotoPerfilProps {
  fonte: string;
  descricao: string;
}

interface UsernameProps {
  name: string;
}

interface LocalizacaoProps {
  name: string;
}

interface FotoProps {
  fonte: string;
  descricao: string;
}


interface ComentarioProps {
  fonte: string;
  descricao: string;
}

function FotoPerfil({ fonte, descricao }: FotoPerfilProps) {
  return (
    <Image
      className="rounded-full w-20 h-20"
      src={fonte}
      alt={descricao}
      width={200}
      height={60}
    />
  );
}

function Username({ name }: UsernameProps) {
  return <p className="text-2xl font-medium text-black">{name}</p>;
}

function Localizacao({ name }: LocalizacaoProps) {
  return <p className="text-slate-500 ">{name}</p>;
}

function Foto({ fonte, descricao }: FotoProps) {
  return <Image src={fonte} alt={descricao} width={1000} height={100} />;
}

function Comentario({ fonte, descricao }: ComentarioProps) {
  return (
    <button className="relative overflow-hidden border-none p-0 bg-transparent transform transition-transform duration-100 hover:scale-105">
      {" "}
      <Image src={fonte} alt={descricao} width={60} height={40}></Image>
    </button>
  );
}

export default function Postagem() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <div className="flex items-center justify-start p-4 gap-4">
          <FotoPerfil
            fonte="http://wendellcarvalho.com.br/wp-content/webp-express/webp-images/uploads/2023/07/Saiba-o-que-e-uma-pessoa-temperamental-e-como-esse-comportamento-pode-afetar-diferentes-areas-da-vida.jpg.webp"
            descricao="Homem de óculos"
          ></FotoPerfil>
          <div>
            <Username name="Jorge Lopes"></Username>
            <Localizacao name="Recife, Pernambuco"></Localizacao>
          </div>
        </div>
        <Foto
          fonte="https://images.ecycle.com.br/wp-content/uploads/2022/10/05145956/david-mullins-3Jnws1iRSwk-unsplash-scaled.jpg.webp"
          descricao="Pôr-do-Sol"
        ></Foto>
        <div className="flex items-center justify-start pb-4 pt-4 gap-4">
          <Like
            fonte1="https://icons.veryicon.com/png/o/internet--web/prejudice/like-20.png"
            descricao="Ícone de Like"
            fonte2="https://icons.veryicon.com/png/o/internet--web/flatten-icon/like-19.png"
          ></Like>
          <Comentario
            fonte="https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png"
            descricao="Ícone de Comentario"
          ></Comentario>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-start p-4 gap-4">
          <FotoPerfil
            fonte="https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2575.jpg?w=996&t=st=1704457628~exp=1704458228~hmac=c7632b1dd7451149c381cc2e25da7a9d151016082b63d4e2dd4dbb7645fb2428"
            descricao="Mulher sorrindo"
          ></FotoPerfil>
          <div>
            <Username name="Melissa Santos"></Username>
            <Localizacao name="São  Paulo, São Paulo"></Localizacao>
          </div>
        </div>
        <Foto
          fonte="https://img.freepik.com/fotos-gratis/vista-aerea-criativa-da-paisagem-urbana_23-2148975292.jpg?w=996&t=st=1704459001~exp=1704459601~hmac=1c2b62006bdab886b7808ca26708fb7a6a7f213c1e183ea69d5f26cc97826882"
          descricao="Ruas"
        ></Foto>
        <div className="flex items-center justify-start pb-4 pt-4 gap-4">
          <Like
            fonte1="https://icons.veryicon.com/png/o/internet--web/prejudice/like-20.png"
            descricao="Ícone de Like"
            fonte2="https://icons.veryicon.com/png/o/internet--web/flatten-icon/like-19.png"
          ></Like>
          <Comentario
            fonte="https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png"
            descricao="Ícone de Comentario"
          ></Comentario>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-start p-4 gap-4">
          <FotoPerfil
            fonte="https://img.freepik.com/fotos-gratis/feche-o-retrato-da-bela-adolescente_23-2149153353.jpg?w=996&t=st=1704458038~exp=1704458638~hmac=bb7de05c0690f1f524c71ab94e2290613fabfd5d196693323f802f9c5d2fe20c"
            descricao="Homem sorrindo"
          ></FotoPerfil>
          <div>
            <Username name="Felipe Pereira"></Username>
            <Localizacao name="Belo Horizonte, Minas Gerais"></Localizacao>
          </div>
        </div>
        <Foto
          fonte="https://img.freepik.com/fotos-gratis/pattaya-chonburi-tailandia-28-de-maio-de-2019-bela-paisagem-e-paisagem-urbana-da-cidade-de-pattaya-e-um-destino-popular-na-tailandia-com-a-nuvem-branca-e-ceu-azul_74190-8741.jpg?w=996&t=st=1704458939~exp=1704459539~hmac=e5929dd89e467ee5d82dbe2307a7b5c06b5d27ca90cd4357a936edf00db96ad6"
          descricao="cidade"
        ></Foto>
        <div className="flex items-center justify-start pb-4 pt-4 gap-4">
          <Like
            fonte1="https://icons.veryicon.com/png/o/internet--web/prejudice/like-20.png"
            descricao="Ícone de Like"
            fonte2="https://icons.veryicon.com/png/o/internet--web/flatten-icon/like-19.png"
          ></Like>
          <Comentario
            fonte="https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png"
            descricao="Ícone de Comentario"
          ></Comentario>
        </div>
      </div>
    </main>
  );
}
