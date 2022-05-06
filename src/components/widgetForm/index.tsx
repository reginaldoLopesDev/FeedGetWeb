import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

import bugIconUrl from "../../assets/bug.svg"
import ideaIconUrl from "../../assets/idea.svg"
import thoughtIconUrl from "../../assets/thought.svg"

export const feedbackTypes = {
    BUG: {
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
export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
                <CloseButton />
            </header>
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <p>{feedbackType}</p>
            )
            }
            <footer className="text-xs text-neutral-400">Feito com ❤️ por <a className="underline-offset-2" target="_blank" href="https://www.linkedin.com/in/reginaldosilvalopes/">Reginaldo Lopes</a></footer>




        </div >
    );
}