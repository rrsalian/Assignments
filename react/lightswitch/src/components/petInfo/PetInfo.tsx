import { Pet } from "../../models/Pet";

import { useState } from "react"

export function PetInfo() {

    const [pet, setPet] = useState<Pet>({ name: 'Bingo', breed: 'Goldendoodle' });

    return (
        <div>
            {pet.name} is a {pet.breed}
        </div>
    )
}
