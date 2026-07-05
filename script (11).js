let currentUser = null;
let freelancers = [
    { id: 1, name: "Alex Rivera", skill: "Web Developer", rate: "₹1,500/hr", img: "https://picsum.photos/id/64/300/200" },
    { id: 2, name: "Sara Khan", skill: "Graphic Designer", rate: "₹800/hr", img: "https://picsum.photos/id/65/300/200" },
    { id: 3, name: "Usman Tariq", skill: "Content Writer", rate: "₹600/hr", img: "https://picsum.photos/id/66/300/200" }
];

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section + '-section').classList.remove('hidden');
    if (section === 'home') renderFreelancers();
}

function renderFreelancers() {
    const container = document.getElementById('featured-freelancers');
    container.innerHTML = freelancers.map(f => `
        <div onclick="viewFreelancer(${f.id})" class="freelancer-card bg-white rounded-3xl overflow-hidden shadow cursor-pointer">
            <img src="${f.img}" class="w-full h-48 object-cover">
            <div class="p-5">
                <p class="font-semibold text-lg">${f.name}</p>
                <p class="text-purple-600">${f.skill}</p>
                <p class="text-sm text-gray-500">${f.rate}</p>
            </div>
        </div>
    `).join('');
}

function renderCategories() {
    const cats = ["Development", "Design", "Writing", "Marketing", "Video"];
    const container = document.getElementById('categories');
    container.innerHTML = cats.map(cat => `
        <div onclick="filterCategory('${cat}')" class="bg-white p-6 rounded-3xl text-center cursor-pointer hover:bg-purple-50 transition">
            <p class="font-medium">${cat}</p>
        </div>
    `).join('');
}

function filterCategory(cat) {
    alert(`Showing freelancers in ${cat} (Demo)`);
}

function viewFreelancer(id) {
    const f = freelancers.find(fr => fr.id === id);
    if (f) {
        alert(`👤 Freelancer Profile:\n\n${f.name}\n${f.skill}\nRate: ${f.rate}\n\nHire Now? (Demo)`);
    }
}

function showPostJob() {
    if (!currentUser) {
        alert("Please login first");
        showLoginModal();
        return;
    }
    document.getElementById('post-job-modal').classList.remove('hidden');
    document.getElementById('post-job-modal').classList.add('flex');
}

function postJob() {
    const title = document.getElementById('job-title').value;
    const budget = document.getElementById('job-budget').value;
    
    if (title && budget) {
        alert("✅ Job posted successfully!");
        document.getElementById('post-job-modal').classList.add('hidden');
        document.getElementById('post-job-modal').classList.remove('flex');
    }
}

function searchContent() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = freelancers.filter(f => f.name.toLowerCase().includes(query) || f.skill.toLowerCase().includes(query));
    const container = document.getElementById('featured-freelancers');
    container.innerHTML = filtered.map(f => `
        <div onclick="viewFreelancer(${f.id})" class="freelancer-card bg-white rounded-3xl overflow-hidden shadow cursor-pointer">
            <img src="${f.img}" class="w-full h-48 object-cover">
            <div class="p-5">
                <p class="font-semibold text-lg">${f.name}</p>
                <p class="text-purple-600">${f.skill}</p>
            </div>
        </div>
    `).join('');
}

function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('login-modal').classList.add('flex');
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function login() {
    currentUser = "ClientPro";
    document.getElementById('login-btn').innerHTML = `👋 ${currentUser}`;
    closeLoginModal();
    alert("✅ Logged in successfully!");
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    renderCategories();
    renderFreelancers();
});