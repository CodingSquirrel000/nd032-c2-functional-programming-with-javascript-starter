weaponsWithNoises = [
    {name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek'},
	{name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who'},
	{name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black'}
]

function weaponsFromUniverse(universe) {
    const weapons = weaponsWithNoises.filter(x => x.universe == universe);
    console.log(weapons);
    const useWeapon = (weaponName) => {
        const weapon = weapons.find(w => w.name == weaponName);
        if (weapon) {
            console.log(`used ${weapon.name}: ${weapon.noise}`);
        } else {
            console.log(`${weaponName} is not a part of the ${universe} universe`);
        }
    }

    return useWeapon;
}

// USAGE
const useStarWarsWeapon = weaponsFromUniverse('Star Wars')

useStarWarsWeapon('Blaster') // console logs 'used Blaster: Pew Pew'
useStarWarsWeapon('Noisy Cricket') // console logs 'Noisy Cricket is not a part of the Star Wars universe'