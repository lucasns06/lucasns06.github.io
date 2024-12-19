import React, { useLayoutEffect } from "react";
import './contatos.css';
import perfilFoto from '../../img/perfil.png'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contatos = () => {
    useLayoutEffect( () =>{
        const contatos = document.querySelector('.links img')
        const hiddenHello = document.querySelector('.hiddenHello')
        if (contatos && hiddenHello) {
            const handleClick = () => {
                hiddenHello.classList.toggle("opacidade");
            };

            contatos.addEventListener('click', handleClick);

            return () => {
                contatos.removeEventListener('click', handleClick);
            };
        }
    }, [])
    
    useLayoutEffect(() => {
        const contatos = document.querySelectorAll('.contatosLinks a')
        gsap.registerPlugin(ScrollTrigger)

        contatos.forEach(animaContato => {
            gsap.fromTo(animaContato, {
                scale: 0,
            }, {
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: animaContato,
                    start: 'bottom bottom',
                    toggleActions: "restart none none none"
                }
            })
        })

    }, [])

    return (
        <div className="contatos" id="contatosId">
            <h1 className="span textAnim">Contato</h1> <br />

            <p>Caso tenha interesse no meu trabalho, pode entrar em contato :)</p> <br /> <br />

            <div className="contatosContainer">
                <div className="links">
                    <img src={perfilFoto} alt="Perfil" />
                    <p className="hiddenHello">Olá!</p>
                    <div className="contatosLinks">
                        <a className="github" href="https://github.com/lucasns06" target="_blank" rel="noopener noreferrer">
                            <svg width="100" height="100" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z"
                                    fill="var(--cor-preta)" />
                            </svg>
                        </a>
                        <a className="linkedin" href="https://www.linkedin.com/in/lucasns06/" target="_blank" rel="noopener noreferrer">
                            <svg width="100" height="100" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 1.14614C0 0.513313 0.526012 0 1.17491 0H14.8251C15.474 0 16 0.513315 16 1.14614V14.8539C16 15.4869 15.474 16 14.8251 16L1.17491 16C0.526012 16 0 15.4869 0 14.8539V1.14614ZM4.94338 13.3937V6.16876H2.54196V13.3937H4.94338ZM3.74266 5.18232C4.58008 5.18232 5.10131 4.62753 5.10131 3.9342C5.0857 3.22527 4.58008 2.68587 3.75854 2.68587C2.93709 2.68587 2.4 3.22527 2.4 3.9342C2.4 4.62753 2.92112 5.18232 3.72701 5.18232H3.74266ZM8.6514 13.3937V9.35897C8.6514 9.14304 8.667 8.92732 8.73042 8.77296C8.90401 8.34153 9.29915 7.89471 9.96255 7.89471C10.8315 7.89471 11.1791 8.55725 11.1791 9.52851V13.3937H13.5803V9.251C13.5803 7.03184 12.3956 5.99922 10.8156 5.99922C9.54177 5.99922 8.9706 6.69937 8.65146 7.19167V7.21656H8.63543C8.6407 7.20832 8.64605 7.20003 8.65146 7.19167V6.16876H6.25007C6.28158 6.8467 6.25007 13.3937 6.25007 13.3937H8.6514Z"
                                    fill="var(--cor-preta)" />
                            </svg>
                        </a>
                        <a className="instagram" href="https://www.instagram.com/lucasns06/" target="_blank" rel="noopener noreferrer">
                            <svg width="100" height="100" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="var(--cor-preta)">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="41d0ed4f-e2f1-40af-8e7c-9c6aac6f73f8" />

                    <label style={{ textAlign: 'center' }}><strong>Me mande um email</strong></label> <br /><br />

                    <label>
                        Nome<br />
                        <input type="text" name="name" placeholder="Digite seu nome" required />
                    </label> <br />

                    <label>
                        Email <br />
                        <input type="email" name="email" placeholder="Digite seu e-mail" required />
                    </label> <br />
                    <label>
                        Mensagem <br />
                        <textarea name="message" placeholder="Sua mensagem" required></textarea>
                    </label><br />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    <br />
                    <button type="submit" className="submitBtn">Enviar</button>
                </form>
            </div>
        </div >
    );
};

export default Contatos;