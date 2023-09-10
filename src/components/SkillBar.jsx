
import React from "react";
import clickhouse from "../assets/clickhouse.png";
import gcp from "../assets/gcp.png";
import github from "../assets/github.png";
import jira from "../assets/jira.png";
import looker from "../assets/looker.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import snowflake from "../assets/snowflake.png";
import tailwind from "../assets/tailwind.jpeg";
import dbt from "../assets/dbt.jpeg";
import aws from "../assets/aws.jpeg";
import js_trio from "../assets/js_trio.png";
import solidity from "../assets/solidity.png";

const SkillBar = () => {
  const skills = [
    { id: 1, src: clickhouse, name: "ClickHouse" },
    { id: 2, src: gcp, name: "GCP" },
    { id: 3, src: github, name: "GitHub" },
    { id: 4, src: jira, name: "Jira" },
    { id: 5, src: looker, name: "Looker" },
    { id: 6, src: python, name: "Python" },
    { id: 7, src: react, name: "React" },
    { id: 8, src: snowflake, name: "Snowflake" },
    { id: 9, src: tailwind, name: "Tailwind CSS" },
    { id: 10, src: dbt, name: "DBT" },
    { id: 11, src: aws, name: "AWS" },
    { id: 12, src: js_trio, name: "JS-CSS-HTML" },
    { id: 13, src: solidity, name: "solidity" },
  ];


  return (
    <div name="skillbar" className="flex overflow-x-auto space-x-6 p-4">
      {skills.map(({ id, src, name }) => (
        <div key={id} className="text-center">
         <img
          src={src}
          alt={name}
          className="w-20 h-46 object-contain rounded-full shadow-sm shadow-white"/>

          <p className="text-sm mt-2">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;