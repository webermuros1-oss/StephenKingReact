import React from "react";
import { useState } from "react";
import BookCards from "../../Components/BookCards/BookCards";
import BooksTable from "../../Components/BooksTable/BooksTable";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-hero-bg"></div>
            
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