import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

import bugIconUrl from "../../assets/bug.svg"
import ideaIconUrl from "../../assets/idea.svg"
import thoughtIconUrl from "../../assets/thought.svg"
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

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
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)} />
                    )
                    }
                </>
            )}

            <footer className="text-xs text-neutral-400">Feito com ❤️ por <a className="underline-offset-2" target="_blank" href="https://www.linkedin.com/in/reginaldosilvalopes/">Reginaldo Lopes</a></footer>




        </div >
    );
}