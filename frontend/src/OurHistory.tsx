import { ArrowLeft } from 'lucide-react';
import bg1 from './assets/bg-1.png';
import { useNavigate } from 'react-router-dom';
import todos from './assets/ourHistory/todos.jpeg';
import todos1 from './assets/ourHistory/todos-1.jpeg';
import eu_gil from './assets/ourHistory/eu-gil.jpeg';
import saly from './assets/ourHistory/saly.png';
import gil_cosme from './assets/ourHistory/gil-cosme.jpeg';
import isa_lab from './assets/ourHistory/isa-lab.jpeg';
import amostras from './assets/ourHistory/amostras.jpeg';
import anotacao from './assets/ourHistory/anotacao.jpeg';
import first_meet from './assets/ourHistory/first-meet.jpeg'
import patio from './assets/ourHistory/patio.jpeg'
import garagem from './assets/ourHistory/garagem.jpeg'
import first_version from './assets/ourHistory/first-version.jpg'
import last_version from './assets/ourHistory/last-version-1.png'
import pablo from './assets/ourHistory/pablo.jpeg'
import fabricio from './assets/ourHistory/fabs.png'

const OurHistory = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center min-h-screen py-10 px-4">
            <button
                onClick={() => navigate('/')}
                className="mb-8 flex items-center text-orange-400 font-sans font-normal hover:text-orange-300 transition border-b-2 border-transparent hover:border-orange-300"
            >
                <ArrowLeft className="mr-2" size={20} /> Voltar para Classificação
            </button>
            <div
                className="bg-white p-8 rounded-3xl font-sans font-normal shadow-2xl w-full mt-10 max-w-md text-center"
                style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }}
            >
                <h1 className="text-2xl text-amber-800 mb-6">
                    Nossa História
                </h1>

                <div className="flex flex-col rounded-3xl  border-none space-y-8 text-left backdrop-blur-sm">

                    {/* PRIMEIRA REUNIÃO */}
                    <div className="flex flex-col mt-4 space-y-3">


                        <h3 className="font-semibold text-amber-800 text-lg">
                            Primeira reunião
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            10 de Julho de 2025
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Tudo começou com a ideia de ajudar na fiscalização de espécies madereiras que muitas vezes são parecidas e dificeis de identificar.
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            <span className=" font-bold " >Nossa missão: </span>
                            Criar um sistema que classificasse diferentes tipos de madeiras utilizando visão computacional e inteligência artificial.
                        </p>
                        <img
                            src={first_meet}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                    </div>

                    {/* FOTOS CEDRINHO */}
                    <div className="flex flex-col space-y-3">


                        <h3 className="font-semibold text-amber-800 text-lg">
                            Primeiras amostras: Cedrinho
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            Agosto e Setembro, 2025
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Foi criado um suporte de isopor para posicionar o celular durante o registro das amostras, além da utilização de iluminação lateral com luminária.
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed"> As fotos foram capturadas com um celular Samsung A14, destacando o uso de um equipamento de baixo custo, o que torna o projeto mais acessível.
                        </p>

                        <img
                            src={isa_lab}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                    </div>

                    <div className="flex flex-col space-y-3">


                        <h3 className="font-semibold text-amber-800 text-lg">
                            Orientadores e colaboradores
                        </h3>


                        <img
                            src={eu_gil}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">
                            Eu e meu orientador, Dr. Gilberto Nerino, especialista em Sistemas de Informação, que auxiliou na construção do modelo de IA.
                        </p>

                        <img
                            src={saly}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">
                            Professora Dra. Saly Takeshita Yamaguti, especialista em Tecnologia de produtos florestais, que auxiliou na seleção e preparação das amostras.

                        </p>


                        <img
                            src={fabricio}
                            className="w-full h-45 object-cover rounded-2xl border border-amber-200"
                        />

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Coorientador Dr. Fabricio Araujo Almeida, especialista em Sistemas de Informação, que auxiliou na construção do sistema.
                        </p>


                        <img
                            src={pablo}
                            className="w-full h-45 object-cover rounded-2xl border border-amber-200"
                        />

                        <p className="text-sm text-amber-700 leading-relaxed">
                            O aluno de Engenharia Florestal, Pablo Rabelo, auxiliou no lixamento das amostras, garantindo que as superfícies estivessem adequadas para a captura das imagens.
                        </p>


                        <img
                            src={gil_cosme}
                            className="w-full h-62  rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">
                            O motorista, Sr. Cosme, colaborou durante toda a viagem de coleta das amostras, além de gentilmente registrar uma foto do grupo.

                        </p>



                    </div>

                    {/* VIAGEM */}
                    <div className="flex flex-col space-y-3">

                        <h3 className="font-semibold text-amber-800 text-lg">
                            Viagem para coleta de amostras
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            7 de Outubro de 2025
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Viajamos para a Empresa Benevides Madeira em Benevides - PA para coletar amostras de três espécies de madeira: Guajará Bolacha, Maçaranduba e Cedrinho.
                        </p>


                        <img
                            src={garagem}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">

                            Viajamos às 5 da manhã com o apoio do motorista Sr. Cosme e do veículo da universidade.

                        </p>

                        <img
                            src={patio}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">

                            A Benevides Madeira é uma empresa consolidada no mercado, parceira da UFRA em diversos projetos, referência em manejo florestal sustentável e certificação florestal FSC.
                        </p>


                        <img
                            src={todos}
                            className="w-full h-62  rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">

                            Imagens do Eng. Florestal Jair, professora Dra. Saly Takeshita Yamaguti, professor Dr. Gilberto Nerino e eu.
                        </p>

                        <img
                            src={todos1}
                            className="w-full h-62  rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">

                            Imagens do Sr. Cosme, professora Dra. Saly Takeshita Yamaguti, professor Dr. Gilberto Nerino e eu.
                        </p>


                        <img
                            src={amostras}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">
                            Guardando as amostras coletadas na garagem da UFRA - campus Paragominas.
                        </p>
                    </div>

                    {/* DATASET E SISTEMA */}
                    <div className="flex flex-col space-y-3">


                        <h3 className="font-semibold text-amber-800 text-lg">
                            O Dataset
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            Novembro, 2025
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Foram realizadas edições em mais de 1.500 imagens, incluindo anotações no Roboflow, aplicação de técnicas de data augmentation, organização do conjunto de dados e treinamento do modelo a partir do dataset final.
                        </p>


                        <img
                            src={anotacao}
                            className="w-fullh-52 object-cover rounded-2xl border border-amber-200"
                        />
                    </div>


                    <div className="flex flex-col space-y-3">


                        <h3 className="font-semibold text-amber-800 text-lg">
                            O Sistema
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            Dezembro, 2025
                        </p>

                        <img
                            src={first_version}
                            className="w-full h-52 object-cover rounded-2xl border border-amber-200"
                        />

                        <p className="text-sm text-amber-700 leading-relaxed">
                            A primeira versão foi desenvolvida em Streamlit, utilizando seus componentes visuais nativos; porém, devido às limitações de estilização, o sistema foi migrado para React e Flask.

                        </p>



                        <img
                            src={last_version}
                            className="w-full h-82  rounded-2xl border border-amber-200"
                        />
                        <p className="text-sm text-amber-700 leading-relaxed">
                            Versão final do sistema desenvolvida em React, Flask (Python), Tailwind CSS e YOLOv11 (Ultralytics).

                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OurHistory;
