import { ConatinerBriefcase } from "./Briefcase.style";

interface PropsBriefcase{
    end: string;
}

export function Briefcase({end}:PropsBriefcase){
    return (
        <ConatinerBriefcase end={end}>
            <header>
                
            </header>
            <main>
                
            </main>
            <footer>
                
            </footer>
        </ConatinerBriefcase>
    )
}