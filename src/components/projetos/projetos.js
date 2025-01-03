import React, { useState, useEffect, useLayoutEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from "gsap";
import './projetos.css';
import '../../App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projetos = () => {
    useLayoutEffect(() => {
        const swiper = document.querySelectorAll('.swiper-container');
        if (swiper) {
            gsap.fromTo(swiper,
                { y: 150, },
                {
                    scrollTrigger: {
                        trigger: swiper,
                        toggleActions: "restart none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'expo.out',
                    stagger: 0.2
                },
            );
        }
    })
    const slide = [
        {
            id: 0,
            titulo: 'ComuniTec',
            texto: 'Como parte do Trabalho de Conclusão de Curso (TCC), desenvolvi um site utilizando React.',
            texto2: 'O objetivo principal desse site é servir como uma empresa para apresentar o meu produto.',
            github: 'https://github.com/lucasns06/ComuniTec',
            link: 'https://lucasns06.github.io/ComuniTec/'
        },
        {
            id: 1,
            titulo: 'Comunica',
            texto: 'No meu TCC, estou desenvolvendo um aplicativo voltado para facilitar a comunicação de pessoas neurodivergentes não verbais, com React Native.',
            texto2: 'O aplicativo consiste em usar a comunicação por troca de imagens. Além disso, inclui funcionalidades como a verbalização de texto em voz, ampliando seu alcance para outros públicos com necessidades comunicativas diversas.  ',
            github: 'https://github.com/lucasns06/Comunica',
            link: '',
        },
        {
            id: 2,
            titulo: 'EstudosApi',
            texto: 'RESTful API, criada para gerenciar tarefas associadas a categorias.',
            texto2: 'O projeto utiliza ASP.NET Core e Entity Framework Core.',
            github: 'https://github.com/lucasns06/EstudosAPI',
            link: 'https://lucasns06.github.io/APIs/'
        },
    ]
    return (
        <div className="projetos" id="projetosId">
            <h1 className="textAnim">Meus <span className="span">projetos</span></h1> <br /> <br />

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                breakpoints={{
                    1080: {
                        slidesPerView: 2, 
                    },
                    1700: {
                        slidesPerView: 3, 
                    },
                }}
                pagination={{ clickable: true }} >

                {slide.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="swiper-container sombra">
                            <div className="swiper-texto">
                                <h1>{item.titulo}</h1>
                                <p>{item.texto}</p>
                                <p>{item.texto2}</p>
                            </div>
                            <div className="projetos-buttons">
                                <a href={item.github} target="_blank" rel="noopener noreferrer">
                                    <svg width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z"
                                            fill="var(--cor-preta)" />
                                    </svg>
                                </a>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button class="projetosBtn versiteBtn sombra">Abrir Projeto</button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div >
    );
}

export default Projetos;
