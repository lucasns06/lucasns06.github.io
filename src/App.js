import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Sobre from "./components/sobre/sobre";
import Habilidades from "./components/habilidades/habilidades";
import Projetos from "./components/projetos/projetos";
import Contatos from "./components/contato/contatos";
import Footer from "./components/footer/footer";
import Obrigado from "./components/obrigado/obrigado";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
export default function App() {
  const savedTheme = localStorage.getItem("isDarkTheme") === "true";

  const [isDarkTheme, setIsDarkTheme] = useState(savedTheme);

  const imgTheme = useRef(null);

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };
  useEffect(() => {
    if (imgTheme.current) {
      imgTheme.current.classList.add("themeEntry");
      const timer = setTimeout(() => {
        imgTheme.current.classList.remove("themeEntry");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const body = document.body;
  function theme() {
    body.classList.toggle("dark-theme");
  }
  gsap.registerPlugin(MotionPathPlugin);
  useEffect(() => {
    const paths = document.querySelectorAll(".imgTheme .path");
    gsap.fromTo(
      paths,
      {
        opacity: 0.5,
      },
      {
        // scale: 0.6,
        opacity: 1,
        yoyo: true,
        repeat: -1,
        stagger: 0.8,
        duration: 1,
        ease: "none",
      }
    );

    const sun = document.querySelector('#sun')
    gsap.to(sun,
      {
        rotate: 360,
        yoyo: true,
        repeat: -1,
        duration: 2,
      })
  }, [isDarkTheme]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header
              isDarkTheme={isDarkTheme}
              toggleTheme={toggleTheme}
            />
            <Home isDarkTheme={isDarkTheme} />
            <Sobre />
            <Projetos />
            <Habilidades />
            <Contatos />
            <Footer />
            {!isDarkTheme ? (
              <svg
                ref={imgTheme}
                onClick={toggleTheme}
                className="imgTheme"
                width="42"
                height="42"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0003 0.278304C6.1825 0.500435 6.2447 0.83521 6.0807 1.13613C5.52011 2.16474 5.20151 3.34302 5.20151 4.59686C5.20151 8.6173 8.4803 11.8727 12.5202 11.8727C13.0466 11.8727 13.5594 11.8175 14.0534 11.7129C14.3912 11.6413 14.6984 11.794 14.8631 12.0286C15.033 12.2707 15.0686 12.6318 14.8318 12.9224C13.3034 14.7985 10.9648 16 8.34357 16C3.73342 16 0 12.2863 0 7.71002C0 4.2658 2.11415 1.31197 5.12354 0.0600878C5.47124 -0.0845511 5.81229 0.0490932 6.0003 0.278304Z"
                  fill="black"
                />
                <path
                  className="path"
                  d="M10.7943 3.14824C10.8602 2.95059 11.1398 2.95059 11.2057 3.14824L11.593 4.3101C11.7656 4.828 12.172 5.2344 12.6899 5.40703L13.8518 5.79432C14.0494 5.86021 14.0494 6.13978 13.8518 6.20567L12.6899 6.59296C12.172 6.76559 11.7656 7.17199 11.593 7.68989L11.2057 8.85176C11.1398 9.04941 10.8602 9.04942 10.7943 8.85176L10.407 7.68988C10.2344 7.17198 9.82801 6.76559 9.31012 6.59296L8.14824 6.20567C7.95059 6.13978 7.95059 5.86021 8.14824 5.79432L9.31012 5.40703C9.82802 5.2344 10.2344 4.82801 10.407 4.31011L10.7943 3.14824Z"
                  fill="black"
                />
                <path
                  className="path"
                  d="M13.8629 0.0988265C13.9068 -0.032943 14.0932 -0.0329419 14.1371 0.098828L14.3953 0.873401C14.5104 1.21867 14.7813 1.4896 15.1266 1.60469L15.9012 1.86288C16.0329 1.9068 16.0329 2.09319 15.9012 2.13711L15.1266 2.39531C14.7813 2.51039 14.5104 2.78133 14.3953 3.12659L14.1371 3.90117C14.0932 4.03294 13.9068 4.03294 13.8629 3.90117L13.6047 3.12659C13.4896 2.78132 13.2187 2.5104 12.8734 2.39531L12.0988 2.13711C11.9671 2.09319 11.9671 1.9068 12.0988 1.86288L12.8734 1.60469C13.2187 1.4896 13.4896 1.21867 13.6047 0.873408L13.8629 0.0988265Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                ref={imgTheme}
                onClick={toggleTheme}
                className="imgTheme" 
                width="42"
                height="42"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"
                  fill="white"
                />
                <path
                  d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.5C8.5 2.77614 8.27614 3 8 3C7.72386 3 7.5 2.77614 7.5 2.5V0.5C7.5 0.223858 7.72386 0 8 0Z"
                  fill="white"
                />
                <path
                  d="M8 13C8.27614 13 8.5 13.2239 8.5 13.5V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.5C7.5 13.2239 7.72386 13 8 13Z"
                  fill="white"
                />
                <path
                  d="M16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.5C13.2239 8.5 13 8.27614 13 8C13 7.72386 13.2239 7.5 13.5 7.5H15.5C15.7761 7.5 16 7.72386 16 8Z"
                  fill="white"
                />
                <path
                  d="M3 8C3 8.27614 2.77614 8.5 2.5 8.5H0.5C0.223858 8.5 -1.20706e-08 8.27614 0 8C1.20706e-08 7.72386 0.223858 7.5 0.5 7.5H2.5C2.77614 7.5 3 7.72386 3 8Z"
                  fill="white"
                />
                <path
                  d="M13.6569 2.34318C13.8521 2.53844 13.8521 2.85502 13.6569 3.05028L12.2426 4.4645C12.0474 4.65976 11.7308 4.65976 11.5355 4.4645C11.3403 4.26924 11.3403 3.95265 11.5355 3.75739L12.9497 2.34318C13.145 2.14792 13.4616 2.14792 13.6569 2.34318Z"
                  fill="white"
                />
                <path
                  d="M4.46446 11.5356C4.65973 11.7308 4.65973 12.0474 4.46446 12.2427L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.75736 11.5356C3.95262 11.3403 4.2692 11.3403 4.46446 11.5356Z"
                  fill="white"
                />
                <path
                  d="M13.6569 13.6569C13.4616 13.8522 13.145 13.8522 12.9497 13.6569L11.5355 12.2427C11.3403 12.0474 11.3403 11.7308 11.5355 11.5356C11.7308 11.3403 12.0474 11.3403 12.2426 11.5356L13.6569 12.9498C13.8521 13.1451 13.8521 13.4616 13.6569 13.6569Z"
                  fill="white"
                />
                <path
                  d="M4.46447 4.46451C4.2692 4.65977 3.95262 4.65977 3.75736 4.46451L2.34315 3.0503C2.14788 2.85503 2.14788 2.53845 2.34315 2.34319C2.53841 2.14793 2.85499 2.14793 3.05025 2.34319L4.46447 3.7574C4.65973 3.95267 4.65973 4.26925 4.46447 4.46451Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        }
      ></Route>
      <Route path="obrigado" element={<Obrigado />} />
    </Routes>
  );
}
