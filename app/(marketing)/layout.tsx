import { Footer } from "./footer";
import { Header } from "./Header";

type Props = {
    children: React.ReactNode;
};

import { ClerkProvider } from "@clerk/nextjs";


const MarketingLayout = ({children}: Props) => {
    return(
        
            
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Header/>
            <main className="flex-1 flex flex-col items-center justify-center"> 
            {children}
            </main>
            <Footer/>
        </div>
        
    )
}

export default MarketingLayout;