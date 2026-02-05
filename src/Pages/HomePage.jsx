import Footer from "../components/Footer"
import Header from "../components/Header"
import Carousel from '../components/Carrousel'
import BookCards from '../components/BookCards'
import BooksTable from '../components/BooksTable'

function HomePage() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            
            {/* Hero Section con Carousel */}
            <section className="relative">
                <Carousel />
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </section>

            {/* Section divider */}
            <div className="relative py-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-blood-red/20"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-6 bg-black text-blood-red font-creepster text-2xl">
                        Obras Destacadas
                    </span>
                </div>
            </div>

            {/* Book Cards Section */}
            <BookCards />

            {/* Another divider */}
            <div className="relative py-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-blood-red/20"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-6 bg-black text-blood-red font-creepster text-2xl">
                        Biblioteca Completa
                    </span>
                </div>
            </div>

            {/* Books Table Section */}
            <BooksTable />

            <Footer />
        </div>
    )
}

export default HomePage