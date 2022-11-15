export function generateAvatar(name: string,
    sprite: "male" |
        "female" |
        "human" |
        "identicon" |
        "initials" |
        "bottts" |
        "avataaars" |
        "jdenticon" |
        "gridy" |
        "micah" |
        "adventurer" |
        "adventurer-neutral" |
        "big-ears" |
        "big-ears=neutral" |
        "big-smile" |
        "croodles" |
        "croodles-neutral" |
        "miniavs" |
        "open-peeps" |
        "personas" |
        "pixel-art" |
        "pixel-art-neutral"

) {
    return `https://avatars.dicebear.com/api/${sprite}/${name}.svg`
}