import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Services = () => {
  // const services = skillArr;

  let skillArr = [
    {
      name: "HTML",
      img: "Images/html.webp",
      type: "Frontend"
    },
    {
      name: "CSS",
      img: "Images/css.webp",
      type: "Frontend"

    },
    {
      name: "JavaScript",
      img: "Images/js.webp",
      type: "Frontend"


    },

    {
      name: "React",
      img: "Images/react.webp",
      type: "Frontend"

    },
    {
      name: "TailwindCSS",
      img: "Images/tailwindcss.webp",
      type: "Frontend"

    },
    {
      name: " ChakraUI",
      img: "Images/chakraui.webp",
      type: "Frontend"

    }, {
      name: "BootStrap",
      img: "Images/bootstrap.webp",
      type: "Frontend"

    }, {
      name: "SAAS",
      img: "Images/saas.webp",
      type: "Frontend"

    }, {
      name: "Material UI",
      img: "Images/materialui.webp",
      type: "Frontend"
    },



    {
      name: "Node Js",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Ffluency%2F144%2Fnull%2Fnode-js.png&w=128&q=75",
      img: "Images/node-js.webp",

      type: "Backend",
    },



    {
      name: "Express Js",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fios%2F150%2Fnull%2Fexpress-js.png&w=128&q=75",
      img: "Images/expressjs.webp",

      type: "Backend",

    },
    {
      name: "MongoDB",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F96%2Fnull%2Fexternal-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png&w=128&q=75",
      img: "Images/mongoDb.webp",

      type: "Backend",

    },
    {
      name: "MySQL",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fmysql-logo.png&w=128&q=75",
      img: "Images/mysql.webp",

      type: "Backend",

    },
    {
      name: "Googling",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fgoogle-logo.png&w=128&q=75",
      img: "Images/google.webp",

      type: "Other",
    },
    {
      name: "GitHub",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fmaterial-outlined%2F96%2Fnull%2Fgithub.png&w=128&q=75",
      img: "Images/github.webp",

      type: "Other",
    },
    {
      name: "Git",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fgit.png&w=128&q=75",
      img: "Images/git.webp",

      type: "Other",
    },

    {
      name: "Java",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjava-coffee-cup-logo--v1.png&w=128&q=75",
      img: "Images/java.webp",

      type: "Other",
    }, {
      name: "Vercel",
      // img: "https://res.cloudinary.com/lifecodes/image/upload/v1677508669/Portfolio/gd1ferzh1vbopo15yysy.svg",
      img: "Images/vercel.svg",

      type: "Other",
    }, {
      name: "Netlify",
      // img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-shadow-tal-revivo%2F96%2Fnull%2Fexternal-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png&w=128&q=75",
      img: "Images/netlify.webp",

      type: "Other",
    },


  ]


  console.log(skillArr);



  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {skillArr.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
