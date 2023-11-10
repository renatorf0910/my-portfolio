import { SectionTitle } from "../sectionTitle/section-title";
import Image from 'next/image';
import "./experience.scss";
import image1 from "../../../../public/python.png";
import image2 from "../../../../public/django.png";
import image3 from "../../../../public/js.png";
import image4 from "../../../../public/git.png";
import image5 from "../../../../public/mongoDB.png";
import image6 from "../../../../public/next-js.png";
import image7 from "../../../../public/reactJS.png";
import image8 from "../../../../public/reactNative.png";
import image9 from "../../../../public/sass.png";
import image10 from "../../../../public/typescript.png";
import image11 from "../../../../public/sql.jpg";
import image12 from "../../../../public/postgres.png";

export function Experience() {
  const images = [
    { src: image1, alt: "python", exp: 'measure-2', xp: "1 Y" },
    { src: image2, alt: "django", exp: 'measure-2', xp: "1 Y" },
    { src: image3, alt: "js", exp: 'measure-2', xp: "1 Y" },
    { src: image4, alt: "git", exp: 'measure-2', xp: "1 Y" },
    { src: image5, alt: "mongoDB", exp: 'measure-2', xp: "1 Y" },
    { src: image6, alt: "next-js", exp: 'measure-1', xp: "6 M" },
    { src: image7, alt: "reactJS", exp: 'measure-2', xp: "1 Y" },
    { src: image8, alt: "reactNative", exp: 'measure-2', xp: "1 Y" },
    { src: image9, alt: "sass", exp: 'measure-1', xp: "6 M" },
    { src: image10, alt: "typescript", exp: 'measure-1', xp: "6 M" },
    { src: image11, alt: "sql", exp: 'measure-1', xp: "6 M" },
    { src: image12, alt: "postgres", exp: 'measure-2', xp: "1 Y" },
  ];

  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>Colocando u mtexto mairo para teste de visão</p>
      
      <div className="experience-time">
        <div>
          {images.map((image, index) => (
            <div className={`experience-language`} key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={50}
                height={50}
                priority
              />
              <div className="experience-unit">
                <div className={`experience-measure ${image.exp}`}>
                  <span>{image.xp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
