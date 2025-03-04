import { Footer } from "@/components/footer/footer-section";
import Navbar from "@/components/ui/navbar";
const Home = ({
    children
}: { children : React.ReactNode} ) => {
    return ( 
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Home;