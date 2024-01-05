'use client'
import Image from "next/image";
import { useState } from "react";

interface LikeProps {
    fonte1: string;
    fonte2: string;
    descricao: string;
  }

export function Like({ fonte1, fonte2, descricao }: LikeProps) {
    const [isFonte1, setFonte] = useState(true);
  
    const handleClick = () => {
      setFonte(!isFonte1);
    };
  
    const fonte = isFonte1 ? fonte1 : fonte2;
    return (
      <button className="relative overflow-hidden border-none p-0 bg-transparent transform transition-transform duration-100 hover:scale-105" onClick={handleClick}>
        <Image src={fonte} alt={descricao} width={80} height={40} />
      </button>
    );
  }