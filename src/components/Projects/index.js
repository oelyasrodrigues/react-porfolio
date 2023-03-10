import "./projects.css"
import Card from "../Card"
import { useState } from "react"
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"

export default function Projects(){
  const [showProjectsAll, setShowProjectsAll] = useState(false)

  const showHide = () => {
    if(!showProjectsAll){
      setShowProjectsAll(true)
    } else {
      setShowProjectsAll(false)
    }
  }
return(
    <section className="projectsContainer">
      <h1 id="projects">Projetos</h1>
      <div className="projectCards">

        <Card img="/assets/images/ImgProjetos/rLinks.PNG"
        title="R Link's"
          subtitle="Um App Web em ReactJS para salvar links conectado com o Firebase"
          project="https://rlinks.vercel.app/"
          repository="https://github.com/ElyasRodrigues/devLink"
        />
        <Card img="/assets/images/ImgProjetos/finance.PNG"
          title="Controle de finanças"
          subtitle="App web em ReactJs com armazenamento de dados no Local Storage"
          project="https://er-finance.vercel.app/"
          repository="https://github.com/ElyasRodrigues/finance-control"
        />
        <Card img="/assets/images/ImgProjetos/erflix.PNG"
          title="ER FLIX"
          subtitle="Um App Web em ReactJS que lista diversos filmes e com sistema de busca"
          project="https://erflix.vercel.app/"
          repository="https://github.com/ElyasRodrigues/er-flix"
        />
        {showProjectsAll && (
          <>
            <Card img="/assets/images/ImgProjetos/todoList.PNG"
            title="Todo List"
              subtitle="projeto feito em Javascript com armazenamento no Local Storage"
              project="https://elyasrodrigues.github.io/todoList/"
              repository="https://github.com/ElyasRodrigues/todoList"
            />
            <Card img="/assets/images/ImgProjetos/memoryGame.PNG"
              title="Memory game"
              subtitle="Jogo da memória com o tema dos Vingadores"
              project="https://elyasRodrigues.github.io/AvengersMemoryGame"
              repository="https://github.com/ElyasRodrigues/AvengersMemoryGame"
            />
            <Card img="/assets/images/ImgProjetos/tictactoe.PNG"
              title="Tic Tac Toe"
              subtitle="O famoso jogo da velha, para 2 jogadores"
              project="https://elyasRodrigues.github.io/TicTacToe"
              repository="https://github.com/ElyasRodrigues/TicTacToe"
            />
            <Card img="/assets/images/ImgProjetos/oneBitX.PNG"
            title="OneBitX"
              subtitle="Clone da página da SpaceX desenvolvido com Bootstrap"
              project="https://elyasRodrigues.github.io/oneBitX"
              repository="https://github.com/ElyasRodrigues/oneBitX"
            />
             <Card img="/assets/images/ImgProjetos/qrGenerate.PNG"
             title="Qr Generate"
              subtitle="Um gerador de QrCode feito com REACT JS"
              project="https://elyasrodrigues.github.io/qrGenerate/"
              repository="https://github.com/ElyasRodrigues/qrGenerate"
            />
            <Card img="/assets/images/ImgProjetos/calcJS.PNG"
              title="Calc Js"
              subtitle="Calculadora com todas as operações básicas e troca de tema"
              project="https://elyasRodrigues.github.io/calcJs"
              repository="https://github.com/ElyasRodrigues/calcJs"
            />            
            <Card img="/assets/images/ImgProjetos/godofwar.png"
              title="God Of War"
              subtitle="Página feito em HTML, SCSS e JAVASCRIPT"
              project="https://elyasrodrigues.github.io/god-of-war/"
              repository="https://github.com/ElyasRodrigues/god-of-war"
            />
            <Card img="/assets/images/ImgProjetos/imc.PNG"
              title="Calcule seu IMC"
              subtitle="Página feito em HTML, CSS e JAVASCRIPT"
              project="https://elyasrodrigues.github.io/calcIMC/"
              repository="https://github.com/ElyasRodrigues/calcIMC"
            />
            <Card img="/assets/images/ImgProjetos/dev.PNG"
              title="Em breve"
              subtitle="Estou desenvolvendo.. Pegue um café e aguarde :)"
              description="Estou desenvolvendo..."
              project="#"
              repository="#"
            />
          </>
        )}
      </div>
      {!showProjectsAll ? (
        <>
          <button id="btnHide" onClick={showHide}><BsCaretDownFill/></button>
        </>
      ): 
      <>
        <button id="btnShow" onClick={showHide}><BsCaretUpFill/></button>
      </>}
    </section>
  )
}
