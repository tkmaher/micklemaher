"use client";
import React, { useState } from "react";
import ContactForm from "./contact";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export function Righthalf() {
    return (
        <div className="right-half">
         
        </div>
    );
}

export function Lefthalf() {

    const [section, setsection] = useState("about");

    const books: [string, string][] = [
        ["Six Plays", "https://sixplaysmicklemaher.com/"],
        ["The Jim Lehrer Plays", "https://bookshop.53rdstatepress.org/products/the-jim-lehrer-plays?_pos=1&_psq=the+jim+lehrer&_ss=e&_v=1.0"]];

    const plays: {title: string, year: string, link: string}[] = [
        {title: "It Is Magic", year: "2019", link: "https://vimeo.com/825208471"},
        {title: "Jim Lehrer and the Theater and Its Double and Jim Lehrer’s Double", year: "2017", link: "https://vimeo.com/431637248"},
        {title: "Song About Himself", year: "2015", link: "https://vimeo.com/429044271"},
        {title: "There is a Happiness That Morning Is", year: "2011", link: "https://vimeo.com/429048215"},
        {title: "An Apology for the Course and Outcome of Certain Events Delivered by Doctor John Faustus on This His Final Evening", year: "2009", link: "https://vimeo.com/429122963"},
        {title: "The Strangerer", year: "2007", link: "https://vimeo.com/429115237"},
        {title: "The Hunchback Variations", year: "2005", link: "https://vimeo.com/299786349"},
    ];

    return (
        <div className="left-half">
            <div className="content-box">
                <img className="drawing" src="drawing.jpeg"/>
                <h1>Mickle Maher</h1>
                <div className="flex-row">
                    <a style={{textDecoration: (section == "about" ? "underline" : "auto")}} onClick={() => setsection("about")}>About</a>
                    <span className="separator">/</span>
                    <a>CV</a>
                    <span className="separator">/</span>
                    <a style={{textDecoration: (section == "books" ? "underline" : "auto")}} onClick={() => setsection("books")}>Books</a>
                    <span className="separator">/</span>
                    <a style={{textDecoration: (section == "videos" ? "underline" : "auto")}} onClick={() => setsection("videos")}>Video</a>
                    <span className="separator">/</span>
                    <a style={{textDecoration: (section == "contact" ? "underline" : "auto")}} onClick={() => setsection("contact")}>Contact</a>

                </div>
                {section == "about" && <ReactMarkdown>Called one of the most original voices in American theater today, Chicago-based playwright Mickle Maher has been produced Off-Broadway (Barrow Street, 59 E 59), and by numerous theaters around the country and abroad. Plays include *It is Magic*; *There is a Happiness That Morning Is*; *Song About Himself*; *The Hunchback Variations; Spirits to Enforce;* book and lyrics for the musical *Small Ball*; *An Apology for the Course and Outcome of Certain Events Delivered by Doctor John Faustus on This His Final Evening; The Strangerer; Jim Lehrer and the Theater and Its Double and Jim Lehrer’s Double; Cyrano* (translator); *The Cabinet; The Pine*; *An Actor Prepares* (an adaptation of Stanislavsky's seminal book), and the award-winning adaptation of Jason Lutes’ graphic novel *Berlin.* He is a co-founder of Chicago’s Theater Oobleck, and has taught playwriting and related subjects at numerous institutions, including the University of Chicago, Northwestern, Columbia College, and the University of Houston. He is published by Agate Publishing. </ReactMarkdown>}
                {section == "contact" && <div className="div-link">
                    <Link style={{color: "blue"}} href="mailto://mahermickle@gmail.com">mahermickle@gmail.com</Link>
                </div>}
 
                {section == "books" && books.map((book, index) => {
                    return <div className="div-link" key={index}><Link href={book[1]}>{book[0]}</Link><br/></div>
                })}
                {section == "videos" && plays.map((play, index) => {
                    return <div className="div-link" key={index}><Link href={play.link}>{play.title} ({play.year})</Link><br/></div>
                })}
                
            </div>
        </div>
    );
}