"use client";

import {useState} from "react";
import Swal from "sweetalert2";

import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";

export default function HomePage() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const {toast} = useToast();

  function addition(decider: number) {
    if (decider == 1 && counter1 < 30) {
      setCounter1((c) => c + 1);
      showFosforos(decider, counter1 + 1);
      if (counter1 == 29) {
        showWinner(decider);
      }
    }

    if (decider == 2 && counter2 < 30) {
      setCounter2((c) => c + 1);
      showFosforos(decider, counter2 + 1);
      if (counter2 == 29) {
        showWinner(decider);
      }
    }
  }

  function subtraction(decider: number) {
    if (decider == 1 && counter1 > 0) {
      setCounter1((c) => c - 1);
      showFosforos(decider, counter1 - 1);
    }

    if (decider == 2 && counter2 > 0) {
      setCounter2((c) => c - 1);
      showFosforos(decider, counter2 - 1);
    }
  }

  function restart() {
    setCounter1((c) => (c = 0));
    showFosforos(1, counter1 - counter1);
    setCounter2((c) => (c = 0));
    showFosforos(2, counter2 - counter2);
  }

  function showWinner(decider: number) {
    if (decider == 1) {
      Swal.fire({
        title: "Felicidades!",
        text: "El ganador ha sido: Nosotros.",
        icon: "success",
      });
      /*
      toast({
        title: "FELICIDADES!",
        description: "El ganador ha sido: Nosotros.",
      });
      */
    }
    if (decider == 2) {
      Swal.fire({
        title: "Felicidades!",
        text: "El ganador ha sido: Ellos.",
        icon: "success",
      });
      /*
      toast({
        title: "FELICIDADES!",
        description: "El ganador ha sido: Ellos.",
      });
      */
    }
  }

  function showFosforos(decider: number, counter: number) {
    const container1 = document.getElementById("imageContainer1");
    const container2 = document.getElementById("imageContainer2");

    if (decider == 1) {
      const gruposNow1 = container1?.querySelectorAll(".group");

      gruposNow1?.forEach((g) => container1?.removeChild(g));

      let group;

      for (let i = 0; i < counter; i++) {
        if (i % 5 === 0) {
          group = document.createElement("div");
          group.classList.add("group");
          container1?.appendChild(group);
        }
        const newFosforo = document.createElement("img");

        newFosforo.src = "/fosforo.png";
        newFosforo.classList.add("fosforo" + ((i % 5) + 1));
        group?.appendChild(newFosforo);
      }
    } else if (decider == 2) {
      const gruposNow2 = container2?.querySelectorAll(".group");

      gruposNow2?.forEach((g) => container2?.removeChild(g));

      let group;

      for (let i = 0; i < counter; i++) {
        if (i % 5 === 0) {
          group = document.createElement("div");
          group.classList.add("group");
          container2?.appendChild(group);
        }
        const newFosforo = document.createElement("img");

        newFosforo.src = "/fosforo.png";
        newFosforo.classList.add("fosforo" + ((i % 5) + 1));
        group?.appendChild(newFosforo);
      }
    }
  }

  return (
    <main className="flex justify-center">
      <section className="flex flex-col items-center justify-center bg-[url(/texturaPapelMarron.png)] bg-cover">
        <div className="flex h-[780px] justify-center space-x-10">
          <section className="space-y-5 p-5">
            <div className="text-center font-serif text-2xl font-semibold italic text-slate-900">
              <p>Nosotros: {counter1}</p>
            </div>
            <div className="space-x-5">
              <Button
                className="bg-[#cfa005] font-serif font-bold italic hover:bg-[#b48b03]"
                onClick={() => addition(1)}
              >
                Sumar puntos
              </Button>
              <Button
                className="bg-[#cfa005] font-serif font-bold italic hover:bg-[#b48b03]"
                onClick={() => subtraction(1)}
              >
                Restar puntos
              </Button>
            </div>
            <div id="imageContainer1" />
          </section>
          <div className="w-1 justify-center rounded bg-black md:h-[630px] md:translate-y-[130px]" />
          <section className="space-y-5 p-5">
            <div className="text-center font-serif text-2xl font-semibold italic text-slate-900">
              <p>Ellos: {counter2}</p>
            </div>
            <div className="space-x-5">
              <Button
                className="bg-[#cfa005] font-serif font-bold italic hover:bg-[#b48b03]"
                onClick={() => addition(2)}
              >
                Sumar puntos
              </Button>
              <Button
                className="bg-[#cfa005] font-serif font-bold italic hover:bg-[#b48b03]"
                onClick={() => subtraction(2)}
              >
                Restar puntos
              </Button>
            </div>
            <div id="imageContainer2" />
          </section>
        </div>
        <div className="m-4">
          <Button
            className="bg-[#cfa005] px-8 font-serif font-bold italic hover:bg-[#b48b03]"
            onClick={() => restart()}
          >
            Reiniciar
          </Button>
        </div>
      </section>
    </main>
  );
}
