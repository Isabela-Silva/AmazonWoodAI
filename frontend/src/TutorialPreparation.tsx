import React from 'react';
import { ArrowLeft } from 'lucide-react';
import bg1 from './assets/bg-1.png'; // Importando o fundo de madeira
import { useNavigate } from 'react-router-dom';
import lupa1 from './assets/lupa-1.png';
import corte2 from './assets/corte-2.png';
import lixa1 from './assets/lixa-1.png';
import lixa2 from './assets/lixa-2.png';
import lixa3 from './assets/lixa-3.png';
import limpeza1 from './assets/limpeza-1.png';
import parenquima1 from './assets/parenquima-1.png';
import parenquima2 from './assets/parenquima-2.png';


const TutorialPreparation: React.FC = () => {

    const navigate = useNavigate();
    const passos = [
        {
            titulo: "1. Obtenção dos discos de madeira",
            descricao: " Realizar corte de discos para visualização dos elementos anatômicos na face transversal da madeira.",
            imagens: [
                {
                    src: corte2,
                    legenda: "Disco de madeira cortado transversalmente.",
                },
               
            ]
        },
        {
            titulo: "2. Lixamento da madeira",
            descricao: " Lixar a face transversal com auxílio de lixadeira orbital utilizando em sequência de lixas (ex.: 60 → 80 → 120 → 180 →  220) para obtenção de superfície nítida para observação dos elementos anatômicos.",
            imagens: [
                {
                    src: lixa1,
                    legenda: "Lixadeira: ferramenta ideal para um lixamento uniforme e eficiente",
                },
                {
                    src: lixa2,
                    legenda: "Diferença entre superfície não lixada (esquerda) e superfície bem lixada (direita) a olho nu.",
                },
                {
                    src: lixa3,
                    legenda: "Superfície não lixada, apresentando aspecto bruto e irregular",
                }
            ]
        },
        {
            titulo: "3. Limpeza da Amostra",
            descricao: "Remova todo o pó residual com um pincel macio, ar comprimido ou pano seco. Poeira nos poros pode ser confundida com estruturas pelo modelo.",
            imagens: [
                limpeza1,
            ],
        },
        {
            titulo: "4. Observação e Captura de imagens",
            descricao: "Use uma lupa conta-fios de 10 vezes de aumento para observação e visualização macroscópica dos elementos anatômicos (vasos, raios, parênquimas e fibras). A foto deve ser tirada através da lupa com iluminação lateral para destacar os detalhes anatômicos.",
            imagens: [
                {
                    src: lupa1,
                    legenda: "lupa 10x para observar detalhes anatômicos.",
                },
                {
                    src: parenquima1,
                    legenda: "Exemplo dos detalhes anatômicos visíveis com lupa, sendo possível visualizar raio, vaso, fibra e parênquima.",
                },
                {
                    src: parenquima2,
                    legenda: "Exemplo de foto correta: iluminação lateral que destaca os detalhes das estruturas da madeira.",

                }
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-screen py-10 px-4">
            <button
                onClick={() => navigate('/')}
                className="mb-8 flex items-center text-orange-400 font-sans font-normal hover:text-orange-300 transition border-b-2 border-transparent hover:border-orange-300"
            >
                <ArrowLeft className="mr-2" size={20} /> Voltar para Classificação
            </button>

            <div
                className="bg-white p-8 rounded-3xl font-sans font-normal shadow-2xl w-full max-w-md text-center border border-amber-100"
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="text-center mb-6">

                    <h2 className="text-2xl font-sans font-normal text-amber-800 mb-2 flex items-center justify-center gap-2">
                        Guia de Preparação
                    </h2>
                    <p className="text-amber-800 text-sm leading-relaxed text-center">
                        Siga estes passos para garantir a máxima precisão da IA.
                    </p>
                </div>

                <div className="p-1 rounded-3xl border-none flex flex-col backdrop-blur-sm">
                    <ul className="text-left space-y-8 mt-2 px-4">
                        {passos.map((passo, passoIndex) => (
                            <li
                                key={passoIndex}
                                className="flex flex-col mb-2 border-b border-amber-100 pb-1 last:border-0"
                            >
                                <h3 className="text-lg font-bold text-amber-800 mb-1">
                                    {passo.titulo}
                                </h3>

                                <p className="text-amber-900 text-sm mb-2">
                                    {passo.descricao}
                                </p>

                                {passo.imagens.map((item, imgIndex) => {
                                    const imagemSrc = typeof item === "string" ? item : item.src;
                                    const legenda = typeof item === "object" ? item.legenda : null;

                                    return (
                                        <div key={imgIndex} className="flex flex-col gap-3 mb-4">
                                            <div className="relative group overflow-hidden rounded-2xl">
                                                <img
                                                    src={imagemSrc}
                                                    alt={`Passo imagem ${imgIndex}`}
                                                    className="w-full h-48 md:h-64 "
                                                />
                                            </div>

                                            {legenda && (
                                                <p className="mt-1 text-sm text-amber-900 font-medium  p-2 ">
                                                    {legenda}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </li>
                        ))}
                    </ul>
                </div>


                <p className="text-amber-700 text-xs mt-6 italic">
                    Dica: A nitidez dos poros é fundamental para a precisão do modelo YOLO.
                </p>
            </div>
        </div>
    );
};

export default TutorialPreparation;