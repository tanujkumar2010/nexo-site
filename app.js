const $ = (id) => document.getElementById(id);
$('year').textContent = new Date().getFullYear();

const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@nexo940?si=rOfmgCWx4JkRz8fz',
  instagram: 'https://www.instagram.com/tanuj_94__/',
  discord: 'https://discord.gg/R8ww6hAgTy'
};
const socialCards = document.querySelectorAll('.social-card');
if (socialCards[0]) socialCards[0].href = SOCIAL_LINKS.youtube;
if (socialCards[1]) socialCards[1].href = SOCIAL_LINKS.instagram;
if (socialCards[2]) socialCards[2].href = SOCIAL_LINKS.discord;

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

$('menuToggle').addEventListener('click', () => $('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => $('nav').classList.remove('open')));
