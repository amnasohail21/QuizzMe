"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // adjust path if needed

export default function Home() {
  const [started, setStarted] = useState(false);

  const handleNext = () => {
    setStarted(true);
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <main className="flex flex-col justify-center items-center flex-1 gap-10">
        <h1 className="text-3xl font-bold">Welcome to the quizz page</h1>

        {!started ? (
          <Button onClick={handleNext}>Start Quiz</Button>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">
              What is your level of understanding of React?
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <Button>Beginner</Button>
              <Button>Intermediate</Button>
              <Button>Advanced</Button>
              <Button>Expert</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
