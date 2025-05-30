
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');

});

const time = new Date();
const formattedTime = time.toISOString().slice(0, 19).replace("T", " ");
document.getElementById('timestamp').value = formattedTime;

const modal = document.getElementById('membership-info');
const title = document.getElementById('modal-title');
const description = document.getElementById('modal-description');
const fees = document.getElementById('yearly-fees');
const closeButton = document.getElementById('close-modal');

const membershipInfo = {
    np: {
        title: "NP (Non-Profit) Membership",
        description: "Ideal for community organizations and charitable groups, this tier offers essential benefits such as inclusion in the Chamber directory, access to member events, and opportunities to collaborate with local businesses and civic leaders.",
        fees: "$100/year"
    },
    bronze: {
        title: "Bronze Membership",
        description: "Designed for small businesses looking to establish a local presence. Benefits include all NP features plus ribbon cutting/groundbreaking support, member-only discounts, social media shoutouts, and eligibility for monthly networking events.",
        fees: "$250/year"
    },
    silver: {
        title: "Silver Membership",
        description: "Great for growing businesses ready to expand their reach. Includes all Bronze benefits, enhanced business directory listing with logo and website link, one complimentary e-blast per year, sponsorship opportunities, and a featured spotlight in the Chamber newsletter.",
        fees: "$525/year"
    },
    gold: {
        title: "Gold Membership",
        description: "The premier tier for maximum visibility and influence. Includes all Silver benefits, priority sponsorship and speaking opportunities, a dedicated business profile page, VIP event access, strategic business referrals, and annual consultation with Chamber leadership.",
        fees: "$950/year"
    }
};

document.querySelectorAll('.learn-button').forEach(button => {
    button.addEventListener("click", () => {
        const key = button.getAttribute('data-key');
        const info = membershipInfo[key];

        title.textContent = info.title;
        description.textContent = info.description;
        fees.textContent = `Membership Fee: ${info.fees}`;

        modal.showModal();
    });
});

closeButton.addEventListener("click", () => {
    modal.close();
})

//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;