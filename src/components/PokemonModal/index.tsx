import React from "react";
import Modal from "../Modal";
import Icons from "@/assets/icons";
import PokemonModalHeader from "../PokemonModalHeader";
import PokemonModalMain from "../PokemonModalMain";
import PokemonModalFooter from "../PokemonModalFooter";
import { IPokemon } from "pokeapi-typescript";
import { IPokemonModalProps } from "./PokemonModal.structure";

export default function PokemonModal({
  setModal,
  modalData,
}: IPokemonModalProps) {
  const [loading, setLoading] = React.useState(false);

  return (
    <Modal setModal={setModal}>
      <div className="relative z-50">
        <button
          className="absolute right-2  text-primary/80 "
          onClick={() => setModal(false)}
        >
          <Icons name="Close-Icon" size={20} />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <PokemonModalHeader pokemon={modalData.pokemon as IPokemon} />
        <PokemonModalMain pokemon={modalData.pokemon as IPokemon} />
        <PokemonModalFooter
          loading={loading}
          setLoading={setLoading}
          setModal={setModal}
          pokedex={modalData}
        />
      </div>
    </Modal>
  );
}
