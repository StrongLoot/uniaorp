const cardsElement = document.getElementById("members");
const member = [
    {
        name: "Álvaro Filho",
        role: "Back-end",
        social: {
            github: "alvarofilho",
            twitter: "alvarofilh0",
            // linkedin: "",
            // instagram: ""
        }
    },

    {
        name: "Everthon Silva",
        role: "Front-end",
        social: {
            github: "Everthon-Silva",
            //twitter: ,
            // linkedin: "",
            // instagram: ""
        }
    },

    {
        name: "Gabe",
        role: "Back-end",
        social: {
            github: "ImGabe",
            twitter: "ImGabeDev",
            // linkedin: "",
            // instagram: ""
        }
    },
    
    {
        name: "João Lucas",
        role: "Back-end",
        social: {
            github: "joaolucasete",
            // linkedin: "",
            // instagram: ""
        }
    },

    {
        name: "Mariana Morais",
        role: "Front-end",
        social: {
            github: "marianamorais",
            twitter: "marimorais0",
            instagram: "marimorais.exe"
            // linkedin: "",
            // instagram: ""
        }
    },
    {
        name: "ratsclub",
        role: "Back-end",
        social: {
            github: "ratsclub"
        }
    },

    {
        name: "Rafael",
        role: "Back-end",
        social: {
            github: "beescuit",
            twitter: "beescoitu",

            
        }
    },

    {
        name: "Renato",
        role: "Back-end",
        social: {
            github: "RenatoWw"
        }
    },

    {
        name: "Ryan",
        role: "Back-end",
        social: {
            github: "Sidemaze",
            instagram: "ryan_mdc1"
        }
    },
];

const links = {
    github: (user) => `https://github.com/${user}`,
    linkedin: (user) => `https://linkedin.com/in/${user}`,
    twitter: (user) => `https://twitter.com/${user}`,
    instagram: (user) => `https://instagram.com/${user}`,
};


function createCard(member) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = createCardImage(member);
    const cardContent = createCardContent(member);

    card.append(cardImage, cardContent);
    return card;
}

function createCardImage({social}) {
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const image = document.createElement("img");
    image.src = `${links["github"](social.github)}.png`
    
    cardImage.append(image);

    return cardImage;
}

function createCardContent({name, role, social}) {
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("title-card");
    cardTitle.innerHTML = name;

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const roleText = document.createElement("p");
    roleText.classList.add("text--medium");
    roleText.innerHTML = role;

    const cardSocial = createCardSocial(social);

    cardInfo.append(roleText, cardSocial);
    cardContent.append(cardTitle, cardInfo);
    
    return cardContent;
}

function createCardSocial(social) {
    const cardSocial = document.createElement("div");
    cardSocial.classList.add("card-social");

    Object.keys(social).forEach((key) => {
        const anchor = document.createElement("a");
        anchor.href = links[key](social[key]);

        const icon = document.createElement("i");
        icon.classList.add("fab", `fa-${key}`);

        anchor.append(icon);
        cardSocial.append(anchor);
    });

    return cardSocial;
}

member.forEach((member) => {
    const card = createCard(member);
    cardsElement.append(card);
})