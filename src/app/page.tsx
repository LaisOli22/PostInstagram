import Image from "next/image";

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

interface LikeProps {
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
  return <p className="text-xl font-medium text-black">{name}</p>;
}

function Localizacao({ name }: LocalizacaoProps) {
  return <p className="text-slate-500">{name}</p>;
}

function Foto({ fonte, descricao }: FotoProps) {
  return <Image src={fonte} alt={descricao} width={1000} height={90} />;
}

function Like({ fonte, descricao }: LikeProps) {
  return(<button><Image src={fonte} alt={descricao} width={80} height={40} /></button>) ;
}

function Comentario({ fonte, descricao }: ComentarioProps) {
  return(<button> <Image src={fonte} alt={descricao} width={60} height={40} /></button>);
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
        <Like fonte="https://icons.veryicon.com/png/o/internet--web/prejudice/like-20.png"
          descricao="Ícone de Like"></Like>
        <Comentario fonte="https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png"
          descricao="Ícone de Comentario"></Comentario>
        </div>
        
      </div>
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
        <Like fonte="https://icons.veryicon.com/png/o/internet--web/prejudice/like-20.png"
          descricao="Ícone de Like"></Like>
        <Comentario fonte="https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png"
          descricao="Ícone de Comentario"></Comentario>
        </div>
        
      </div>
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
        <Like fonte="https://icons.veryicon.com/png/o/internet--web/prejudice/like-20.png"
          descricao="Ícone de Like"></Like>
        <Comentario fonte="https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png"
          descricao="Ícone de Comentario"></Comentario>
        </div>
        
      </div>
    </main>
  );
}
