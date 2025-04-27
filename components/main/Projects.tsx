import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/P1.png"
          title="Modern Tic Tac Toe"
          description="Modern TicTacToe game with a dark theme, colorful markers, and a playful 'Enjoy with TicTacToe' title, featuring a sleek Reset button."
        />
        <ProjectCard
          src="/P2.png"
          title="AI image generator"
          description="Minimal AI image generator with a clean dark theme, featuring a prompt input, generate button, and a beautifully rendered sample image."
        />
        <ProjectCard
          src="/P3.png"
          title="E-Commerce web"
          description="Trendy e-commerce landing page featuring new arrivals, a stylish model showcase, and easy navigation for Men, Women, and Kids collections."
        />
      </div>
    </div>
  );
};

export default Projects;
