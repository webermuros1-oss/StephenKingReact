import React from "react";
import { useState } from "react";
import Carrousel from "../../Components/Carrousel/Carrousel";
import BookCards from "../../Components/BookCards/BookCards";
import BooksTable from "../../Components/BooksTable/BooksTable";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-page">
            
            <section className="home-carousel-section">
    <div className="home-carousel-card">
        <Carrousel />
        <div className="home-carousel-overlay"></div>
    </div>
</section>
            <div className="home-divider">
                <div className="home-divider-line"></div>
                <div className="home-divider-content">
                    <span className="home-divider-text">Obras Destacadas</span>
                </div>
                <BookCards />
            </div>
            
            <div className="home-divider">
                <div className="home-divider-line"></div>
                <div className="home-divider-content">
                    <span className="home-divider-text">Biblioteca Completa</span>
                </div>
            </div>
            <BooksTable />
            
        </div>
    );
}

export default HomePage;
