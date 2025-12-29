import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cedrinhoImg from './assets/cedrinho.png';
import guajaraImg from './assets/guajara.jpg';
import macarandubaImg from './assets/macaranduba.jpg';
import bg from './assets/bg-2.png';
import { WandSparkles } from 'lucide-react';

interface Probability {
    nome: string;
    certeza: number;
}

interface PredictionResult {
    resultado_principal: {
        confianca: number;
        eh_confiavel: boolean;
        nome: string;
    };
    sucesso: boolean;
    todas_probabilidades: Probability[];
}

const API_URL = 'http://localhost:5000/predict'; // não deveria usar o axios aqui?

const App: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<PredictionResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const menuItems = [
        { label: "Nossa História", path: "/ourHistory" },
        { label: "Classificação", path: "/" },
        { label: "Espécies Amazônicas", path: "/species" },
    ];

    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setResult(null);
            setError(null);
            handleSubmit(selectedFile);
        }
    };

    const handleReset = () => {
        setFile(null);
        setPreviewUrl(null);
        setResult(null);
        setError(null);
    };

    const handleSubmit = useCallback(async (fileToUpload: File) => {
        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('image', fileToUpload);

        try {
            const response = await axios.post<PredictionResult>(API_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.sucesso) {
                setResult(response.data);
            } else {
                setError("Erro na classificação: " + JSON.stringify(response.data));
            }
        } catch (err) {
            setError("Falha ao conectar com a API (Verifique se o Flask está rodando na porta 5000).");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const renderProbabilities = (probs: Probability[]) => (
        <div className="mt-2 bg-amber-50 rounded-lg p-5 ">
            <h4 className="text-lg font-sans font-normal text-amber-800 mb-3">Resultado da Classificação:</h4>
            {probs.map((p, index) => (
                <div key={p.nome} className="mb-2 ">
                    <p className={`text-sm ${index === 0 ? 'font-bold' : 'font-normal'}  text-amber-800 m-0`}>
                        {p.nome}: {(p.certeza * 100).toFixed(2)}%
                    </p>
                    <div className="h-1.5 w-full bg-gray-300 rounded-full mt-1">
                        <div
                            className={`h-full rounded-full transition-all duration-500`}
                            style={{
                                width: `${p.certeza * 100}%`,
                                backgroundColor: index === 0 ? '#388E3C' : '#68B06A' // Diferencia o líder
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col items-center min-h-screen py-10 px-4">

            <nav className="flex justify-center text-xs lg:text-lg  sm:text-sm bg-transparent text-white p-3 rounded-full mb-10 shadow-lg backdrop-blur-sm  ">
                {menuItems.map((item) => (
                    <NavItem
                        key={item.path}
                        isActive={window.location.pathname === item.path}
                        onClick={() => navigate(item.path)}

                    >
                        {item.label}
                    </NavItem>
                ))}
            </nav>
            <h1 className="text-white font-sans font-light text-5xl md:text-7xl text-center lg:text-8xl shadow-lg mb-1">Amazon<span className='text-amber-700 font-bold'>Tree</span>AI</h1>
            <p className="text-gray-200 text-lg mb-8 text-center">Tecnologia e sabedoria ancestral para preservação da Amazônia.</p>

            <div className="bg-white p-4 md:p-8 rounded-3xl  font-sans font-normal shadow-2xl w-full mt-10 max-w-md text-center"
                style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
            >
                <h2 className="text-2xl font-sans font-normal font-bold text-amber-800 mb-5">Classificação de espécies de madeiras Amazônicas</h2>
                <div className="bg-transparent p-8 rounded-3xl  w-full max-w-md border-none ">
                    <div className="text-center mb-8">

                        <p className="text-amber-700 text-sm leading-relaxed">
                            Atenção: O modelo atual identifica exclusivamente as seguintes espécies amazônicas:
                        </p>
                    </div>

                    <ul className="space-y-4 cursor-pointer">
                        <li
                            onClick={() => navigate("/species?name=cedrinho")}
                            className="flex items-center p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src={cedrinhoImg}
                                    alt="Textura madeira Cedrinho"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="ml-4 text-left">
                                <h3 className="font-semibold text-amber-800 ">Cedrinho</h3>
                                <p className="text-sm text-amber-800  italic">Erisma uncinatum | Família Vochysiaceae</p>
                            </div>
                        </li>

                        <li
                            onClick={() => navigate("/species?name=guajara")}
                            className="flex items-center p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src={guajaraImg}
                                    alt="Textura madeira Guajará"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="ml-4 text-left">
                                <h3 className="font-semibold text-amber-800 ">Guajará Bolacha</h3>
                                <p className="text-sm text-amber-800  italic">Pouteria sp. |
                                    Família Sapotaceae</p>
                            </div>
                        </li>

                        <li
                            onClick={() => navigate("/species?name=macaranduba")}
                            className="flex items-center p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src={macarandubaImg}
                                    alt="Textura madeira Maçaranduba"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="ml-4 text-left">
                                <h3 className="font-semibold text-amber-800 ">Maçaranduba</h3>
                                <p className="text-sm text-amber-800  italic">Manilkara sp. |
                                    Família Sapotaceae</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <button
                        onClick={() => navigate('/tutorial')}
                        className="text-amber-700 text-sm underline hover:text-amber-900 transition-colors mb-5 block w-full text-center"
                    >
                        Como preparar as espécies para a foto?
                    </button>
                </div>
                <div
                    className="  p-8 w-19 rounded-3xl mb-5 cursor-pointer 
               transition duration-300  hover:bg-brown-100 hover:border-yellow-500"
                    onClick={() => document.getElementById('file-input')?.click()}
                >
                    <div className='p-4 rounded-2xl border border-yellow-100  bg-amber-50 hover:bg-amber-100 transition-colors duration-300 '>

                        {loading ? (
                            <p className="text-amber-100 font-sans font-normal">Analisando... Por favor, aguarde.</p>
                        ) : (
                            <div className='flex flex-col items-center justify-center p-2' >
                                <div>
                                    <p className="text-amber-800  font-sans font-normal m-0 flex flex-col items-center">Adicione uma imagem de uma espécie preparada!
                                        <WandSparkles className='mt-2' />

                                    </p>

                                </div>

                                <p className="text-amber-600 text-sm mt-2 mb-0">Clique para começar a mágica!</p>
                            </div>
                        )}
                    </div>
                </div>

                <input
                    type="file"
                    id="file-input"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                />

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {previewUrl && (
                    <div className="mb-4 rounded-2xl overflow-hidden border-4 border-amber-100 shadow-md">
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-full h-92 "
                        />
                    </div>
                )}

                {result && (
                    <div className={`mt-1 p-5 rounded-xl text-left `}>


                        {renderProbabilities(result.todas_probabilidades)}


                        <button
                            onClick={handleReset}
                            className="mt-4 w-full py-2 rounded-xl bg-amber-500 text-white text-sm hover:bg-amber-600 transition"
                        >
                            Recomeçar
                        </button>
                    </div>
                )}



            </div>
        </div>
    );
};
// isa, lembra de componentizar isso aqui depois
const NavItem: React.FC<{ children: React.ReactNode, isActive: boolean, onClick: () => void }> = ({ children, isActive, onClick }) => (
    <span
        onClick={onClick}
        className={`mx-5 text-orange-400 font-sans font-normal cursor-pointer transition hover:text-orange-300 hover:border-b-2 hover:border-orange-300 `}
    >
        {children}
    </span>
);

export default App;