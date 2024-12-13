import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import telaApp from "../../img/ComunicaTela.png";
import telaSite from "../../img/site.png";
import studyImg from "../../img/study.png";
import './projetos.css';
import '../../App.css';
const Projetos = () => {
    const [isMoved, setIsMoved] = useState(false);

    useEffect(() => {
        const mudarSlideBtn = document.querySelector('.mudarSlide');
        if (mudarSlideBtn) {
            mudarSlideBtn.onclick = function () {
                const container = document.querySelector('.container');
                const carrossel = document.querySelector('.carrossel');
                const tamanhoCarrossel = carrossel.offsetWidth;

                if (isMoved) {
                    container.style.transform = 'translateX(0)';
                } else {
                    container.style.transform = `translateX(-${tamanhoCarrossel}px)`;
                }

                setIsMoved(!isMoved);
            };
        }

        const mudarSlideTcc = document.querySelector('.slideTccChange');
        const siteTela = document.querySelector('.siteTela');
        const appTela = document.querySelector('.appTela');

        if (mudarSlideTcc) {
            mudarSlideTcc.onclick = function () {
                siteTela.classList.toggle('show');

                if (siteTela.classList.contains('show')) {
                    appTela.classList.remove('show');
                } else {
                    appTela.classList.add('show');
                }
            };
        }
    }, [isMoved]); // Re-renders when isMoved changes

    useEffect(() => {
        gsap.to('.carrossel', {
            scrollTrigger: {
                trigger: '.carrossel',
                toggleActions: "restart none none none"
            },
            opacity: 1,
            duration: 2
        });
    }, []);

    return (
        <div className="projetos" id="projetosId">
            <h1 className="textAnim">Meus <span className="span">projetos</span></h1> <br /> <br />
            <div className="carrossel">
                <div className="container">
                    <div className="slide TCC">
                        <h1 className="slideTitulo">trabalho de conclusão de curso</h1>
                        <div className="tccConteudo">
                            <div className="tccTexto">
                                <p>No meu TCC, estou desenvolvendo um aplicativo voltado para facilitar a comunicação de pessoas neurodivergentes não verbais.  <br />
                                <strong>Comunica</strong> <br />
                                    O aplicativo consiste em usar a comunicação por troca de imagens.
                                    Além disso, inclui funcionalidades como a verbalização de texto em voz, 
                                    ampliando seu alcance para outros públicos com necessidades comunicativas diversas.
                                </p> <br />
                                <p>Além do aplicativo, também desenvolvi um site simples e intuitivo para representar minha "empresa", chamada ComuniTec.</p>
                                <br /> <br />

                                <div className="tccTextoBotoes">
                                    <p>ComuniTec (site)</p>
                                    <a href="https://github.com/lucasns06/ComuniTec" target="_blank" rel="noopener noreferrer">
                                        <button className="githubBtn">Github</button>
                                    </a>
                                    <a href="https://lucasns06.github.io/ComuniTec/" target="_blank" rel="noopener noreferrer">
                                        <button className="githubBtn versiteBtn">Entrar no site</button>
                                    </a>
                                    <br /><br />
                                    <p>Comunica (aplicativo)</p>
                                    <p style={{ color: 'red' }}>Em desenvolvimento, React Native</p>
                                </div>
                            </div>
                            <div className="tccImagem">
                                <button className="slideTccChange" id="slideTccChangeId">Mudar</button> <br /><br />
                                <div className="slideTcc">
                                    <img src={telaApp} alt="AppTela" className="appTela show" />
                                    <a href="https://lucasns06.github.io/ComuniTec/" target="_blank" rel="noopener noreferrer"><img src={telaSite} alt="siteTela" className="siteTela" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide API">
                        <h1 className="slideTitulo">Planejamento de estudos API</h1> <br />
                        <img src={studyImg} alt="studyImg" />
                        <p>A API de Planejamento de Estudos foi projetado para auxiliar no gerenciamento de tarefas. <br />Desenvolvido para organizar e acompanhar o progresso dos estudos de forma estruturada, com funcionalidades como criação e categorização de tarefas, organização de projetos.</p>
                         <br /><br />
                        <h1 className="slideTitulo">Funcionalidades</h1> <br />
                        <ul className="apiUl">
                            <li>Gerenciamento de Tarefas e Categorias: Estruturação de tarefas com data e prioridade, agrupadas em categorias.</li> 
                            <li>Cadastro e Perfil de Usuário: Armazena informações básicas do usuário, ajudando na personalização do estudo.</li>
                        </ul> <br /><br />
                        <h1 className="slideTitulo">Informações</h1> <br />
                        <p>Feito no Visual Studio Code</p>
                        <p>Entity Framework Core,    para a conexão com o banco de dados relacional</p> <br /><br />
                        <div className="projetosLinks">
                            <a href="https://github.com/lucasns06/EstudosAPI" target="_blank" rel="noopener noreferrer">
                                <svg width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z"
                                        fill="var(--cor-preta)" />
                                </svg> EstudosApi </a> 
                            <a href="https://lucasns06.github.io/APIs">
                                <svg width="64px" height="64px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.93047 13.2107L6.66782 10.3728H6.73089L7.45854 13.2107H5.93047ZM8.17164 16H9.66089L7.56041 9H5.93047L3.82999 16H5.20767L5.65396 14.2876H7.73505L8.17164 16Z" fill="var(--cor-preta)" />
                                    <path d="M10.5389 9V16H11.9166V13.7782H13.0323C14.541 13.7782 15.5015 12.8517 15.5015 11.3964C15.5015 9.92654 14.5701 9 13.1003 9H10.5389ZM11.9166 10.1303H12.751C13.6533 10.1303 14.1044 10.5475 14.1044 11.3867C14.1044 12.2308 13.6533 12.6431 12.751 12.6431H11.9166V10.1303Z" fill="var(--cor-preta)" />
                                    <path d="M21.1675 16V14.8164H19.717V10.1836H21.1675V9H16.8889V10.1836H18.3393V14.8164H16.8889V16H21.1675Z" fill="var(--cor-preta)" />
                                </svg>
                                Testar API</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mudarSlide">
                <button className="changeSlideBtn">Mudar</button>
            </div>
        </div>
    );
}

export default Projetos;
