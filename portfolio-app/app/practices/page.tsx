import React from "react";
import movieSearch from "@/public/images/movie-search.png";
import blog from "@/public/images/blog.png";
import githubUserSearch from "@/public/images/github-user-search-app.png";
import crowdfundingProduct from "@/public/images/crowdfunding-product-page-screenshot.png";
import languageTranslator from "@/public/images/language-translator.png";
import equalizerLanding from "@/public/images/equlizer-landing-page.png";
import FAQAccordionCard from "@/public/images/faq-card.png";
import introComponentWithSignupForm from "@/public/images/sign-up-form.png";
import orderSummaryCard from "@/public/images/order-summary.png";
import Link from "next/link";
import Image from "next/image";

const AllPracticesPage = () => {
  const practices = [
    {
      name: "Movie Search",
      image: movieSearch,
      link: "https://bqshina.github.io/Movie-Search/",
      description: "Front-end (React, Bootstrap)",
    },
    {
      name: "Blog",
      image: blog,
      link: "https://shina-blog.herokuapp.com/",
      description: "Full-stack (Python, Flask, SQLAlchemy)",
    },
    {
      name: "Github User Search App",
      image: githubUserSearch,
      link: "https://bqshina.github.io/My-Portfolio/projects/github-user-search-app/index.html",
      description: "Front-end (Pure HTML, CSS, Javascript)",
    },
    {
      name: "Crowdfunding Product Page",
      image: crowdfundingProduct,
      link: "https://bqshina.github.io/My-Portfolio/projects/crowdfunding-product-page-main/index.html",
      description: "Front-end (Pure HTML, CSS, Javascript)",
    },
    {
      name: "Language Translator",
      image: languageTranslator,
      link: "https://fast-castle-22055.herokuapp.com/",
      description: "Full-stack (Node js, Express, EJS)",
    },
    {
      name: "Equalizer Landing Page",
      image: equalizerLanding,
      link: "https://bqshina.github.io/My-Portfolio/projects/equalizer-landing-page/index.html",
      description: "Front-end (Pure HTML, CSS)",
    },
    {
      name: "FAQ Accordion Card",
      image: FAQAccordionCard,
      link: "https://bqshina.github.io/My-Portfolio/projects/faq-accordion-card-main/index.html",
      description: "Front-end (Pure HTML, CSS)",
    },
    {
      name: "Intro Component with Sign-up Form",
      image: introComponentWithSignupForm,
      link: "https://bqshina.github.io/intro-component-with-sign-up-form/",
      description: "Front-end (Pure HTML, CSS, Javascript)",
    },
    {
      name: "Order Summary Card",
      image: orderSummaryCard,
      link: "https://bqshina.github.io/order-summary-component-main/",
      description: "Front-end (Pure HTML, CSS)",
    },
  ];
  return (
    <div className="pt-32 px-[14%] mb-32">
      <p className="uppercase">The Practices</p>
      <h2 className="text-left text-[57px] mb-20 font-bold">
        Small projects for skill-building and practice
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 grid-rows-auto gap-5">
        {practices.map((practice) => (
          <Link
            href={practice.link}
            key={practice.link}
            className="rounded-[24px] w-[100%] h-96 overflow-hidden shadow relative transition duration-200 hover:scale-95"
          >
            <Image
              src={practice.image}
              alt="project image"
              className="w-[100%] h-[100%] overflow-hidden object-center object-cover"
            />
            <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_45%)] px-6 pt-20 pb-5 z-100 absolute bottom-0 w-[100%] space-y-2">
              <p className="text-[#505050] text-sm">{practice.description}</p>
              <h6 className="text-black">{practice.name}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPracticesPage;
