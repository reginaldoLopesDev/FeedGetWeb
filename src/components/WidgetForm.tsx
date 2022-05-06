import { CloseButton } from "./CloseButton";

import bugIconUrl from "../assets/bug.svg"
import ideaIconUrl from "../assets/idea.svg"
import thoughtIconUrl from "../assets/thought.svg"

const feedbackTypes = {
    BUG:{
        title: "Problema",
        image: {
            src: bugIconUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
        src: ideaIconUrl,
        alt: "Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
        src: thoughtIconUrl,
        alt: "Imagem de uma nuvem de pensamento"
        }


    }
}

export function WidgetForm(){
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) => {
                return(
                    <button
                    key={key}
                    className="bg-zinc-800 py-5 w-24 items-center rounded-lg flex-1 flex flex-col gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                    type="button"
                    
                    >
                        <img src={value.image.src} alt={value.image.alt}></img>
                        <span>{value.title}</span>
                    </button>
                );
            })}
            </div>
            <footer className="text-xs text-neutral-400">Feito com ❤️ por <a className="underline-offset-2" target="_blank" href="https://www.linkedin.com/in/reginaldosilvalopes/">Reginaldo Lopes</a></footer>
            
            
            
            
            </div>
    );
}