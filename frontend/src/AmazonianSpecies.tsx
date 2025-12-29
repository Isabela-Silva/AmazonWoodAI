import { ArrowLeft } from 'lucide-react';
import bg1 from './assets/bg-1.png';
import { useNavigate } from 'react-router-dom';
import cedrinho from './assets/cedrinho.png';
import macaranduba from './assets/macaranduba.jpg';
import guajara from './assets/guajara.jpg';

const AmazonianSpecies = () => {
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
                    Espécies Amazônicas
                </h1>

                <div className="flex flex-col space-y-8 backdrop-blur-sm text-left">

                    {/* Cedrinho */}
                    <div className="flex flex-col space-y-3 ">
                        <img
                            src={cedrinho}
                            alt="Madeira Cedrinho"
                            className="w-full h-48 object-cover rounded-2xl border border-amber-200"
                        />

                        <h3 className="font-semibold text-amber-800 text-lg">
                            Cedrinho
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            Erisma uncinatum | Família Vochysiaceae
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Madeira de coloração clara a levemente rosada, com textura média e fácil
                            trabalhabilidade. Possui boa estabilidade dimensional e acabamento uniforme.
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            <span className="font-bold">Uso principal:</span> fabricação de móveis,
                            portas, esquadrias, painéis, compensados e aplicações internas na construção civil.
                        </p>
                    </div>

                    {/* Guajará Bolacha */}
                    <div className="flex flex-col space-y-3">
                        <img
                            src={guajara}
                            alt="Madeira Guajará Bolacha"
                            className="w-full h-48 object-cover rounded-2xl border border-amber-200"
                        />

                        <h3 className="font-semibold text-amber-800 text-lg">
                            Guajará Bolacha
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            Pouteria sp. |
                            Família Sapotaceae
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Madeira de alta densidade, resistente e durável, com coloração castanho-clara
                            a amarelada. Apresenta boa resistência mecânica e ao desgaste.
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            <span className="font-bold">Uso principal:</span> estruturas leves,
                            assoalhos, vigas, caibros e aplicações que exigem resistência moderada.
                        </p>
                    </div>

                    {/* Maçaranduba */}
                    <div className="flex flex-col space-y-3">
                        <img
                            src={macaranduba}
                            alt="Madeira Maçaranduba"
                            className="w-full h-48 object-cover rounded-2xl border border-amber-200"
                        />

                        <h3 className="font-semibold text-amber-800 text-lg">
                            Maçaranduba
                        </h3>
                        <p className="text-sm text-amber-800 italic">
                            Manilkara sp. |
                            Família Sapotaceae
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            Madeira extremamente densa, pesada e muito resistente, com coloração
                            castanho-avermelhada. Possui alta durabilidade natural, inclusive em ambientes externos.
                        </p>

                        <p className="text-sm text-amber-700 leading-relaxed">
                            <span className="font-bold">Uso principal:</span> pontes, dormentes,
                            estruturas pesadas, decks, postes e construções expostas à umidade.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AmazonianSpecies;
