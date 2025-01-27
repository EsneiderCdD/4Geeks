import React from "react";
import { Button } from "@/components/ui/button";

const Agenda = () => {
  return (
    <div className="flex h-screen bg-amber-100 p-6">
      {/* Left Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://via.placeholder.com/300"
          alt="Left Placeholder"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Right Placeholder"
          className="rounded-2xl shadow-lg"
        />
        <Button className="bg-amber-300 text-amber-900 hover:bg-amber-400">
          Agenda
        </Button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className="min-h-screen bg-amber-50">
      <Agenda />
    </main>
  );
};

export default Home;
