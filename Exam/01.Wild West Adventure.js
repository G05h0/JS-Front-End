function solve(input) {
 
    const n = Number(input.shift());
    const characters = {};
 
    for (let i = 0; i < n; i++) {
        const [name, hp, bullets] = input[i].split(' ');
 
        characters[name] = {
            hp: Number(hp), 
            bullets: Number(bullets),
        }
    }
 
    let commandLine = input.shift();
 
    while (commandLine !== 'Ride Off Into Sunset') {
        const [command, name, firstArg, secondArg] = commandLine.split(' - ');
        const character = characters[name];
 
        let target, damage, attacker, amount;
        switch (command) {
            case 'FireShot':
                target = firstArg;
                if (character.bullets <= 0) {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
                    break;
                }
 
                character.bullets--;
                console.log(`${name} has successfully hit ${target} and now has ${character.bullets} bullets!`);
                break;
 
            case 'TakeHit':
                damage = Number(firstArg); 
                attacker = secondArg;
 
                character.hp -= damage;
 
                if (character.hp > 0) {
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`);
                } else {
                    console.log(`${name} was gunned down by ${attacker}!`);
                }
                break;
 
            case 'Reload':
                let bulletsReloaded = 6 - character.bullets; 
 
                if (bulletsReloaded > 0) {
                    character.bullets += bulletsReloaded;
                    console.log(`${name} reloaded ${bulletsReloaded} bullets!`);
                } else {
                    console.log(`${name}'s pistol is fully loaded!`);
                }
                break;
 
            case 'PatchUp':
                amount = Number(firstArg); 
 
                if (character.hp === 100) {
                    console.log(`${name} is in full health!`);
                } else {
                    const maxRecoverable = 100 - character.hp;
                    const actualRecovered = Math.min(maxRecoverable, amount);
                    character.hp += actualRecovered;
                    console.log(`${name} patched up and recovered ${actualRecovered} HP!`);
                }
                break;
        }
 
        commandLine = input.shift();
    }
 
    for (const name in characters) {
        const character = characters[name];
        if (character.hp > 0) {
            console.log(`${name}\n  HP: ${character.hp}\n  Bullets: ${character.bullets}`);
        }
    }
}